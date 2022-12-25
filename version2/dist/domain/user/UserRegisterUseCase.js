"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>UserRegisterUseCase
});
class UserRegisterUseCase {
    async execute({ name , email , password  }) {
        return this.usersRepository.register({
            name,
            email,
            password
        });
    }
    constructor(usersRepository){
        this.usersRepository = usersRepository;
    }
}
