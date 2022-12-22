import { getTransactionCategoryIcon, transformToBRL } from "./getDashboardData";

function getTransactions() {

	if(localStorage.getItem('finances_account')){
		let account = JSON.parse(localStorage.getItem('finances_account')!)

		account.transactions.reverse()

		console.log(account.transactions)

		if(!account.transactions) return 'No transactions available'

		let transactions = '';
		for(let i = 0; i < account.transactions.length; i++){
			let colorType = account.transactions[i].type === "DEPOSIT" ?
								'text-success'
							: account.transactions[i].type === "EXPENSE" ?
								'text-danger'
							: 'text-primary';

			transactions += `
				<li class="list-group-item list-group-item-action d-flex justify-content-between">
					<div class="me-auto">
						<h5 class="fw-bold ${colorType}">${getTransactionCategoryIcon(account.transactions[i].category)}   ${account.transactions[i].description}</h5>
						<small>${account.transactions[i].created_at}</small>
					</div>
					<div class="ms-auto">
						<h5 class="fw-bold ${colorType}">+ R$ ${transformToBRL(account.transactions[i].total)}</h5>
							<button class="btn btn-sm btn-outline-secondary" disabled><i class="bi bi-pencil-square"></i> Editar</button>
							<button class="btn btn-sm btn-outline-danger" disabled><i class="bi bi-trash"></i> Excluir</button>
					</div>
				</li>
			`
		}

		return transactions
	}
	else {
		return 'No transactions available'
	}
}

export const allTransactions = getTransactions()
