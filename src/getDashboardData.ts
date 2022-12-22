import { v4 as uuidv4 } from 'uuid';

let Account = {
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
	transactions: []
}

if(localStorage.getItem('finances_account')){
	Account = JSON.parse(localStorage.getItem('finances_account')!)
}

export function transformToBRL(amount: number){
	return (amount / 100).toLocaleString('pt-br', {minimumFractionDigits: 2})
}

function transformToFixedTwo(value: number){
	return value.toFixed(2)
}

export function getDateTimeBrazil(){
	let date = new Date().toLocaleDateString("pt-BR")
	let time = new Date().toLocaleTimeString("pt-BR")
	return `${date} ${time}`;
}

export function transformStringInputValueMaskToNumber(value: string): number {
	value = value.replace("R$ ", "");
	value = value.replace(",", "");
	value = value.replace(".", "");
	return Number(value)
}

export function getTransactionCategoryIcon(category: string) {
	switch(category){
		case 'WAGE':
			return `<i class="bi bi-building-fill-add"></i>`
		case 'FREELANCER':
			return `<i class="bi bi-file-earmark-medical"></i>`
		case 'FOOD':
			return `<i class="bi bi-apple"></i>`
		case 'SUBSCRIPTION':
			return `<i class="bi bi-bookmark-star"></i>`
		case 'SHOP':
			return `<i class="bi bi-shop"></i>`
		case 'ENTERTAINMENT':
			return `<i class="bi bi-controller"></i>`
		case 'TRANSPORT':
			return `<i class="bi bi-car-front-fill"></i>`
		case 'HOUSE':
			return `<i class="bi bi-house-door"></i>`
		case 'FIXED_INCOME':
			return `<i class="bi bi-graph-up-arrow"></i>`
		case 'VARIABLE_INCOME':
			return `<i class="bi bi-graph-down-arrow"></i>`
		case 'CRIPTOCURRENCIES':
			return `<i class="bi bi-currency-bitcoin"></i>`
		default:
			return '';
	}
}

export const currentBalance = transformToBRL(Account.current_balance)
export const currentExpense = transformToBRL(Account.total_expenses)
export const currentInvestments = transformToBRL(Account.investments_total)

export const investments_fixed_income = transformToBRL(Account.investments_fixed_income)
export const percentage_fixed_income = transformToFixedTwo(Account.investments_total ? Account.investments_fixed_income / Account.investments_total * 100 : 0)

export const investments_variable_income = transformToBRL(Account.investments_variable_income)
export const percentage_variable_income = transformToFixedTwo(Account.investments_total ? Account.investments_variable_income / Account.investments_total * 100 :0)

export const investments_criptocurrencies = transformToBRL(Account.investments_criptocurrencies)
export const percentage_criptocurrencies = transformToFixedTwo(Account.investments_total ? Account.investments_criptocurrencies / Account.investments_total * 100 : 0)

export const total_food = transformToBRL(Account.total_food)
export const percentage_food = transformToFixedTwo(Account.total_expenses ? Account.total_food / Account.total_expenses * 100 : 0)

export const total_subscriptions = transformToBRL(Account.total_subscriptions)
export const percentage_subscriptions = transformToFixedTwo(Account.total_expenses ? Account.total_subscriptions / Account.total_expenses * 100 : 0)

export const total_shop = transformToBRL(Account.total_shop)
export const percentage_shop = transformToFixedTwo(Account.total_expenses ? Account.total_shop / Account.total_expenses * 100 : 0)

export const total_entertainment = transformToBRL(Account.total_entertainment)
export const percentage_entertainment = transformToFixedTwo(Account.total_expenses ? Account.total_entertainment / Account.total_expenses * 100 : 0)

export const total_transport = transformToBRL(Account.total_transport)
export const percentage_transport = transformToFixedTwo(Account.total_expenses ? Account.total_transport / Account.total_expenses * 100 : 0)

export const total_house = transformToBRL(Account.total_house)
export const percentage_house = transformToFixedTwo(Account.total_expenses ? Account.total_house / Account.total_expenses * 100 : 0)
