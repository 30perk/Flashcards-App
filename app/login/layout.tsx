// app/login/layout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }

export default function LoginLayout({ children }: LayoutProps) {
  return (
        <body>
            <main>{children}</main>
        </body>
  );
}
