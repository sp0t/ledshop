
import TreatCoinRect from '../../../asset/image/treatecoin_rect.png';

export default function TreatCoin() {
    return (
        <div className="py-[125px] flex flex-col md:flex-row items-center justify-between bg-[#26353C] px-[32px] md:px-[144px] gap-[96px]">
            <div className="text-white md:w-[560px] text-left flex flex-col gap-[18px]">
                <div className="text-[36px] font-semibold leading-10">What is TreatCoin?</div>
                <div className="text-[14px] font-normal">
                    TreatCoin is an environment where our users will be touched by your ads. We're bringing up new ways to teach your desired customer about your product, before he's hot enough for your call/approach.
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