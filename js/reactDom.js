import { data, execute, root } from './shared.js';

export function reactDomRender(data,timerLabel) {
    return execute(timerLabel, () => reactTable(data));
}

export function reactDomRenderNull() {
    return execute('ReactDOM.renderNull', () => ReactDOM.render(null, root));
}

function Row({
    row
}) {
    return /*#__PURE__*/React.createElement("div", {
        className: "row"
    }, row.map(text => /*#__PURE__*/React.createElement("div", {
        key: text,
        title: text
    }, text)));
}

function Table({
    rows
}) {
    return rows.map(row => /*#__PURE__*/React.createElement(Row, {
        key: row.toString(),
        row: row
    }));
}

function reactTable(data) {
    ReactDOM.render( /*#__PURE__*/React.createElement(Table, {
        rows: data
    }), root);
}