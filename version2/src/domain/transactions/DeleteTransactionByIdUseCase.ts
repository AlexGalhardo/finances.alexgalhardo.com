import { ITransactionsRepository } from "../../ports/ITransactionsRepository";

export default class DeleteTransactionByIdUseCase {
    private readonly transactionRepository: ITransactionsRepository;

    constructor(transactionRepository: ITransactionsRepository) {
        this.transactionRepository = transactionRepository;
    }

    async execute(user_id: string) {
        return this.transactionRepository.deleteById(user_id);
    }
}
