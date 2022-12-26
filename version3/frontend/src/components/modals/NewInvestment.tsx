function NewInvestment() {
	return (
		<>
			<div className="modal fade" id="modalInvestir" aria-labelledby="modalInvestirLabel" aria-hidden="true">
				<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
					<h1 className="modal-title fs-5 fw-bold text-primary" id="modalInvestirLabel"><i className="bi bi-bar-chart"></i>
						New Investment</h1>
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
					<form method="GET" action="/">
						<div className="mb-3">
						<label className="form-label">Total to invest</label>
						<input className="form-control" id="total_to_investment" placeholder="R$ 10.00" required/>
						</div>

						<div className="mb-3">
						<label htmlFor="exampleFormControlInput1" className="form-label">Investment Description</label>
						<input type="text" className="form-control" id="investment_description"
							placeholder="Example: Tesouro SELIC Prefixado October 2023" required/>
						</div>

						<label>Category:</label>
						<select className="form-select" name="investment_category_selected" id="investment_category" required>
						<option value="FIXED_INCOME" selected>Fixed Income</option>
						<option value="VARIABLE_INCOME">Variable Income</option>
						<option value="CRIPTOCURRENCIES">Criptocurrencies</option>
						<option value="OTHERS">Others</option>
						</select>

						<br/>
						<button className="btn btn-outline-primary" id="confirm_investment" type="submit">Confirm Investment</button>
					</form>
					</div>
				</div>
				</div>
			</div>
		</>
	)
}

export default NewInvestment
