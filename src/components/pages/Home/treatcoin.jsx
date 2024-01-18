
import TreatCoinRect from '../../../asset/image/treatecoin_rect.png';

export default function TreatCoin() {
    return (
        <div className="py-[125px] flex flex-col md:flex-row items-center justify-between bg-[#26353C] px-[32px] md:px-[144px] gap-[96px]">
            <div className="text-white md:w-[560px] text-left flex flex-col gap-[18px]">
                <div className="text-[36px] font-semibold leading-10">What is TreatCoin?</div>
                <div className="text-[14px] font-normal">
                    TreatCoin is a vibrant space where your ads leave a lasting impression. We introduce innovative methods to educate your prospective customers about your product, capturing their interest even before they're primed for your call or approach.
                </div>
                <div className="text-[14px] font-normal">
                    We ensure our users are not just happy but deeply engaged, allowing you to extract optimal value from our system. It's a straightforward win-win situation!
                </div>
                <div className="text-[14px] font-normal">
                    Unilimited leads, fitting you the way you need.
                </div>
            </div>

            <img src={ TreatCoinRect } className='w-[191px] h-[191px]' />

        </div>
    )
}