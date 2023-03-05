function merge_cells() {
    for (let i = dict[0].length; i > 0; i--) {
        var headerCell, table, row, firstCell = 0

        headerCell = null;
        table = document.getElementById("table2-content");

        for (row of table.rows) {
            firstCell = row.cells[i];

            if (headerCell === null || firstCell.innerText !== headerCell.innerText || firstCell.innerHTML !== headerCell.innerHTML) {
                headerCell = firstCell;
            } else {
                headerCell.rowSpan++;
                firstCell.remove();
            }
        }
    }
}

merge_cells()