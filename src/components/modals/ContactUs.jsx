import { Fragment } from 'react';
import { Dialog } from '@headlessui/react';

import Logo from '../../asset/image/Logo.png';
import XClose from '../../asset/image/x-close.png';

function ContactUsModal({ open, onClose, onConfirm }) {
    
  return (
    <Dialog open={open} onClose={onClose} >
      <Dialog.Overlay className="fixed inset-0 bg-[#344054] opacity-70 " />

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[400px] rounded-lg overflow-y-auto max-h-[100vh]">
        
        <Dialog.Title as="h3" className="text-lg font-bold mb-4 flex justify-between px-6 pt-6">
            <img src={ Logo }  className='w-[105px] h-[24px]' />
            <button className='p-0' onClick={onClose}><img src={ XClose } /></button>
        </Dialog.Title>
        <Dialog.Description className="text-sm gap-1 border-b px-6 pb-6 mb-0">
            <div className='text-[18px] font-semibold leading-7'> Contact us today </div>
            <div className='text-[14px] font-normal leading-5 text-[#475467]'>Our sales team will contact you soon</div>
        </Dialog.Description>
        <div className='flex flex-col gap-5 p-8'>

            <div className='flex flex-col gap-1'>
              <div className='text-[#344054] text-[14px] font-medium leading-5'>Name*</div>
              <input type='text' placeholder='Enter your name' className='border border-[#D0D5DD] py-[10px] px-[14px] rounded-lg outline-none w-full' />
            </div>

            <div className='flex flex-col gap-1'>
              <div className='text-[#344054] text-[14px] font-medium leading-5'>Last Name*</div>
              <input type='text' placeholder='Enter your last name' className='border border-[#D0D5DD] py-[10px] px-[14px] rounded-lg outline-none w-full' />
            </div>

            <div className='flex flex-col gap-1'>
              <div className='text-[#344054] text-[14px] font-medium leading-5'>Email*</div>
              <input type='text' placeholder='Enter your email' className='border border-[#D0D5DD] py-[10px] px-[14px] rounded-lg outline-none w-full' />
            </div>

            <div className='flex flex-col gap-1'>
              <div className='text-[#344054] text-[14px] font-medium leading-5'>Role*</div>
              <input type='text' placeholder='Enter your role' className='border border-[#D0D5DD] py-[10px] px-[14px] rounded-lg outline-none w-full' />
            </div>

            <div className='flex flex-col gap-1'>
              <div className='text-[#344054] text-[14px] font-medium leading-5'>Company*</div>
              <input type='text' placeholder='Enter your company' className='border border-[#D0D5DD] py-[10px] px-[14px] rounded-lg outline-none w-full' />
            </div>

            <div className='flex flex-col gap-1'>
              <div className='text-[#344054] text-[14px] font-medium leading-5'>Company Website*</div>
              <input type='text' placeholder='Enter the company website' className='border border-[#D0D5DD] py-[10px] px-[14px] rounded-lg outline-none w-full' />
            </div>

            <button onClick={onConfirm} className='px-[18px] py-[10px] rounded-lg bg-[#43A046] text-[16px] text-white font-semibold leading-6 w-full'>Ok</button>
            <button onClick={onClose} className='px-[18px] py-[10px] rounded-lg border border-[#D0D5DD] text-[16px] text-[#344054] font-semibold leading-6 w-full'>Cancel</button>
        </div>
      </div>
    </Dialog>
  );
}

export default ContactUsModal;
