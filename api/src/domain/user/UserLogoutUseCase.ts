import { IUsersRepository } from "../../ports/IUsersRepository";

export default class UserLogoutUseCase {
    private readonly usersRepository: IUsersRepository;

    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute(userId: string) {
        return this.usersRepository.logout(userId);
    }
}
