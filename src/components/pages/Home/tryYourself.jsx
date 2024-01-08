import { Link } from 'react-router-dom';

import RightArrow from '../../../asset/image/right-arrow.png';

export default function TryYourself() {
    return (
        <div className="flex flex-col gap-8 mt-32 py-8 justify-center items-center bg-[#F5F7FA] md:bg-transparent">
            <div className="text-[#263238] text-[64px] leading-[72px] font-semibold flex">Try yourself!</div>

            <Link className="bg-[#26353C] text-[#FFFFFF] rounded flex gap-4 px-8 py-[14px] items-center" to="fakedoor">
                Get a Demo
                <img src={RightArrow} />
            </Link>
        </div>
    )
}