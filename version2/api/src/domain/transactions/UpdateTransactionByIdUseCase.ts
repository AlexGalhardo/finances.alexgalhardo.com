import { ITransactionsRepository, IUpdateTransactionParams } from "../../ports/ITransactionsRepository";

export default class GetAllTransactionsUseCase {
    private readonly transactionsRepository: ITransactionsRepository;

    constructor(transactionsRepository: ITransactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }

    async execute(transactionObject: IUpdateTransactionParams) {
        return this.transactionsRepository.updateById(transactionObject);
    }
}
