'use client';
import type { JSX } from 'react';
import Countdown from 'react-countdown';

import { Renderer } from './countdown-timer-renderer';

type CountdownTimerProperties = {
  readonly auctionEnd: string;
};

export function CountdownTimer({
  auctionEnd,
}: CountdownTimerProperties): JSX.Element {
  return <Countdown date={auctionEnd} renderer={Renderer} />;
}
