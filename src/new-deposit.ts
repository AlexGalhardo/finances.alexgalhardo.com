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

		let Account = JSON.parse(localStorage.getItem('galhardo_account')!)

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

		console.log('Account => ', Account)

		let accountString = JSON.stringify(Account);
		localStorage.setItem('galhardo_account', accountString)
		
		// fs.writeFileSync('account.json', json);
	})
}
