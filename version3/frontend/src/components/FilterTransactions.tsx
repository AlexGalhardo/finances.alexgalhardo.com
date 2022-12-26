function FilterTransactions() {
	return (
		<>
			<form className="mb-3 d-flex justify-content-between" action="#" id="form_search_transactions">
				<div className="col-lg-3">
					<label>Category:</label>
					<select className="form-select" id="search_transaction_category" name="search_transaction_category" required>
						<option className="fw-bold" value="ALL" selected>ALL</option>
						<option className="text-success fw-bold" value="WAGE">WAGE</option>
						<option className="text-success fw-bold" value="FREELANCER">FREELANCER</option>
						<option className="text-success fw-bold" value="INVESTMENT_PROFIT">INVESTMENT PROFIT</option>
						<option className="text-danger fw-bold" value="FOOD">FOOD</option>
						<option className="text-danger fw-bold" value="SUBSCRIPTIONS">SUBSCRIPTION</option>
						<option className="text-danger fw-bold" value="SHOP">SHOP</option>
						<option className="text-danger fw-bold" value="ENTERTAINMENT">ENTERTAINMENT</option>
						<option className="text-danger fw-bold" value="TRANSPORT">TRANSPORT</option>
						<option className="text-danger fw-bold" value="HOUSE">HOUSE</option>
						<option className="text-danger fw-bold" value="SERVICES">SERVICES</option>
						<option className="text-primary fw-bold" value="FIXED_INCOME">FIXED INCOME</option>
						<option className="text-primary fw-bold" value="VARIABLE_INCOME">VARIABLE INCOME</option>
						<option className="text-primary fw-bold" value="CRIPTOCURRENCIES">CRIPTOCURRENCIES</option>
						<option className="text-primary fw-bold" value="OTHERS">OTHERS</option>
					</select>
				</div>

				<div className="col-lg-3">
					<label>Start Date:</label>
					<input className="form-control" type="date" id="search_transaction_start_date" name="search_transaction_start_date" value="" required/>
				</div>

				<div className="col-lg-3">
					<label>Final Date:</label>
					<input className="form-control" type="date" id="search_transaction_final_date" name="search_transaction_final_date" value="" required/>
				</div>

				<button className="mt-4 btn btn-outline-primary mb-3" id="button_search_transactions"><i className="bi bi-search"></i> Search</button>
			</form>
		</>
	)
}

export default FilterTransactions
