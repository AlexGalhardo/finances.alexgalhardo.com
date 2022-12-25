"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>DeleteTransactionByIdUseCase
});
class DeleteTransactionByIdUseCase {
    async execute(userId) {
        return this.transactionRepository.deleteById(userId);
    }
    constructor(transactionRepository){
        this.transactionRepository = transactionRepository;
    }
}
