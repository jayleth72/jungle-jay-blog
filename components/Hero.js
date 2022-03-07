import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className='bg-hero  bg-cover object-cover bg-no-repeat bg-center h-60 w-full' />
      <div className='p-4 text-left'>
        <h3 className='text-xl text-black dark:text-white font-semibold'>
          My First Post
        </h3>
      </div>
    </>
  );
}
