"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    TransactionTypeEnum: ()=>TransactionTypeEnum,
    TransactionCategoryEnum: ()=>TransactionCategoryEnum
});
var TransactionTypeEnum;
(function(TransactionTypeEnum) {
    TransactionTypeEnum["DEPOSIT"] = "DEPOSIT";
    TransactionTypeEnum["EXPENSE"] = "EXPENSE";
    TransactionTypeEnum["INVESTMENT"] = "INVESTMENT";
})(TransactionTypeEnum || (TransactionTypeEnum = {}));
var TransactionCategoryEnum;
(function(TransactionCategoryEnum) {
    TransactionCategoryEnum["WAGE"] = "WAGE";
    TransactionCategoryEnum["FREELANCER"] = "FREELANCER";
    TransactionCategoryEnum["INVESTMENT_PROFIT"] = "INVESTMENT_PROFIT";
    TransactionCategoryEnum["FOOD"] = "FOOD";
    TransactionCategoryEnum["SUBSCRIPTIONS"] = "SUBSCRIPTIONS";
    TransactionCategoryEnum["SHOP"] = "SHOP";
    TransactionCategoryEnum["ENTERTAINMENT"] = "ENTERTAINMENT";
    TransactionCategoryEnum["TRANSPORT"] = "TRANSPORT";
    TransactionCategoryEnum["HOUSE"] = "HOUSE";
    TransactionCategoryEnum["SERVICES"] = "SERVICES";
    TransactionCategoryEnum["FIXED_INCOME"] = "FIXED_INCOME";
    TransactionCategoryEnum["VARIABLE_INCOME"] = "VARIABLE_INCOME";
    TransactionCategoryEnum["CRIPTOCURRENCIES"] = "CRIPTOCURRENCIES";
})(TransactionCategoryEnum || (TransactionCategoryEnum = {}));
