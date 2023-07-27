/* eslint-disable jsx-a11y/no-autofocus */
'use client';
import { JSX, useEffect, useRef, useState } from 'react';

import { focusTrap } from '@/app/(components)/focus-trap';

export default function Main(): JSX.Element {
  const containerReference = useRef<HTMLDivElement>(null);
  const buttonReference = useRef<HTMLButtonElement>(null);
  const enterReference = useRef<HTMLDivElement>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleToggleDialog = (): void => {
    setIsDialogOpen(isDialogOpen_ => {
      return !isDialogOpen_;
    });
  };

  useEffect(() => {
    let timeoutId: Timeout;

    if (isDialogOpen) {
      if (containerReference.current) {
        buttonReference.current?.focus();
        focusTrap(containerReference.current);
      }
    } else {
      timeoutId = setTimeout((): void => {
        return enterReference.current?.focus();
      }, 100);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isDialogOpen]);

  return (
    <div className="relative">
      <div className="m-2 flex gap-2">
        <div className="h-52 w-52 border-2 p-2" role="link" tabIndex={0}>
          Tab over me!
        </div>
        <div className="h-52 w-52 border-2 p-2" role="link" tabIndex={0}>
          Tab over me!
        </div>
        <div
          className="h-52 w-52 border-2 p-2"
          ref={enterReference}
          role="link"
          tabIndex={0}
          onClick={(event): void => {
            event.stopPropagation();
            handleToggleDialog();
          }}
          onKeyUp={(event): void => {
            event.stopPropagation();
            if (event.key === 'Enter') {
              handleToggleDialog();
            }
          }}
        >
          Press enter!
        </div>
        <div className="h-52 w-52 border-2 p-2" role="link" tabIndex={0}>
          Some More Stuff
        </div>
        <div className="h-52 w-52 border-2 p-2" role="link" tabIndex={0}>
          Some More Stuff
        </div>
        <div className="h-52 w-52 border-2 p-2" role="link" tabIndex={0}>
          Some More Stuff
        </div>
      </div>
      {isDialogOpen && (
        <div
          className="absolute right-1/2 top-1/2 z-10 border-2 bg-white p-2"
          ref={containerReference}
        >
          <div>
            <button
              autoFocus
              className="m-2 bg-blue-500 p-2 text-white"
              ref={buttonReference}
              type="button"
              onClick={(event): void => {
                event.stopPropagation();
                handleToggleDialog();
              }}
              onKeyDown={(event): void => {
                event.stopPropagation();
                if (event.key === 'Enter') {
                  handleToggleDialog();
                }
              }}
            >
              Close me!
            </button>
          </div>
          <button className="m-2 bg-blue-500 p-2 text-white" type="button">
            Do something else I guess.
          </button>
        </div>
      )}
      <p>Is Open: {isDialogOpen}</p>
    </div>
  );
}
