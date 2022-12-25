export function deleteTransaction(elements: NodeListOf<HTMLButtonElement>){

	for(let index = 0; index < elements.length; index++){

		elements[index].addEventListener('click', (event: any) => {

			if(confirm('Are you sure you want to delete this transaction?')){

				const buttonId = event?.srcElement.id

				let Account = JSON.parse(localStorage.getItem('galhardo_finances')!)

				for(let i = 0; i < Account.transactions.length; i++){

					if(Account.transactions[i].id === buttonId){
						Account.transactions.splice(i, 1);
						localStorage.setItem('galhardo_finances', JSON.stringify(Account))
						break
					}
				}
			}
		})
	}
}
