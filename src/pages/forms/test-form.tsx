import { ColorPicker } from '@mantine/core';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

export type DemoForm = {
  firstName: string;
  lastName: string;
  email: string;
  checkbox: boolean;
  color: string;
};

type TestFormProps = {
  onSubmit: (values: DemoForm) => void;
};

export const TestForm = ({ onSubmit }: TestFormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { touchedFields, dirtyFields, isSubmitted },
  } = useFormContext<DemoForm>();

  const isChecked = useWatch({ name: 'checkbox' });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}>
        <div className="flex flex-col gap-3 w-52">
          <input {...register('firstName')} placeholder="First Name" />
          <input {...register('lastName')} placeholder="Last Name" />
          <Controller
            name="color"
            render={({ field: { onChange, ...rest } }) => {
              return <ColorPicker {...rest} />;
            }}
          />

          <input
            type="checkbox"
            {...register('checkbox')}
            placeholder="Checkbox"
          />
          {isChecked && <input {...register('email')} placeholder="Email" />}
        </div>
        <div className="flex gap-4">
          <button className="mt-4 border py-1 px-2 bg-slate-100" type="submit">
            Submit
          </button>
          <button
            className="mt-4 border py-1 px-2 bg-slate-100"
            onClick={() => reset()}
          >
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
    </>
  );
};
