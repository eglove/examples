import { ReactNode } from 'react';

import Main from '@/app/(components)/main';
import MainClass from '@/app/(components)/main-class';

export default function Home(): ReactNode {
  return (
    <main>
      <Main />
      <MainClass />
    </main>
  );
}
