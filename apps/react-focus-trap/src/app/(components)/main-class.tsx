'use client';
import { Component, createRef, ReactNode } from 'react';

import { focusTrap } from '@/app/(components)/focus-trap';

export default class MainClass extends Component {
  containerRef = createRef<HTMLDivElement>();
  buttonRef = createRef<HTMLButtonElement>();
  enterRef = createRef<HTMLDivElement>();

  state = {
    isDialogOpen: false,
  };

  handleTrapFocus = (): void => {
    if (this.containerRef.current) {
      this.buttonRef.current?.focus();
      focusTrap(this.containerRef.current);
    }
  };

  handleEnterRefFocus = (): void => {
    this.enterRef.current?.focus();
  };

  handleToggleDialog = (): void => {
    this.setState(
      previousState => {
        return {
          ...previousState,
          // @ts-expect-error ts doesn't get class components
          isDialogOpen: !previousState.isDialogOpen,
        };
      },
      () => {
        if (this.state.isDialogOpen) {
          this.handleTrapFocus();
        } else {
          setTimeout(this.handleEnterRefFocus, 100);
        }
      },
    );
  };

  render(): ReactNode {
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
            ref={this.enterRef}
            role="link"
            tabIndex={0}
            onClick={(event): void => {
              event.stopPropagation();
              this.handleToggleDialog();
            }}
            onKeyUp={(event): void => {
              event.stopPropagation();
              if (event.key === 'Enter') {
                this.handleToggleDialog();
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
        {this.state.isDialogOpen && (
          <div
            className="absolute right-1/2 top-1/2 z-10 border-2 bg-white p-2"
            ref={this.containerRef}
          >
            <div>
              <button
                className="m-2 bg-blue-500 p-2 text-white"
                ref={this.buttonRef}
                type="button"
                onClick={(event): void => {
                  event.stopPropagation();
                  this.handleToggleDialog();
                }}
                onKeyDown={(event): void => {
                  event.stopPropagation();
                  if (event.key === 'Enter') {
                    this.handleToggleDialog();
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
        <p>Is Open: {this.state.isDialogOpen.toString()}</p>
      </div>
    );
  }
}
