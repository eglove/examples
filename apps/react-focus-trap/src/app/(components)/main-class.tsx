'use client';
import type { ReactNode } from 'react';
import { Component, createRef } from 'react';

import { focusTrap } from './focus-trap';

export default class MainClass extends Component {
  private readonly modalContainerRef = createRef<HTMLDivElement>();
  private readonly closeButtonRef = createRef<HTMLButtonElement>();
  private readonly enterRef = createRef<HTMLDivElement>();

  public state = {
    isDialogOpen: false,
  };

  private readonly handleTrapFocus = (): void => {
    if (this.modalContainerRef.current) {
      this.closeButtonRef.current?.focus();
      focusTrap(this.modalContainerRef.current);
    }
  };

  private readonly handleEnterRefFocus = (): void => {
    this.enterRef.current?.focus();
  };

  private readonly handleToggleDialog = (): void => {
    this.setState(
      previousState => {
        return {
          ...previousState,
          // @ts-expect-error ts doesn't get class components
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          isDialogOpen: !previousState.isDialogOpen,
        };
      },
      () => {
        if (this.state.isDialogOpen) {
          this.handleTrapFocus();
        } else {
          this.handleEnterRefFocus();
        }
      },
    );
  };

  public render(): ReactNode {
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
            onKeyUp={(event): void => {
              if (event.key === 'Enter') {
                this.handleToggleDialog();
              }
            }}
            onMouseUp={(): void => {
              this.handleToggleDialog();
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
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            className="absolute right-1/2 top-1/2 z-10 border-2 bg-white p-2"
            ref={this.modalContainerRef}
            onKeyUp={(event): void => {
              if (event.key === 'Escape') {
                this.handleToggleDialog();
              }
            }}
          >
            <div>
              <button
                className="m-2 bg-blue-500 p-2 text-white"
                ref={this.closeButtonRef}
                type="button"
                onKeyUp={(event): void => {
                  if (event.key === 'Enter') {
                    this.handleToggleDialog();
                  }
                }}
                onMouseUp={(): void => {
                  this.handleToggleDialog();
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
