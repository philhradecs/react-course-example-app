import { FormEvent } from 'react';

export const BasicFormDemo = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 w-52">
        <input name="firstName" placeholder="First Name" />
        <input name="lastName" placeholder="Last Name" />
        <input name="email" placeholder="Email" />
      </div>
      <div className="flex gap-4">
        <button className="mt-4 border py-1 px-2 bg-slate-100" type="submit">
          Submit
        </button>
        <button className="mt-4 border py-1 px-2 bg-slate-100" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
};
