import { v4 as uuidv4 } from "uuid";
import {
	getDateTimeBrazil,
	transformStringInputValueMaskToNumber,
} from "./getDashboardData";

export function newDeposit(
	element: HTMLButtonElement,
	amountDeposit: HTMLInputElement,
	depositDescription: HTMLInputElement,
	depositCategory: HTMLSelectElement,
) {
	element.addEventListener("click", () => {
		if (
			amountDeposit.value &&
			depositDescription.value &&
			depositCategory.value
		) {
			let Account = JSON.parse(
				localStorage.getItem("galhardo_finances")!,
			);
			const amountDeposited = transformStringInputValueMaskToNumber(
				amountDeposit.value,
			);

			if (amountDeposited <= 0) {
				alert("Enter a valid deposit value greater than 0!");
			}

			if (amountDeposited > 0) {
				if (Account) {
					Account.current_balance += amountDeposited;

					Account.transactions.push({
						id: uuidv4(),
						created_at: getDateTimeBrazil(),
						updated_at: null,
						type: "DEPOSIT",
						category: depositCategory.value,
						description: depositDescription.value,
						amount: amountDeposited,
					});

					localStorage.setItem(
						"galhardo_finances",
						JSON.stringify(Account),
					);
				} else {
					Account = {
						account_id: uuidv4(),
						current_balance: 0,
						total_expenses: 0,
						total_food: 0,
						total_subscriptions: 0,
						total_shop: 0,
						total_entertainment: 0,
						total_transport: 0,
						total_house: 0,
						total_services: 0,
						investments_total: 0,
						investments_fixed_income: 0,
						investments_variable_income: 0,
						investments_criptocurrencies: 0,
						investments_others: 0,
						transactions: [
							{
								id: uuidv4(),
								created_at: getDateTimeBrazil(),
								updated_at: null,
								type: "DEPOSIT",
								category: depositCategory.value,
								description: depositDescription.value,
								amount: amountDeposited,
							},
						],
					};

					Account.current_balance += amountDeposited;

					localStorage.setItem(
						"galhardo_finances",
						JSON.stringify(Account),
					);
				}
			}
		}
	});
}
