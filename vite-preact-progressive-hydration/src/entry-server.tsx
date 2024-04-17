import render from 'preact-render-to-string';
import { h } from 'preact';

import { App } from './app.tsx'
import './index.css'

interface IRenderToStringProps {
  path: string
}

// pre-rendered to make fast first contentful paint (FCP)
export const renderToString = (props: IRenderToStringProps) => {
  console.info('h(): render to Virtual DOM Element \n', h(App, props));
  console.info('render: render JSX/VDOM to string/HTML \n', render(h(App, props)));

  return render(h(App, props))
}
