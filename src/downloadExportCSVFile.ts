function jsonToCsv(transactions: any[]) {
    const header = Object.keys(transactions[0]);

    const headerString = header.join(",");

    const replacer = (_key: any, value: any) => value ?? "";

    const rowItems = transactions.map((row) =>
        header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(","),
    );

    const csv = [headerString, ...rowItems].join("\r\n");

    return csv;
}

export function dowloadExportCSVFile(element: HTMLButtonElement) {
    element.addEventListener("click", () => {
        if (localStorage.getItem("galhardo_finances")) {
            const csv = jsonToCsv(JSON.parse(localStorage.getItem("galhardo_finances")!).transactions);

            let dataUri = "data:text/csv;charset=utf-8," + csv;

            let exportFileDefaultName = "galhardo-finances.csv";

            element.setAttribute("href", dataUri);
            element.setAttribute("download", exportFileDefaultName);
        } else {
            alert(`There's no data to export for now!`);
        }
    });
}
