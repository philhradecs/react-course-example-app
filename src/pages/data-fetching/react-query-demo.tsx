import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchPlanets } from './fetch-planets';

export const ReactQueryDemo = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['demo', page],
    staleTime: 6000,
    queryFn: () => fetchPlanets(page),
  });

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <label>Page</label>
        <input
          type="number"
          placeholder="Page 1"
          min={0}
          value={page}
          onChange={(event) => setPage(Number(event.target.value))}
          className="px-2 py-1"
        />
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data?.map((planet) => (
            <li key={planet.name}>
              {planet.name} ({planet.climate})
            </li>
          ))}
        </ul>
      )}
      {isError ? 'Error' : null}
    </div>
  );
};
