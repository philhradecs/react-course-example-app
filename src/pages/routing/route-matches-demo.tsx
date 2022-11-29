import { useMatches } from 'react-router-dom';

export const RouteMatchesDemo = () => {
  const matches = useMatches();

  return (
    <div>
      <div className="font-bold mb-4">Route Matches</div>
      <pre className="text-lg font-mono">
        {JSON.stringify(matches, null, 2)}
      </pre>
    </div>
  );
};
