
import { useState } from 'react';

import HomeImage from '../../../asset/image/Home1_desktop.png';
import ContactUsModal from '../../modals/ContactUs';
import ConfirmModal from '../../modals/confirm';

export default function LookingFor() {

    const [ open, setOpen ] = useState(false);
    const [ openConfirm, setOpenConfirm ] = useState(false);
    const [ form, setForm ] = useState();

    const onContactUsClicked = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    const onConfirm = () => {
        setOpen(false);
        setOpenConfirm(true);
    }

    const onCloseConfirm = () => {
        setOpenConfirm(false);
    }

    const onOkConform = () => {
        setOpenConfirm(false);

        // form.submit();
    }

    return (
        <div className='flex bg-[#F5F7FA] gap-24 justify-center md:flex-nowrap flex-wrap py-[40px]'>
            <div className='md:mt-20'>
                <div className='font-semibold text-[64px] text-center md:text-left text-[#4D4D4D] leading-[75px]'>
                    <div className='block md:gap-5'>
                        <div>Unlock</div>
                        <div className='flex md:gap-5'>
                            <div>Your</div>
                            <div>Target</div>
                        </div>
                    </div>
                    <div className='block md:flex md:gap-5'>
                        <div>Market </div>
                        <div> with</div>
                    </div>
                    <div>Precision</div>
                </div>
                <div className='text-base font-normal text-left text-[#717171] mt-20 md:mt-5'>
                    <div>Your Ideal Audience Awaits. Leave your focus to </div>
                    <div>your retention strategies. Dive in now!</div>
                </div>
                <div className='flex items-start mt-10'>
                    <button className='bg-[#26353C] text-white py-2 px-4 rounded' onClick={onContactUsClicked}>
                        Contact Us
                    </button>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={HomeImage} />
            </div>

            <ContactUsModal open={open} onClose={onClose} onConfirm={onConfirm} setForm={setForm} form={form} />
            <ConfirmModal open={openConfirm} onClose={onCloseConfirm} onConfirm={onOkConform} />
      </div>
    )
}