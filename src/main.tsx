/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>,
);
