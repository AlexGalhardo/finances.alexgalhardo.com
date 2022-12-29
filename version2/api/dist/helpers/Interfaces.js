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
    TransactionCategoryEnum: ()=>TransactionCategoryEnum,
    HttpStatusCodeEnum: ()=>HttpStatusCodeEnum
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
    TransactionCategoryEnum["OTHERS"] = "OTHERS";
})(TransactionCategoryEnum || (TransactionCategoryEnum = {}));
var HttpStatusCodeEnum;
(function(HttpStatusCodeEnum) {
    HttpStatusCodeEnum[HttpStatusCodeEnum["OK"] = 200] = "OK";
    HttpStatusCodeEnum[HttpStatusCodeEnum["CREATED"] = 201] = "CREATED";
    HttpStatusCodeEnum[HttpStatusCodeEnum["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCodeEnum[HttpStatusCodeEnum["NOT_AUTHORIZED"] = 401] = "NOT_AUTHORIZED";
    HttpStatusCodeEnum[HttpStatusCodeEnum["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCodeEnum[HttpStatusCodeEnum["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatusCodeEnum || (HttpStatusCodeEnum = {}));
