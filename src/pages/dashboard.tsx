import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="text-white flex gap-14 text-xl tracking-wider">
      <Link to="data-fetching">Data Fetching</Link>
      <Link to="forms">Forms</Link>
      <Link to="styling">Styling</Link>
    </div>
  );
};
