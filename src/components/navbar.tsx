import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex flex-row justify-center items-center w-screen px-12 py-4'>
      <Link href='/' className='flex items-center pr-6'>
        <Image src='/assets/transfers.svg' width={32} height={32} alt='Transfers.fyi Logo' />
        <h1 className='text-2xl text-text-main font-bold ml-2'>Transfers.fyi</h1>
      </Link>
      <div className='flex flex-row justify-between items-center flex-1'>
        <div className='text-base text-text-main font-semibold'>
          <Link href='/resources' className='mr-4'>Resources</Link>
          <Link href='/colleges' className='mr-4'>Colleges</Link>
          <Link href='/compare' className='mr-4'>Compare</Link>
        </div>
        <div className='text-base text-text-main font-semibold'>
          <Link href='/signin' className='border border-slate-300 hover:bg-neutral-100 px-4 py-2 mr-4 rounded-xl'>Sign In</Link>
          <Link href='/dashboard' className='text-white bg-text-main hover:bg-black px-4 py-2 rounded-xl'>Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}