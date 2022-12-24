import { ITransactionsRepository } from "../../ports/ITransactionsRepository";

export default class GetAllTransactionsUseCase {
    private readonly transactionsRepository: ITransactionsRepository;

    constructor(transactionsRepository: ITransactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }

    async execute(user_id: string, category: string, startDate: string, finalDate: string) {
        return this.transactionsRepository.getAllByCategory(user_id, category.toUpperCase(), startDate, finalDate);
    }
}
