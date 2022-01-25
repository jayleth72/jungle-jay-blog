import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center mt-20'>
        <Image
          src='/images/logo2.png'
          width={160}
          height={100}
          className='bg-gray-900'
        />

        <h1 className='text-6xl my-5'>Oh Shit</h1>

        <h2 className='text-4xl text-gray-600 mb-10'>
          This page does not exist
        </h2>
      </div>
    </Layout>
  );
}
