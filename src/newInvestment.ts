import { v4 as uuidv4 } from "uuid";
import { getDateTimeBrazil, transformStringInputValueMaskToNumber } from "./getDashboardData";

export function newInvestment(
    element: HTMLButtonElement,
    amountInvestment: HTMLInputElement,
    investmentDescription: HTMLInputElement,
    investmentCategory: HTMLSelectElement,
) {
    element.addEventListener("click", () => {
        if (amountInvestment.value && investmentDescription.value && investmentCategory.value) {
            let Account = JSON.parse(localStorage.getItem("galhardo_finances")!);
            const amountInvested = transformStringInputValueMaskToNumber(amountInvestment.value);

            if (amountInvested <= 0) {
                alert("Enter a valid investment value greater than 0!");
            }

            if (amountInvested > 0) {
                if (Account) {
                    if (amountInvested <= Account.current_balance) {
                        Account.current_balance -= amountInvested;
                        Account.investments_total += amountInvested;

                        if (investmentCategory.value === "FIXED_INCOME")
                            Account.investments_fixed_income += amountInvested;

                        if (investmentCategory.value === "VARIABLE_INCOME")
                            Account.investments_variable_income += amountInvested;

                        if (investmentCategory.value === "CRIPTOCURRENCIES")
                            Account.investments_criptocurrencies += amountInvested;

                        if (investmentCategory.value === "OTHERS") Account.investments_others += amountInvested;

                        Account.transactions.push({
                            id: uuidv4(),
                            created_at: getDateTimeBrazil(),
                            updated_at: null,
                            type: "INVESTMENT",
                            category: investmentCategory.value,
                            description: investmentDescription.value,
                            amount: amountInvested,
                        });

                        localStorage.setItem("galhardo_finances", JSON.stringify(Account));
                    } else {
                        alert("You dont have sufficient balance to make this investment!");
                    }
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
                                type: "INVESTMENT",
                                category: investmentCategory.value,
                                description: investmentDescription.value,
                                amount: amountInvested,
                            },
                        ],
                    };

                    Account.current_balance -= amountInvested;
                    Account.investments_total += amountInvested;

                    if (investmentCategory.value === "FIXED_INCOME") Account.investments_fixed_income += amountInvested;

                    if (investmentCategory.value === "VARIABLE_INCOME")
                        Account.investments_variable_income += amountInvested;

                    if (investmentCategory.value === "CRIPTOCURRENCIES")
                        Account.investments_criptocurrencies += amountInvested;

                    if (investmentCategory.value === "OTHERS") Account.investments_others += amountInvested;

                    localStorage.setItem("galhardo_finances", JSON.stringify(Account));
                }
            }
        }
    });
}
