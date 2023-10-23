import { Serie } from "./Serie.js";

import { series } from './data.js'; 

let seriesTbody: HTMLElement = document.getElementById("series")!;
const seasonAverageElm: HTMLElement = document.getElementById("promedio")!;

mostrarTabla(series);

let average = PromedioSeries(series)
seasonAverageElm.innerHTML = `${average}`

function PromedioSeries(series: Serie[]): number {
    let seasonAverage: number = 0;
    series.forEach((serie) => seasonAverage = seasonAverage + serie.seasons);
    seasonAverage = seasonAverage/series.length;
    return seasonAverage;
}

function mostrarTabla(series: Serie[]): void {
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                            <td>${serie.title}</td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}


