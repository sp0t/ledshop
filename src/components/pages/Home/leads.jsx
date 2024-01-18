

import Lead from '../../../asset/image/lead.png';
import Market from '../../../asset/image/market.png';
import Data from '../../../asset/image/data.png';


export default function Leads() {

    return (
        <div className='my-[40px] flex flex-col justify-center items-center'>
            <div className='font-semibold text-[64px] text-center text-[#4D4D4D] leading-[75px]'>
                <div className='block md:flex md:gap-5 md:justify-center'>
                    <div>The</div>
                    <div> Blueprint to </div>
                    <div>Your Ideal</div>
                </div>    
                <div className='block md:flex md:gap-5 md:justify-center'>
                    <div>Leads  </div>
                    <div> Unfolded </div>
                </div>    
            </div>
            <div className='text-base font-normal text-center text-[#717171] mt-20 md:mt-5 md:justify-center'>
                Unleash your success.
            </div>

            <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between md:items-end md:max-w-[1440px] md:w-[1440px] md:px-[144px] mt-8">
                <div className="shadow-md rounded-[8px] max-w-[330px] w-[330px] py-[24px] px-[32px] flex justify-center flex-col text-center items-center gap-[8px]">
                    <img src={Lead} className='w-[65px] h-[56px]' />
                    <div className='flex flex-col text-[28px] text-center text-[#4D4D4D] leading-[36px] font-semibold '>
                        <div>Precision</div>
                        <div>Perfected</div>
                    </div>
                    <div className='text-base font-normal text-center text-[#717171] md:justify-center'>
                        <div> Qualified and Verified Leads, </div>
                        <div> Shielded by Cutting-Edge Fraud </div>
                        <div> Prevention Tools. Say Goodbye to </div>
                        <div> Low-Quality Traffic! </div>
                    </div>
                </div>

                <div className="shadow-md rounded-[8px] max-w-[330px] w-[330px] py-[24px] px-[32px] flex justify-center flex-col text-center items-center gap-[8px]">
                    <img src={Market} className='w-[65px] h-[56px]' />
                    <div className='flex flex-col text-[28px] text-center text-[#4D4D4D] leading-[36px] font-semibold '>
                        <div>Beyond Boundaries</div>
                    </div>
                    <div className='text-base font-normal text-center text-[#717171] md:justify-center'>
                        <div> Unlock New Markets, Ignite Fresh </div>
                        <div> Campaign Ideas with Our Diverse </div>
                        <div> and Dynamic Audience </div>
                    </div>
                </div>

                <div className="shadow-md rounded-[8px] max-w-[330px] w-[330px] py-[24px] px-[32px] flex justify-center flex-col text-center items-center gap-[8px]">
                    <img src={Data} className='w-[65px] h-[56px]' />
                    <div className='flex flex-col text-[28px] text-center text-[#4D4D4D] leading-[36px] font-semibold '>
                        <div>Tailored</div>
                        <div>Precision</div>
                    </div>
                    <div className='text-base font-normal text-center text-[#717171] md:justify-center'>
                        <div> Data Customization That Exclusively </div>
                        <div> Fits Your Needs. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}