import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="text-white flex gap-14 text-2xl tracking-wider">
      <Link className="hover:underline underline-offset-4" to="routing">
        Routing
      </Link>
      <Link className="hover:underline underline-offset-4" to="data-fetching">
        Data Fetching
      </Link>
      <Link className="hover:underline underline-offset-4" to="forms">
        Forms
      </Link>
      <Link className="hover:underline underline-offset-4" to="styling">
        Styling
      </Link>
    </div>
  );
};
