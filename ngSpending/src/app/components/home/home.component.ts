import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spend } from 'src/app/models/spend';
import { SpendingService } from 'src/app/services/spend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'ngSpend';
  newSpend: Spend = new Spend();
  selected: null | Spend = null;
  editSpend: null | Spend = null;
  showComplete: boolean = false;

  spendList: Spend[] = [];

  //TODO INCOMPLETE PIPE NOT IMPORTING
  constructor(private spendSvc: SpendingService, private route: ActivatedRoute, private router: Router, private datePipe: DatePipe) { }


  setEditSpend() {
    this.editSpend = Object.assign({}, this.selected);
  }

  displaySpend(spend: Spend) {
    this.selected = spend;
  }

  displayTable() {
    this.selected = null;
  }

  getNumSpend() {
    return this.spendList.length;
  }

  getTotalBills() {
    let totalBills = 0;
    for (let spend of this.spendList) {
      totalBills += spend.bills;
    }
  return totalBills;
  }

  getTotalGroc() {
    let totalGroc = 0;
    for (let spend of this.spendList) {
      totalGroc += spend.groceries;
    }
  return totalGroc;
  }

  getTotalGas() {
    let totalGas = 0;
    for (let spend of this.spendList) {
      totalGas += spend.gas;
    }
  return totalGas;
  }

  checkSpendLevel() {
    let numOfTodos = this.getNumSpend();
    if (numOfTodos >= 10) {
      return 'badge bg-danger';
    } else if (numOfTodos >= 5) {
      return 'badge bg-warning';
    } else {
      return 'badge bg-success';
    }
  }

  ngOnInit(): void {
    let idStr = this.route.snapshot.paramMap.get('id');
    if (!this.selected && idStr) {
      let idNum = Number.parseInt(idStr);
        if (!isNaN(idNum)) {
        this.spendSvc.show(idNum).subscribe({
          next: (theSpend) => {
            this.selected = theSpend;
          },
          error: (fail) => {
            this.router.navigateByUrl('/todoNotFound');
          },
        });
      } else {
        this.router.navigateByUrl('/invalidTodoId');
      }
  }
    this.reload();
  }

  reload() {
    this.spendSvc.index().subscribe({
      next: (spend) => {
        this.spendList = spend;
      },
      error: (boom) => {
        console.error('SpendComponent.reload: error loading list');
        console.error(boom);
      }
    })
  }

  addSpend(spend: Spend) {
    this.spendSvc.create(spend).subscribe({
      next: (result) => {
        this.reload();
        this.editSpend = null;
      },
      error: (fail) => {
        console.error('SpendListComponent.adding: error adding spend');
        console.error(fail);
      },
    });
  }

  deleteSpend(id: number): void {
    this.spendSvc.destroy(id).subscribe({
      next: () => {
        this.reload();
      },
      error: (nojoy) => {
        console.error('SpendListComponent.deleting: error');
        console.error(nojoy);
      },
    });
  }

  updateSpend(spend: Spend, setSelected: boolean = true) {
    this.spendSvc.update(spend).subscribe({
      next: (updated) => {
        this.reload();
        if (setSelected) {
          this.selected = updated;
        }
        this.selected = updated;
        this.editSpend = null;
      },
      error: (nojoy) => {
        console.error('SpendListComponent.updating: error');
        console.error(nojoy);
      },
    });
  }

  destroy(id: number): void {
    this.spendSvc.destroy(id).subscribe({
      next: (updated) => {},
      error: (nojoy) => {
        console.error('TodoListComponent.deleting: error');
        console.error(nojoy);
      },
    });
  }

}
