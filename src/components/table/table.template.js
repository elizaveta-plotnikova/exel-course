const CODE = {
    A: 65,
    Z: 90
};
const infoCollsCount = CODE.Z - CODE.A + 1;

function createInfoRow() {
    const infoChars = [];
    for (let i = CODE.A; i < CODE.Z + 1; i++) {
        infoChars.push(
           `<div class="column" data-type="resizable" data-col="${i - CODE.A}">
                ${String.fromCharCode(i)}
                <div class="column-resize" data-resize="col"></div>
           </div>`
        );
    }
    return `<div class="row">
                <div class="row-info"></div>
                <div class="row-data">
                    ${infoChars.join('')}
                </div>
            </div>`;
}

function createCells(cellCount) {
    const cells = [];
    for (let i = 0; i < cellCount; i++) {
        cells.push(
            `<div class="cell" data-col="${i}" contenteditable></div>`
        );
    }
    return `<div class="row-data">
                ${cells.join('')}
            </div>`;
}

function createDataRow(rowsCount = 20) {
    const dataRows = [];
    for (let i = 0; i < rowsCount; i++) {
        dataRows.push(
            `<div class="row" data-row="${i}" data-type="resizable">
                <div class="row-info">
                    ${i + 1}
                    <div class="row-resize" data-resize="row"></div>
                </div>
                ${createCells(infoCollsCount)}
            </div>`
        );
    }
    return dataRows.join('');
}

export function createTable(rowsCount = 5) {
    return createInfoRow() + createDataRow();
}
