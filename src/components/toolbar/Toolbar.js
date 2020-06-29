import { ExcelComponent } from './../../core/ExcelComponent';

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar';

    toHTML() {
        return `
        <div class="toolbar__buttons">
        <div class="button">
            <span class="material-icons">
                format_bold
            </span>
        </div>
        <div class="button">
            <span class="material-icons">
                format_italic
            </span>
        </div>
        <div class="button">
            <span class="material-icons">
                format_underlined
            </span>
        </div>
        <div class="button">
            <span class="material-icons">
                format_align_left
            </span>
        </div>
        <div class="button">
            <span class="material-icons">
                format_align_justify
            </span>
        </div>
        <div class="button">
            <span class="material-icons">
                format_align_right
            </span>
        </div>
    </div>
        `;
    }
}