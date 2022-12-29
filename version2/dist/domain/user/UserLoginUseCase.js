"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>UserLoginUseCase
});
class UserLoginUseCase {
    constructor(usersRepository){
        this.usersRepository = usersRepository;
    }
    async execute({ email , password  }) {
        return this.usersRepository.login(email, password);
    }
}
