import { IUpdateUserParams, IUsersRepository } from "../../ports/IUsersRepository";

export default class UserUpdateByIdUseCase {
    private readonly usersRepository: IUsersRepository;

    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ id, name, email, password }: IUpdateUserParams) {
        return this.usersRepository.updateById({
            id,
            name,
            email,
            password,
        });
    }
}
