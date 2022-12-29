"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>DeleteTransactionByIdUseCase
});
class DeleteTransactionByIdUseCase {
    constructor(transactionRepository){
        this.transactionRepository = transactionRepository;
    }
    async execute(user_id) {
        return this.transactionRepository.deleteById(user_id);
    }
}
