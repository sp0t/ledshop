

import Lead from '../../../asset/image/lead.png';
import Market from '../../../asset/image/market.png';
import Data from '../../../asset/image/data.png';


export default function Leads() {

    return (
        <div className='my-[40px] flex flex-col justify-center items-center'>
            <div className='font-semibold text-[64px] text-center text-[#4D4D4D] leading-[75px]'>
                <div className='block md:flex md:gap-5 md:justify-center'>
                    <div>And this is </div>
                    <div> how we get </div>
                    <div className="hidden md:block">you </div>
                </div>    
                <div className='block md:flex md:gap-5 md:justify-center'>
                    <div className="hidden md:block">to </div>
                    <div className="block md:hidden">you to </div>
                    <div>qualified </div>
                    <div>leads</div>
                </div>    
            </div>
            <div className='text-base font-normal text-center text-[#717171] mt-20 md:mt-5 md:justify-center'>
                We are fully concerned on giving you only what fits you
            </div>

            <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between md:items-end md:max-w-[1440px] md:w-[1440px] md:px-[144px] mt-8">
                <div className="shadow-md rounded-[8px] max-w-[330px] w-[330px] py-[24px] px-[32px] flex justify-center flex-col text-center items-center gap-[8px]">
                    <img src={Lead} className='w-[65px] h-[56px]' />
                    <div className='flex flex-col text-[28px] text-center text-[#4D4D4D] leading-[36px] font-semibold '>
                        <div>Qualified and</div>
                        <div>Verified Leads</div>
                    </div>
                    <div className='text-base font-normal text-center text-[#717171] md:justify-center'>
                        <div>The best fraud prevention tools</div>
                        <div>(We'll avoid you any bad quality</div>
                        <div>traffic)</div>
                    </div>
                </div>

                <div className="shadow-md rounded-[8px] max-w-[330px] w-[330px] py-[24px] px-[32px] flex justify-center flex-col text-center items-center gap-[8px]">
                    <img src={Market} className='w-[65px] h-[56px]' />
                    <div className='flex flex-col text-[28px] text-center text-[#4D4D4D] leading-[36px] font-semibold '>
                        <div>Acess to New</div>
                        <div>Markets</div>
                    </div>
                    <div className='text-base font-normal text-center text-[#717171] md:justify-center'>
                        <div>Explore new campaign ideas with</div>
                        <div>our audience diversity</div>
                    </div>
                </div>

                <div className="shadow-md rounded-[8px] max-w-[330px] w-[330px] py-[24px] px-[32px] flex justify-center flex-col text-center items-center gap-[8px]">
                    <img src={Data} className='w-[65px] h-[56px]' />
                    <div className='flex flex-col text-[28px] text-center text-[#4D4D4D] leading-[36px] font-semibold '>
                        <div>Data</div>
                        <div>Customization</div>
                    </div>
                    <div className='text-base font-normal text-center text-[#717171] md:justify-center'>
                        <div>We are fully concerned on giving you</div>
                        <div>only what fits you</div>
                    </div>
                </div>
            </div>
        </div>
    )
}