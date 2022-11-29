import { useParams } from 'react-router-dom';

export const GetDynamicRouteParamDemo = () => {
  const params = useParams();

  return (
    <div>
      <div className="font-bold mb-4">Params</div>
      <pre className="text-lg font-mono">{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
};
