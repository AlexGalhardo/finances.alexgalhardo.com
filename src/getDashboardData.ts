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

export const currentBalance = Account.current_balance
export const currentExpense = Account.total_expenses
export const currentInvestments = Account.investments_total

export const investments_fixed_income = Account.investments_fixed_income
export const percentage_fixed_income = Number(Account.investments_fixed_income / Account.investments_total) * 100

export const investments_variable_income = Account.investments_variable_income
export const percentage_variable_income = Number(Account.investments_variable_income / Account.investments_total) * 100

export const investments_criptocurrencies = Account.investments_criptocurrencies
export const percentage_criptocurrencies = Number(Account.investments_criptocurrencies / Account.investments_total) * 100

export const total_food = Account.total_food
export const percentage_food = Number(Account.total_food / Account.total_expenses) * 100

export const total_subscriptions = Account.total_subscriptions
export const percentage_subscriptions = Number(Account.total_subscriptions / Account.total_expenses) * 100

export const total_shop = Account.total_shop
export const percentage_shop = Number(Account.total_shop / Account.total_expenses) * 100

export const total_entertainment = Account.total_entertainment
export const percentage_entertainment = Number(Account.total_entertainment / Account.total_expenses) * 100

export const total_transport = Account.total_transport
export const percentage_transport = Number(Account.total_transport / Account.total_expenses) * 100

export const total_house = Account.total_house
export const percentage_house = Number(Account.total_house / Account.total_expenses) * 100
