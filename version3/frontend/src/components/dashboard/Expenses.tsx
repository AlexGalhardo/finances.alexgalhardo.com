import { useState } from 'react'

function Expenses() {
	const [totalExpenses, setTotalExpenses] = useState(0)

	const [total_food, setTotalFood] = useState(0)
	const [percentage_food, setPercentageFood] = useState(0)

	const [total_subscriptions, setTotalSubscriptions] = useState(0)
	const [percentage_subscriptions, setPercentageSubscriptions] = useState(0)

	const [total_shop, setTotalShop] = useState(0)
	const [percentage_shop, setPercentageShop] = useState(0)

	const [total_entertainment, setTotalEntertainment] = useState(0)
	const [percentage_entertainment, setPercentageEntertainment] = useState(0)

	const [total_transport, setTotalTransport] = useState(0)
	const [percentage_transport, setPercentageTransport] = useState(0)

	const [total_house, setTotalHouse] = useState(0)
	const [percentage_house, setPercentageHouse] = useState(0)

	const [total_services, setTotalServices] = useState(0)
	const [percentage_services, setPercentageServices] = useState(0)

	return (
		<>
			<div className="card mb-3 rounded-3 shadow-sm">
				<div className="card-header py-3 d-flex justify-content-between">
					<h4 className="my-0 fw-bold text-start text-danger"><i className="bi bi-cash-stack"></i> Expenses </h4>
					<p className="my-0 fw-bold text-end text-danger">R$ {totalExpenses}</p>
				</div>
				<div className="card-body">
					<table className="table table-striped">
						<tbody>
							<tr>
								<th><i className="bi bi-apple"></i> Food</th>
								<td>R$ {total_food}</td>
								<td>{percentage_food} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-bookmark-star"></i> Subscriptions</th>
								<td>R$ {total_subscriptions}</td>
								<td>{percentage_subscriptions} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-shop"></i> Shop</th>
								<td>R$ {total_shop}</td>
								<td>{percentage_shop} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-controller"></i> Hobbies & Entertainment</th>
								<td>R$ {total_entertainment}</td>
								<td>{percentage_entertainment} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-car-front-fill"></i> Transport</th>
								<td>R$ {total_transport}</td>
								<td>{percentage_transport} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-house-door"></i> House</th>
								<td>R$ {total_house}</td>
								<td>{percentage_house} %</td>
							</tr>
							<tr>
								<th><i className="bi bi-tools"></i> Services</th>
								<td>R$ {total_services}</td>
								<td>{percentage_services} %</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Expenses
