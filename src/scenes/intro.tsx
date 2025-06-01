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
			<Rect layout fill={'#141414'} padding={[30, 40, 20]} radius={8}>
				<Txt
					ref={label}
					fontSize={120}
					lineHeight={120}
					fontFamilty={'JetBrains Mono'}
					fill={'rgba(255, 255, 255, 0.6)'}
				/>
			</Rect>
		</>,
	);
	
	// Animate actors
	yield label().text('HELLO', 1, linear);
	yield* waitUntil('next'); // you drag this in editor to set how long we wait till we go down
	yield* all(
		label().parent().position.y(-1400, 1)
	)
});
