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
    async execute(user_id, category, startDate, finalDate) {
        return this.transactionsRepository.getAllByCategory(user_id, category.toUpperCase(), startDate, finalDate);
    }
}
