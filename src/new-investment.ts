import { v4 as uuidv4 } from 'uuid';
// import Account from '../account.json';
// import fs from 'fs';

export function newInvestment(element: HTMLButtonElement,
							totalInvestment: HTMLInputElement,
							investmentDescription: HTMLInputElement,
							investmentCategory: HTMLSelectElement) {

    element.addEventListener('click', () => {
		console.log('totalInvestment => ', totalInvestment.value)
		console.log('investmentDescription => ', investmentDescription.value)
		console.log('investmentCategory => ', investmentCategory.value)

		let Account = null;

		if(JSON.parse(localStorage.getItem('finances_account')!)){
			Account = JSON.parse(localStorage.getItem('finances_account')!)

			if(Number(totalInvestment.value) <= Account.current_balance){
				Account.current_balance -= Number(totalInvestment.value)
				Account.investments_total += Number(totalInvestment.value)

				if(investmentCategory.value === 'FIXED_INCOME') Account.investments_fixed_income += Number(totalInvestment.value)

				if(investmentCategory.value === 'VARIABLE_INCOME') Account.investments_variable_income += Number(totalInvestment.value)

				if(investmentCategory.value === 'CRIPTOCURRENCIES') Account.investments_criptocurrencies += Number(totalInvestment.value)

				Account.transactions.push({
					id: uuidv4(),
					created_at: String(new Date()),
					updated_at: null,
					type: "EXPENSE",
					category: investmentCategory.value,
					description: investmentDescription.value,
					total: Number(totalInvestment.value)
				})

				let accountString = JSON.stringify(Account);
				localStorage.setItem('finances_account', accountString)
			} else {
				alert("You dont have sufficient balance to make this investment!");
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
						type: "INVESTMENT",
						category: investmentCategory.value,
						description: investmentDescription.value,
						total: Number(totalInvestment.value)
					}
				]
			}

			Account.current_balance -= Number(totalInvestment.value)
			Account.investments_total += Number(totalInvestment.value)

			if(investmentCategory.value === 'FIXED_INCOME') Account.investments_fixed_income += Number(totalInvestment.value)

			if(investmentCategory.value === 'VARIABLE_INCOME') Account.investments_variable_income += Number(totalInvestment.value)

			if(investmentCategory.value === 'CRIPTOCURRENCIES') Account.investments_criptocurrencies += Number(totalInvestment.value)

			let accountString = JSON.stringify(Account);
			localStorage.setItem('finances_account', accountString)
		}
	})
}
