import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer class='bg-gray-700'>
      <div
        class='
            container
            flex flex-col flex-wrap
            px-4
            py-16
            mx-auto
            md:items-center
            lg:items-start
            md:flex-row md:flex-nowrap
          '
      >
        <div class='flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left'>
          <a
            class='
                flex
                items-center
                justify-center
                text-4xl
                font-bold
                text-blue-100
                md:justify-start
              '
          >
            <Image src='/images/logo3.png' height={70} width={120} alt='logo' />
          </a>
          <p class='mt-2 text-sm text-justify text-gray-100'>
            Jungle Jas is about how you can improve your life with time
            effecient outdoor exercise
          </p>
          <div class='flex mt-4'>
            <input
              type='text'
              class='
                  h-auto
                  p-2
                  text-sm
                  border border-grey-light
                  round
                  text-grey-dark
                '
              placeholder='Your email address'
            />
            <button class='h-auto p-3 text-xs text-white bg-red-600 rounded-sm'>
              Subscribe
            </button>
          </div>
          <div class='flex justify-center mt-4 lg:mt-2'>
            <a>
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='w-6 h-6 text-blue-100'
                viewBox='0 0 24 24'
              >
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </a>
            <a class='ml-3'>
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='w-6 h-6 text-blue-300'
                viewBox='0 0 24 24'
              >
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </a>
            <a class='ml-3'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='w-6 h-6 text-pink-400'
                viewBox='0 0 24 24'
              >
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </a>
            <a class='ml-3'>
              <svg
                fill='currentColor'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='0'
                class='w-6 h-6 text-blue-500'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='none'
                  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                ></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </a>
          </div>
        </div>
        <div class='justify-between w-full mt-4 text-center lg:flex'>
          <div class='w-full px-4 lg:w-1/3 md:w-1/2'>
            <h2 class='mb-2 font-bold tracking-widest text-gray-100'>
              Useful Links
            </h2>
            <ul class='mb-8 space-y-2 text-sm list-none'>
              <li>
                <a class='text-gray-200 hover:text-gray-400'>Home</a>
              </li>
              <li>
                <a class='text-gray-200 hover:text-gray-400'>About Us</a>
              </li>
              <li>
                <a class='text-gray-200 hover:text-gray-400'>Blogs</a>
              </li>
              <li>
                <a class='text-gray-200 hover:text-gray-400'>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class='flex justify-center -mt-12'>
        <p class='text-base text-gray-400'>
          Copyright &copy; Jungle Jas {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
