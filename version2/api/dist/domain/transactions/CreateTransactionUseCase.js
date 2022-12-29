"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>CreateTransactionUseCase
});
class CreateTransactionUseCase {
    constructor(transactionsRepository){
        this.transactionsRepository = transactionsRepository;
    }
    async execute(transactionObject) {
        return this.transactionsRepository.create(transactionObject);
    }
}
