'use client';
import { DateTime } from 'luxon';
import { JSX } from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import { twMerge } from 'tailwind-merge';

function getTimerBackgroundColor(
  completed: boolean,
  days: number,
  hours: number,
): string {
  if (completed) {
    return 'bg-red-600';
  }

  if (days === 0 && hours < 10) {
    return 'bg-amber-600';
  }

  return 'bg-green-600';
}

function Renderer({
  hours,
  days,
  completed,
  props,
}: CountdownRenderProps): JSX.Element {
  const dateTime = DateTime.fromJSDate(new Date(props.date));

  return (
    <div
      className={twMerge(
        'border-2 border-white text-white py-1 px-2 rounded-lg flex justify-center',
        getTimerBackgroundColor(completed, days, hours),
      )}
    >
      {completed ? (
        <span>Auction Finished</span>
      ) : (
        <span suppressHydrationWarning>
          Ends{' '}
          {dateTime.toRelative({
            style: 'long',
          })}
        </span>
      )}
    </div>
  );
}

type CountdownTimerProperties = {
  readonly auctionEnd: string;
};

export function CountdownTimer({
  auctionEnd,
}: CountdownTimerProperties): JSX.Element {
  return <Countdown date={auctionEnd} renderer={Renderer} />;
}