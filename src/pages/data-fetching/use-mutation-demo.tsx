import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

const mockPostData = (variables: User) =>
  new Promise<string>((resolve) =>
    setInterval(() => resolve(JSON.stringify(variables, null, 2)), 1500)
  );

export const UseMutationDemo = () => {
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: mockPostData,
  });

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <button
          disabled={isLoading}
          className="text-lg border rounded bg-slate-100 px-2 py-1"
          onClick={() =>
            mutateAsync({
              firstName: 'Philip',
              lastName: 'Hradecsni',
              age: 30,
            }).then(() => navigate('success'))
          }
        >
          {isLoading ? 'Loading ...' : 'Mutate!'}
        </button>
      </div>
    </div>
  );
};

export const MutationSuccessPage = () => {
  return (
    <div>
      <h1>Success!</h1>
      <Link className="text-blue-800 mt-4" to="..">
        Go back
      </Link>
    </div>
  );
};
