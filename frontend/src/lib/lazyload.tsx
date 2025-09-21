/* ESLINT */
import { lazy, Suspense } from "react";
interface Options {
  fallback: React.ReactNode;
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never;
export const lazyLoad = <
  T extends Promise<any>,
  U extends React.ComponentType<any>
>(
  importFn: () => T,
  selectorFn?: (s: Unpromisify<T>) => U,
  options: Options = { fallback: null }
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFn;
  if (selectorFn) {
    lazyFactory = (): Promise<{ default: U }> =>
      importFn().then((module: Unpromisify<T>) => ({
        default: selectorFn(module),
      }));
  }
  const LazyComponent = lazy(lazyFactory);
  return (props: React.ComponentProps<U>): JSX.Element => (
    <Suspense fallback={options.fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
