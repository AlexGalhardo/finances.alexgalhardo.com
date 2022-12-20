interface ITransaction {
	id: string;
	created_at: Date;
	updated_at: Date;
	type: TransactionType,
	category: DepositCategory,
	description: string,
	total: number
}

enum TransactionType {
	DEPOSIT,
	EXPENSE,
	INVESTMENT
}

enum DepositCategory {
	WAGE,
	FREELANCER,
	INVESTMENT_PROFIT
}