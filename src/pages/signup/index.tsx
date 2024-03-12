import FormProvider from '@/features/signup/FormContext';
import UserInfo from '@/features/signup/UserInfo';
import { useState } from 'react';

export default function SignUp() {
  const [formStep, setFormStep] = useState(0);

  return (
    <FormProvider>
      <UserInfo setFormStep={setFormStep} />
    </FormProvider>
  )
}