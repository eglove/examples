'use client';
import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';

import { focusTrap } from './focus-trap';

export default function Main(): JSX.Element {
  const containerReference = useRef<HTMLDivElement>(null);
  const buttonReference = useRef<HTMLButtonElement>(null);
  const enterReference = useRef<HTMLDivElement>(null);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleToggleDialog = (): void => {
    setIsDialogOpen(isDialogOpen_ => {
      return !isDialogOpen_;
    });
  };

  useEffect(() => {
    if (isDialogOpen) {
      if (containerReference.current) {
        buttonReference.current?.focus();
        focusTrap(containerReference.current);
      }
    } else if (!isDialogOpen) {
      enterReference.current?.focus();
    }
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
          onKeyUp={(event): void => {
            if (event.key === 'Enter') {
              handleToggleDialog();
            }
          }}
          onMouseUp={(): void => {
            handleToggleDialog();
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
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className="absolute right-1/2 top-1/2 z-10 border-2 bg-white p-2"
          ref={containerReference}
          onKeyUp={(event): void => {
            if (event.key === 'Escape') {
              handleToggleDialog();
            }
          }}
        >
          <div>
            <button
              className="m-2 bg-blue-500 p-2 text-white"
              ref={buttonReference}
              type="button"
              onKeyUp={(event): void => {
                if (event.key === 'Enter') {
                  handleToggleDialog();
                }
              }}
              onMouseUp={(): void => {
                handleToggleDialog();
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
    </div>
  );
}
