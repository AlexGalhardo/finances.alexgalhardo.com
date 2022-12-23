import { v4 as uuidv4 } from 'uuid';
import { getDateTimeBrazil, transformStringInputValueMaskToNumber } from './getDashboardData';

export function newDeposit(element: HTMLButtonElement,
							totalDeposit: HTMLInputElement,
							depositDescription: HTMLInputElement,
							depositCategory: HTMLSelectElement) {

    element.addEventListener('click', () => {
		console.log('totalDeposit => ', totalDeposit.value)
		console.log('depositDescription => ', depositDescription.value)
		console.log('depositCategory => ', depositCategory.value)

		if(totalDeposit.value && depositDescription.value && depositCategory.value){
			let Account = JSON.parse(localStorage.getItem('finances_account')!)
			const totalDeposited = transformStringInputValueMaskToNumber(totalDeposit.value)

			if(totalDeposited <= 0){
				alert('Enter a valid deposit value greater than 0!')
			}

			if(totalDeposited > 0){
				if(Account){
					Account.current_balance += totalDeposited

					Account.transactions.push({
						id: uuidv4(),
						created_at: getDateTimeBrazil(),
						updated_at: null,
						type: "DEPOSIT",
						category: depositCategory.value,
						description: depositDescription.value,
						total: totalDeposited
					})

					localStorage.setItem('finances_account', JSON.stringify(Account))
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
						total_services: 0,
						investments_total: 0,
						investments_fixed_income: 0,
						investments_variable_income: 0,
						investments_criptocurrencies: 0,
						transactions: [
							{
								id: uuidv4(),
								created_at: getDateTimeBrazil(),
								updated_at: null,
								type: "DEPOSIT",
								category: depositCategory.value,
								description: depositDescription.value,
								total: totalDeposited
							}
						]
					}

					Account.current_balance += totalDeposited

					localStorage.setItem('finances_account', JSON.stringify(Account))
				}
			}
		}
	})
}
