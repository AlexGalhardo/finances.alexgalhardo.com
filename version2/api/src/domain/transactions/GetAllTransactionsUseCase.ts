import { ITransactionsRepository } from "../../ports/ITransactionsRepository";

export default class GetAllTransactionsUseCase {
    private readonly transactionsRepository: ITransactionsRepository;

    constructor(transactionsRepository: ITransactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }

    async execute(userId: string) {
        return this.transactionsRepository.getAll(userId);
    }
}
