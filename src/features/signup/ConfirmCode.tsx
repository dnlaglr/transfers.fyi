import { useContext } from 'react';
import { FormContext } from './FormContext';
import Image from 'next/image';
import { autoSignIn, confirmSignUp } from 'aws-amplify/auth';
import { useRouter } from 'next/router';

export default function ConfirmCode() {
  const { formState, updateForm } = useContext(FormContext);

  const router = useRouter();

  async function verifyCode() {
    try {
      const { isSignUpComplete } = await confirmSignUp({
        username: formState.email,
        confirmationCode: formState.confirmationCode,
      });

      if (isSignUpComplete) {
        await autoSignIn();
        router.push('/');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='flex h-[calc(100vh_-_64px)] w-full items-center justify-center'>
      <div className='flex flex-col items-center'>
        <Image
          src='/assets/transfers.svg'
          width={96}
          height={96}
          alt='Transfers.fyi'
        />
        <h1 className='text-2xl font-semibold text-gray-900'>
          A code has been sent to your email at:
        </h1>
        <span className='text-2xl font-medium text-transfers'>
          {formState.email}
        </span>
        <div className='mt-6 flex w-[90%] flex-col'>
          <span className='text-sm font-semibold'>Confirmation Code</span>
          <div className='relative mb-2 flex h-full w-full flex-col items-center rounded-lg border border-gray-300 px-1 shadow-sm'>
            <input
              onChange={updateForm}
              type='text'
              name='confirmationCode'
              placeholder='Code'
              className='w-full select-none border-none px-3 py-2 outline-none'
            />
          </div>
          <button
            onClick={verifyCode}
            className='mt-6 w-full rounded-lg bg-transfers py-[10px] text-sm font-medium text-white'
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
