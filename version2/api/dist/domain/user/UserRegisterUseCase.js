"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>UserRegisterUseCase
});
class UserRegisterUseCase {
    constructor(usersRepository){
        this.usersRepository = usersRepository;
    }
    async execute({ name , email , password  }) {
        return this.usersRepository.register({
            name,
            email,
            password
        });
    }
}
