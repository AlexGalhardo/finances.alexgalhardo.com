import { ITransactionsRepository } from "../../ports/ITransactionsRepository";

export default class DeleteTransactionByIdUseCase {
    private readonly transactionRepository: ITransactionsRepository;

    constructor(transactionRepository: ITransactionsRepository) {
        this.transactionRepository = transactionRepository;
    }

    async execute(userId: string) {
        return this.transactionRepository.deleteById(userId);
    }
}
