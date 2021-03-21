import { execute, root } from './shared.js';
import { tableAsRowNodes } from './appendNodeManyTimes.js';

export default function replaceChildren(data,timerLabel) {
    return execute(timerLabel, () => root.replaceChildren(...tableAsRowNodes(data)));
}

