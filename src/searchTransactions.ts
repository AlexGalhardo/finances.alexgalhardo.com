import { deleteTransaction } from "./deleteTransaction";
import { getTransactionCategoryIcon, transformToBRL } from "./getDashboardData";

export function searchTransactions(
    buttonSearchTransactions: HTMLButtonElement,
    searchCategory: HTMLSelectElement,
    searchStartDate: HTMLSelectElement,
    searchFinalDate: HTMLSelectElement,
) {
    buttonSearchTransactions.addEventListener("click", (event: Event) => {
        event.preventDefault();

        if (localStorage.getItem("galhardo_finances")) {
            if (searchStartDate.value && searchFinalDate.value) {
                let account = JSON.parse(localStorage.getItem("galhardo_finances")!);

                account.transactions.reverse();

                if (!account.transactions) return "No transactions available";

                let transactions = "";
                for (let i = 0; i < account.transactions.length; i++) {
                    let created_at = account.transactions[i].created_at.slice(0, 10);
                    let dateFormated = `${created_at[3]}${created_at[4]}/${created_at[0]}${created_at[1]}/${created_at[6]}${created_at[7]}${created_at[8]}${created_at[9]}`;
                    let dateFormatedTimestamp = new Date(dateFormated).getTime();

                    if (
                        searchCategory.value === "ALL" &&
                        dateFormatedTimestamp >= new Date(searchStartDate.value).getTime() &&
                        dateFormatedTimestamp <= new Date(searchFinalDate.value).getTime()
                            ? true
                            : account.transactions[i].category === searchCategory.value &&
                              dateFormatedTimestamp >= new Date(searchStartDate.value).getTime() &&
                              dateFormatedTimestamp <= new Date(searchFinalDate.value).getTime()
                    ) {
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
                }
                document.querySelector("#ul_transactions")!.innerHTML = transactions;
                deleteTransaction(document.querySelectorAll(".button_delete_transaction")!);
            } else {
                alert("Please select a start date and final date to filter transactions");
            }
        } else {
            document.querySelector("#ul_transactions")!.innerHTML = "There's no transactions available";
        }
    });
}
