function ExportTransactions() {
	return (
		<>
			<div className="d-flex justify-content-between mb-5">
				<a className="btn btn-outline-dark mb-3" id="button_export_json"><i className="bi bi-filetype-json"></i> Export JSON</a>
				<a className="btn btn-outline-dark mb-3" id="button_export_csv"><i className="bi bi-filetype-csv"></i> Export CSV</a>
			</div>
		</>
	)
}

export default ExportTransactions
