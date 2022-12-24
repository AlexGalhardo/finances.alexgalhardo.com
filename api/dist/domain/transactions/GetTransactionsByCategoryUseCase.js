"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>GetAllTransactionsUseCase
});
class GetAllTransactionsUseCase {
    async execute(category) {
        return this.transactionsRepository.getAllByCategory(category);
    }
    constructor(transactionsRepository){
        this.transactionsRepository = transactionsRepository;
    }
}
