import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

export default function Landing() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-center items-center w-full bg-yellow-200'>
        <h1 className='text-2xl text-text-main font-bold py-4'>Transfers.fyi is currently undergoing a Next.js port and complete redesign! Some features might be disabled.</h1>
      </div>
      <Link
        href='/compare'
        className='mt-10 flex h-8 flex-row items-center space-x-2 rounded-full border border-slate-300 px-1 py-1 text-sm font-medium text-text-main hover:space-x-6'
      >
        <span className='rounded-full bg-gray-200 px-2 py-[1px]'>
          Introducing our new comparison model
        </span>
        <FontAwesomeIcon icon={faArrowRight} className='pr-[2px]' />
      </Link>
      <h1 className='mt-6 text-center text-6xl font-semibold text-text-main'>
        The ultimate transfer resource
        <div className='flex justify-center h-[1.2em] relative mt-1 overflow-hidden'>
          <span className='animate-scrolling-header top-0 space-y-4 duration-[12s] absolute animate-delay-[2s]'>
            <div className='flex justify-center items-center space-x-3'>
              <span>for</span>
              <span>Admissions</span>
            </div>
            <div className='flex justify-center items-center space-x-3'>
              <span>for</span>
              <span>Colleges</span>
            </div>
            <div className='flex justify-center items-center space-x-3'>
              <span>for</span>
              <span>Comparisons</span>
            </div>
            <div className='flex justify-center items-center space-x-3'>
              <span>for</span>
              <span>Students</span>
            </div>
          </span>
        </div>
      </h1>
      <div className='flex flex-col items-center'>
        <div className='animate-fade-in animate-delay-[1s] opacity-0'>
          <h2 className='w-[32rem] text-zinc-800 text-base text-center font-medium mt-6'>
            Transfers.fyi takes the confusion out of transfering by delivering high-quality data and statistics to your fingertips
          </h2>
        </div>
        <div className='animate-fade-in animate-delay-[1.25s] opacity-0'>
          <div className='font-medium space-x-4 mt-8'>
            <Link href='/signup' className='text-white bg-zinc-950 px-4 py-3 rounded-xl'>Create Account</Link>
            <Link href='/dashboard' className='text-text-main border border-slate-300 px-4 py-3 rounded-xl'>Dashboard</Link>
          </div>
        </div>
        <div className='animate-fade-in animate-delay-[1.55s] opacity-0'>

        </div>
      </div>
    </div>
  );
}
