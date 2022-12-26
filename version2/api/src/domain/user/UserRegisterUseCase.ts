import { IUsersRepository } from "../../ports/IUsersRepository";

interface IUserRegisterParams {
    name: string;
    email: string;
    password: string;
}

export default class UserRegisterUseCase {
    private readonly usersRepository: IUsersRepository;

    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ name, email, password }: IUserRegisterParams) {
        return this.usersRepository.register({
            name,
            email,
            password,
        });
    }
}
