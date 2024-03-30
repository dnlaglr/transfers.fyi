import { signIn } from 'aws-amplify/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';

export default function SignIn() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    passwordShown: false,
  });

  const router = useRouter();

  function updateForm(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function isValidForm() {
    return formState.email !== '' && formState.password !== '';
  }

  async function handleFormSubmit() {
    if (isValidForm()) {
      const { isSignedIn } = await signIn({
        username: formState.email,
        password: formState.password,
      });

      if (isSignedIn) {
        router.push('/');
      }
    }
  }

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
          <h1 className='text-3xl font-semibold text-gray-900'>Welcome Back</h1>
          <h2 className='mt-1 text-base text-gray-500'>
            Welcome back! Please enter your details.
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
              onChange={updateForm}
              type={formState.passwordShown ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              className='w-full select-none border-none px-3 py-2 outline-none'
            />
            <Image
              onClick={() =>
                setFormState((prev) => ({
                  ...prev,
                  passwordShown: !prev.passwordShown,
                }))
              }
              src={
                formState.passwordShown
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
            Sign In
          </button>
          <span className='mt-6 text-center text-sm'>
            Don&apos;t have an account yet?{' '}
            <Link href='/signup' className='text-transfers'>
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
