export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
};

type PlanetsResponse = {
  results: Planet[];
};

export const fetchPlanets = async (page = 1) => {
  const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  const data = (await response.json()) as PlanetsResponse;
  if (!data.results) {
    throw new Error('Fetch Error');
  }
  return data.results;
};
