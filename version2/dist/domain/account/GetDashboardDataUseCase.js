"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>GetDashboardDataUseCase
});
class GetDashboardDataUseCase {
    constructor(accountsRepository){
        this.accountsRepository = accountsRepository;
    }
    async execute(user_id) {
        return this.accountsRepository.getDashboardData(user_id);
    }
}
