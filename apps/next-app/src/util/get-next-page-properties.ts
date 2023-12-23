import { isNil } from '@ethang/util/data';

export function getNextPageProperties<T>(cacheKey: string) {
  if (typeof document === 'undefined') {
    return;
  }

  const element = document.querySelector('#__NEXT_DATA__');

  if (isNil(element)) {
    return;
  }

  const content = element.textContent;

  if (isNil(content)) {
    return;
  }

  return JSON.parse(content).props.pageProps[cacheKey] as T;
}
