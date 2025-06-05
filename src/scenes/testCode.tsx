import {makeScene2D, Code, word, insert} from '@motion-canvas/2d';
import {Rect} from '@motion-canvas/2d/lib/components'
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {slideTransition} from '@motion-canvas/core/lib/transitions';
import {createRef, Direction, DEFAULT} from '@motion-canvas/core'

export default makeScene2D(function* (view) {
	// Add actor
	const code = createRef<CodeBlock>();

	// Add actor to scene
	view.add(
		<>
			<Rect layout>
				<Code
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
	yield* code().code.edit(1.2)`function example() {${insert(`
	const number = 7;`)}
};`;
	yield* waitUntil('name_radius');
	yield* code().selection(word(1, 1, 17), 0.3);
	yield* waitUntil('name_3');
	yield* code().selection(word(1, 16, 1), 0.3);
	yield* waitUntil('area_signal');
	yield* code().selection(DEFAULT, 0.6);
	yield* code().code.edit(1.2)`function example() {
	const number = 7;${insert(`
	const area = createSignal();`)}
};`;
  	yield* waitUntil('callback');
  	yield* code().code.edit(1.2)`function example() {
	const number = 7;
	const area = createSignal(${insert(`() => Math.PI * radius() * radius()`)});
};`;
	yield* waitUntil('invoke');
});
