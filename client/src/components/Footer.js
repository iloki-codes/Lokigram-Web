import { Link } from 'react-router-dom';
import loki from '../assets/loki.png';
import Weather from './Weather';

const Footer = () => {

  return (

    <div className='sticky flex flex-row justify-between absolute -bottom-200 w-full h-[5vw] bg-[#f7e7ce] border-t-1 border-[#b76e79]'>
        <Link
          to="/"
          onClick={() => window.scrollTo({top: 0})}
          className='flex flex-row gap-4 m-2 !no-underline'>
            <img src={loki} alt={loki} className='h-10 w-5'/>
            <span className="text-4xl font-bold text-[#b76e79]">lokigram</span>
          </Link>

          <Weather />
    </div>
  )

};

export default Footer;