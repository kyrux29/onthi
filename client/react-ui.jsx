import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

function ReactEnhancements() {
  return null;
}

const root = document.querySelector('#react-enhancements');
if (root) {
  const reactRoot = createRoot(root);
  flushSync(() => {
    reactRoot.render(<ReactEnhancements />);
  });
  window.dispatchEvent(new Event('exam-react-ready'));
}
