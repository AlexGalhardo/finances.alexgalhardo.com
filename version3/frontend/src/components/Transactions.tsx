import { useState } from 'react'
import { getTransactionCategoryIcon, transformToBRL } from '../helpers';

function Transactions() {

	function getTransactions() {
		if (localStorage.getItem("galhardo_finances")) {
			let account = JSON.parse(localStorage.getItem("galhardo_finances")!);

			account.transactions.reverse();

			if (!account.transactions) return "No transactions available";

			let transactions = "";
			for (let i = 0; i < account.transactions.length; i++) {
				let colorType =
					account.transactions[i].type === "DEPOSIT"
						? "text-success"
						: account.transactions[i].type === "EXPENSE"
						? "text-danger"
						: "text-primary";

				let simbolType =
					account.transactions[i].type === "DEPOSIT"
						? "+"
						: account.transactions[i].type === "EXPENSE"
						? "-"
						: "";

				transactions += `
					<li class="list-group-item list-group-item-action d-flex justify-content-between">
						<div class="me-auto">
							<h5 class="fw-bold ${colorType}">${getTransactionCategoryIcon(account.transactions[i].category)}   ${
					account.transactions[i].description
				}</h5>
							<small>${account.transactions[i].created_at}</small>
						</div>
						<div class="ms-auto">
							<h5 class="fw-bold ${colorType}">${simbolType} R$ ${transformToBRL(account.transactions[i].amount)}</h5>
								<form class="d-flex justify-content-end">
									<button type="submit" class="btn btn-sm btn-outline-danger button_delete_transaction" id="${
										account.transactions[i].id
									}"><i class="bi bi-trash"></i> Delete</button>
								</form>
						</div>
					</li>
				`;
			}

			return transactions;
		} else {
			return "No transactions available";
		}
	}

	return (
		<>
			<h3><i className="bi bi-receipt-cutoff"></i> Transactions</h3>
			<ul className="list-group list-group-item-action" id="ul_transactions">
				{getTransactions()}
			</ul>
		</>
	)
}

export default Transactions
