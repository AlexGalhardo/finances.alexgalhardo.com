(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();let p;const f=new Uint8Array(16);function h(){if(!p&&(p=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!p))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(f)}const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function g(e,n=0){return(i[e[n+0]]+i[e[n+1]]+i[e[n+2]]+i[e[n+3]]+"-"+i[e[n+4]]+i[e[n+5]]+"-"+i[e[n+6]]+i[e[n+7]]+"-"+i[e[n+8]]+i[e[n+9]]+"-"+i[e[n+10]]+i[e[n+11]]+i[e[n+12]]+i[e[n+13]]+i[e[n+14]]+i[e[n+15]]).toLowerCase()}const S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_={randomUUID:S};function d(e,n,s){if(_.randomUUID&&!n&&!e)return _.randomUUID();e=e||{};const o=e.random||(e.rng||h)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,n){s=s||0;for(let t=0;t<16;++t)n[s+t]=o[t];return n}return g(o)}let l={account_id:d(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,transactions:[]};localStorage.getItem("finances_account")&&(l=JSON.parse(localStorage.getItem("finances_account")));function r(e){return(e/100).toLocaleString("pt-br",{minimumFractionDigits:2})}function u(e){return e.toFixed(2)}function m(){let e=new Date().toLocaleDateString("pt-BR"),n=new Date().toLocaleTimeString("pt-BR");return`${e} ${n}`}function b(e){return e=e.replace("R$ ",""),e=e.replace(",",""),e=e.replace(".",""),Number(e)}const E=r(l.current_balance),y=r(l.total_expenses),T=r(l.investments_total),I=r(l.investments_fixed_income),x=u(l.investments_total?l.investments_fixed_income/l.investments_total*100:0),N=r(l.investments_variable_income),R=u(l.investments_total?l.investments_variable_income/l.investments_total*100:0),O=r(l.investments_criptocurrencies),$=u(l.investments_total?l.investments_criptocurrencies/l.investments_total*100:0),L=r(l.total_food),w=u(l.total_expenses?l.total_food/l.total_expenses*100:0),A=r(l.total_subscriptions),D=u(l.total_expenses?l.total_subscriptions/l.total_expenses*100:0),P=r(l.total_shop),q=u(l.total_expenses?l.total_shop/l.total_expenses*100:0),M=r(l.total_entertainment),F=u(l.total_expenses?l.total_entertainment/l.total_expenses*100:0),C=r(l.total_transport),U=u(l.total_expenses?l.total_transport/l.total_expenses*100:0),H=r(l.total_house),B=u(l.total_expenses?l.total_house/l.total_expenses*100:0);function V(e,n,s,o){e.addEventListener("click",()=>{if(console.log("totalDeposit => ",n.value),console.log("depositDescription => ",s.value),console.log("depositCategory => ",o.value),n.value&&s.value&&o.value){let t=JSON.parse(localStorage.getItem("finances_account"));const a=b(n.value);if(a<=0&&alert("Enter a valid deposit value greater than 0!"),a>0)if(t){t.current_balance+=a,t.transactions.push({id:d(),created_at:m(),updated_at:null,type:"DEPOSIT",category:o.value,description:s.value,total:a});let c=JSON.stringify(t);localStorage.setItem("finances_account",c)}else{t={account_id:d(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,transactions:[{id:d(),created_at:m(),updated_at:null,type:"DEPOSIT",category:o.value,description:s.value,total:a}]},t.current_balance+=a;let c=JSON.stringify(t);localStorage.setItem("finances_account",c)}}})}function k(){if(localStorage.getItem("finances_account")){let e=JSON.parse(localStorage.getItem("finances_account"));if(e.transactions.reverse(),console.log(e.transactions),!e.transactions)return"No transactions available";let n="";for(let s=0;s<e.transactions.length;s++){let o=e.transactions[s].type==="DEPOSIT"?"text-success":e.transactions[s].type==="EXPENSE"?"text-danger":"text-primary";n+=`
				<li class="list-group-item list-group-item-action d-flex justify-content-between">
					<div class="me-auto">
						<h5 class="fw-bold ${o}">${e.transactions[s].description}</h5>
						<small>${e.transactions[s].created_at}</small>
						<br>
						<small>${e.transactions[s].category}</small>
					</div>
					<div class="ms-auto">
						<h5 class="fw-bold ${o}">+ R$ ${r(e.transactions[s].total)}</h5>
							<button class="btn btn-sm btn-outline-secondary" disabled><i class="bi bi-pencil-square"></i> Editar</button>
							<button class="btn btn-sm btn-outline-danger" disabled><i class="bi bi-trash"></i> Excluir</button>
					</div>
				</li>
			`}return n}else return"No transactions available"}const J=k();function G(e,n,s,o){e.addEventListener("click",()=>{if(console.log("totalInvestment => ",n.value),console.log("investmentDescription => ",s.value),console.log("investmentCategory => ",o.value),n.value&&s.value&&o.value){let t=JSON.parse(localStorage.getItem("finances_account"));const a=b(n.value);if(a<=0&&alert("Enter a valid investment value greater than 0!"),a>0)if(t)if(a<=t.current_balance){t.current_balance-=a,t.investments_total+=a,o.value==="FIXED_INCOME"&&(t.investments_fixed_income+=a),o.value==="VARIABLE_INCOME"&&(t.investments_variable_income+=a),o.value==="CRIPTOCURRENCIES"&&(t.investments_criptocurrencies+=a),t.transactions.push({id:d(),created_at:m(),updated_at:null,type:"INVESTMENT",category:o.value,description:s.value,total:a});let c=JSON.stringify(t);localStorage.setItem("finances_account",c)}else alert("You dont have sufficient balance to make this investment!");else{t={account_id:d(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,transactions:[{id:d(),created_at:m(),updated_at:null,type:"INVESTMENT",category:o.value,description:s.value,total:a}]},t.current_balance-=a,t.investments_total+=a,o.value==="FIXED_INCOME"&&(t.investments_fixed_income+=a),o.value==="VARIABLE_INCOME"&&(t.investments_variable_income+=a),o.value==="CRIPTOCURRENCIES"&&(t.investments_criptocurrencies+=a);let c=JSON.stringify(t);localStorage.setItem("finances_account",c)}}})}function X(e,n,s,o){e.addEventListener("click",()=>{if(console.log("totalExpense => ",n.value),console.log("expenseDescription => ",s.value),console.log("expenseCategory => ",o.value),n.value&&s.value&&o.value){let t=JSON.parse(localStorage.getItem("finances_account"));const a=b(n.value);if(a<=0&&alert("Enter a valid expense value greater than 0!"),a>0)if(t)if(a<=t.current_balance){t.current_balance-=a,t.total_expenses+=a,o.value==="FOOD"&&(t.total_food+=a),o.value==="SUBSCRIPTION"&&(t.total_subscriptions+=a),o.value==="SHOP"&&(t.total_shop+=a),o.value==="ENTERTAINMENT"&&(t.total_entertainment+=a),o.value==="TRANSPORT"&&(t.total_transport+=a),o.value==="HOUSE"&&(t.total_house+=a),t.transactions.push({id:d(),created_at:m(),updated_at:null,type:"EXPENSE",category:o.value,description:s.value,total:a});let c=JSON.stringify(t);localStorage.setItem("finances_account",c)}else alert("You dont have sufficient balance to make this expense!");else{t={account_id:d(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,transactions:[{id:d(),created_at:m(),updated_at:null,type:"EXPENSE",category:o.value,description:s.value,total:a}]},t.current_balance-=a,t.total_expenses+=a,o.value==="FOOD"&&(t.total_food+=a),o.value==="SUBSCRIPTION"&&(t.total_subscriptions+=a),o.value==="SHOP"&&(t.total_shop+=a),o.value==="ENTERTAINMENT"&&(t.total_entertainment+=a),o.value==="TRANSPORT"&&(t.total_transport+=a),o.value==="HOUSE"&&(t.total_house+=a);let c=JSON.stringify(t);localStorage.setItem("finances_account",c)}}})}document.querySelector("#navbar").innerHTML=`
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
			<h5 class="fw-bold text-success">R$ ${E}</h5>
		</div>
	</div>
`;document.querySelector("#EXPENSES").innerHTML=`
	<div class="card mb-4 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-danger"><i class="bi bi-cash-stack"></i> Expenses </h4>
			<p class="my-0 fw-bold text-end text-danger">R$ ${y}</p>
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
						<td>R$ ${L}</td>
						<td>${w} %</td>
					</tr>
					<tr>
						<th>Subscriptions</th>
						<td>R$ ${A}</td>
						<td>${D} %</td>
					</tr>
					<tr>
						<th>Shop</th>
						<td>R$ ${P}</td>
						<td>${q} %</td>
					</tr>
					<tr>
						<th>Hobbies & Entertainment</th>
						<td>R$ ${M}</td>
						<td>${F} %</td>
					</tr>
					<tr>
						<th>Transport</th>
						<td>R$ ${C}</td>
						<td>${U} %</td>
					</tr>
					<tr>
						<th>House</th>
						<td>R$ ${H}</td>
						<td>${B} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`;document.querySelector("#INVESTMENTS").innerHTML=`
	<div class="card mb-4 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-primary"><i class="bi bi-bar-chart"></i> Investments </h4>
			<span class="my-0 fw-bold text-end text-primary">R$ ${T}</span>
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
						<td>R$ ${I}</td>
						<td>${x} %</td>
					</tr>
					<tr>
						<th>Variable Income</th>
						<td>R$ ${N}</td>
						<td>${R} %</td>
					</tr>
					<tr>
						<th>Criptocurrencies</th>
						<td>R$ ${O}</td>
						<td>${$} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`;document.querySelector("#FILTER").innerHTML=`
	<h3 class="mb-3">Filter Transaction</h3>

	<form class="mb-5 d-flex justify-content-between" action="GET" method="/">
		<div class="col-lg-3">
			<label>Category:</label>
			<select class="form-select" id="category" name="category">
				<option value="ALL" selected>ALL</option>
				<option value="FOOD">FOOD</option>
				<option value="SUBSCRIPTIONS">SUBSCRIPTIONS</option>
				<option value="SHOP">SHOP</option>
				<option value="ENTERTAINMENT">ENTERTAINMENT</option>
				<option value="TRANSPORT">TRANSPORT</option>
				<option value="HOUSE">HOUSE</option>
				<option value="INVESTMENTS">INVESTMENTS</option>
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
`;document.querySelector("#EXPORT").innerHTML=`
	<div class="d-flex justify-content-between mb-3">
		<h3>Export Data</h3>
		<button class="btn btn-outline-warning mb-3" disabled>Export JSON</button>
		<button class="btn btn-outline-warning mb-3" disabled>Export EXCEL</button>
		<button class="btn btn-outline-warning mb-3" disabled>Export CSV</button>
	</div>
`;document.querySelector("#TRANSACTIONS").innerHTML=`
	<h3>Transactions</h3>
	<ul class="list-group list-group-item-action" id="ul_transactions">
		${J}
	</ul>
`;V(document.querySelector("#confirm_deposit"),document.querySelector("#total_to_deposit"),document.querySelector("#deposit_description"),document.querySelector("#deposit_category"));X(document.querySelector("#confirm_expense"),document.querySelector("#total_to_expense"),document.querySelector("#expense_description"),document.querySelector("#expense_category"));G(document.querySelector("#confirm_investment"),document.querySelector("#total_to_investment"),document.querySelector("#investment_description"),document.querySelector("#investment_category"));document.getElementById("total_to_deposit").addEventListener("keyup",v);document.getElementById("total_to_expense").addEventListener("keyup",v);document.getElementById("total_to_investment").addEventListener("keyup",v);function v(e){let n=e.target.value.replace(/\D/g,"");n=(n/100).toFixed(2)+"",n=n.replace(".",","),n=n.replace(/(\d)(\d{3})(\d{3}),/g,"$1.$2.$3,"),n=n.replace(/(\d)(\d{3}),/g,"$1.$2,"),e.target.value=`R$ ${n}`}
