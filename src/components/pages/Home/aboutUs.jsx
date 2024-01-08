
import Man1 from '../../../asset/image/man_1.png';
import Man2 from '../../../asset/image/man_2.png';
import Man3 from '../../../asset/image/man_3.png';

export default function AboutUs() {
    return (
        <div className="mt-12 flex flex-col gap-4 md:px-[144px]">
            <div className="text-[#263238] text-[36px] leading-10 font-semibold text-center">Check their latest comments about us</div>

            <div className='flex justify-between flex-col md:flex-row items-center'>
                <div className='w-[368px] h-[402px] relative'>
                    <img src={ Man1 } className='w-[368px] h-[286px] rounded-md' />
                    <div className='bg-[#F5F7FA] rounded-lg p-4 flex flex-col gap-4 w-[317px] text-left absolute bottom-0 ml-[25px]'>
                        <div className='text-[20px] leading-7 font-semibold'>“Creating Streamlined Safeguarding Processes with OneRen”</div>
                        <div className='p-2 gap-2 flex flex-col'>
                            <div className='text-[#717171] font-semibold text-[20px]'>Kanye West</div>
                            <div className='text-[#717171] font-semibold text-[20px]'>CEO of Yeezy</div>
                        </div>
                    </div>
                </div>

                <div className='w-[368px] h-[402px] relative'>
                    <img src={ Man2 } className='w-[368px] h-[286px] rounded-md' />
                    <div className='bg-[#F5F7FA] rounded-lg p-4 flex flex-col gap-4 w-[317px] text-left absolute bottom-0 ml-[25px]'>
                        <div className='text-[20px] leading-7 font-semibold'>“Creating Streamlined Safeguarding Processes with OneRen”</div>
                        <div className='p-2 gap-2 flex flex-col'>
                            <div className='text-[#717171] font-semibold text-[20px]'>Kanye West</div>
                            <div className='text-[#717171] font-semibold text-[20px]'>CEO of Yeezy</div>
                        </div>
                    </div>
                </div>

                <div className='w-[368px] h-[402px] relative'>
                    <img src={ Man3 } className='w-[368px] h-[286px] rounded-md' />
                    <div className='bg-[#F5F7FA] rounded-lg p-4 flex flex-col gap-4 w-[317px] text-left absolute bottom-0 ml-[25px]'>
                        <div className='text-[20px] leading-7 font-semibold'>“Creating Streamlined Safeguarding Processes with OneRen”</div>
                        <div className='p-2 gap-2 flex flex-col'>
                            <div className='text-[#717171] font-semibold text-[20px]'>Kanye West</div>
                            <div className='text-[#717171] font-semibold text-[20px]'>CEO of Yeezy</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}