"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>GetAllTransactionsUseCase
});
class GetAllTransactionsUseCase {
    async execute(transactionObject) {
        return this.transactionsRepository.updateById(transactionObject);
    }
    constructor(transactionsRepository){
        this.transactionsRepository = transactionsRepository;
    }
}
