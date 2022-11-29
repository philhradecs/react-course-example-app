import { ReactNode } from 'react';

type DashboardLayoutProps = {
  children: ReactNode;
};
export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-violet-500 to-yellow-700">
      <div>{children}</div>
    </div>
  );
};
