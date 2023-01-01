import { newDeposit } from "./newDeposit";
import { allTransactions } from "./allTransactions";
import {
    currentBalance,
    currentExpense,
    currentInvestments,
    investments_others,
    percentage_others,
    investments_criptocurrencies,
    investments_fixed_income,
    investments_variable_income,
    percentage_criptocurrencies,
    percentage_entertainment,
    percentage_fixed_income,
    percentage_food,
    percentage_house,
    percentage_shop,
    percentage_subscriptions,
    percentage_transport,
    percentage_variable_income,
    total_entertainment,
    total_food,
    total_house,
    total_shop,
    total_subscriptions,
    total_transport,
    total_services,
    percentage_services,
} from "./getDashboardData";
import { newInvestment } from "./newInvestment";
import { newExpense } from "./newExpense";
import { searchTransactions } from "./searchTransactions";
import { deleteTransaction } from "./deleteTransaction";
import { dowloadExportJsonFile } from "./downloadExportJsonFile";
import { dowloadExportCSVFile } from "./downloadExportCSVFile";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
	<div id="navbar"></div>
	<div id="modais"></div>

	<main style="margin-top: 100px; margin-bottom: 50px;">
		<div class="container">
			<div class="row">
				<div class="col-lg-5">
					<div id="BALANCE"></div>
					<div id="EXPENSES"></div>
					<div id="INVESTMENTS"></div>
				</div>
				<div class="col-lg-7">
					<div id="FILTER"></div>
					<div id="EXPORT"></div>
					<div id="TRANSACTIONS"></div>
				</div>
			</div>
		</div>
	</main>
`

document.querySelector<HTMLDivElement>("#navbar")!.innerHTML = `
  <div class="fixed-top shadow-sm bg-light mb-5">
		<nav class="container pt-2 pb-2 col-lg-12 navbar navbar-expand-lg fixed navbar-dark bg-light text-bold">
			<div class="container-fluid">
				<h3><a class="fw-bold text-dark text-decoration-none" href="/"><i class="bi bi-bank"></i> Galhardo Finances</a></h3>
				<button class="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								<button class="btn btn-lg btn-outline-success" type="submit" data-bs-toggle="modal" data-bs-target="#modalDepositar"><i class="bi bi-cash"></i> Deposit</button>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								<button class="btn btn-lg btn-outline-danger" type="submit" data-bs-toggle="modal" data-bs-target="#modalSacar"><i class="bi bi-cash-stack"></i> Expense</button>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								<button class="btn btn-lg btn-outline-primary" type="submit" data-bs-toggle="modal" data-bs-target="#modalInvestir"><i class="bi bi-bar-chart"></i> Invest</button>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" target="_blank" href="https://github.com/AlexGalhardo/Galhardo-Finances">
								<button class="btn btn-lg btn-outline-dark"><i class="bi bi-github"></i> Source Code</button>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
`;

document.querySelector<HTMLDivElement>("#modais")!.innerHTML = `
    <!-- Modal Depositar -->
	<div class="modal fade" id="modalDepositar" tabindex="-1" aria-labelledby="modalDepositarLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5 fw-bold text-success" id="modalDepositarLabel"><i class="bi bi-cash"></i> Deposit Money</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form method="GET" action="/">
						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Total to deposit</label>
							<input class="form-control" id="total_to_deposit" placeholder="R$ 10.00" min="100" required value="">
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Deposit Description</label>
							<input type="text" class="form-control" id="deposit_description" placeholder="Exemplo: Freelancer do Primo" required value="">
						</div>

						<label>Category:</label>
						<select class="form-select" name="deposit_category_selected" id="deposit_category" required>
							<option value="SALARY" selected>SALARY</option>
							<option value="FREELANCER">FREELANCER</option>
							<option value="INVESTMENT_PROFIT">INVESTMENT PROFIT</option>
						</select>

						<br>
						<button class="btn btn-outline-success" id="confirm_deposit" type="submit">Confirm Deposit</button>
					</form>
				</div>
			</div>
		</div>
	</div>



	<!-- Modal SACAR -->
	<div class="modal fade" id="modalSacar" tabindex="-1" aria-labelledby="modalSacarLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5 fw-bold text-danger" id="modalSacarLabel"><i class="bi bi-cash-stack"></i>
						New Expense</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form method="GET" action="/">
						<div class="mb-3">
							<label for="" class="form-label">Total to expense</label>
							<input class="form-control" id="total_to_expense" placeholder="R$ 10.00" required>
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Deposit Description</label>
							<input type="text" class="form-control" id="expense_description"
								placeholder="Example: Dinner Pizza Dominós" required>
						</div>

						<label>Category:</label>
						<select class="form-select" name="expense_category_selected" id="expense_category" required>
							<option value="FOOD" selected>FOOD</option>
							<option value="SUBSCRIPTIONS">SUBSCRIPTION</option>
							<option value="SHOP">SHOP</option>
							<option value="ENTERTAINMENT">ENTERTAINMENT</option>
							<option value="TRANSPORT">TRANSPORT</option>
							<option value="HOUSE">HOUSE</option>
							<option value="SERVICES">SERVICES</option>
						</select>

						<br>
						<button class="btn btn-outline-danger" id="confirm_expense" type="submit">Confirm Expense</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal INVESTIR -->
	<div class="modal fade" id="modalInvestir" tabindex="-1" aria-labelledby="modalInvestirLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5 fw-bold text-primary" id="modalInvestirLabel"><i class="bi bi-bar-chart"></i>
						New Investment</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form method="GET" action="/">
						<div class="mb-3">
							<label for="" class="form-label">Total to invest</label>
							<input class="form-control" id="total_to_investment" placeholder="R$ 10.00" required>
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Investment Description</label>
							<input type="text" class="form-control" id="investment_description"
								placeholder="Example: Tesouro SELIC Prefixado October 2023" required>
						</div>

						<label>Category:</label>
						<select class="form-select" name="investment_category_selected" id="investment_category" required>
							<option value="FIXED_INCOME" selected>Fixed Income</option>
							<option value="VARIABLE_INCOME">Variable Income</option>
							<option value="CRIPTOCURRENCIES">Criptocurrencies</option>
							<option value="OTHERS">Others</option>
						</select>

						<br>
						<button class="btn btn-outline-primary" id="confirm_investment" type="submit">Confirm Investment</button>
					</form>
				</div>
			</div>
		</div>
	</div>
`;

document.querySelector<HTMLDivElement>("#BALANCE")!.innerHTML = `
	<div class="card mb-3 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-success"><i class="bi bi-cash"></i> Current Balance</h4>
			<h5 class="fw-bold text-success">R$ ${currentBalance}</h5>
		</div>
	</div>
`;

document.querySelector<HTMLDivElement>("#EXPENSES")!.innerHTML = `
	<div class="card mb-3 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-danger"><i class="bi bi-cash-stack"></i> Expenses </h4>
			<p class="my-0 fw-bold text-end text-danger">R$ ${currentExpense}</p>
		</div>
		<div class="card-body">
			<table class="table table-striped">
				<tbody>
					<tr>
						<th><i class="bi bi-apple"></i> Food</th>
						<td>R$ ${total_food}</td>
						<td>${percentage_food} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-bookmark-star"></i> Subscriptions</th>
						<td>R$ ${total_subscriptions}</td>
						<td>${percentage_subscriptions} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-shop"></i> Shop</th>
						<td>R$ ${total_shop}</td>
						<td>${percentage_shop} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-controller"></i> Hobbies & Entertainment</th>
						<td>R$ ${total_entertainment}</td>
						<td>${percentage_entertainment} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-car-front-fill"></i> Transport</th>
						<td>R$ ${total_transport}</td>
						<td>${percentage_transport} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-house-door"></i> House</th>
						<td>R$ ${total_house}</td>
						<td>${percentage_house} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-tools"></i> Services</th>
						<td>R$ ${total_services}</td>
						<td>${percentage_services} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`;

document.querySelector<HTMLDivElement>("#INVESTMENTS")!.innerHTML = `
	<div class="card mb-3 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-primary"><i class="bi bi-bar-chart"></i> Investments </h4>
			<span class="my-0 fw-bold text-end text-primary">R$ ${currentInvestments}</span>
		</div>
		<div class="card-body">
			<table class="table table-striped">
				<tbody>
					<tr>
						<th><i class="bi bi-graph-up-arrow"></i> Fixed Income</th>
						<td>R$ ${investments_fixed_income}</td>
						<td>${percentage_fixed_income} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-graph-down-arrow"></i> Variable Income</th>
						<td>R$ ${investments_variable_income}</td>
						<td>${percentage_variable_income} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-currency-bitcoin"></i> Criptocurrencies</th>
						<td>R$ ${investments_criptocurrencies}</td>
						<td>${percentage_criptocurrencies} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-gem"></i> Others</th>
						<td>R$ ${investments_others}</td>
						<td>${percentage_others} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`;

document.querySelector<HTMLDivElement>("#FILTER")!.innerHTML = `
	<form class="mb-3 d-flex justify-content-between" action="#" id="form_search_transactions">
		<div class="col-lg-3">
			<label>Category:</label>
			<select class="form-select" id="search_transaction_category" name="search_transaction_category" required>
				<option class="fw-bold" value="ALL" selected>ALL</option>
				<option class="text-success fw-bold" value="SALARY">SALARY</option>
				<option class="text-success fw-bold" value="FREELANCER">FREELANCER</option>
				<option class="text-success fw-bold" value="INVESTMENT_PROFIT">INVESTMENT PROFIT</option>
				<option class="text-danger fw-bold" value="FOOD">FOOD</option>
				<option class="text-danger fw-bold" value="SUBSCRIPTIONS">SUBSCRIPTION</option>
				<option class="text-danger fw-bold" value="SHOP">SHOP</option>
				<option class="text-danger fw-bold" value="ENTERTAINMENT">ENTERTAINMENT</option>
				<option class="text-danger fw-bold" value="TRANSPORT">TRANSPORT</option>
				<option class="text-danger fw-bold" value="HOUSE">HOUSE</option>
				<option class="text-danger fw-bold" value="SERVICES">SERVICES</option>
				<option class="text-primary fw-bold" value="FIXED_INCOME">FIXED INCOME</option>
				<option class="text-primary fw-bold" value="VARIABLE_INCOME">VARIABLE INCOME</option>
				<option class="text-primary fw-bold" value="CRIPTOCURRENCIES">CRIPTOCURRENCIES</option>
				<option class="text-primary fw-bold" value="OTHERS">OTHERS</option>
			</select>
		</div>

		<div class="col-lg-3">
			<label>Start Date:</label>
			<input class="form-control" type="date" id="search_transaction_start_date" name="search_transaction_start_date" value="" required>
		</div>

		<div class="col-lg-3">
			<label>Final Date:</label>
			<input class="form-control" type="date" id="search_transaction_final_date" name="search_transaction_final_date" value="" required>
		</div>

		<button class="mt-4 btn btn-outline-primary mb-3" id="button_search_transactions"><i class="bi bi-search"></i> Search</button>
	</form>
`;

document.querySelector<HTMLDivElement>("#EXPORT")!.innerHTML = `
	<div class="d-flex justify-content-between mb-5">
		<a class="btn btn-outline-dark mb-3" id="button_export_json"><i class="bi bi-filetype-json"></i> Export JSON</a>
		<a class="btn btn-outline-dark mb-3" id="button_export_csv"><i class="bi bi-filetype-csv"></i> Export CSV</a>
	</div>
`;

document.querySelector<HTMLDivElement>("#TRANSACTIONS")!.innerHTML = `
	<h3><i class="bi bi-receipt-cutoff"></i> Transactions</h3>
	<ul class="list-group list-group-item-action" id="ul_transactions">
		${allTransactions}
	</ul>
`;

newDeposit(
    document.querySelector<HTMLButtonElement>("#confirm_deposit")!,
    document.querySelector<HTMLInputElement>("#total_to_deposit")!,
    document.querySelector<HTMLInputElement>("#deposit_description")!,
    document.querySelector<HTMLSelectElement>("#deposit_category")!,
);

newExpense(
    document.querySelector<HTMLButtonElement>("#confirm_expense")!,
    document.querySelector<HTMLInputElement>("#total_to_expense")!,
    document.querySelector<HTMLInputElement>("#expense_description")!,
    document.querySelector<HTMLSelectElement>("#expense_category")!,
);

newInvestment(
    document.querySelector<HTMLButtonElement>("#confirm_investment")!,
    document.querySelector<HTMLInputElement>("#total_to_investment")!,
    document.querySelector<HTMLInputElement>("#investment_description")!,
    document.querySelector<HTMLSelectElement>("#investment_category")!,
);

searchTransactions(
    document.querySelector<HTMLButtonElement>("#button_search_transactions")!,
    document.querySelector<HTMLSelectElement>("#search_transaction_category")!,
    document.querySelector<HTMLSelectElement>("#search_transaction_start_date")!,
    document.querySelector<HTMLSelectElement>("#search_transaction_final_date")!,
);

document.getElementById("total_to_deposit")!.addEventListener("keyup", maskInputToBrazilReal);
document.getElementById("total_to_expense")!.addEventListener("keyup", maskInputToBrazilReal);
document.getElementById("total_to_investment")!.addEventListener("keyup", maskInputToBrazilReal);

function maskInputToBrazilReal(e: any) {
    let inputValue = e.target.value.replace(/\D/g, "");
    inputValue = (inputValue / 100).toFixed(2) + "";
    inputValue = inputValue.replace(".", ",");
    inputValue = inputValue.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    inputValue = inputValue.replace(/(\d)(\d{3}),/g, "$1.$2,");
    e.target.value = `R$ ${inputValue}`;
}

deleteTransaction(document.querySelectorAll(".button_delete_transaction")!);
dowloadExportJsonFile(document.querySelector<HTMLButtonElement>("#button_export_json")!);
dowloadExportCSVFile(document.querySelector<HTMLButtonElement>("#button_export_csv")!);
