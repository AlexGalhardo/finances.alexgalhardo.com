import { IUsersRepository } from "../../ports/IUsersRepository";

export default class UserDeleteByIdUseCase {
    private readonly usersRepository: IUsersRepository;

    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute(user_id: string) {
        return this.usersRepository.deleteById(user_id);
    }
}
