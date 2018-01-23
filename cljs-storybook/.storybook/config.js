import { configure } from '@storybook/react';

// automatically import all files ending in *_stories.js
const req = require.context('../out', true, /_stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
