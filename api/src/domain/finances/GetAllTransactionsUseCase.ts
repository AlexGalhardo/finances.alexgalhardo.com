import { IFinancesRepository } from "../../ports/IFinancesRepository";

export default class GetAllTransactionsUseCase {
    private readonly financesRepository: IFinancesRepository;

    constructor(financesRepository: IFinancesRepository) {
        this.financesRepository = financesRepository;
    }

    async execute() {
        return await this.financesRepository.getAll();
    }
}
