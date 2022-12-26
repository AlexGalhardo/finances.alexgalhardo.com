import { useState } from 'react'

function Investments() {

	const [totalInvestments, setTotalInvestments] = useState(0)

	const [investments_fixed_income, setInvestmentsFixedIncome] = useState(0)
	const [percentage_fixed_income, setPercentageFixedIncome] = useState(0)

	const [investments_variable_income, setInvestmentsVariableIncome] = useState(0)
	const [percentage_variable_income, setPercentageVariableIncome] = useState(0)

	const [investments_criptocurrencies, setInvestmentsCriptocurrencies] = useState(0)
	const [percentage_criptocurrencies, setPercentageCriptocurrencies] = useState(0)

	const [investments_others, setInvestmentsOthers] = useState(0)
	const [percentage_others, setPercentageOthers] = useState(0)

	return (
		<>
			<div className="card mb-3 rounded-3 shadow-sm">
				<div className="card-header py-3 d-flex justify-content-between">
					<h4 className="my-0 fw-bold text-start text-primary"><i className="bi bi-bar-chart"></i> Investments </h4>
					<span className="my-0 fw-bold text-end text-primary">R$ {totalInvestments}</span>
				</div>
				<div className="card-body">
					<table className="table table-striped">
						<tbody>
							<tr>
								<th><i className="bi bi-graph-up-arrow"></i> Fixed Income</th>
								<td>R$ {investments_fixed_income}</td>
								<td>{percentage_fixed_income} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-graph-down-arrow"></i> Variable Income</th>
								<td>R$ {investments_variable_income}</td>
								<td>{percentage_variable_income} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-currency-bitcoin"></i> Criptocurrencies</th>
								<td>R$ {investments_criptocurrencies}</td>
								<td>{percentage_criptocurrencies} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-gem"></i> Others</th>
								<td>R$ {investments_others}</td>
								<td>{percentage_others} %</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Investments
