import { ITransactionsRepository } from "../../ports/ITransactionsRepository";

export default class GetAllTransactionsUseCase {
    private readonly transactionsRepository: ITransactionsRepository;

    constructor(transactionsRepository: ITransactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }

    async execute(user_id: string) {
        return this.transactionsRepository.getAll(user_id);
    }
}
