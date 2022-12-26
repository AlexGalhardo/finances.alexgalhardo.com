function NewDeposit() {
	return (
		<>
			<div className="modal fade" id="modalDepositar" aria-labelledby="modalDepositarLabel" aria-hidden="true">
				<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
					<h1 className="modal-title fs-5 fw-bold text-success" id="modalDepositarLabel"><i className="bi bi-cash"></i> Deposit Money</h1>
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
					<form method="GET" action="/">
						<div className="mb-3">
						<label htmlFor="exampleFormControlInput1" className="form-label">Total to deposit</label>
						<input className="form-control" id="total_to_deposit" placeholder="R$ 10.00" min="100" required value=""/>
						</div>

						<div className="mb-3">
						<label htmlFor="exampleFormControlInput1" className="form-label">Deposit Description</label>
						<input type="text" className="form-control" id="deposit_description" placeholder="Exemplo: Freelancer do Primo" required value=""/>
						</div>

						<label>Category:</label>
						<select className="form-select" name="deposit_category_selected" id="deposit_category" required>
						<option value="WAGE" selected>WAGE</option>
						<option value="FREELANCER">FREELANCER</option>
						<option value="INVESTMENT_PROFIT">INVESTMENT PROFIT</option>
						</select>

						<br/>
						<button className="btn btn-outline-success" id="confirm_deposit" type="submit">Confirm Deposit</button>
					</form>
					</div>
				</div>
				</div>
			</div>
		</>
	)
}

export default NewDeposit
