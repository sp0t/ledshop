
import { Link } from 'react-router-dom';

import MeetTreateCoinImage from '../../../asset/image/meet_treatcoin.png';

export default function MeetTreatCoin() {
    return (
        <div className="flex bg-[#26353C] flex-col items-center gap-[32px] px-4 pb-16">
            <div className="text-white text-[64px] font-semibold text-center">Meet TreatCoin</div>
            <img src={MeetTreateCoinImage} className='w-[348px] md:w-[808px]' />
            <div className='flex flex-col gap-[16px] items-center'>
                <div className='text-white text-[36px] font-semibold leading-10 text-center gap-2 md:flex justify-center'>
                    <div>A dolar a day,</div>
                    <div> everyday</div>
                </div>
                <ul className=' text-white text-[14px] leading-10 font-normal items-center'>
                    <li className="before:content-['•']">&nbsp;Our rewarding mechanisms allow us to retain the users and have them do what YOU want!</li>
                    <li className="before:content-['•']">&nbsp;Customize what you want to ask them, and you'll receive your desired answers!</li>
                </ul>
                <Link to="fakedoor" className='bg-[#3E8989] px-[32px] py-[14px] rounded text-[#FFFFFF] text-[16px] leading-6 font-medium'>Learn More</Link>
            </div>
        </div>
    )
}