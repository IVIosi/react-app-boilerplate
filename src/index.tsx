import React from 'react';
import ReactDOM from 'react-dom';

import Hello from '@routes/hello';

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('root'),
);
