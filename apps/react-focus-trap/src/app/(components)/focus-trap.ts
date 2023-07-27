export function focusTrap(element: HTMLElement): void {
  const focusableEls = element.querySelectorAll(
    'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
  );
  const firstFocusableElement = focusableEls[0];
  const lastFocusableElement = focusableEls[focusableEls.length - 1];
  const KEYCODE_TAB = '9';

  element.addEventListener('keydown', event => {
    const isTabPressed = event.key === 'Tab' || event.key === KEYCODE_TAB;

    if (!isTabPressed) {
      return;
    }

    if (event.shiftKey) {
      /* shift + tab */ if (document.activeElement === firstFocusableElement) {
        if ('focus' in lastFocusableElement) {
          // @ts-expect-error moving
          lastFocusableElement.focus();
        }

        event.preventDefault();
      }
    } /* tab */ else if (document.activeElement === lastFocusableElement) {
      if ('focus' in firstFocusableElement) {
        // @ts-expect-error moving
        firstFocusableElement.focus();
      }

      event.preventDefault();
    }
  });
}
