"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>UserUpdateByIdUseCase
});
class UserUpdateByIdUseCase {
    async execute({ id , name , email , password  }) {
        return this.usersRepository.updateById({
            id,
            name,
            email,
            password
        });
    }
    constructor(usersRepository){
        this.usersRepository = usersRepository;
    }
}
