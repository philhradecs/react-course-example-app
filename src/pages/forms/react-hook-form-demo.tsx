import { FormProvider, useForm } from 'react-hook-form';
import { DemoForm, TestForm } from './test-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const TestFormSchema = z.object({
  firstName: z.string().min(1, 'Bitte Vorname angeben'),
  lastName: z.string().min(1, 'Bitte Vorname angeben'),
  email: z.string().email(),
  color: z.string().min(1),
  checkbox: z.boolean(),
});

export const ReactHookFormDemo = () => {
  const formMethods = useForm<DemoForm>({
    resolver: zodResolver(TestFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      checkbox: false,
      color: '#fff',
    },
  });

  const onSubmit = (values: DemoForm) => {
    console.log(values);
  };

  return (
    <div className="grid grid-cols-4">
      <FormProvider {...formMethods}>
        <TestForm onSubmit={onSubmit} />
      </FormProvider>
    </div>
  );
};
