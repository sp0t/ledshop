import { Dialog } from '@headlessui/react';

import Logo from '../../asset/image/Logo.png';
import XClose from '../../asset/image/x-close.png';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function ContactUsModal({ open, onClose, onConfirm, setForm, form }) {

  useEffect(() => {
    console.log("useEffect=============")
      const script = document.createElement('script');
      script.src = 'https://embed.typeform.com/next/embed.js';
      script.async = true;
      document.head.appendChild(script);
  }, [])
    
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
        <Helmet>
          <script src="https://embed.typeform.com/next/embed.js" />
        </Helmet>
        <div data-tf-widget="E66blsNY" data-tf-opacity="100" data-tf-iframe-props="title=Leadshop form" data-tf-transitive-search-params data-tf-medium="snippet" style={{width: '100%', height: '500px'}}></div>

      </div>
    </Dialog>
  );
}

export default ContactUsModal;
