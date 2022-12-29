import { IUsersRepository } from "../../ports/IUsersRepository";

export default class UserLogoutUseCase {
    private readonly usersRepository: IUsersRepository;

    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute(user_id: string) {
        return this.usersRepository.logout(user_id);
    }
}
