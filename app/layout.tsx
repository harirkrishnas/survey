import { ReactNode } from 'react';
import ReduxProvider from './ReduxProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
