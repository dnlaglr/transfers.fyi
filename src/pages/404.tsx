
export default function Error404() {
  return (
    <div className='flex flex-col items-center w-full h-[calc(100vh_-_64px)]'>
      <h1 className='text-8xl text-text-main font-bold mt-48'>404</h1>
      <h2 className='text-xl mt-8'>This link doesn't exist or this feature might be undergoing maintenance!</h2>
      <h3 className='text-xl mt-2'>Sorry for the inconvenience!</h3>
    </div>
  )
}