import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center flex flex-col space-y-4 mb-48'>
        <h1 className='text-4xl lg:text-5xl text-purple-900'>
          <b>Find the best <span className='text-blue-950'>AI prompts</span></b>
        </h1>
        <p className='text-lg lg:text-3xl text-purple-900'>
          <b>This product is perfect for people who don't have valuable <br /> thoughts and want to discover the full <span className='text-blue-950'>power of AI</span></b>
        </p>
        <div className="relative w-700 h-300 flex justify-center pt-4">
          <Image 
            src={'/blur.png'}
            height={300}
            width={700}
            alt='img'
          />
        </div>
      </div>
    </div>
  );
}
