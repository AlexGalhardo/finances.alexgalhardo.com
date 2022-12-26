export function maskInputToBrazilReal(e: any) {
    let inputValue = e.target.value.replace(/\D/g, "");
    inputValue = (inputValue / 100).toFixed(2) + "";
    inputValue = inputValue.replace(".", ",");
    inputValue = inputValue.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    inputValue = inputValue.replace(/(\d)(\d{3}),/g, "$1.$2,");
    e.target.value = `R$ ${inputValue}`;
}

export function transformToBRL(amount: number) {
    return (amount / 100).toLocaleString("pt-br", { minimumFractionDigits: 2 });
}

export function transformToFixedTwo(value: number) {
    return value.toFixed(2);
}

export function getDateTimeBrazil() {
    let date = new Date().toLocaleDateString("pt-BR");
    let time = new Date().toLocaleTimeString("pt-BR");
    return `${date} ${time}`;
}

export function transformStringInputValueMaskToNumber(value: string): number {
    value = value.replace("R$ ", "");
    value = value.replace(",", "");
    value = value.replace(".", "");
    return Number(value);
}

export function getTransactionCategoryIcon(category: string) {
    switch (category) {
        case "WAGE":
            return `<i class="bi bi-building-fill-add"></i>`;
        case "FREELANCER":
            return `<i class="bi bi-file-earmark-medical"></i>`;
        case "FOOD":
            return `<i class="bi bi-apple"></i>`;
        case "SUBSCRIPTIONS":
            return `<i class="bi bi-bookmark-star"></i>`;
        case "SHOP":
            return `<i class="bi bi-shop"></i>`;
        case "ENTERTAINMENT":
            return `<i class="bi bi-controller"></i>`;
        case "TRANSPORT":
            return `<i class="bi bi-car-front-fill"></i>`;
        case "HOUSE":
            return `<i class="bi bi-house-door"></i>`;
        case "SERVICES":
            return `<i class="bi bi-tools"></i>`;
        case "FIXED_INCOME":
            return `<i class="bi bi-graph-up-arrow"></i>`;
        case "VARIABLE_INCOME":
            return `<i class="bi bi-graph-down-arrow"></i>`;
        case "CRIPTOCURRENCIES":
            return `<i class="bi bi-currency-bitcoin"></i>`;
        case "OTHERS":
            return `<i class="bi bi-gem"></i>`;
        default:
            return "";
    }
}
