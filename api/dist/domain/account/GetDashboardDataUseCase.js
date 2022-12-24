"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>GetDashboardDataUseCase
});
class GetDashboardDataUseCase {
    async execute(user_id) {
        return this.accountsRepository.getDashboardData(user_id);
    }
    constructor(accountsRepository){
        this.accountsRepository = accountsRepository;
    }
}
