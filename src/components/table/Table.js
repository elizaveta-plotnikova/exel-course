import { ExcelComponent } from './../../core/ExcelComponent';
import { createTable } from './table.template';
import { tableResize } from './table.resize';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        });
    }

    toHTML() {
        return createTable();
    }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            tableResize(this.$root);
        }
    }
}