import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function RegisterLayout({ children }: LayoutProps) {
  return (
      <body>
        <main>{children}</main>
      </body>
  );
}