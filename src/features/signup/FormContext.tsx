import { ChangeEvent, ReactNode, createContext, useState } from 'react';

interface FormState {
  email: string;
  password: string;
  confirmationCode: string;
}

export interface FormContextType {
  formState: FormState;
  updateForm: (e: ChangeEvent<HTMLInputElement>) => void;
  currentStep: number;
  incrementStep: () => void;
  decrementStep: () => void;
}

export const FormContext = createContext<FormContextType>({
  formState: {
    email: '',
    password: '',
    confirmationCode: ''
  },
  updateForm: () => {},
  currentStep: 0,
  incrementStep: () => {},
  decrementStep: () => {}
});

export default function FormProvider({ children } : { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    confirmationCode: ''
  });

  function updateForm(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;

    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function incrementStep() {
    console.log('running')
    setCurrentStep(prevStep => prevStep + 1);
  }

  function decrementStep() {
    setCurrentStep(prevStep => (prevStep > 0 ? prevStep - 1 : prevStep));
  }

  return (
    <FormContext.Provider value={{ formState, updateForm, currentStep, incrementStep, decrementStep }}>
      {children}
    </FormContext.Provider>
  )
}