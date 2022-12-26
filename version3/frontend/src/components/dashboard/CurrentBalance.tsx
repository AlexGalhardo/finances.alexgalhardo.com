import { useState } from 'react'

function CurrentBalance() {
	const [currentBalance, setCurrentBalance] = useState(0)

	return (
		<>
			<div className="card mb-3 rounded-3 shadow-sm">
				<div className="card-header py-3 d-flex justify-content-between">
						<h4 className="my-0 fw-bold text-success"><i className="bi bi-cash"></i> Current Balance</h4>
						<h5 className="fw-bold text-success">R$ {currentBalance}</h5>
				</div>
			</div>
		</>
	)
}

export default CurrentBalance

