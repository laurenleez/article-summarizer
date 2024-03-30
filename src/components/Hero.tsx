import { logo } from "../assets";

function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='felx justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-80 object-contain' />
      </nav>
      <h1 className='head_text'>
        Summarize Article with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI</span>
      </h1> 
      <h2 className='desc'>
        AI기반의 Summarizer를 활용하여 당신의 아티클을 간편하게 요약해 보세요.
      </h2>
      <p className=' text-base text-gray-600 sm:text-base text-center max-w-2xl'>
        Simplify your reading with Summize, an open-source article summarizer.
      </p>
    </header>
  );
}

export default Hero;
