"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>GetAllTransactionsUseCase
});
class GetAllTransactionsUseCase {
    async execute(userId) {
        return this.transactionsRepository.getAll(userId);
    }
    constructor(transactionsRepository){
        this.transactionsRepository = transactionsRepository;
    }
}
