import { v4 as uuidv4 } from 'uuid';
// import Account from '../account.json';
// import fs from 'fs';

export function newExpense(element: HTMLButtonElement,
							totalExpense: HTMLInputElement,
							expenseDescription: HTMLInputElement,
							expenseCategory: HTMLSelectElement) {

    element.addEventListener('click', () => {
		console.log('totalExpense => ', totalExpense.value)
		console.log('expenseDescription => ', expenseDescription.value)
		console.log('expenseCategory => ', expenseCategory.value)

		let Account = null;

		if(JSON.parse(localStorage.getItem('finances_account')!)){
			Account = JSON.parse(localStorage.getItem('finances_account')!)

			if(Number(totalExpense.value) <= Account.current_balance){
				Account.current_balance -= Number(totalExpense.value)
				Account.total_expenses += Number(totalExpense.value)

				if(expenseCategory.value === 'FOOD') Account.total_food += Number(totalExpense.value)

				if(expenseCategory.value === 'SUBSCRIPTION') Account.total_subscriptions += Number(totalExpense.value)

				if(expenseCategory.value === 'SHOP') Account.total_shop += Number(totalExpense.value)

				if(expenseCategory.value === 'ENTERTAINMENT') Account.total_entertainment += Number(totalExpense.value)

				if(expenseCategory.value === 'TRANSPORT') Account.total_transport += Number(totalExpense.value)

				if(expenseCategory.value === 'HOUSE') Account.total_house += Number(totalExpense.value)

				Account.transactions.push({
					id: uuidv4(),
					created_at: String(new Date()),
					updated_at: null,
					type: "EXPENSE",
					category: expenseCategory.value,
					description: expenseDescription.value,
					total: Number(totalExpense.value)
				})

				let accountString = JSON.stringify(Account);
				localStorage.setItem('finances_account', accountString)
			} else {
				alert("You dont have sufficient balance to make this expense!");
			}
		}
		else {
			Account = {
				account_id: uuidv4(),
				current_balance: 0,
				total_expenses: 0,
				total_food: 0,
				total_subscriptions: 0,
				total_shop: 0,
				total_entertainment: 0,
				total_transport: 0,
				total_house: 0,
				investments_total: 0,
				investments_fixed_income: 0,
				investments_variable_income: 0,
				investments_criptocurrencies: 0,
				transactions: [
					{
						id: uuidv4(),
						created_at: String(new Date()),
						updated_at: null,
						type: "EXPENSE",
						category: expenseCategory.value,
						description: expenseDescription.value,
						total: Number(totalExpense.value)
					}
				]
			}

			Account.current_balance -= Number(totalExpense.value)
			Account.total_expenses += Number(totalExpense.value)

			if(expenseCategory.value === 'FOOD') Account.total_food += Number(totalExpense.value)

			if(expenseCategory.value === 'SUBSCRIPTION') Account.total_subscriptions += Number(totalExpense.value)

			if(expenseCategory.value === 'SHOP') Account.total_shop += Number(totalExpense.value)

			if(expenseCategory.value === 'ENTERTAINMENT') Account.total_entertainment += Number(totalExpense.value)

			if(expenseCategory.value === 'TRANSPORT') Account.total_transport += Number(totalExpense.value)

			if(expenseCategory.value === 'HOUSE') Account.total_house += Number(totalExpense.value)

			let accountString = JSON.stringify(Account);
			localStorage.setItem('finances_account', accountString)
		}
	})
}
