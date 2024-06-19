(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();var r=[];for(var f=0;f<256;++f)r.push((f+256).toString(16).slice(1));function N(t,n=0){return(r[t[n+0]]+r[t[n+1]]+r[t[n+2]]+r[t[n+3]]+"-"+r[t[n+4]]+r[t[n+5]]+"-"+r[t[n+6]]+r[t[n+7]]+"-"+r[t[n+8]]+r[t[n+9]]+"-"+r[t[n+10]]+r[t[n+11]]+r[t[n+12]]+r[t[n+13]]+r[t[n+14]]+r[t[n+15]]).toLowerCase()}var v,R=new Uint8Array(16);function O(){if(!v&&(v=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!v))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(R)}var w=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const h={randomUUID:w};function u(t,n,i){if(h.randomUUID&&!n&&!t)return h.randomUUID();t=t||{};var o=t.random||(t.rng||O)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,N(o)}let e={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,total_services:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,investments_others:0,transactions:[]};if(localStorage.getItem("galhardo_finances")){e=JSON.parse(localStorage.getItem("galhardo_finances")),e.current_balance=0,e.total_expenses=0,e.total_food=0,e.total_subscriptions=0,e.total_shop=0,e.total_entertainment=0,e.total_transport=0,e.total_house=0,e.total_services=0,e.investments_total=0,e.investments_fixed_income=0,e.investments_variable_income=0,e.investments_criptocurrencies=0,e.investments_others=0;for(let t=0;t<e.transactions.length;t++)e.transactions[t].type==="DEPOSIT"?e.current_balance+=e.transactions[t].amount:e.transactions[t].type==="EXPENSE"?(e.total_expenses+=e.transactions[t].amount,e.current_balance-=e.transactions[t].amount,e.transactions[t].category==="FOOD"&&(e.total_food+=e.transactions[t].amount),e.transactions[t].category==="SUBSCRIPTIONS"&&(e.total_subscriptions+=e.transactions[t].amount),e.transactions[t].category==="SHOP"&&(e.total_shop+=e.transactions[t].amount),e.transactions[t].category==="ENTERTAINMENT"&&(e.total_entertainment+=e.transactions[t].amount),e.transactions[t].category==="TRANSPORT"&&(e.total_transport+=e.transactions[t].amount),e.transactions[t].category==="HOUSE"&&(e.total_house+=e.transactions[t].amount),e.transactions[t].category==="SERVICES"&&(e.total_services+=e.transactions[t].amount)):e.transactions[t].type==="INVESTMENT"&&(e.investments_total+=e.transactions[t].amount,e.current_balance-=e.transactions[t].amount,e.transactions[t].category==="FIXED_INCOME"&&(e.investments_fixed_income+=e.transactions[t].amount),e.transactions[t].category==="VARIABLE_INCOME"&&(e.investments_variable_income+=e.transactions[t].amount),e.transactions[t].category==="CRIPTOCURRENCIES"&&(e.investments_criptocurrencies+=e.transactions[t].amount),e.transactions[t].category==="OTHERS"&&(e.investments_others+=e.transactions[t].amount));localStorage.setItem("galhardo_finances",JSON.stringify(e))}function c(t){return(t/100).toLocaleString("pt-br",{minimumFractionDigits:2})}function d(t){return t.toFixed(2)}function p(){let t=new Date().toLocaleDateString("pt-BR"),n=new Date().toLocaleTimeString("pt-BR");return`${t} ${n}`}function g(t){return t=t.replace("R$ ",""),t=t.replace(",",""),t=t.replace(".",""),Number(t)}function y(t){switch(t){case"SALARY":return'<i class="bi bi-building-fill-add"></i>';case"FREELANCER":return'<i class="bi bi-file-earmark-medical"></i>';case"FOOD":return'<i class="bi bi-apple"></i>';case"SUBSCRIPTIONS":return'<i class="bi bi-bookmark-star"></i>';case"SHOP":return'<i class="bi bi-shop"></i>';case"ENTERTAINMENT":return'<i class="bi bi-controller"></i>';case"TRANSPORT":return'<i class="bi bi-car-front-fill"></i>';case"HOUSE":return'<i class="bi bi-house-door"></i>';case"SERVICES":return'<i class="bi bi-tools"></i>';case"FIXED_INCOME":return'<i class="bi bi-graph-up-arrow"></i>';case"VARIABLE_INCOME":return'<i class="bi bi-graph-down-arrow"></i>';case"CRIPTOCURRENCIES":return'<i class="bi bi-currency-bitcoin"></i>';case"OTHERS":return'<i class="bi bi-gem"></i>';default:return""}}const $=c(e.current_balance),A=c(e.total_expenses),L=c(e.investments_total),P=c(e.investments_fixed_income),C=d(e.investments_total?e.investments_fixed_income/e.investments_total*100:0),D=c(e.investments_variable_income),M=d(e.investments_total?e.investments_variable_income/e.investments_total*100:0),F=c(e.investments_criptocurrencies),q=d(e.investments_total?e.investments_criptocurrencies/e.investments_total*100:0),H=c(e.investments_others),U=d(e.investments_total?e.investments_others/e.investments_total*100:0),V=c(e.total_food),k=d(e.total_expenses?e.total_food/e.total_expenses*100:0),B=c(e.total_subscriptions),j=d(e.total_expenses?e.total_subscriptions/e.total_expenses*100:0),J=c(e.total_shop),X=d(e.total_expenses?e.total_shop/e.total_expenses*100:0),G=c(e.total_entertainment),Y=d(e.total_expenses?e.total_entertainment/e.total_expenses*100:0),z=c(e.total_transport),K=d(e.total_expenses?e.total_transport/e.total_expenses*100:0),Q=c(e.total_house),W=d(e.total_expenses?e.total_house/e.total_expenses*100:0),Z=c(e.total_services),tt=d(e.total_expenses?e.total_services/e.total_expenses*100:0);function et(t,n,i,o){t.addEventListener("click",()=>{if(n.value&&i.value&&o.value){let s=JSON.parse(localStorage.getItem("galhardo_finances"));const a=g(n.value);a<=0&&alert("Enter a valid deposit value greater than 0!"),a>0&&(s?(s.current_balance+=a,s.transactions.push({id:u(),created_at:p(),updated_at:null,type:"DEPOSIT",category:o.value,description:i.value,amount:a}),localStorage.setItem("galhardo_finances",JSON.stringify(s))):(s={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,total_services:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,investments_others:0,transactions:[{id:u(),created_at:p(),updated_at:null,type:"DEPOSIT",category:o.value,description:i.value,amount:a}]},s.current_balance+=a,localStorage.setItem("galhardo_finances",JSON.stringify(s))))}})}function at(){if(localStorage.getItem("galhardo_finances")){let t=JSON.parse(localStorage.getItem("galhardo_finances"));if(t.transactions.reverse(),!t.transactions)return"No transactions available";let n="";for(let i=0;i<t.transactions.length;i++){let o=t.transactions[i].type==="DEPOSIT"?"text-success":t.transactions[i].type==="EXPENSE"?"text-danger":"text-primary",s=t.transactions[i].type==="DEPOSIT"?"+":t.transactions[i].type==="EXPENSE"?"-":"";n+=`
				<li class="list-group-item list-group-item-action d-flex justify-content-between">
					<div class="me-auto">
						<h5 class="fw-bold ${o}">${y(t.transactions[i].category)}   ${t.transactions[i].description}</h5>
						<small>${t.transactions[i].created_at}</small>
					</div>
					<div class="ms-auto">
						<h5 class="fw-bold ${o}">${s} R$ ${c(t.transactions[i].amount)}</h5>
							<form class="d-flex justify-content-end">
								<button type="submit" class="btn btn-sm btn-outline-danger button_delete_transaction" id="${t.transactions[i].id}"><i class="bi bi-trash"></i> Delete</button>
							</form>
					</div>
				</li>
			`}return n}else return"No transactions available"}const st=at();function nt(t,n,i,o){t.addEventListener("click",()=>{if(n.value&&i.value&&o.value){let s=JSON.parse(localStorage.getItem("galhardo_finances"));const a=g(n.value);a<=0&&alert("Enter a valid investment value greater than 0!"),a>0&&(s?a<=s.current_balance?(s.current_balance-=a,s.investments_total+=a,o.value==="FIXED_INCOME"&&(s.investments_fixed_income+=a),o.value==="VARIABLE_INCOME"&&(s.investments_variable_income+=a),o.value==="CRIPTOCURRENCIES"&&(s.investments_criptocurrencies+=a),o.value==="OTHERS"&&(s.investments_others+=a),s.transactions.push({id:u(),created_at:p(),updated_at:null,type:"INVESTMENT",category:o.value,description:i.value,amount:a}),localStorage.setItem("galhardo_finances",JSON.stringify(s))):alert("You dont have sufficient balance to make this investment!"):(s={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,total_services:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,investments_others:0,transactions:[{id:u(),created_at:p(),updated_at:null,type:"INVESTMENT",category:o.value,description:i.value,amount:a}]},s.current_balance-=a,s.investments_total+=a,o.value==="FIXED_INCOME"&&(s.investments_fixed_income+=a),o.value==="VARIABLE_INCOME"&&(s.investments_variable_income+=a),o.value==="CRIPTOCURRENCIES"&&(s.investments_criptocurrencies+=a),o.value==="OTHERS"&&(s.investments_others+=a),localStorage.setItem("galhardo_finances",JSON.stringify(s))))}})}function ot(t,n,i,o){t.addEventListener("click",()=>{if(n.value&&i.value&&o.value){let s=JSON.parse(localStorage.getItem("galhardo_finances"));const a=g(n.value);a<=0&&alert("Enter a valid expense value greater than 0!"),a>0&&(s?a<=s.current_balance?(s.current_balance-=a,s.total_expenses+=a,o.value==="FOOD"&&(s.total_food+=a),o.value==="SUBSCRIPTIONS"&&(s.total_subscriptions+=a),o.value==="SHOP"&&(s.total_shop+=a),o.value==="ENTERTAINMENT"&&(s.total_entertainment+=a),o.value==="TRANSPORT"&&(s.total_transport+=a),o.value==="HOUSE"&&(s.total_house+=a),o.value==="SERVICES"&&(s.total_services+=a),s.transactions.push({id:u(),created_at:p(),updated_at:null,type:"EXPENSE",category:o.value,description:i.value,amount:a}),localStorage.setItem("galhardo_finances",JSON.stringify(s))):alert("You dont have sufficient balance to make this expense!"):(s={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,total_services:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,investments_others:0,transactions:[{id:u(),created_at:p(),updated_at:null,type:"EXPENSE",category:o.value,description:i.value,amount:a}]},s.current_balance-=a,s.total_expenses+=a,o.value==="FOOD"&&(s.total_food+=a),o.value==="SUBSCRIPTIONS"&&(s.total_subscriptions+=a),o.value==="SHOP"&&(s.total_shop+=a),o.value==="ENTERTAINMENT"&&(s.total_entertainment+=a),o.value==="TRANSPORT"&&(s.total_transport+=a),o.value==="HOUSE"&&(s.total_house+=a),o.value==="SERVICES"&&(s.total_services+=a),localStorage.setItem("galhardo_finances",JSON.stringify(s))))}})}function I(t){for(let n=0;n<t.length;n++)t[n].addEventListener("click",i=>{if(confirm("Are you sure you want to delete this transaction?")){const o=i==null?void 0:i.srcElement.id;let s=JSON.parse(localStorage.getItem("galhardo_finances"));for(let a=0;a<s.transactions.length;a++)if(s.transactions[a].id===o){s.transactions.splice(a,1),localStorage.setItem("galhardo_finances",JSON.stringify(s));break}}})}function it(t,n,i,o){t.addEventListener("click",s=>{if(s.preventDefault(),localStorage.getItem("galhardo_finances"))if(i.value&&o.value){let a=JSON.parse(localStorage.getItem("galhardo_finances"));if(a.transactions.reverse(),!a.transactions)return"No transactions available";let m="";for(let l=0;l<a.transactions.length;l++){let b=a.transactions[l].created_at.slice(0,10),T=`${b[3]}${b[4]}/${b[0]}${b[1]}/${b[6]}${b[7]}${b[8]}${b[9]}`,_=new Date(T).getTime();if(n.value==="ALL"&&_>=new Date(i.value).getTime()&&_<=new Date(o.value).getTime()||a.transactions[l].category===n.value&&_>=new Date(i.value).getTime()&&_<=new Date(o.value).getTime()){let S=a.transactions[l].type==="DEPOSIT"?"text-success":a.transactions[l].type==="EXPENSE"?"text-danger":"text-primary",x=a.transactions[l].type==="DEPOSIT"?"+":a.transactions[l].type==="EXPENSE"?"-":"";m+=`
							<li class="list-group-item list-group-item-action d-flex justify-content-between">
								<div class="me-auto">
									<h5 class="fw-bold ${S}">${y(a.transactions[l].category)}   ${a.transactions[l].description}</h5>
									<small>${a.transactions[l].created_at}</small>
								</div>
								<div class="ms-auto">
									<h5 class="fw-bold ${S}">${x} R$ ${c(a.transactions[l].amount)}</h5>
										<form class="d-flex justify-content-end">
											<button type="submit" class="btn btn-sm btn-outline-danger button_delete_transaction" id="${a.transactions[l].id}"><i class="bi bi-trash"></i> Delete</button>
										</form>
								</div>
							</li>
						`}}document.querySelector("#ul_transactions").innerHTML=m,I(document.querySelectorAll(".button_delete_transaction"))}else alert("Please select a start date and final date to filter transactions");else document.querySelector("#ul_transactions").innerHTML="There's no transactions available"})}function lt(t){t.addEventListener("click",()=>{if(localStorage.getItem("galhardo_finances")){let n=localStorage.getItem("galhardo_finances"),i="data:application/json;charset=utf-8,"+encodeURIComponent(n),o="galhardo-finances.json";t.setAttribute("href",i),t.setAttribute("download",o)}else alert("There's no data to export for now!")})}function rt(t){const n=Object.keys(t[0]),i=n.join(","),o=(m,l)=>l??"",s=t.map(m=>n.map(l=>JSON.stringify(m[l],o)).join(","));return[i,...s].join(`\r
`)}function ct(t){t.addEventListener("click",()=>{if(localStorage.getItem("galhardo_finances")){let i="data:text/csv;charset=utf-8,"+rt(JSON.parse(localStorage.getItem("galhardo_finances")).transactions),o="galhardo-finances.csv";t.setAttribute("href",i),t.setAttribute("download",o)}else alert("There's no data to export for now!")})}document.querySelector("#app").innerHTML=`
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
`;document.querySelector("#navbar").innerHTML=`
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
`;document.querySelector("#modais").innerHTML=`
    <!-- Modal DEPOSIT -->
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
							<label for="exampleFormControlInput1" class="form-label">Total Deposit</label>
							<input class="form-control" id="total_to_deposit" placeholder="R$ 10.00" min="100" required value="">
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Deposit Description</label>
							<input type="text" class="form-control" id="deposit_description" placeholder="Example: Google Salary" required value="">
						</div>

						<label>Category:</label>
						<select class="form-select fw-bold text-success" name="deposit_category_selected" id="deposit_category" required>
							<option class="fw-bold text-success" value="SALARY" selected>SALARY</option>
							<option class="fw-bold text-success" value="FREELANCER">FREELANCER</option>
							<option class="fw-bold text-success" value="INVESTMENT_PROFIT">INVESTMENT PROFIT</option>
						</select>

						<br>
						<button class="btn btn-outline-success" id="confirm_deposit" type="submit">Confirm Deposit</button>
					</form>
				</div>
			</div>
		</div>
	</div>



	<!-- Modal EXPENSE -->
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
							<label for="" class="form-label">Total Expense</label>
							<input class="form-control" id="total_to_expense" placeholder="R$ 10.00" required>
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Expense Description</label>
							<input type="text" class="form-control" id="expense_description"
								placeholder="Example: Dinner Pizza Dominós" required>
						</div>

						<label>Category:</label>
						<select class="form-select text-danger fw-bold" name="expense_category_selected" id="expense_category" required>
							<option class="text-danger fw-bold" value="FOOD" selected><i class="bi bi-apple"></i> FOOD</option>
							<option class="text-danger fw-bold" value="SUBSCRIPTIONS"><i class="bi bi-apple"></i> SUBSCRIPTION</option>
							<option class="text-danger fw-bold" value="SHOP">SHOP</option>
							<option class="text-danger fw-bold" value="ENTERTAINMENT">ENTERTAINMENT</option>
							<option class="text-danger fw-bold" value="TRANSPORT">TRANSPORT</option>
							<option class="text-danger fw-bold" value="HOUSE">HOUSE</option>
							<option class="text-danger fw-bold" value="SERVICES">SERVICES</option>
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
							<label for="" class="form-label">Total Invest</label>
							<input class="form-control" id="total_to_investment" placeholder="R$ 10.00" required>
						</div>

						<div class="mb-3">
							<label for="exampleFormControlInput1" class="form-label">Investment Description</label>
							<input type="text" class="form-control" id="investment_description"
								placeholder="Example: Tesouro SELIC Prefixado October 2023" required>
						</div>

						<label>Category:</label>
						<select class="fw-bold text-primary form-select" name="investment_category_selected" id="investment_category" required>
							<option class="fw-bold text-primary" value="FIXED_INCOME" selected>Fixed Income</option>
							<option class="fw-bold text-primary" value="VARIABLE_INCOME">Variable Income</option>
							<option class="fw-bold text-primary" value="CRIPTOCURRENCIES">Criptocurrencies</option>
							<option class="fw-bold text-primary" value="OTHERS">Others</option>
						</select>

						<br>
						<button class="btn btn-outline-primary" id="confirm_investment" type="submit">Confirm Investment</button>
					</form>
				</div>
			</div>
		</div>
	</div>
`;document.querySelector("#BALANCE").innerHTML=`
	<div class="card mb-3 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-success"><i class="bi bi-cash"></i> Current Balance</h4>
			<h5 class="fw-bold text-success">R$ ${$}</h5>
		</div>
	</div>
`;document.querySelector("#EXPENSES").innerHTML=`
	<div class="card mb-3 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-danger"><i class="bi bi-cash-stack"></i> Expenses </h4>
			<p class="my-0 fw-bold text-end text-danger">R$ ${A}</p>
		</div>
		<div class="card-body">
			<table class="table table-striped">
				<tbody>
					<tr>
						<th><i class="bi bi-apple"></i> Food</th>
						<td>R$ ${V}</td>
						<td>${k} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-bookmark-star"></i> Subscriptions</th>
						<td>R$ ${B}</td>
						<td>${j} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-shop"></i> Shop</th>
						<td>R$ ${J}</td>
						<td>${X} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-controller"></i> Hobbies & Entertainment</th>
						<td>R$ ${G}</td>
						<td>${Y} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-car-front-fill"></i> Transport</th>
						<td>R$ ${z}</td>
						<td>${K} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-house-door"></i> House</th>
						<td>R$ ${Q}</td>
						<td>${W} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-tools"></i> Services</th>
						<td>R$ ${Z}</td>
						<td>${tt} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`;document.querySelector("#INVESTMENTS").innerHTML=`
	<div class="card mb-3 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-primary"><i class="bi bi-bar-chart"></i> Investments </h4>
			<span class="my-0 fw-bold text-end text-primary">R$ ${L}</span>
		</div>
		<div class="card-body">
			<table class="table table-striped">
				<tbody>
					<tr>
						<th><i class="bi bi-graph-up-arrow"></i> Fixed Income</th>
						<td>R$ ${P}</td>
						<td>${C} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-graph-down-arrow"></i> Variable Income</th>
						<td>R$ ${D}</td>
						<td>${M} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-currency-bitcoin"></i> Criptocurrencies</th>
						<td>R$ ${F}</td>
						<td>${q} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-gem"></i> Others</th>
						<td>R$ ${H}</td>
						<td>${U} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`;document.querySelector("#FILTER").innerHTML=`
	<form class="mb-3 d-flex justify-content-between" action="#" id="form_search_transactions">
		<div class="col-lg-3">
			<label>Category:</label>
			<select class="form-select fw-bold" id="search_transaction_category" name="search_transaction_category" required>
				<option class="fw-bold text-warning" value="ALL" selected>ALL</option>
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
`;document.querySelector("#EXPORT").innerHTML=`
	<div class="d-flex justify-content-between mb-5">
		<a class="btn btn-outline-dark mb-3" id="button_export_json"><i class="bi bi-filetype-json"></i> Export JSON</a>
		<a class="btn btn-outline-dark mb-3" id="button_export_csv"><i class="bi bi-filetype-csv"></i> Export CSV</a>
	</div>
`;document.querySelector("#TRANSACTIONS").innerHTML=`
	<h3><i class="bi bi-receipt-cutoff"></i> Transactions</h3>
	<ul class="list-group list-group-item-action" id="ul_transactions">
		${st}
	</ul>
`;et(document.querySelector("#confirm_deposit"),document.querySelector("#total_to_deposit"),document.querySelector("#deposit_description"),document.querySelector("#deposit_category"));ot(document.querySelector("#confirm_expense"),document.querySelector("#total_to_expense"),document.querySelector("#expense_description"),document.querySelector("#expense_category"));nt(document.querySelector("#confirm_investment"),document.querySelector("#total_to_investment"),document.querySelector("#investment_description"),document.querySelector("#investment_category"));it(document.querySelector("#button_search_transactions"),document.querySelector("#search_transaction_category"),document.querySelector("#search_transaction_start_date"),document.querySelector("#search_transaction_final_date"));document.getElementById("total_to_deposit").addEventListener("keyup",E);document.getElementById("total_to_expense").addEventListener("keyup",E);document.getElementById("total_to_investment").addEventListener("keyup",E);function E(t){let n=t.target.value.replace(/\D/g,"");n=(n/100).toFixed(2)+"",n=n.replace(".",","),n=n.replace(/(\d)(\d{3})(\d{3}),/g,"$1.$2.$3,"),n=n.replace(/(\d)(\d{3}),/g,"$1.$2,"),t.target.value=`R$ ${n}`}I(document.querySelectorAll(".button_delete_transaction"));lt(document.querySelector("#button_export_json"));ct(document.querySelector("#button_export_csv"));
