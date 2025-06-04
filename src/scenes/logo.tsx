import {Img, makeScene2D} from '@motion-canvas/2d';
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {all} from '@motion-canvas/core';
import {Rect} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import logo from '../images/roundpork-youtube-logo.png';

export default makeScene2D(function* (view) {
	// Create anchors
	const logoRef = createRef<Image>();

	// Add actors
	view.add(
		<>
			<Rect layout>
				<Img
					ref={logoRef}
					src={logo}
					scale={0}
				/>
			</Rect>
		</>,
	);
	
	// Animate actors
	yield logoRef().scale(1.0, 1);
	yield* waitUntil('next');
	yield* all(
		logoRef().parent().position.y(-1400, 1)
	)
});

