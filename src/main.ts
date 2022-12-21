// import './style.css'
// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'
import { newDeposit } from './new-deposit'
import { allTransactions } from './allTransactions'
import { currentBalance, currentExpense, currentInvestments, investments_criptocurrencies, investments_fixed_income, investments_variable_income, percentage_criptocurrencies, percentage_entertainment, percentage_fixed_income, percentage_food, percentage_house, percentage_shop, percentage_subscriptions, percentage_transport, percentage_variable_income, total_entertainment, total_food, total_house, total_shop, total_subscriptions, total_transport } from './getDashboardData'
import { newInvestment } from './new-investment'
import { newExpense } from './new-withdraw'

document.querySelector<HTMLDivElement>('#navbar')!.innerHTML = `
  <div class="fixed-top shadow bg-dark mb-5">
		<nav class="container pt-2 pb-2 col-lg-12 navbar navbar-expand-lg fixed navbar-dark bg-dark text-white">
			<div class="container-fluid">
				<h1><a class="navbar-brand fw-bold" href="#">Galhardo Finances</a></h1>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								<button class="btn btn-lg btn-outline-success" type="submit" data-bs-toggle="modal" data-bs-target="#modalDepositar">Deposit</button>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								<button class="btn btn-lg btn-outline-danger" type="submit" data-bs-toggle="modal" data-bs-target="#modalSacar">Expense</button>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								<button class="btn btn-lg btn-outline-primary" type="submit" data-bs-toggle="modal" data-bs-target="#modalInvestir">Invest</button>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
`

document.querySelector<HTMLDivElement>('#modais')!.innerHTML = `
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
							<input type="number" class="form-control" id="total_to_deposit" placeholder="R$ 10.00" min="100" required value="">
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Deposit Description</label>
							<input type="text" class="form-control" id="deposit_description" placeholder="Exemplo: Freelancer do Primo" required value="">
						</div>

						<label>Category:</label>
						<select class="form-select" name="deposit_category_selected" id="deposit_category" required>
							<option value="WAGE" selected>Wage</option>
							<option value="FREELANCER">Freelancer</option>
							<option value="INVESTMENT_PROFIT">Investment Profit</option>
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
							<input type="number" class="form-control" id="total_to_expense" placeholder="R$ 10.00" required>
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Deposit Description</label>
							<input type="text" class="form-control" id="expense_description"
								placeholder="Example: Dinner Pizza Dominós" required>
						</div>

						<label>Category:</label>
						<select class="form-select" name="expense_category_selected" id="expense_category" required>
							<option value="FOOD" selected>Food</option>
							<option value="SUBSCRIPTION">Subscription</option>
							<option value="SHOP">Shop</option>
							<option value="ENTERTAINMENT">Hobbies and Entertainment</option>
							<option value="TRANSPORT">Transport</option>
							<option value="HOUSE">House</option>
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
							<input type="number" class="form-control" id="total_to_investment" placeholder="R$ 10.00" required>
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
						</select>

						<br>
						<button class="btn btn-outline-primary" id="confirm_investment" type="submit">Confirm Investment</button>
					</form>
				</div>
			</div>
		</div>
	</div>
`

document.querySelector<HTMLDivElement>('#BALANCE')!.innerHTML = `
	<div class="card mb-4 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-success"><i class="bi bi-cash"></i> Current Balance</h4>
			<h5 class="fw-bold text-success">R$ ${currentBalance}</h5>
		</div>
	</div>
`

document.querySelector<HTMLDivElement>('#EXPENSES')!.innerHTML = `
	<div class="card mb-4 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-danger"><i class="bi bi-cash-stack"></i> Expenses </h4>
			<p class="my-0 fw-bold text-end text-danger">R$ ${currentExpense}</p>
		</div>
		<div class="card-body">
			<table class="table table-striped">
				<thead>
					<tr class="bg-info">
						<th scope="col">CATEGORY</th>
						<th scope="col">TOTAL</th>
						<th scope="col">PERCENTAGE</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Food</th>
						<td>R$ ${total_food}</td>
						<td>${percentage_food} %</td>
					</tr>
					<tr>
						<th>Subscriptions</th>
						<td>R$ ${total_subscriptions}</td>
						<td>${percentage_subscriptions} %</td>
					</tr>
					<tr>
						<th>Shop</th>
						<td>R$ ${total_shop}</td>
						<td>${percentage_shop} %</td>
					</tr>
					<tr>
						<th>Hobbies & Entertainment</th>
						<td>R$ ${total_entertainment}</td>
						<td>${percentage_entertainment} %</td>
					</tr>
					<tr>
						<th>Transport</th>
						<td>R$ ${total_transport}</td>
						<td>${percentage_transport} %</td>
					</tr>
					<tr>
						<th>House</th>
						<td>R$ ${total_house}</td>
						<td>${percentage_house} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`

document.querySelector<HTMLDivElement>('#INVESTMENTS')!.innerHTML = `
	<div class="card mb-4 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-primary"><i class="bi bi-bar-chart"></i> Investments </h4>
			<span class="my-0 fw-bold text-end text-primary">R$ ${currentInvestments}</span>
		</div>
		<div class="card-body">
			<table class="table table-striped">
				<thead>
					<tr class="bg-info">
						<th scope="col">CATEGORY</th>
						<th scope="col">TOTAL</th>
						<th scope="col">PERCENTAGE</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Fixed Income</th>
						<td>R$ ${investments_fixed_income}</td>
						<td>${percentage_fixed_income} %</td>
					</tr>
					<tr>
						<th>Variable Income</th>
						<td>R$ ${investments_variable_income}</td>
						<td>${percentage_variable_income} %</td>
					</tr>
					<tr>
						<th>Criptocurrencies</th>
						<td>R$ ${investments_criptocurrencies}</td>
						<td>${percentage_criptocurrencies} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`

document.querySelector<HTMLDivElement>('#FILTER')!.innerHTML = `
	<h3 class="mb-3">Filter Transaction</h3>

	<form class="mb-5 d-flex justify-content-between" action="GET" method="/">
		<div class="col-lg-3">
			<label>Category:</label>
			<select class="form-select">
				<option value="ALL" selected>ALL</option>
				<option value="FOOD">Food</option>
				<option value="SUBSCRIPTIONS">Subscriptions</option>
				<option value="SHOP">Shop</option>
				<option value="ENTERTAINMENT">Entertainment</option>
				<option value="TRANSPORT">Transport</option>
				<option value="HOUSE">House</option>
				<option value="INVESTMENTS">Investments</option>
			</select>
		</div>

		<div class="col-lg-3">
			<label>Start Date:</label>
			<input class="form-control" type="date" id="data_inicial" name="data_inicial">
		</div>

		<div class="col-lg-3">
			<label>Final Date:</label>
			<input class="form-control" type="date" id="data_final" name="data_final">
		</div>

		<button type="submit" class="btn btn-outline-primary mb-3">Search</button>
	</form>
`

document.querySelector<HTMLDivElement>('#EXPORT')!.innerHTML = `
	<div class="d-flex justify-content-between mb-3">
		<h3>Export Data</h3>
		<button class="btn btn-outline-warning mb-3" disabled>Export JSON</button>
		<button class="btn btn-outline-warning mb-3" disabled>Export EXCEL</button>
		<button class="btn btn-outline-warning mb-3" disabled>Export CSV</button>
	</div>
`

document.querySelector<HTMLDivElement>('#TRANSACTIONS')!.innerHTML = `
	<h3>Transactions</h3>

	<ul class="list-group list-group-item-action" id="ul_transactions">
		${allTransactions}
	</ul>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

newDeposit(document.querySelector<HTMLButtonElement>('#confirm_deposit')!,
		   document.querySelector<HTMLInputElement>('#total_to_deposit')!,
		   document.querySelector<HTMLInputElement>('#deposit_description')!,
		   document.querySelector<HTMLSelectElement>('#deposit_category')!)

newExpense(document.querySelector<HTMLButtonElement>('#confirm_expense')!,
		   document.querySelector<HTMLInputElement>('#total_to_expense')!,
		   document.querySelector<HTMLInputElement>('#expense_description')!,
		   document.querySelector<HTMLSelectElement>('#expense_category')!)

newInvestment(document.querySelector<HTMLButtonElement>('#confirm_investment')!,
		   document.querySelector<HTMLInputElement>('#total_to_investment')!,
		   document.querySelector<HTMLInputElement>('#investment_description')!,
		   document.querySelector<HTMLSelectElement>('#investment_category')!)


/*document.querySelector<HTMLDivElement>('#app_old')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`*/
