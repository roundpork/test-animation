import {makeProject} from '@motion-canvas/core';

import audio from './audio/voice.mp3'
import introVideo from './scenes/intro-video?scene'
import testDirTree from './scenes/testDirTree?scene'
import intro from './scenes/intro?scene'
import logo from './scenes/logo?scene'
import testCode from './scenes/testCode.tsx'
import {Code, LezerHighlighter} from '@motion-canvas/2d';
import {parser} from '@lezer/javascript';

Code.defaultHighlighter = new LezerHighlighter(parser);
export default makeProject({
  scenes: [logo, introVideo, intro, testDirTree, testCode],
  audio: audio,
});
