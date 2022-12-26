import { IAccountsRepository } from "../../ports/IAccountsRepository";

export default class GetDashboardDataUseCase {
    private readonly accountsRepository: IAccountsRepository;

    constructor(accountsRepository: IAccountsRepository) {
        this.accountsRepository = accountsRepository;
    }

    async execute(user_id: string) {
        return this.accountsRepository.getDashboardData(user_id);
    }
}
