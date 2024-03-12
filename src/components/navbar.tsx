import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex w-full flex-row items-center justify-center px-12 py-4'>
      <Link href='/' className='flex items-center pr-6'>
        <Image
          src='/assets/transfers.svg'
          width={32}
          height={32}
          alt='Transfers.fyi Logo'
        />
        <h1 className='ml-2 text-2xl font-bold text-text-main'>
          Transfers.fyi
        </h1>
      </Link>
      <div className='flex flex-1 flex-row items-center justify-between'>
        <div className='text-base font-semibold text-text-main'>
          <Link href='/resources' className='mr-4'>
            Resources
          </Link>
          <Link href='/colleges' className='mr-4'>
            Colleges
          </Link>
          <Link href='/compare' className='mr-4'>
            Compare
          </Link>
        </div>
        <div className='text-base font-semibold text-text-main'>
          <Link
            href='/signin'
            className='mr-4 rounded-xl border border-slate-300 px-4 py-2 hover:bg-neutral-100'
          >
            Sign In
          </Link>
          <Link
            href='/dashboard'
            className='rounded-xl bg-text-main px-4 py-2 text-white hover:bg-black'
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
