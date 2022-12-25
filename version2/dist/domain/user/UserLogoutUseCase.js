"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>UserLogoutUseCase
});
class UserLogoutUseCase {
    async execute(userId) {
        return this.usersRepository.logout(userId);
    }
    constructor(usersRepository){
        this.usersRepository = usersRepository;
    }
}
