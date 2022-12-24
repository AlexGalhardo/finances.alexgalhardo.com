"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>GetAllTransactionsUseCase
});
class GetAllTransactionsUseCase {
    async execute() {
        return await this.transactionsRepository.getAll();
    }
    constructor(transactionsRepository){
        this.transactionsRepository = transactionsRepository;
    }
}
