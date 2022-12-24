"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>CreateTransactionUseCase
});
class CreateTransactionUseCase {
    async execute({ type , category , description , total  }) {
        return await this.transactionsRepository.create({
            type,
            category,
            description,
            total
        });
    }
    constructor(transactionsRepository){
        this.transactionsRepository = transactionsRepository;
    }
}
