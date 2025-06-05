import {makeScene2D, Code, word, insert} from '@motion-canvas/2d';
import {Rect} from '@motion-canvas/2d/lib/components'
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {slideTransition} from '@motion-canvas/core/lib/transitions';
import {all, createRef, Direction} from '@motion-canvas/core'

export default makeScene2D(function* (view) {
	// Add actor
	const code = createRef<Code>();

	// Add actor to scene
	view.add(
		<>
			<Rect layout>
				<Code
					ref={code}
					fontSize={24}
					lineHeight={36}
					fontFamilty={'JetBrains Mono'}
					code={`.
├── audio
│   └── voice.mp3
├── images
│   ├── roundpork-youtube-logo.png
│   └── roundpork-youtube-logo.svg
├── motion-canvas.d.ts
├── project.meta
├── project.ts
├── scenes
│   ├── example.meta
│   ├── example.tsx
│   ├── intro.meta
│   ├── intro.tsx
│   ├── intro-video.meta
│   ├── intro-video.tsx
│   ├── logo.meta
│   ├── logo.tsx
│   └── testCode.tsx
└── videos
    └── test-video.mp4`}
				/>
			</Rect>
		</>,
	);

	// Animate
	yield* slideTransition(Direction.Bottom, 1);
	yield* waitUntil('signal');
	yield* all(
	code().selection(word(3, 8, 9), 1.2),
	code().code.edit(1.2)`.
├── audio
│   └── voice.mp3${insert(`
│   └── voice.mp3`)}
├── images
│   ├── roundpork-youtube-logo.png
│   └── roundpork-youtube-logo.svg
├── motion-canvas.d.ts
├── project.meta
├── project.ts
├── scenes
│   ├── example.meta
│   ├── example.tsx
│   ├── intro.meta
│   ├── intro.tsx
│   ├── intro-video.meta
│   ├── intro-video.tsx
│   ├── logo.meta
│   ├── logo.tsx
│   └── testCode.tsx
└── videos
    └── test-video.mp4`,
	);
	yield* waitUntil('name_radius');
});

