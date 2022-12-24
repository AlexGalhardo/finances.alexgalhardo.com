"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>UserDeleteByIdUseCase
});
class UserDeleteByIdUseCase {
    async execute(userId) {
        return this.usersRepository.deleteById(userId);
    }
    constructor(usersRepository){
        this.usersRepository = usersRepository;
    }
}
