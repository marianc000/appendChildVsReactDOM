//import { reactDomRender, reactDomRenderNull,reactDomRenderNoClean } from './reactDom.js';
import { reactDomRender, reactDomRenderNull } from './reactDom.js';
import { appendNodeManyTimes, cleanWithReplaceChildren } from './appendNodeManyTimes.js';
import replaceChildren from './replaceChildren.js';
import { printResults, data, dataWithOneCellModified } from './shared.js';

function run() {
    const times = 10;
    let p = Promise.resolve().then(cleanWithReplaceChildren);

    for (let i = 0; i < times; i++) {
        p = p.then(() => appendNodeManyTimes(data, 'appendManyNodesToEmpty'))
            .then(cleanWithReplaceChildren);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(() => reactDomRender(data, 'reactDomRenderInEmpty'))
            .then(reactDomRenderNull);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(() => replaceChildren(data, 'replaceNodesBySameNodes'));
    }

    p.then(cleanWithReplaceChildren);

    for (let i = 0; i < times; i++) {
        p = p.then(() => reactDomRender(data, 'reactDomRenderSameNodes'));
    }

    p.then(reactDomRenderNull);

    for (let i = 0; i < times; i++) {
        p = p.then(() => replaceChildren(data, 'replaceNodesBySameNodesExceptOne1'))
            .then(() => replaceChildren(dataWithOneCellModified, 'replaceNodesBySameNodesExceptOne2'));
    }

    p.then(cleanWithReplaceChildren);

    for (let i = 0; i < times; i++) {
        p = p.then(() => reactDomRender(data, 'reactDomRenderSameNodesExceptOne1'))
            .then(() => reactDomRender(dataWithOneCellModified, 'reactDomRenderSameNodesExceptOne2'));
    }
    p.then(printResults);
}

document.querySelector('button').onclick = run;

