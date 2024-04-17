import { hydrate } from 'preact'
import { App } from './app.tsx'

import './index.css'

console.log('hydrate !!')

console.time('hydrate')
hydrate(<App />, document.getElementById('app') as HTMLElement)
console.timeEnd('hydrate')
