import {makeScene2D} from '@motion-canvas/2d';
import {Rect} from '@motion-canvas/2d/lib/components'
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {slideTransition} from '@motion-canvas/core/lib/transitions';
import {createRef} from '@motion-canvas/core/lib/utils'
import {CodeBlock, edit, insert, word, lines} from '@motion-canvas/2d/lib/components/CodeBlock';
import {Direction} from '@motion-canvas/core/lib/types';

export default makeScene2D(function* (view) {
	// Add actor
	const code = createRef<CodeBlock>();

	// Add actor to scene
	view.add(
		<>
			<Rect layout>
				<CodeBlock
					ref={code}
					fontSize={24}
					lineHeight={36}
					fontFamilty={'JetBrains Mono'}
					code={`\
function example() {

};`}
				/>
			</Rect>
		</>,
	);

	// Animate
	yield* slideTransition(Direction.Bottom, 1);
	yield* waitUntil('signal');
	yield* code().edit(0.8)`function example() {
${insert(`	const number = 7;`)}
};`;

	yield* waitUntil('name_radius');
	yield* code().selection(word(1, 1, 17), 0.3);
	yield* waitUntil('name_3');
	yield* code().selection(word(1, 16, 1), 0.3);
	yield* waitUntil('area_signal');
	yield* code().edit(1.2)`function example() {
	const number = 7;${insert(`
	const area = createSignal();`)}
};`;
  	yield* waitUntil('callback');
  	yield* code().edit(1.2)`function example() {
	const number = 7;
	const area = createSignal(${insert(`() => Math.PI * radius() * radius()`)});
};`;
	yield* waitUntil('invoke');
});

