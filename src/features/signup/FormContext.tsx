import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface FormState {
  email: string;
  password: string;
  confirmationCode: string;
}

interface FormContextType {
  formState: FormState;
  setFormState: Dispatch<SetStateAction<FormState>>;
  updateForm: (e: ChangeEvent<HTMLInputElement>) => void;
  currentStep: number;
  incrementStep: () => void;
  decrementStep: () => void;
}

export const FormContext = createContext<FormContextType>({
  formState: {
    email: '',
    password: '',
    confirmationCode: '',
  },
  setFormState: () => {},
  updateForm: () => {},
  currentStep: 0,
  incrementStep: () => {},
  decrementStep: () => {},
});

export default function FormProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    confirmationCode: '',
  });

  function updateForm(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function incrementStep() {
    setCurrentStep((prevStep) => prevStep + 1);
  }

  function decrementStep() {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  }

  return (
    <FormContext.Provider
      value={{
        formState,
        setFormState,
        updateForm,
        currentStep,
        incrementStep,
        decrementStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
