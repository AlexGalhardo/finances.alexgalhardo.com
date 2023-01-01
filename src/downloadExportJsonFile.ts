export function dowloadExportJsonFile(element: HTMLButtonElement) {
    element.addEventListener("click", () => {
        if (localStorage.getItem("galhardo_finances")) {
            let dataStr = localStorage.getItem("galhardo_finances")!;
            let dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

            let exportFileDefaultName = "galhardo-finances.json";

            element.setAttribute("href", dataUri);
            element.setAttribute("download", exportFileDefaultName);
        } else {
            alert(`There's no data to export for now!`);
        }
    });
}
