import {makeScene2D} from '@motion-canvas/2d';
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {all} from '@motion-canvas/core';
import {Txt, Rect} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {linear} from '@motion-canvas/core/lib/tweening';

export default makeScene2D(function* (view) {
	// Create actors
	const label = createRef<Txt>();

	// Add actors
	view.add(
		<>
			<Rect layout>
				<Txt
					ref={label}
					fontSize={120}
					lineHeight={120}
					fontFamilty={'JetBrains Mono'}
					fill={'rgba(255, 255, 255, 1.0)'}
				/>
			</Rect>
		</>,
	);
	
	// Animate actors
	yield label().text('HELLO', 1, linear);
	yield* waitUntil('next');
	yield* all(
		label().parent().position.y(-1400, 1)
	)
});

