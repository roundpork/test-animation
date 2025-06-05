import {makeScene2D} from '@motion-canvas/2d';
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {all, slideTransition, Direction} from '@motion-canvas/core';
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
				>
					MAKE AUDIO FILE
				</Txt>
			</Rect>
		</>,
	);
	
	// Animate actors
	yield* slideTransition(Direction.Bottom, 1);
	yield* waitUntil('next');
	yield* label().parent().position.y(-1400, 1);
});

