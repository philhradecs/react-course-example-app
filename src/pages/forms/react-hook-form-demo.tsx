import { useForm } from 'react-hook-form';

type DemoForm = {
  firstName: string;
  lastName: string;
  email: string;
};

export const ReactHookFormDemo = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { touchedFields, dirtyFields, isSubmitted },
  } = useForm<DemoForm>({
    defaultValues: { firstName: '', lastName: '', email: '' },
  });

  const onSubmit = (values: DemoForm) => {
    console.log(values);
  };

  return (
    <div className="grid grid-cols-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 w-52">
          <input {...register('firstName')} placeholder="First Name" />
          <input {...register('lastName')} placeholder="Last Name" />
          <input {...register('email')} placeholder="Email" />
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
      <div>
        <div className="font-bold">
          Values (submitted: {String(isSubmitted)})
        </div>
        <pre className="font-mono">{JSON.stringify(watch(), null, 2)}</pre>
      </div>
      <div>
        <div className="font-bold">Dirty Fields</div>
        <pre className="font-mono">{JSON.stringify(dirtyFields, null, 2)}</pre>
      </div>
      <div>
        <div className="font-bold">Touched Fields</div>
        <pre className="font-mono">
          {JSON.stringify(touchedFields, null, 2)}
        </pre>
      </div>
    </div>
  );
};
