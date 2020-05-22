import React, { FC } from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello: FC<HelloProps> = ({ compiler, framework }) => (
  <h1>
    Hello from {compiler} and {framework}!
  </h1>
);

export default Hello;
