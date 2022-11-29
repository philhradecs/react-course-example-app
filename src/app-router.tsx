import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardLayout } from './common/components/dashboard-layout';
import { DemoPageLayout } from './common/components/demo-page-layout';
import { Dashboard } from './pages/dashboard';
import { ReactQueryDemo } from './pages/data-fetching/use-effect/react-query-demo';
import { UseEffectDemo } from './pages/data-fetching/use-effect/use-effect-demo';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    ),
  },
  {
    path: '/data-fetching',
    element: (
      <DemoPageLayout
        title="Data Fetching"
        className="bg-amber-300"
        links={['use-effect', 'react-query']}
      />
    ),
    children: [
      {
        path: 'use-effect',
        element: <UseEffectDemo />,
      },
      {
        path: 'react-query',
        element: <ReactQueryDemo />,
      },
    ],
  },
  {
    path: '/forms',
    element: (
      <DemoPageLayout
        title="Forms"
        className="bg-green-400"
        links={['basic', 'react-hook-form']}
      />
    ),

    children: [
      {
        path: 'basic',
        element: <h1>BasicFormDemo</h1>,
      },
      {
        path: 'react-hook-form',
        element: <h1>ReactHookFormDemo</h1>,
      },
    ],
  },
  {
    path: '/styling',
    element: (
      <DemoPageLayout
        title="Styling"
        className="bg-teal-400"
        links={['tailwind', 'mantine']}
      />
    ),
    children: [
      {
        path: 'tailwind',
        element: <h1>TailwindDemo</h1>,
      },
      {
        path: 'mantine',
        element: <h1>MantineDemo</h1>,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
