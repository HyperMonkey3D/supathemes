import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full md:w-[1200px] m-auto py-10'>
      <h2 className='text-white'>Not Found</h2>
      <p className='text-white'>Could not find requested resource :(</p>
      <div className='bg-brand-purple w-[120px] h-[30px] flex justify-center items-center mt-5 rounded-2xl'>
      <Link href="/" className='text-white'>Return Home</Link>
      </div>
      
    </div>
  )
}