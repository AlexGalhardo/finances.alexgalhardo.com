import { v4 as uuidv4 } from "uuid";
import { getDateTimeBrazil, transformStringInputValueMaskToNumber } from "./getDashboardData";

export function newExpense(
    element: HTMLButtonElement,
    amountExpense: HTMLInputElement,
    expenseDescription: HTMLInputElement,
    expenseCategory: HTMLSelectElement,
) {
    element.addEventListener("click", () => {
        if (amountExpense.value && expenseDescription.value && expenseCategory.value) {
            let Account = JSON.parse(localStorage.getItem("galhardo_finances")!);
            const amountExpensed = transformStringInputValueMaskToNumber(amountExpense.value);

            if (amountExpensed <= 0) {
                alert("Enter a valid expense value greater than 0!");
            }

            if (amountExpensed > 0) {
                if (Account) {
                    if (amountExpensed <= Account.current_balance) {
                        Account.current_balance -= amountExpensed;
                        Account.total_expenses += amountExpensed;

                        if (expenseCategory.value === "FOOD") Account.total_food += amountExpensed;

                        if (expenseCategory.value === "SUBSCRIPTIONS") Account.total_subscriptions += amountExpensed;

                        if (expenseCategory.value === "SHOP") Account.total_shop += amountExpensed;

                        if (expenseCategory.value === "ENTERTAINMENT") Account.total_entertainment += amountExpensed;

                        if (expenseCategory.value === "TRANSPORT") Account.total_transport += amountExpensed;

                        if (expenseCategory.value === "HOUSE") Account.total_house += amountExpensed;

                        if (expenseCategory.value === "SERVICES") Account.total_services += amountExpensed;

                        Account.transactions.push({
                            id: uuidv4(),
                            created_at: getDateTimeBrazil(),
                            updated_at: null,
                            type: "EXPENSE",
                            category: expenseCategory.value,
                            description: expenseDescription.value,
                            amount: amountExpensed,
                        });

                        localStorage.setItem("galhardo_finances", JSON.stringify(Account));
                    } else {
                        alert("You dont have sufficient balance to make this expense!");
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
                                type: "EXPENSE",
                                category: expenseCategory.value,
                                description: expenseDescription.value,
                                amount: amountExpensed,
                            },
                        ],
                    };

                    Account.current_balance -= amountExpensed;
                    Account.total_expenses += amountExpensed;

                    if (expenseCategory.value === "FOOD") Account.total_food += amountExpensed;

                    if (expenseCategory.value === "SUBSCRIPTIONS") Account.total_subscriptions += amountExpensed;

                    if (expenseCategory.value === "SHOP") Account.total_shop += amountExpensed;

                    if (expenseCategory.value === "ENTERTAINMENT") Account.total_entertainment += amountExpensed;

                    if (expenseCategory.value === "TRANSPORT") Account.total_transport += amountExpensed;

                    if (expenseCategory.value === "HOUSE") Account.total_house += amountExpensed;

                    if (expenseCategory.value === "SERVICES") Account.total_services += amountExpensed;

                    localStorage.setItem("galhardo_finances", JSON.stringify(Account));
                }
            }
        }
    });
}
