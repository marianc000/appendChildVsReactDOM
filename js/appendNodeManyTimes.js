import { execute, root } from './shared.js';

function rowNode(row) {
    const rowDiv = document.createElement("div");
    rowDiv.className = 'row';
    row.forEach(text => {
        const cell = document.createElement("div");
        cell.title = text;
        cell.appendChild(document.createTextNode(text));
        rowDiv.appendChild(cell);
    });
    return rowDiv;
}

export function tableAsRowNodes(rows) {
    return rows.map(row => rowNode(row));
}

export function appendNodeManyTimes(data, timerLabel) {
    return execute(timerLabel,
        () => tableAsRowNodes(data).forEach(row => root.appendChild(row)));
}

export function cleanWithReplaceChildren() {
    return execute('cleanWithReplaceChildren', () => root.replaceChildren());
}

