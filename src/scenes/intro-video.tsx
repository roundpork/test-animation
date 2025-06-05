import {Video, makeScene2D} from '@motion-canvas/2d';
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {all, fadeTransition, Direction} from '@motion-canvas/core';
import {Rect} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import video from '../../videos/test-video.mp4';

export default makeScene2D(function* (view) {
        // Create anchors
        const videoRef = createRef<Video>();

        // Add actors
        view.add(
                <>
			<Rect width={1920} height={1080} fill="#000">
			</Rect>
                        <Rect layout>
                                <Video
                                        ref={videoRef}
                                        src={video}
                                />
                        </Rect>
                </>,
        );

        // Animate anchors
	videoRef().play();
	yield* fadeTransition(1.0);
        yield* waitUntil('next');
        yield* videoRef().parent().position.y(-1400, 1);
});
