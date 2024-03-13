import { useContext } from 'react';
import { FormContext } from './FormContext';
import UserInfo from './UserInfo';
import ConfirmCode from './ConfirmCode';

export default function FormManager() {
  const { currentStep } = useContext(FormContext);
  return (
    <div className='flex flex-col items-center'>
      {currentStep === 0 ? <UserInfo /> : ''}
      {currentStep === 1 ? <ConfirmCode /> : ''}
    </div>
  );
}
