import {Img, makeScene2D, Circle} from '@motion-canvas/2d';
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {all, createRef, spring, easeOutBounce} from '@motion-canvas/core';
import {Rect} from '@motion-canvas/2d/lib/components';
import logo from '../images/roundpork-youtube-logo.svg';
import logoWhite from '../images/roundpork-youtube-logo-all-white.svg';

export default makeScene2D(function* (view) {
	// Create anchors
	const circleRef = createRef<Circle>();
	const logoRef = createRef<Image>();
	const logoWhiteRef = createRef<Image>();
	const MySpring = {
  		mass: 1,
  		stiffness: 120,
  		damping: 10,
  		initialVelocity: 0,
	};
	// Add actors
	view.add(
		<>
			<Rect layout>
				<Circle
					ref={circleRef}
					width={0}
					height={0}
					fill="#e13238"
				/>
			</Rect>
			<Rect layout>
				<Img
					ref={logoWhiteRef}
					src={logoWhite}
					scale={0}
				/>
			</Rect>
			<Rect layout>
				<Img
					ref={logoRef}
					src={logo}
					scale={0}
				/>
			</Rect>
		</>,
	);
	
	// Animate anchors
	yield* logoRef().scale(0.6, 0.5);
	yield* logoRef().scale(0.5, 0.5, easeOutBounce);
	yield* logoRef().absoluteRotation(30, 0.2);
	yield* all(
		logoWhiteRef().scale(0.55, 0.2),
		spring(MySpring, 30, 0, 0.4, value => {
			logoRef().absoluteRotation(value);
			logoWhiteRef().absoluteRotation(value);
		}),
		circleRef().width(2500, 0.7),
		circleRef().height(2500, 0.7),
	);
	yield* waitUntil('next');
});

