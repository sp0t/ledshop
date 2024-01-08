
import { Link } from 'react-router-dom';

import Man from '../../../asset/image/man.png';

export default function WhoAreWe() {

    return (
        <div className='flex flex-col md:flex-row justify-between py-[48px] px-12 md:px-[144px] md:max-w-[1440px] items-center'>
            <img src={ Man } className='w-[395px]' />

            <div className='md:w-[560px] flex flex-col gap-8 text-center md:text-left justify-center md:justify-start items-center md:items-start'>
                <div className='text-[#263238] text-[36px] leading-10 font-semibold'>And who are we?</div>

                <div className='text-[#263238] text-[14px] font-normal leading-6'>
                    We're a highly motivated startup that will take your marketing campaigns to another level.
                </div>
                <div className='text-[#263238] text-[14px] font-normal leading-6'>
                    Our user knowledge, plus the many GEOs we reach, is here to provide you new ideas, insights, and results, on your new strategies.
                </div>
                <div className='text-[#263238] text-[14px] font-normal leading-6'>
                    Join us, and explore blue oceans of the new marketing world.
                </div>
                <Link to="fakedoor" className='bg-[#26353C] px-[32px] py-[14px] rounded text-white text-[16px]'>Learn More</Link>
            </div>

        </div>
    )
}