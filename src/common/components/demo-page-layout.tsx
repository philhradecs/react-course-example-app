import { Link, NavLink, Outlet } from 'react-router-dom';

type DemoPageLayoutProps = {
  className: string;
  links: string[];
  title: string;
};
export const DemoPageLayout = ({
  className,
  links,
  title,
}: DemoPageLayoutProps) => {
  return (
    <div className={`flex flex-col min-h-screen ${className} `}>
      <div className="bg-slate-50 py-3 px-4">
        <Link to="/" className="text-sm">
          ← back
        </Link>
        <div className="flex items-center gap-5 ">
          <div className="mr-5">
            <div className="font-bold text-lg">{title}</div>
          </div>
          {links.map((link) => (
            <NavLink
              key={link}
              to={link}
              className={({ isActive }) =>
                `px-2 py-1 rounded tracking-wider ${isActive ? className : ''}`
              }
            >
              {link}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="pt-10 container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
