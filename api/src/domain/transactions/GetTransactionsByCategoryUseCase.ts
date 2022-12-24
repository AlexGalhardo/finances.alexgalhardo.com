import { ITransactionsRepository } from "../../ports/ITransactionsRepository";

export default class GetAllTransactionsUseCase {
    private readonly transactionsRepository: ITransactionsRepository;

    constructor(transactionsRepository: ITransactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }

    async execute(category: string) {
        return this.transactionsRepository.getAllByCategory(category);
    }
}
