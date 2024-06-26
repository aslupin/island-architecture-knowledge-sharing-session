import { useState } from 'preact/hooks'

import preactLogo from '../assets/preact.svg'
import viteLogo from '/vite.svg'

import './pageI.css'

import LowPriorityInteractive from './low-priority-interactive';

export default function PageI() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          {' '}
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank" rel="noreferrer">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Page 1 ::: Vite + Preact</h1>
      <div class="card">
        { count }
        <button onClick={() => setCount((count) => count + 1)}>
          Important Button 
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
        <LowPriorityInteractive />
    </>
  )
}