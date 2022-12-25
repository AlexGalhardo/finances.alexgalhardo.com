(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();let v;const x=new Uint8Array(16);function N(){if(!v&&(v=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!v))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(x)}const r=[];for(let t=0;t<256;++t)r.push((t+256).toString(16).slice(1));function R(t,o=0){return(r[t[o+0]]+r[t[o+1]]+r[t[o+2]]+r[t[o+3]]+"-"+r[t[o+4]]+r[t[o+5]]+"-"+r[t[o+6]]+r[t[o+7]]+"-"+r[t[o+8]]+r[t[o+9]]+"-"+r[t[o+10]]+r[t[o+11]]+r[t[o+12]]+r[t[o+13]]+r[t[o+14]]+r[t[o+15]]).toLowerCase()}const O=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),E={randomUUID:O};function u(t,o,i){if(E.randomUUID&&!o&&!t)return E.randomUUID();t=t||{};const s=t.random||(t.rng||N)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,o){i=i||0;for(let a=0;a<16;++a)o[i+a]=s[a];return o}return R(s)}let e={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,total_services:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,investments_others:0,transactions:[]};if(localStorage.getItem("galhardo_finances")){e=JSON.parse(localStorage.getItem("galhardo_finances")),e.current_balance=0,e.total_expenses=0,e.total_food=0,e.total_subscriptions=0,e.total_shop=0,e.total_entertainment=0,e.total_transport=0,e.total_house=0,e.total_services=0,e.investments_total=0,e.investments_fixed_income=0,e.investments_variable_income=0,e.investments_criptocurrencies=0,e.investments_others=0;for(let t=0;t<e.transactions.length;t++)e.transactions[t].type==="DEPOSIT"?e.current_balance+=e.transactions[t].amount:e.transactions[t].type==="EXPENSE"?(e.total_expenses+=e.transactions[t].amount,e.current_balance-=e.transactions[t].amount,e.transactions[t].category==="FOOD"&&(e.total_food+=e.transactions[t].amount),e.transactions[t].category==="SUBSCRIPTIONS"&&(e.total_subscriptions+=e.transactions[t].amount),e.transactions[t].category==="SHOP"&&(e.total_shop+=e.transactions[t].amount),e.transactions[t].category==="ENTERTAINMENT"&&(e.total_entertainment+=e.transactions[t].amount),e.transactions[t].category==="TRANSPORT"&&(e.total_transport+=e.transactions[t].amount),e.transactions[t].category==="HOUSE"&&(e.total_house+=e.transactions[t].amount),e.transactions[t].category==="SERVICES"&&(e.total_services+=e.transactions[t].amount)):e.transactions[t].type==="INVESTMENT"&&(e.investments_total+=e.transactions[t].amount,e.current_balance-=e.transactions[t].amount,e.transactions[t].category==="FIXED_INCOME"&&(e.investments_fixed_income+=e.transactions[t].amount),e.transactions[t].category==="VARIABLE_INCOME"&&(e.investments_variable_income+=e.transactions[t].amount),e.transactions[t].category==="CRIPTOCURRENCIES"&&(e.investments_criptocurrencies+=e.transactions[t].amount),e.transactions[t].category==="OTHERS"&&(e.investments_others+=e.transactions[t].amount));localStorage.setItem("galhardo_finances",JSON.stringify(e))}function c(t){return(t/100).toLocaleString("pt-br",{minimumFractionDigits:2})}function d(t){return t.toFixed(2)}function p(){let t=new Date().toLocaleDateString("pt-BR"),o=new Date().toLocaleTimeString("pt-BR");return`${t} ${o}`}function f(t){return t=t.replace("R$ ",""),t=t.replace(",",""),t=t.replace(".",""),Number(t)}function S(t){switch(t){case"WAGE":return'<i class="bi bi-building-fill-add"></i>';case"FREELANCER":return'<i class="bi bi-file-earmark-medical"></i>';case"FOOD":return'<i class="bi bi-apple"></i>';case"SUBSCRIPTIONS":return'<i class="bi bi-bookmark-star"></i>';case"SHOP":return'<i class="bi bi-shop"></i>';case"ENTERTAINMENT":return'<i class="bi bi-controller"></i>';case"TRANSPORT":return'<i class="bi bi-car-front-fill"></i>';case"HOUSE":return'<i class="bi bi-house-door"></i>';case"SERVICES":return'<i class="bi bi-tools"></i>';case"FIXED_INCOME":return'<i class="bi bi-graph-up-arrow"></i>';case"VARIABLE_INCOME":return'<i class="bi bi-graph-down-arrow"></i>';case"CRIPTOCURRENCIES":return'<i class="bi bi-currency-bitcoin"></i>';case"OTHERS":return'<i class="bi bi-gem"></i>';default:return""}}const $=c(e.current_balance),w=c(e.total_expenses),A=c(e.investments_total),C=c(e.investments_fixed_income),L=d(e.investments_total?e.investments_fixed_income/e.investments_total*100:0),P=c(e.investments_variable_income),D=d(e.investments_total?e.investments_variable_income/e.investments_total*100:0),M=c(e.investments_criptocurrencies),F=d(e.investments_total?e.investments_criptocurrencies/e.investments_total*100:0),q=c(e.investments_others),k=d(e.investments_total?e.investments_others/e.investments_total*100:0),U=c(e.total_food),H=d(e.total_expenses?e.total_food/e.total_expenses*100:0),V=c(e.total_subscriptions),B=d(e.total_expenses?e.total_subscriptions/e.total_expenses*100:0),j=c(e.total_shop),J=d(e.total_expenses?e.total_shop/e.total_expenses*100:0),X=c(e.total_entertainment),G=d(e.total_expenses?e.total_entertainment/e.total_expenses*100:0),W=c(e.total_transport),z=d(e.total_expenses?e.total_transport/e.total_expenses*100:0),Y=c(e.total_house),K=d(e.total_expenses?e.total_house/e.total_expenses*100:0),Q=c(e.total_services),Z=d(e.total_expenses?e.total_services/e.total_expenses*100:0);function tt(t,o,i,s){t.addEventListener("click",()=>{if(o.value&&i.value&&s.value){let a=JSON.parse(localStorage.getItem("galhardo_finances"));const n=f(o.value);n<=0&&alert("Enter a valid deposit value greater than 0!"),n>0&&(a?(a.current_balance+=n,a.transactions.push({id:u(),created_at:p(),updated_at:null,type:"DEPOSIT",category:s.value,description:i.value,amount:n}),localStorage.setItem("galhardo_finances",JSON.stringify(a))):(a={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,total_services:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,investments_others:0,transactions:[{id:u(),created_at:p(),updated_at:null,type:"DEPOSIT",category:s.value,description:i.value,amount:n}]},a.current_balance+=n,localStorage.setItem("galhardo_finances",JSON.stringify(a))))}})}function et(){if(localStorage.getItem("galhardo_finances")){let t=JSON.parse(localStorage.getItem("galhardo_finances"));if(t.transactions.reverse(),!t.transactions)return"No transactions available";let o="";for(let i=0;i<t.transactions.length;i++){let s=t.transactions[i].type==="DEPOSIT"?"text-success":t.transactions[i].type==="EXPENSE"?"text-danger":"text-primary",a=t.transactions[i].type==="DEPOSIT"?"+":t.transactions[i].type==="EXPENSE"?"-":"";o+=`
				<li class="list-group-item list-group-item-action d-flex justify-content-between">
					<div class="me-auto">
						<h5 class="fw-bold ${s}">${S(t.transactions[i].category)}   ${t.transactions[i].description}</h5>
						<small>${t.transactions[i].created_at}</small>
					</div>
					<div class="ms-auto">
						<h5 class="fw-bold ${s}">${a} R$ ${c(t.transactions[i].amount)}</h5>
							<form class="d-flex justify-content-end">
								<button type="submit" class="btn btn-sm btn-outline-danger button_delete_transaction" id="${t.transactions[i].id}"><i class="bi bi-trash"></i> Delete</button>
							</form>
					</div>
				</li>
			`}return o}else return"No transactions available"}const at=et();function nt(t,o,i,s){t.addEventListener("click",()=>{if(o.value&&i.value&&s.value){let a=JSON.parse(localStorage.getItem("galhardo_finances"));const n=f(o.value);n<=0&&alert("Enter a valid investment value greater than 0!"),n>0&&(a?n<=a.current_balance?(a.current_balance-=n,a.investments_total+=n,s.value==="FIXED_INCOME"&&(a.investments_fixed_income+=n),s.value==="VARIABLE_INCOME"&&(a.investments_variable_income+=n),s.value==="CRIPTOCURRENCIES"&&(a.investments_criptocurrencies+=n),s.value==="OTHERS"&&(a.investments_others+=n),a.transactions.push({id:u(),created_at:p(),updated_at:null,type:"INVESTMENT",category:s.value,description:i.value,amount:n}),localStorage.setItem("galhardo_finances",JSON.stringify(a))):alert("You dont have sufficient balance to make this investment!"):(a={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,total_services:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,investments_others:0,transactions:[{id:u(),created_at:p(),updated_at:null,type:"INVESTMENT",category:s.value,description:i.value,amount:n}]},a.current_balance-=n,a.investments_total+=n,s.value==="FIXED_INCOME"&&(a.investments_fixed_income+=n),s.value==="VARIABLE_INCOME"&&(a.investments_variable_income+=n),s.value==="CRIPTOCURRENCIES"&&(a.investments_criptocurrencies+=n),s.value==="OTHERS"&&(a.investments_others+=n),localStorage.setItem("galhardo_finances",JSON.stringify(a))))}})}function ot(t,o,i,s){t.addEventListener("click",()=>{if(o.value&&i.value&&s.value){let a=JSON.parse(localStorage.getItem("galhardo_finances"));const n=f(o.value);n<=0&&alert("Enter a valid expense value greater than 0!"),n>0&&(a?n<=a.current_balance?(a.current_balance-=n,a.total_expenses+=n,s.value==="FOOD"&&(a.total_food+=n),s.value==="SUBSCRIPTIONS"&&(a.total_subscriptions+=n),s.value==="SHOP"&&(a.total_shop+=n),s.value==="ENTERTAINMENT"&&(a.total_entertainment+=n),s.value==="TRANSPORT"&&(a.total_transport+=n),s.value==="HOUSE"&&(a.total_house+=n),s.value==="SERVICES"&&(a.total_services+=n),a.transactions.push({id:u(),created_at:p(),updated_at:null,type:"EXPENSE",category:s.value,description:i.value,amount:n}),localStorage.setItem("galhardo_finances",JSON.stringify(a))):alert("You dont have sufficient balance to make this expense!"):(a={account_id:u(),current_balance:0,total_expenses:0,total_food:0,total_subscriptions:0,total_shop:0,total_entertainment:0,total_transport:0,total_house:0,total_services:0,investments_total:0,investments_fixed_income:0,investments_variable_income:0,investments_criptocurrencies:0,investments_others:0,transactions:[{id:u(),created_at:p(),updated_at:null,type:"EXPENSE",category:s.value,description:i.value,amount:n}]},a.current_balance-=n,a.total_expenses+=n,s.value==="FOOD"&&(a.total_food+=n),s.value==="SUBSCRIPTIONS"&&(a.total_subscriptions+=n),s.value==="SHOP"&&(a.total_shop+=n),s.value==="ENTERTAINMENT"&&(a.total_entertainment+=n),s.value==="TRANSPORT"&&(a.total_transport+=n),s.value==="HOUSE"&&(a.total_house+=n),s.value==="SERVICES"&&(a.total_services+=n),localStorage.setItem("galhardo_finances",JSON.stringify(a))))}})}function y(t){for(let o=0;o<t.length;o++)t[o].addEventListener("click",i=>{if(confirm("Are you sure you want to delete this transaction?")){const s=i==null?void 0:i.srcElement.id;let a=JSON.parse(localStorage.getItem("galhardo_finances"));for(let n=0;n<a.transactions.length;n++)if(a.transactions[n].id===s){a.transactions.splice(n,1),localStorage.setItem("galhardo_finances",JSON.stringify(a));break}}})}function st(t,o,i,s){t.addEventListener("click",a=>{if(a.preventDefault(),localStorage.getItem("galhardo_finances"))if(i.value&&s.value){let n=JSON.parse(localStorage.getItem("galhardo_finances"));if(n.transactions.reverse(),!n.transactions)return"No transactions available";let m="";for(let l=0;l<n.transactions.length;l++){let b=n.transactions[l].created_at.slice(0,10),I=`${b[3]}${b[4]}/${b[0]}${b[1]}/${b[6]}${b[7]}${b[8]}${b[9]}`,_=new Date(I).getTime();if(o.value==="ALL"&&_>=new Date(i.value).getTime()&&_<=new Date(s.value).getTime()||n.transactions[l].category===o.value&&_>=new Date(i.value).getTime()&&_<=new Date(s.value).getTime()){let g=n.transactions[l].type==="DEPOSIT"?"text-success":n.transactions[l].type==="EXPENSE"?"text-danger":"text-primary",T=n.transactions[l].type==="DEPOSIT"?"+":n.transactions[l].type==="EXPENSE"?"-":"";m+=`
							<li class="list-group-item list-group-item-action d-flex justify-content-between">
								<div class="me-auto">
									<h5 class="fw-bold ${g}">${S(n.transactions[l].category)}   ${n.transactions[l].description}</h5>
									<small>${n.transactions[l].created_at}</small>
								</div>
								<div class="ms-auto">
									<h5 class="fw-bold ${g}">${T} R$ ${c(n.transactions[l].amount)}</h5>
										<form class="d-flex justify-content-end">
											<button type="submit" class="btn btn-sm btn-outline-danger button_delete_transaction" id="${n.transactions[l].id}"><i class="bi bi-trash"></i> Delete</button>
										</form>
								</div>
							</li>
						`}}document.querySelector("#ul_transactions").innerHTML=m,y(document.querySelectorAll(".button_delete_transaction"))}else alert("Please select a start date and final date to filter transactions");else document.querySelector("#ul_transactions").innerHTML="There's no transactions available"})}function it(t){t.addEventListener("click",()=>{if(localStorage.getItem("galhardo_finances")){let o=localStorage.getItem("galhardo_finances"),i="data:application/json;charset=utf-8,"+encodeURIComponent(o),s="galhardo-finances.json";t.setAttribute("href",i),t.setAttribute("download",s),t.click()}else alert("There's no data to export for now!")})}function lt(t){const o=Object.keys(t[0]),i=o.join(","),s=(m,l)=>l??"",a=t.map(m=>o.map(l=>JSON.stringify(m[l],s)).join(","));return[i,...a].join(`\r
`)}function rt(t){t.addEventListener("click",()=>{if(localStorage.getItem("galhardo_finances")){let i="data:text/csv;charset=utf-8,"+lt(JSON.parse(localStorage.getItem("galhardo_finances")).transactions),s="galhardo-finances.csv";t.setAttribute("href",i),t.setAttribute("download",s)}else alert("There's no data to export for now!")})}document.querySelector("#navbar").innerHTML=`
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
			<p class="my-0 fw-bold text-end text-danger">R$ ${w}</p>
		</div>
		<div class="card-body">
			<table class="table table-striped">
				<tbody>
					<tr>
						<th><i class="bi bi-apple"></i> Food</th>
						<td>R$ ${U}</td>
						<td>${H} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-bookmark-star"></i> Subscriptions</th>
						<td>R$ ${V}</td>
						<td>${B} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-shop"></i> Shop</th>
						<td>R$ ${j}</td>
						<td>${J} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-controller"></i> Hobbies & Entertainment</th>
						<td>R$ ${X}</td>
						<td>${G} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-car-front-fill"></i> Transport</th>
						<td>R$ ${W}</td>
						<td>${z} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-house-door"></i> House</th>
						<td>R$ ${Y}</td>
						<td>${K} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-tools"></i> Services</th>
						<td>R$ ${Q}</td>
						<td>${Z} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`;document.querySelector("#INVESTMENTS").innerHTML=`
	<div class="card mb-3 rounded-3 shadow-sm">
		<div class="card-header py-3 d-flex justify-content-between">
			<h4 class="my-0 fw-bold text-start text-primary"><i class="bi bi-bar-chart"></i> Investments </h4>
			<span class="my-0 fw-bold text-end text-primary">R$ ${A}</span>
		</div>
		<div class="card-body">
			<table class="table table-striped">
				<tbody>
					<tr>
						<th><i class="bi bi-graph-up-arrow"></i> Fixed Income</th>
						<td>R$ ${C}</td>
						<td>${L} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-graph-down-arrow"></i> Variable Income</th>
						<td>R$ ${P}</td>
						<td>${D} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-currency-bitcoin"></i> Criptocurrencies</th>
						<td>R$ ${M}</td>
						<td>${F} %</td>
					</tr>
					<tr>
						<th><i class="bi bi-gem"></i> Others</th>
						<td>R$ ${q}</td>
						<td>${k} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`;document.querySelector("#FILTER").innerHTML=`
	<form class="mb-3 d-flex justify-content-between" action="#" id="form_search_transactions">
		<div class="col-lg-3">
			<label>Category:</label>
			<select class="form-select" id="search_transaction_category" name="search_transaction_category" required>
				<option class="fw-bold" value="ALL" selected>ALL</option>
				<option class="text-success fw-bold" value="WAGE">WAGE</option>
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
		${at}
	</ul>
`;tt(document.querySelector("#confirm_deposit"),document.querySelector("#total_to_deposit"),document.querySelector("#deposit_description"),document.querySelector("#deposit_category"));ot(document.querySelector("#confirm_expense"),document.querySelector("#total_to_expense"),document.querySelector("#expense_description"),document.querySelector("#expense_category"));nt(document.querySelector("#confirm_investment"),document.querySelector("#total_to_investment"),document.querySelector("#investment_description"),document.querySelector("#investment_category"));st(document.querySelector("#button_search_transactions"),document.querySelector("#search_transaction_category"),document.querySelector("#search_transaction_start_date"),document.querySelector("#search_transaction_final_date"));document.getElementById("total_to_deposit").addEventListener("keyup",h);document.getElementById("total_to_expense").addEventListener("keyup",h);document.getElementById("total_to_investment").addEventListener("keyup",h);function h(t){let o=t.target.value.replace(/\D/g,"");o=(o/100).toFixed(2)+"",o=o.replace(".",","),o=o.replace(/(\d)(\d{3})(\d{3}),/g,"$1.$2.$3,"),o=o.replace(/(\d)(\d{3}),/g,"$1.$2,"),t.target.value=`R$ ${o}`}y(document.querySelectorAll(".button_delete_transaction"));it(document.querySelector("#button_export_json"));rt(document.querySelector("#button_export_csv"));
