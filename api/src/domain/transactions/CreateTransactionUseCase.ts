import { ITransactionsRepository } from "../../ports/ITransactionsRepository";

export default class CreateTransactionUseCase {
    private readonly transactionsRepository: ITransactionsRepository;

    constructor(transactionsRepository: ITransactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }

    async execute({ type, category, description, total }) {
        return await this.transactionsRepository.create({
            type,
            category,
            description,
            total,
        });
    }
}
