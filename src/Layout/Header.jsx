import moment from 'moment';
import logo from '../assets/logo.png'


const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12.5'>
                <img className='w-[471px]' src={logo} alt="" />
                <p className='mt-5 text-[#706F6F] text-[18px]'>Journalism Without Fear or Favour</p>
                <p className='mt-2.5 text-[#403F3F] text-xl font-medium'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;