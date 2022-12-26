import { useState } from 'react'
import CurrentBalance from './components/dashboard/CurrentBalance'
import Expenses from './components/dashboard/Expenses'
import Investments from './components/dashboard/Investments'
import NewDeposit from './components/modals/NewDeposit'
import NewExpense from './components/modals/NewExpense'
import NewInvestment from './components/modals/NewInvestment'
import Navbar from './components/Navbar'
import FilterTransactions from './components/FilterTransactions'
import ExportTransactions from './components/ExportTransactions'
import Transactions from './components/Transactions'

function App() {

  return (
    <>
		<Navbar />
		<NewDeposit />
		<NewExpense />
		<NewInvestment />

    	<main className="mt-5">
        	<div className="container">
          		<div className="row">
            		<div className="col-lg-5">
              			<CurrentBalance />
						<Expenses />
						<Investments />
            		</div>
            		<div className="col-lg-7">
						<FilterTransactions />
						<ExportTransactions />
						<Transactions />
            		</div>
          		</div>
        	</div>
    	</main>
    </>
  )
}

export default App
