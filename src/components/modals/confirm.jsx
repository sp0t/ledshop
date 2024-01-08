import { Fragment } from 'react';
import { Dialog } from '@headlessui/react';

import Logo from '../../asset/image/Logo.png';
import XClose from '../../asset/image/x-close.png';

function ConfirmModal({ open, onClose, onConfirm }) {
    
  return (
    <Dialog open={open} onClose={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-[#344054] opacity-70" />

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[400px] rounded-lg ">
        
        <Dialog.Title as="h3" className="text-lg font-bold mb-4 flex justify-between px-6 pt-6">
            <img src={ Logo }  className='w-[105px] h-[24px]' />
            <button className='p-0' onClick={onClose}><img src={ XClose } /></button>
        </Dialog.Title>
        <Dialog.Description className="text-sm mb-4 gap-1 border-b px-6 pb-6 mb-0">
            <div className='text-[18px] font-semibold leading-7'> All set up! </div>
            <div className='text-[14px] font-normal leading-5 text-[#475467]'>Our sales team will contact you soon, or you can also send an email to: bizdev@treatcoin.com</div>
        </Dialog.Description>
        <div className='p-8'>
            <button onClick={onConfirm} className='px-[18px] py-[10px] rounded-lg bg-[#43A046] text-[16px] text-white font-semibold leading-6 w-full'>Ok</button>
        </div>
      </div>
    </Dialog>
  );
}

export default ConfirmModal;
