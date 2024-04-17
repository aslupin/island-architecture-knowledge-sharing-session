import { ClassAttributes, h } from 'preact';

// https://gist.github.com/developit/b8c82603cb7994bce430f87f3bfa509f
export function lazy(load: () => Promise<any>) {
  let component: any, promise: Promise<any>;

  return function Lazy(this: any, props: (h.JSX.DOMAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>) | null) {
    if (!promise) promise = load().then((m: { default: any; }) => component = m.default || m);
    if (!this.waiting) this.waiting = promise.then((c: any) => this.setState({c}));
    if (!component) throw promise;
    
    console.log('lazy-load');

    // h() is key to does this things
    return h(component, props);
  }
}

export function ErrorBoundary(props: { children: any; }) { return props.children; }
  ErrorBoundary.prototype.componentDidCatch = function (err: any) {
    if (err && err.then) this.__d = true;
};