
import Icon1 from '../../../asset/image/icon_1.png';
import Icon2 from '../../../asset/image/icon_2.png';
import Icon3 from '../../../asset/image/icon_3.png';
import Icon4 from '../../../asset/image/icon_4.png';
import Icon5 from '../../../asset/image/icon_5.png';
import Icon6 from '../../../asset/image/icon_6.png';

export default function Partners () {
    return (
        <div className="flex flex-col items-center justify-center gap-4 px-12">
            <div className="text-[#263238] text-[36px] leading-10 font-semibold">Our Partners</div>
            <div className="text-[#263238] text-[16px] leading-6 font-normal">We have been working with some of the best in the market</div>

            <div className="flex justify-between md:w-[1152px] h-[98px] items-center">
                <img src={ Icon1 } className='w-[48px] h-[48px]' />
                <img src={ Icon2 } className='w-[48px] h-[48px]' />
                <img src={ Icon3 } className='w-[48px] h-[48px]' />
                <img src={ Icon4 } className='w-[48px] h-[48px]' />
                <img src={ Icon5 } className='w-[48px] h-[48px]' />
                <img src={ Icon6 } className='w-[48px] h-[48px]' />
            </div>
        </div>
    )
}