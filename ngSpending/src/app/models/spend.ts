export class Spend {
  id: number;
	name: string | null;
	bills: number;
	groceries: number;
	gas: number;
  completed: boolean;
  completeDate: string | null;

  constructor(id: number = 0, name: string | null = '', bills: number = 0, groceries: number = 0, gas: number = 0, completed: boolean = false, completeDate: string = '') {
    this.id = id;
    this.name = name;
    this.bills = bills;
    this.groceries = groceries;
    this.gas = gas;
    this.completed = completed;
    this.completeDate = completeDate;
  }

}
