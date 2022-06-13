window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {

	var targetMe = document.getElementById('targetMe');
	var deleteExpenseButton = document.getElementById('deleteSingleExpenseButton');
	var updateSpendingForm = document.getElementById('updateSpendingForm');

	var spendingListDiv = document.getElementById("spendingListDiv");
	loadExpenses();
	document.spendForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let spendId = document.spendForm.spendId.value;
		if (!isNaN(spendId) && spendId > 0) {
			getSpend(spendId);
		}
	});

	let addExpenseButton = document.getElementById('addSpendButton');
	addExpenseButton.addEventListener(('click'), function(e) {
		e.preventDefault();
		var addSpendingForm = document.getElementById('addSpendingForm');
		let newExpense = {
			name: addSpendingForm.name.value,
			bills: addSpendingForm.bills.value,
			groceries: addSpendingForm.groceries.value,
			gas: addSpendingForm.gas.value
		};
		sendNewSpend(newExpense);
		location.reload();
	});

	deleteExpenseButton.addEventListener('click', function(e) {
		e.preventDefault();
		let xhr = new XMLHttpRequest();
		xhr.open('DELETE', 'api/spending' + '/' + updateSpendingForm.id.value);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 204) {
					loadExpenses();
				}
			}
		};
		xhr.send();
	});


}

function sendNewSpend(newSpend) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', `api/spending`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let spend = JSON.parse(xhr.responseText);
				loadExpenses();
			}
			else {
				displayError('Error creating expense: ' + xhr.status + " " + xhr.statusText);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newSpend));
}

function updateSpend(spendId, spend) {

	let form = document.getElementById('updateSpendingForm')
	let updatedSpending = {
		name: addSpendingForm.name.value,
		bills: addSpendingForm.bills.value,
		groceries: addSpendingForm.groceries.value,
		gas: addSpendingForm.gas.value
	};
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `api/spending/` + spendId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.responseText === 201) {
				updatedSpending = JSON.parse(xhr.responseText);
				displaySpend(updatedSpending);
			} else {
				displayError(xhr.status + ": " + xhr.responseText);
			}
		}
	};
	xhr.send(JSON.stringify(updatedSpending));
}

function getSpend(spendId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `api/spending/${spendId}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 && xhr.responseText) {
				let spend = JSON.parse(xhr.responseText);
				displaySpend(spend);
			}
			else {
				displayError('Expense not found.');
			}
		}
	};
	xhr.send();
}

function displayError(message) {
	let dataDiv = document.getElementById('spendData');
	dataDiv.textContent = '';
	dataDiv.textContent = message;
}

function displaySpend(spend) {
	console.log("Top of displaySpend");

	let dataDiv = document.getElementById('spendingSingleDiv');
	dataDiv.textContent = '';

	let h1 = document.createElement('h1');
	h1.textContent = spend.name;
	dataDiv.appendChild(h1);

	let elem = document.createElement('h1');
	elem.textContent = spend.bills;
	dataDiv.appendChild(h1);

	elem = document.createElement('h1');
	elem.textContent = spend.groceries;
	dataDiv.appendChild(h1);

	elem = document.createElement('h1');
	elem.textContent = spend.gas;
	dataDiv.appendChild(h1);

	getSpending(spend.id);
}

function loadExpenses() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `api/spendings`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let spendings = JSON.parse(xhr.responseText);
				displayAllExpenses(spendings);
			}
			else {
				displayError('Expense not found.');
			}
		}
	};
	xhr.send();
}

function displayAllExpenses(spendings) {
	combineAllBills(spendings);

	for (const spending of spendings) {
		console.log(spending)
		let table = document.createElement('table');
		spendingListDiv.appendChild(table);

		let tr = document.createElement('tr');
		tr.textContent = spending.name;
		table.appendChild(tr);
		let td = document.createElement('td');
		tr.appendChild(td);

		let tr2 = document.createElement('tr');
		let billsHeader = document.createElement('td');
		billsHeader.textContent = "Bills: " + spending.bills;
		tr2.appendChild(billsHeader);
		table.appendChild(tr2);

		let tr3 = document.createElement('tr');
		let groceriesHeader = document.createElement('td');
		groceriesHeader.textContent = "Groceries: " + spending.groceries;
		tr2.appendChild(groceriesHeader);
		table.appendChild(tr3);

		let tr4 = document.createElement('tr');
		let gasHeader = document.createElement('td');
		gasHeader.textContent = "Gas: " + spending.gas;
		tr2.appendChild(gasHeader);
		table.appendChild(tr4);
	}
}



function displaySpending(spending) {
	let spendDiv = document.getElementById('spendData');
	spendDiv.textContent = '';

	if (spending && spending.length > 0) {

		let h3 = document.createElement('h3');
		h3.textContent = 'Expenses:';
		spendDiv.appendChild(h3);

		let ul = document.createElement('ul');
		spendDiv.appendChild(ul);

		for (let spend of spending) {
			let li = document.createElement('li');
			li.textContent = spend.name + ' ' + spend.bills + ' ' + spend.groceries + ' ' + spend.gas;
			ul.appendChild(li);
		}
	}

}

function deleteSpending(e) {
	console.log(e);
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/spending');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				alert('Expense has been successfully deleted!');
				init();
			}
			else {
				alert('Expense could not be deleted.');
				console.error('Error deleting expense, status = ' + xhr.status);
				console.error(xhr.responseText);
			}
		}
	};
	xhr.send(null);
}


function combineAllBills(spendings) {
	let totalBills = 0;
	for (var i = 0; i < spendings.length; i++) {
		totalBills = totalBills + spendings[i].bills;
		console.log(totalBills);
	}
	targetMe.textContent = `total amount spent on bills: ${totalBills}`;
}



