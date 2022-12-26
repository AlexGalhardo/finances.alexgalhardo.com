import { IUsersRepository } from "../../ports/IUsersRepository";

interface ICustomerLoginParams {
    email: string;
    password: string;
}

export default class UserLoginUseCase {
    private readonly usersRepository: IUsersRepository;

    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ email, password }: ICustomerLoginParams) {
        return this.usersRepository.login(email, password);
    }
}
