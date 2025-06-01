import {makeProject} from '@motion-canvas/core';

import audio from './audio/voice.mp3'
import intro from './scenes/intro?scene'

export default makeProject({
  scenes: [intro],
  audio: audio,
});
