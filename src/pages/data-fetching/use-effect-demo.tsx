import { useEffect, useState } from 'react';
import { fetchPlanets, Planet } from './fetch-planets';

export const UseEffectDemo = () => {
  const [data, setData] = useState<Planet[]>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchPlanets(page).then((data) => {
      setLoading(false);
      setData(data);
    });
  }, [page]);

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
          className="px-2 py-1 "
        />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data?.map((planet) => (
            <li>
              {planet.name} ({planet.climate})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
