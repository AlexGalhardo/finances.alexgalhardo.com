import { v4 as uuidv4 } from 'uuid';
import { getDateTimeBrazil, transformStringInputValueMaskToNumber } from './getDashboardData';

export function newExpense(element: HTMLButtonElement,
							totalExpense: HTMLInputElement,
							expenseDescription: HTMLInputElement,
							expenseCategory: HTMLSelectElement) {

    element.addEventListener('click', () => {
		// console.log('totalExpense => ', totalExpense.value)
		// console.log('expenseDescription => ', expenseDescription.value)
		// console.log('expenseCategory => ', expenseCategory.value)

		if(totalExpense.value && expenseDescription.value && expenseCategory.value){
			let Account = JSON.parse(localStorage.getItem('finances_account')!)
			const totalWithdraw = transformStringInputValueMaskToNumber(totalExpense.value)

			if(totalWithdraw <= 0){
				alert('Enter a valid expense value greater than 0!')
			}

			if(totalWithdraw > 0){
				if(Account){
					if(totalWithdraw <= Account.current_balance){
						Account.current_balance -= totalWithdraw
						Account.total_expenses += totalWithdraw

						if(expenseCategory.value === 'FOOD') Account.total_food += totalWithdraw

						if(expenseCategory.value === 'SUBSCRIPTION') Account.total_subscriptions += totalWithdraw

						if(expenseCategory.value === 'SHOP') Account.total_shop += totalWithdraw

						if(expenseCategory.value === 'ENTERTAINMENT') Account.total_entertainment += totalWithdraw

						if(expenseCategory.value === 'TRANSPORT') Account.total_transport += totalWithdraw

						if(expenseCategory.value === 'HOUSE') Account.total_house += totalWithdraw

						if(expenseCategory.value === 'SERVICES') Account.total_services += totalWithdraw

						Account.transactions.push({
							id: uuidv4(),
							created_at: getDateTimeBrazil(),
							updated_at: null,
							type: "EXPENSE",
							category: expenseCategory.value,
							description: expenseDescription.value,
							total: totalWithdraw
						})

						localStorage.setItem('finances_account', JSON.stringify(Account))
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
								type: "EXPENSE",
								category: expenseCategory.value,
								description: expenseDescription.value,
								total: totalWithdraw
							}
						]
					}

					Account.current_balance -= totalWithdraw
					Account.total_expenses += totalWithdraw

					if(expenseCategory.value === 'FOOD') Account.total_food += totalWithdraw

					if(expenseCategory.value === 'SUBSCRIPTION') Account.total_subscriptions += totalWithdraw

					if(expenseCategory.value === 'SHOP') Account.total_shop += totalWithdraw

					if(expenseCategory.value === 'ENTERTAINMENT') Account.total_entertainment += totalWithdraw

					if(expenseCategory.value === 'TRANSPORT') Account.total_transport += totalWithdraw

					if(expenseCategory.value === 'HOUSE') Account.total_house += totalWithdraw

					if(expenseCategory.value === 'SERVICES') Account.total_services += totalWithdraw

					localStorage.setItem('finances_account', JSON.stringify(Account))
				}
			}
		}
	})
}
