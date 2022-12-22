(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();let _;const I=new Uint8Array(16);function T(){if(!_&&(_=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!_))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return _(I)}const c=[];for(let a=0;a<256;++a)c.push((a+256).toString(16).slice(1));function N(a,n=0){return(c[a[n+0]]+c[a[n+1]]+c[a[n+2]]+c[a[n+3]]+"-"+c[a[n+4]]+c[a[n+5]]+"-"+c[a[n+6]]+c[a[n+7]]+"-"+c[a[n+8]]+c[a[n+9]]+"-"+c[a[n+10]]+c[a[n+11]]+c[a[n+12]]+c[a[n+13]]+c[a[n+14]]+c[a[n+15]]).toLowerCase()}const x=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),g={randomUUID:x};function u(a,n,i){if(g.randomUUID&&!n&&!a)return g.randomUUID();a=a||{};const o=a.random||(a.rng||T)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,n){i=i||0;for(let t=0;t<16;++t)n[i+t]=o[t];return n}return N(o)}let s={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,transactions:[]};localStorage.getItem("finances_account")&&(s=JSON.parse(localStorage.getItem("finances_account")));function r(a){return(a/100).toLocaleString("pt-br",{minimumFractionDigits:2})}function b(a){return a.toFixed(2)}function p(){let a=new Date().toLocaleDateString("pt-BR"),n=new Date().toLocaleTimeString("pt-BR");return`${a} ${n}`}function v(a){return a=a.replace("R$ ",""),a=a.replace(",",""),a=a.replace(".",""),Number(a)}function S(a){switch(a){case"WAGE":return'<i class="bi bi-building-fill-add"></i>';case"FREELANCER":return'<i class="bi bi-file-earmark-medical"></i>';case"FOOD":return'<i class="bi bi-apple"></i>';case"SUBSCRIPTION":return'<i class="bi bi-bookmark-star"></i>';case"SHOP":return'<i class="bi bi-shop"></i>';case"ENTERTAINMENT":return'<i class="bi bi-controller"></i>';case"TRANSPORT":return'<i class="bi bi-car-front-fill"></i>';case"HOUSE":return'<i class="bi bi-house-door"></i>';case"FIXED_INCOME":return'<i class="bi bi-graph-up-arrow"></i>';case"VARIABLE_INCOME":return'<i class="bi bi-graph-down-arrow"></i>';case"CRIPTOCURRENCIES":return'<i class="bi bi-currency-bitcoin"></i>';default:return""}}const R=r(s.current_balance),O=r(s.total_expenses),$=r(s.investments_total),L=r(s.investments_fixed_income),A=b(s.investments_total?s.investments_fixed_income/s.investments_total*100:0),w=r(s.investments_variable_income),C=b(s.investments_total?s.investments_variable_income/s.investments_total*100:0),D=r(s.investments_criptocurrencies),P=b(s.investments_total?s.investments_criptocurrencies/s.investments_total*100:0),q=r(s.total_food),F=b(s.total_expenses?s.total_food/s.total_expenses*100:0),M=r(s.total_subscriptions),U=b(s.total_expenses?s.total_subscriptions/s.total_expenses*100:0),k=r(s.total_shop),H=b(s.total_expenses?s.total_shop/s.total_expenses*100:0),B=r(s.total_entertainment),V=b(s.total_expenses?s.total_entertainment/s.total_expenses*100:0),G=r(s.total_transport),J=b(s.total_expenses?s.total_transport/s.total_expenses*100:0),X=r(s.total_house),j=b(s.total_expenses?s.total_house/s.total_expenses*100:0);function W(a,n,i,o){a.addEventListener("click",()=>{if(console.log("totalDeposit => ",n.value),console.log("depositDescription => ",i.value),console.log("depositCategory => ",o.value),n.value&&i.value&&o.value){let t=JSON.parse(localStorage.getItem("finances_account"));const e=v(n.value);if(e<=0&&alert("Enter a valid deposit value greater than 0!"),e>0)if(t){t.current_balance+=e,t.transactions.push({id:u(),created_at:p(),updated_at:null,type:"DEPOSIT",category:o.value,description:i.value,total:e});let l=JSON.stringify(t);localStorage.setItem("finances_account",l)}else{t={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,transactions:[{id:u(),created_at:p(),updated_at:null,type:"DEPOSIT",category:o.value,description:i.value,total:e}]},t.current_balance+=e;let l=JSON.stringify(t);localStorage.setItem("finances_account",l)}}})}function z(){if(localStorage.getItem("finances_account")){let a=JSON.parse(localStorage.getItem("finances_account"));if(a.transactions.reverse(),console.log(a.transactions),!a.transactions)return"No transactions available";let n="";for(let i=0;i<a.transactions.length;i++){let o=a.transactions[i].type==="DEPOSIT"?"text-success":a.transactions[i].type==="EXPENSE"?"text-danger":"text-primary";n+=`
				<li class="list-group-item list-group-item-action d-flex justify-content-between">
					<div class="me-auto">
						<h5 class="fw-bold ${o}">${S(a.transactions[i].category)}   ${a.transactions[i].description}</h5>
						<small>${a.transactions[i].created_at}</small>
					</div>
					<div class="ms-auto">
						<h5 class="fw-bold ${o}">+ R$ ${r(a.transactions[i].total)}</h5>
							<button class="btn btn-sm btn-outline-secondary" disabled><i class="bi bi-pencil-square"></i> Editar</button>
							<button class="btn btn-sm btn-outline-danger" disabled><i class="bi bi-trash"></i> Excluir</button>
					</div>
				</li>
			`}return n}else return"No transactions available"}const Y=z();function K(a,n,i,o){a.addEventListener("click",()=>{if(console.log("totalInvestment => ",n.value),console.log("investmentDescription => ",i.value),console.log("investmentCategory => ",o.value),n.value&&i.value&&o.value){let t=JSON.parse(localStorage.getItem("finances_account"));const e=v(n.value);if(e<=0&&alert("Enter a valid investment value greater than 0!"),e>0)if(t)if(e<=t.current_balance){t.current_balance-=e,t.investments_total+=e,o.value==="FIXED_INCOME"&&(t.investments_fixed_income+=e),o.value==="VARIABLE_INCOME"&&(t.investments_variable_income+=e),o.value==="CRIPTOCURRENCIES"&&(t.investments_criptocurrencies+=e),t.transactions.push({id:u(),created_at:p(),updated_at:null,type:"INVESTMENT",category:o.value,description:i.value,total:e});let l=JSON.stringify(t);localStorage.setItem("finances_account",l)}else alert("You dont have sufficient balance to make this investment!");else{t={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,transactions:[{id:u(),created_at:p(),updated_at:null,type:"INVESTMENT",category:o.value,description:i.value,total:e}]},t.current_balance-=e,t.investments_total+=e,o.value==="FIXED_INCOME"&&(t.investments_fixed_income+=e),o.value==="VARIABLE_INCOME"&&(t.investments_variable_income+=e),o.value==="CRIPTOCURRENCIES"&&(t.investments_criptocurrencies+=e);let l=JSON.stringify(t);localStorage.setItem("finances_account",l)}}})}function Q(a,n,i,o){a.addEventListener("click",()=>{if(console.log("totalExpense => ",n.value),console.log("expenseDescription => ",i.value),console.log("expenseCategory => ",o.value),n.value&&i.value&&o.value){let t=JSON.parse(localStorage.getItem("finances_account"));const e=v(n.value);if(e<=0&&alert("Enter a valid expense value greater than 0!"),e>0)if(t)if(e<=t.current_balance){t.current_balance-=e,t.total_expenses+=e,o.value==="FOOD"&&(t.total_food+=e),o.value==="SUBSCRIPTION"&&(t.total_subscriptions+=e),o.value==="SHOP"&&(t.total_shop+=e),o.value==="ENTERTAINMENT"&&(t.total_entertainment+=e),o.value==="TRANSPORT"&&(t.total_transport+=e),o.value==="HOUSE"&&(t.total_house+=e),t.transactions.push({id:u(),created_at:p(),updated_at:null,type:"EXPENSE",category:o.value,description:i.value,total:e});let l=JSON.stringify(t);localStorage.setItem("finances_account",l)}else alert("You dont have sufficient balance to make this expense!");else{t={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,transactions:[{id:u(),created_at:p(),updated_at:null,type:"EXPENSE",category:o.value,description:i.value,total:e}]},t.current_balance-=e,t.total_expenses+=e,o.value==="FOOD"&&(t.total_food+=e),o.value==="SUBSCRIPTION"&&(t.total_subscriptions+=e),o.value==="SHOP"&&(t.total_shop+=e),o.value==="ENTERTAINMENT"&&(t.total_entertainment+=e),o.value==="TRANSPORT"&&(t.total_transport+=e),o.value==="HOUSE"&&(t.total_house+=e);let l=JSON.stringify(t);localStorage.setItem("finances_account",l)}}})}function Z(a,n,i,o){a.addEventListener("click",t=>{if(t.preventDefault(),localStorage.getItem("finances_account")){let e=JSON.parse(localStorage.getItem("finances_account"));if(e.transactions.reverse(),!e.transactions)return"No transactions available";let l="";for(let d=0;d<e.transactions.length;d++){let m=e.transactions[d].created_at.slice(0,10),y=`${m[3]}${m[4]}/${m[0]}${m[1]}/${m[6]}${m[7]}${m[8]}${m[9]}`,h=new Date(y).getTime();if(n.value==="ALL"||e.transactions[d].category===n.value&&h>=new Date(i.value).getTime()&&h<=new Date(o.value).getTime()){let E=e.transactions[d].type==="DEPOSIT"?"text-success":e.transactions[d].type==="EXPENSE"?"text-danger":"text-primary";l+=`
						<li class="list-group-item list-group-item-action d-flex justify-content-between">
							<div class="me-auto">
								<h5 class="fw-bold ${E}">${S(e.transactions[d].category)}   ${e.transactions[d].description}</h5>
								<small>${e.transactions[d].created_at}</small>
							</div>
							<div class="ms-auto">
								<h5 class="fw-bold ${E}">+ R$ ${r(e.transactions[d].total)}</h5>
									<button class="btn btn-sm btn-outline-secondary" disabled><i class="bi bi-pencil-square"></i> Editar</button>
									<button class="btn btn-sm btn-outline-danger" disabled><i class="bi bi-trash"></i> Excluir</button>
							</div>
						</li>
					`}}document.querySelector("#ul_transactions").innerHTML=l}else document.querySelector("#ul_transactions").innerHTML="No transactions available for this search!"})}document.querySelector("#navbar").innerHTML=`
  <div class="fixed-top shadow-sm bg-light mb-5">
		<nav class="container pt-2 pb-2 col-lg-12 navbar navbar-expand-lg fixed navbar-dark bg-light text-bold">
			<div class="container-fluid">
				<h3><a class="fw-bold text-dark text-decoration-none" href="/"><i class="bi bi-bank"></i> Galhardo Finances</a></h3>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
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
					</ul>
				</div>
			</div>
		</nav>
	</div>
`;document.querySelector("#modais").innerHTML=`
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
							<option value="WAGE" selected>WAGE</option>
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
						</select>

						<br>
						<button class="btn btn-outline-primary" id="confirm_investment" type="submit">Confirm Investment</button>
					</form>
				</div>
			</div>
		</div>
	</div>
`;document.querySelector("#BALANCE").innerHTML=`
	<div class="card mb-4 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-success"><i class="bi bi-cash"></i> Current Balance</h4>
			<h5 class="fw-bold text-success">R$ ${R}</h5>
		</div>
	</div>
`;document.querySelector("#EXPENSES").innerHTML=`
	<div class="card mb-4 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-danger"><i class="bi bi-cash-stack"></i> Expenses </h4>
			<p class="my-0 fw-bold text-end text-danger">R$ ${O}</p>
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
						<th><i class="bi bi-apple"></i> Food</th>
						<td>R$ ${q}</td>
						<td>${F} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-bookmark-star"></i> Subscriptions</th>
						<td>R$ ${M}</td>
						<td>${U} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-shop"></i> Shop</th>
						<td>R$ ${k}</td>
						<td>${H} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-controller"></i> Hobbies & Entertainment</th>
						<td>R$ ${B}</td>
						<td>${V} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-car-front-fill"></i> Transport</th>
						<td>R$ ${G}</td>
						<td>${J} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-house-door"></i> House</th>
						<td>R$ ${X}</td>
						<td>${j} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`;document.querySelector("#INVESTMENTS").innerHTML=`
	<div class="card mb-4 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-primary"><i class="bi bi-bar-chart"></i> Investments </h4>
			<span class="my-0 fw-bold text-end text-primary">R$ ${$}</span>
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
						<th><i class="bi bi-graph-up-arrow"></i> Fixed Income</th>
						<td>R$ ${L}</td>
						<td>${A} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-graph-down-arrow"></i> Variable Income</th>
						<td>R$ ${w}</td>
						<td>${C} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-currency-bitcoin"></i> Criptocurrencies</th>
						<td>R$ ${D}</td>
						<td>${P} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`;document.querySelector("#FILTER").innerHTML=`
	<h3 class="mb-3">Filter Transaction</h3>

	<form class="mb-3 d-flex justify-content-between" action="#" id="form_search_transactions">
		<div class="col-lg-3">
			<label>Category:</label>
			<select class="form-select" id="search_transaction_category" name="search_transaction_category" required>
				<option value="ALL" selected>ALL</option>
				<option value="WAGE">WAGE</option>
				<option value="FREELANCER">FREELANCER</option>
				<option value="FOOD">FOOD</option>
				<option value="SUBSCRIPTION">SUBSCRIPTION</option>
				<option value="SHOP">SHOP</option>
				<option value="ENTERTAINMENT">ENTERTAINMENT</option>
				<option value="TRANSPORT">TRANSPORT</option>
				<option value="HOUSE">HOUSE</option>
				<option value="FIXED_INCOME">FIXED INCOME</option>
				<option value="VARIABLE_INCOME">VARIABLE INCOME</option>
				<option value="CRIPTOCURRENCIES">CRIPTOCURRENCIES</option>
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
`;document.querySelector("#EXPORT").innerHTML=`
	<div class="d-flex justify-content-between mb-5">
		<h3>Export Data</h3>
		<button class="btn btn-outline-dark mb-3" disabled><i class="bi bi-filetype-json"></i> Export JSON</button>
		<button class="btn btn-outline-dark mb-3" disabled><i class="bi bi-filetype-xlsx"></i> Export EXCEL</button>
		<button class="btn btn-outline-dark mb-3" disabled><i class="bi bi-filetype-csv"></i> Export CSV</button>
	</div>
`;document.querySelector("#TRANSACTIONS").innerHTML=`
	<h3><i class="bi bi-receipt-cutoff"></i> Transactions</h3>
	<ul class="list-group list-group-item-action" id="ul_transactions">
		${Y}
	</ul>
`;W(document.querySelector("#confirm_deposit"),document.querySelector("#total_to_deposit"),document.querySelector("#deposit_description"),document.querySelector("#deposit_category"));Q(document.querySelector("#confirm_expense"),document.querySelector("#total_to_expense"),document.querySelector("#expense_description"),document.querySelector("#expense_category"));K(document.querySelector("#confirm_investment"),document.querySelector("#total_to_investment"),document.querySelector("#investment_description"),document.querySelector("#investment_category"));Z(document.querySelector("#button_search_transactions"),document.querySelector("#search_transaction_category"),document.querySelector("#search_transaction_start_date"),document.querySelector("#search_transaction_final_date"));document.getElementById("total_to_deposit").addEventListener("keyup",f);document.getElementById("total_to_expense").addEventListener("keyup",f);document.getElementById("total_to_investment").addEventListener("keyup",f);function f(a){let n=a.target.value.replace(/\D/g,"");n=(n/100).toFixed(2)+"",n=n.replace(".",","),n=n.replace(/(\d)(\d{3})(\d{3}),/g,"$1.$2.$3,"),n=n.replace(/(\d)(\d{3}),/g,"$1.$2,"),a.target.value=`R$ ${n}`}
