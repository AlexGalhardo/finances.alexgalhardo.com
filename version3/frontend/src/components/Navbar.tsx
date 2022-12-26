function Navbar () {
	return (
		<>
			<div className="fixed-top shadow-sm bg-light mb-5">
        		<nav className="container pt-2 pb-2 col-lg-12 navbar navbar-expand-lg fixed navbar-dark bg-light text-bold">
          			<div className="container-fluid">
            			<h3><a className="fw-bold text-dark text-decoration-none" href="/"><i className="bi bi-bank"></i> Galhardo Finances</a></h3>
            			<button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              				<span className="navbar-toggler-icon"></span>
            			</button>
            			<div className="collapse navbar-collapse" id="navbarSupportedContent">
              				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                				<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">
										<button className="btn btn-lg btn-outline-success" type="submit" data-bs-toggle="modal" data-bs-target="#modalDepositar"><i className="bi bi-cash"></i> Deposit</button>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">
										<button className="btn btn-lg btn-outline-danger" type="submit" data-bs-toggle="modal" data-bs-target="#modalSacar"><i className="bi bi-cash-stack"></i> Expense</button>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">
										<button className="btn btn-lg btn-outline-primary" type="submit" data-bs-toggle="modal" data-bs-target="#modalInvestir"><i className="bi bi-bar-chart"></i> Invest</button>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" target="_blank" href="https://github.com/AlexGalhardo/Galhardo-Finances">
										<button className="btn btn-lg btn-outline-dark"><i className="bi bi-github"></i> Source Code</button>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}

export default Navbar
