function NewExpense(){
	return (
		<>
			<div className="modal fade" id="modalSacar" aria-labelledby="modalSacarLabel" aria-hidden="true">
				<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
					<h1 className="modal-title fs-5 fw-bold text-danger" id="modalSacarLabel"><i className="bi bi-cash-stack"></i>
						New Expense</h1>
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
					<form method="GET" action="/">
						<div className="mb-3">
						<label className="form-label">Total to expense</label>
						<input className="form-control" id="total_to_expense" placeholder="R$ 10.00" required/>
						</div>

						<div className="mb-3">
						<label htmlFor="exampleFormControlInput1" className="form-label">Deposit Description</label>
						<input type="text" className="form-control" id="expense_description"
							placeholder="Example: Dinner Pizza Dominós" required/>
						</div>

						<label>Category:</label>
						<select className="form-select" name="expense_category_selected" id="expense_category" required>
						<option value="FOOD" selected>FOOD</option>
						<option value="SUBSCRIPTIONS">SUBSCRIPTION</option>
						<option value="SHOP">SHOP</option>
						<option value="ENTERTAINMENT">ENTERTAINMENT</option>
						<option value="TRANSPORT">TRANSPORT</option>
						<option value="HOUSE">HOUSE</option>
						<option value="SERVICES">SERVICES</option>
						</select>

						<br/>
						<button className="btn btn-outline-danger" id="confirm_expense" type="submit">Confirm Expense</button>
					</form>
					</div>
				</div>
				</div>
			</div>
		</>
	)
}

export default NewExpense
