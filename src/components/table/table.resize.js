import { $ } from '../../core/dom';

export function tableResize($root) {
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.getCoordinates();
    const type = $resizer.data.resize;
    const sideProp = type === 'col' ? 'height' : 'width';
    const excelDOM = document.getElementsByClassName('excel__table')[0];
    const resizerLenght = type === 'col'
        ? excelDOM.offsetHeight
        : excelDOM.offsetWidth;
    let value;

    $resizer.css({
        opacity: 1,
        [sideProp]: resizerLenght + 'px',
        zIndex: 10
    });

    document.body.style.userSelect = 'none';

    document.onmousemove = (e) => {
        if (type === 'col') {
            const delta = e.pageX - coords.right;
            value = coords.width + delta;
            $resizer.css({right: -delta + 'px'});
        } else {
            const delta = e.pageY - coords.bottom;
            value = coords.height + delta;
            $resizer.css({
                bottom: -delta + 'px'
            });
        }
    };

    document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
        document.body.style.userSelect = 'initial';

        if (type === 'col') {
            $parent.css({
                width: value + 'px'
            });
            $root.findAll(`[data-col="${$parent.data.col}"]`)
                .forEach((el) => el.style.width = value + 'px');
        } else {
            $parent.css({
                height: value + 'px'
            });
        }

        $resizer.css({
            opacity: '',
            bottom: '',
            right: ''
        });
    };
}