
import Customer from '../../../asset/image/customer.png';
import Audience from '../../../asset/image/audience.png';
import Ltv from '../../../asset/image/ltv.png';

export default function Mechanisms() {
    return (
        <div className="bg-[#263238] md:px-[144px] py-[64px] flex flex-col gap-[40px]">
            <div className="text-[36px] text-white flex flex-col justify-center md:flex-row gap-2 font-semibold leading-10 ">
                <div>Result Driven</div>
                <div>Engagement </div>
                <div> Mechanisms</div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-12 ">
                <div className='flex w-[297px] justify-start md:justify-center gap-[18px]'>
                    <img src={Customer} className='w-[57px] h-[56px] mt-[5px]' />
                    <div className='text-left'>
                        <div className=" text-[64px] text-[#43A046] font-bold leading-none">-80%</div>
                        <div className='text-white text-[18px] leading-7 '>
                            <div>Customer Acquisition</div>
                            <div>Cost</div>
                        </div>
                    </div>
                </div>

                <div className='flex w-[297px] justify-start md:justify-center gap-[18px]'>
                    <img src={Audience} className='w-[57px] h-[56px] mt-[5px]' />
                    <div className='text-left'>
                        <div className=" text-[64px] text-[#43A046] font-bold leading-none">MORE</div>
                        <div className='text-white text-[18px] leading-7 '>
                            <div>Educated audience</div>
                        </div>
                    </div>
                </div>

                <div className='flex w-[297px] justify-start md:justify-center gap-[18px]'>
                    <img src={Ltv} className='w-[57px] h-[56px] mt-[5px]' />
                    <div className='text-left'>
                        <div className=" text-[64px] text-[#43A046] font-bold leading-none">5:1</div>
                        <div className='text-white text-[18px] leading-7 '>
                            <div>LTV/CAC</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}