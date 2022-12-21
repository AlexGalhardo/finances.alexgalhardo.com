import { v4 as uuidv4 } from 'uuid';
// import Account from '../account.json';
// import fs from 'fs';

export function newDeposit(element: HTMLButtonElement,
							totalDeposit: HTMLInputElement,
							depositDescription: HTMLInputElement,
							depositCategory: HTMLSelectElement) {

    element.addEventListener('click', () => {
		console.log('totalDeposit => ', totalDeposit.value)
		console.log('depositDescription => ', depositDescription.value)
		console.log('depositCategory => ', depositCategory.value)

		let Account = null;

		if(JSON.parse(localStorage.getItem('finances_account')!)){
			Account = JSON.parse(localStorage.getItem('finances_account')!)

			Account.current_balance += Number(totalDeposit.value)

			Account.transactions.push({
				id: uuidv4(),
				created_at: String(new Date()),
				updated_at: null,
				type: "DEPOSIT",
				category: depositCategory.value,
				description: depositDescription.value,
				total: Number(totalDeposit.value)
			})

			let accountString = JSON.stringify(Account);
			localStorage.setItem('finances_account', accountString)
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
						type: "DEPOSIT",
						category: depositCategory.value,
						description: depositDescription.value,
						total: Number(totalDeposit.value)
					}
				]
			}

			Account.current_balance += Number(totalDeposit.value)

			let accountString = JSON.stringify(Account);
			localStorage.setItem('finances_account', accountString)
		}
	})
}
