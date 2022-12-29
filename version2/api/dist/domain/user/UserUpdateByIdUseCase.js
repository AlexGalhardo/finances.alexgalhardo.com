"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>UserUpdateByIdUseCase
});
class UserUpdateByIdUseCase {
    constructor(usersRepository){
        this.usersRepository = usersRepository;
    }
    async execute({ id , name , email , password  }) {
        return this.usersRepository.updateById({
            id,
            name,
            email,
            password
        });
    }
}
