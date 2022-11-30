import { ReactNode } from 'react';
import { Link, To } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="text-white flex flex-col md:flex-row gap-10">
      <DashboardLink to="routing/dynamic-route">Routing</DashboardLink>
      <DashboardLink to="data-fetching/use-effect">Data Fetching</DashboardLink>
      <DashboardLink to="forms">Forms</DashboardLink>
      <DashboardLink to="styling">Styling</DashboardLink>
    </div>
  );
};

type DashboardLinkProps = {
  to: To;
  children: ReactNode;
};
const DashboardLink = ({ to, children }: DashboardLinkProps) => {
  return (
    <Link className="group" to={to}>
      <div className="group-hover:-translate-y-1 transition-all text-2xl p-4 tracking-wider hover:underline underline-offset-4 ">
        {children}
      </div>
    </Link>
  );
};
