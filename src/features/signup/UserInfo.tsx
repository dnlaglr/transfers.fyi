import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FormContext } from './FormContext';
import { signUp } from 'aws-amplify/auth';

export default function UserInfo() {
  const [password, setPassword] = useState({
    shown: false,
    value: '',
  });
  const [confirmPass, setConfirmPass] = useState({
    shown: false,
    value: '',
  });

  const { formState, setFormState, updateForm, incrementStep } =
    useContext(FormContext);

  function isValidPassword() {
    if (
      password.value !== confirmPass.value ||
      password.value == '' ||
      confirmPass.value == '' ||
      password.value.length < 8
    ) {
      return false;
    }

    const passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|<>?[\]~-])(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    return passwordPattern.test(password.value);
  }

  function handleFormSubmit() {
    if (isValidPassword()) {
      setFormState((prev) => ({
        ...prev,
        password: password.value,
      }));
    }
  }

  async function createAccount() {
    try {
      await signUp({
        username: formState.email,
        password: formState.password,
        options: {
          userAttributes: {
            email: formState.email,
          },
          autoSignIn: true,
        },
      });

      incrementStep();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (formState.password !== '') {
      createAccount();
    }
  }, [formState.password]);

  return (
    <div className='flex h-[calc(100vh_-_64px)] w-full items-center justify-center'>
      <div className='flex w-full max-w-[22rem] flex-col gap-2'>
        <div className='flex flex-col items-center text-center'>
          <Image
            src='/assets/transfers.svg'
            width={96}
            height={96}
            alt='Transfers.fyi'
          />
          <h1 className='text-3xl font-semibold text-gray-900'>
            Sign up for Transfers.fyi
          </h1>
          <h2 className='mt-1 text-base text-gray-500'>
            Let&apos;s get you started.
          </h2>
        </div>
        <div className='flex flex-col'>
          <span className='my-2 text-xs font-semibold'>Email</span>
          <div className='relative mb-2 flex h-full w-full flex-col items-center rounded-lg border border-gray-300 px-1 shadow-sm'>
            <input
              onChange={updateForm}
              type='email'
              name='email'
              placeholder='Email'
              className='w-full select-none border-none px-3 py-2 outline-none'
            />
          </div>
          <span className='my-2 text-xs font-semibold'>Password</span>
          <div className='relative flex h-full w-full flex-col items-center rounded-lg border border-gray-300 px-1 shadow-sm'>
            <input
              onChange={(e) =>
                setPassword((prev) => ({ ...prev, value: e.target.value }))
              }
              type={password.shown ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              className='w-full select-none border-none px-3 py-2 outline-none'
            />
            <Image
              onClick={() =>
                setPassword((prev) => ({ ...prev, shown: !prev.shown }))
              }
              src={
                password.shown
                  ? '/assets/icons/eye-slash.svg'
                  : '/assets/icons/eye.svg'
              }
              width={24}
              height={24}
              className='absolute right-3 flex h-full cursor-pointer items-center justify-center'
              alt='Toggle Password Icon'
            />
          </div>
          <span className='mb-2 mt-3 text-xs font-semibold'>
            Confirm Password
          </span>
          <div className='relative flex h-full w-full flex-col items-center rounded-lg border border-gray-300 px-1 shadow-sm'>
            <input
              onChange={(e) =>
                setConfirmPass((prev) => ({ ...prev, value: e.target.value }))
              }
              type={confirmPass.shown ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              className='w-full select-none border-none px-3 py-2 outline-none'
            />
            <Image
              onClick={() =>
                setConfirmPass((prev) => ({ ...prev, shown: !prev.shown }))
              }
              src={
                confirmPass.shown
                  ? '/assets/icons/eye-slash.svg'
                  : '/assets/icons/eye.svg'
              }
              width={24}
              height={24}
              className='absolute right-3 flex h-full cursor-pointer items-center justify-center'
              alt='Toggle Password Icon'
            />
          </div>
          <button
            onClick={handleFormSubmit}
            className='mt-6 w-full rounded-lg bg-transfers py-[10px] text-sm font-medium text-white'
          >
            Continue
          </button>
          <span className='mt-6 text-center text-sm'>
            Already have an account?{' '}
            <Link href='/signin' className='text-transfers'>
              Log In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
