import { v4 as uuidv4 } from 'uuid';
import { getDateTimeBrazil, transformStringInputValueMaskToNumber } from './getDashboardData';

export function newInvestment(element: HTMLButtonElement,
							totalInvestment: HTMLInputElement,
							investmentDescription: HTMLInputElement,
							investmentCategory: HTMLSelectElement) {

    element.addEventListener('click', () => {
		// console.log('totalInvestment => ', totalInvestment.value)
		// console.log('investmentDescription => ', investmentDescription.value)
		// console.log('investmentCategory => ', investmentCategory.value)

		if(totalInvestment.value && investmentDescription.value && investmentCategory.value){
			let Account = JSON.parse(localStorage.getItem('finances_account')!)
			const totalInvested = transformStringInputValueMaskToNumber(totalInvestment.value)

			if(totalInvested <= 0){
				alert('Enter a valid investment value greater than 0!')
			}

			if(totalInvested > 0){
				if(Account){
					if(totalInvested <= Account.current_balance){
						Account.current_balance -= totalInvested
						Account.investments_total += totalInvested

						if(investmentCategory.value === 'FIXED_INCOME') Account.investments_fixed_income += totalInvested

						if(investmentCategory.value === 'VARIABLE_INCOME') Account.investments_variable_income += totalInvested

						if(investmentCategory.value === 'CRIPTOCURRENCIES') Account.investments_criptocurrencies += totalInvested

						Account.transactions.push({
							id: uuidv4(),
							created_at: getDateTimeBrazil(),
							updated_at: null,
							type: "INVESTMENT",
							category: investmentCategory.value,
							description: investmentDescription.value,
							total: totalInvested
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
								created_at: getDateTimeBrazil(),
								updated_at: null,
								type: "INVESTMENT",
								category: investmentCategory.value,
								description: investmentDescription.value,
								total: totalInvested
							}
						]
					}

					Account.current_balance -= totalInvested
					Account.investments_total += totalInvested

					if(investmentCategory.value === 'FIXED_INCOME') Account.investments_fixed_income += totalInvested

					if(investmentCategory.value === 'VARIABLE_INCOME') Account.investments_variable_income += totalInvested

					if(investmentCategory.value === 'CRIPTOCURRENCIES') Account.investments_criptocurrencies += totalInvested

					let accountString = JSON.stringify(Account);
					localStorage.setItem('finances_account', accountString)
				}
			}
		}
	})
}
