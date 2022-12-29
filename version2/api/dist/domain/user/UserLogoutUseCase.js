"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>UserLogoutUseCase
});
class UserLogoutUseCase {
    constructor(usersRepository){
        this.usersRepository = usersRepository;
    }
    async execute(user_id) {
        return this.usersRepository.logout(user_id);
    }
}
