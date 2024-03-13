import FormProvider from '@/features/signup/FormContext';
import FormManager from '@/features/signup/FormManager';

export default function SignUp() {
  return (
    <FormProvider>
      <FormManager />
    </FormProvider>
  );
}
