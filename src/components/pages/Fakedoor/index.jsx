

import { useState } from 'react'
import ConfirmModal from '../../modals/confirm'

export default function Fakedoor() {

    const containerStyle = {
        backgroundImage: `url(${require('../../../asset/image/fakedoor_background.png')})`, 
        height: "100vh", 
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '32px',
        backgroundSize: 'cover'
    }

    const [ open, setOpen ] = useState(false);

    const contactUsClicked = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    const onConfirm = () => {
        setOpen(false);
    }

    return (
        <div style={containerStyle}>
            <div className='text-white text-[64px] font-semibold leading-[76px]'>We are on our way</div>
            <div className='text-white text-[16px] font-normal leading-6'>But you can already get in contact with us</div>
            <div className='w-[491px] flex flex-col justify-center gap-[6px]'>
                <div className='text-white font-medium leading-5 text-left'>Email*</div>
                <div className='flex gap-2'>
                    <input className='border border-[#D0D5DD] bg-white rounded-lg py-[10px] px-[14px] outline-none w-[335px]' placeholder='Enter your email' type='email' />
                    <button className='py-[14px] px-[32px] bg-[#26353C] rounded text-[16px] font-medium leading-6 text-white' onClick={contactUsClicked}>Contact Us</button>
                </div>
            </div>

            <ConfirmModal open={open} onClose={onClose} onConfirm={onConfirm} />
        </div>
    )
}