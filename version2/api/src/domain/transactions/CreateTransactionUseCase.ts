import { ICreateTransactionParams, ITransactionsRepository } from "../../ports/ITransactionsRepository";

export default class CreateTransactionUseCase {
    private readonly transactionsRepository: ITransactionsRepository;

    constructor(transactionsRepository: ITransactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }

    async execute(transactionObject: ICreateTransactionParams) {
        return this.transactionsRepository.create(transactionObject);
    }
}
