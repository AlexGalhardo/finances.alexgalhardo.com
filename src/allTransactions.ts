function getTransactions() {
		
	if(localStorage.getItem('galhardo_account')){
		let account = JSON.parse(localStorage.getItem('galhardo_account')!)

		console.log(account.transactions)

		let stringReturn = '';
		for(let i = 0; i < account.transactions.length; i++){
			if(account.transactions[i].type === "DEPOSIT"){
				stringReturn += `
					<li class="list-group-item list-group-item-action d-flex justify-content-between">
						<div class="me-auto">
							<h5 class="fw-bold text-success">${account.transactions[i].description}</h5>
							<small>${account.transactions[i].created_at}</small>
							<br>
							<small>${account.transactions[i].category}</small>
						</div>
						<div class="ms-auto">
							<h5 class="fw-bold text-success">+ R$ ${account.transactions[i].total}</h4>
								<button class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil-square"></i> Editar</button>
								<button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i> Excluir</button>
						</div>
					</li>
				`
			}
			else if(account.transactions[i].type === "EXPENSE"){
				stringReturn += `
					<li class="list-group-item list-group-item-action d-flex justify-content-between">
						<div class="me-auto">
							<h5 class="fw-bold text-danger">${account.transactions[i].description}</h5>
							<small>${account.transactions[i].created_at}</small>
							<br>
							<small>${account.transactions[i].category}</small>
						</div>
						<div class="ms-auto">
							<h5 class="fw-bold text-danger">- R$ ${account.transactions[i].total}</h4>
								<button class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil-square"></i> Editar</button>
								<button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i> Excluir</button>
						</div>
					</li>
				`
			} else {
				stringReturn += `
					<li class="list-group-item list-group-item-action d-flex justify-content-between">
						<div class="me-auto">
							<h5 class="fw-bold text-danger">${account.transactions[i].description}</h5>
							<small>${account.transactions[i].created_at}</small>
							<br>
							<small>${account.transactions[i].category}</small>
						</div>
						<div class="ms-auto">
							<h5 class="fw-bold text-primary"> R$ ${account.transactions[i].total}</h4>
								<button class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil-square"></i> Editar</button>
								<button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i> Excluir</button>
						</div>
					</li>
				`
			}
		}

		return stringReturn
	}
}

export const allTransactions = getTransactions()
