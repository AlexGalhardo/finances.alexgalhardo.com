"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>UserDeleteByIdUseCase
});
class UserDeleteByIdUseCase {
    constructor(usersRepository){
        this.usersRepository = usersRepository;
    }
    async execute(user_id) {
        return this.usersRepository.deleteById(user_id);
    }
}
