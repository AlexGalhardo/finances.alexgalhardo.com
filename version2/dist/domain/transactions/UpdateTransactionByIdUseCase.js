"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>GetAllTransactionsUseCase
});
class GetAllTransactionsUseCase {
    constructor(transactionsRepository){
        this.transactionsRepository = transactionsRepository;
    }
    async execute(transactionObject) {
        return this.transactionsRepository.updateById(transactionObject);
    }
}
