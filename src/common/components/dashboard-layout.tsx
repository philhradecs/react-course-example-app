import { ReactNode } from 'react';

type DashboardLayoutProps = {
  children: ReactNode;
};
export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-500">
      <div>{children}</div>
    </div>
  );
};
