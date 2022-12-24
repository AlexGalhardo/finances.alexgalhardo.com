"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>GetAllTransactionsUseCase
});
class GetAllTransactionsUseCase {
    async execute(user_id, category, startDate, finalDate) {
        return this.transactionsRepository.getAllByCategory(user_id, category.toUpperCase(), startDate, finalDate);
    }
    constructor(transactionsRepository){
        this.transactionsRepository = transactionsRepository;
    }
}
