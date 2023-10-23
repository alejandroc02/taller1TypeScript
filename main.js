"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
let seriesTbody = document.getElementById("series");
const seasonAverageElm = document.getElementById("promedio");
mostrarTabla(data_js_1.series);
let average = PromedioSeries(data_js_1.series);
seasonAverageElm.innerHTML = `${average}`;
function PromedioSeries(series) {
    let seasonAverage = 0;
    series.forEach((serie) => seasonAverage = seasonAverage + serie.seasons);
    seasonAverage = seasonAverage / series.length;
    return seasonAverage;
}
function mostrarTabla(series) {
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                            <td>${serie.title}</td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
