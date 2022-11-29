import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardLayout } from './common/components/dashboard-layout';
import { DemoPageLayout } from './common/components/demo-page-layout';
import { Dashboard } from './pages/dashboard';
import { ReactQueryDemo } from './pages/data-fetching/react-query-demo';
import { UseEffectDemo } from './pages/data-fetching/use-effect-demo';
import { BasicFormDemo } from './pages/forms/basic-form-demo';
import { ReactHookFormDemo } from './pages/forms/react-hook-form-demo';
import { SetDynamicRouteDemo } from './pages/routing/set-dynamic-route-demo';
import { GetDynamicRouteParamDemo } from './pages/routing/get-dynamic-route-param-demo';
import { MantineDemo } from './pages/styling/mantine-demo';
import { RouteMatchesDemo } from './pages/routing/route-matches-demo';

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
    path: '/routing',
    element: (
      <DemoPageLayout
        title="Routing"
        className="bg-indigo-400"
        links={['dynamic-route', 'route-matches']}
      />
    ),
    children: [
      {
        path: 'dynamic-route',
        children: [
          {
            index: true,
            element: <SetDynamicRouteDemo />,
          },
          {
            path: ':slug',
            element: <GetDynamicRouteParamDemo />,
          },
        ],
      },
      {
        path: 'route-matches',
        element: <RouteMatchesDemo />,
      },
    ],
  },
  {
    path: '/data-fetching',
    element: (
      <DemoPageLayout
        title="Data Fetching"
        className="bg-amber-500"
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
        element: <BasicFormDemo />,
      },
      {
        path: 'react-hook-form',
        element: <ReactHookFormDemo />,
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
        element: <MantineDemo />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
