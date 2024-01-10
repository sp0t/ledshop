

import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../../modals/confirm'
import { Helmet } from 'react-helmet';

export default function Fakedoor() {

    const navigate = useNavigate();

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
    const formRef = useRef(null);

    const contactUsClicked = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
        navigate("/");
    }

    const onConfirm = () => {
        if(formRef?.current) {
            formRef.current.submit();
        }
        setOpen(false);
        navigate("/");
    }


    return (
        <div style={containerStyle}>
            <div className='text-white text-[64px] font-semibold leading-[76px]'>We are on our way</div>
            <div className='text-white text-[16px] font-normal leading-6'>But you can already get in contact with us</div>
            <div className='w-[491px] flex flex-col justify-center gap-[6px]'>
                    <form id="amo_forms_1264475" ref={formRef}>
                        <div className='flex gap-2 justify-center'>
                            <button data-tf-popup="fK25uXR4" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Leadshop Fakedoor EN" data-tf-transitive-search-params data-tf-medium="snippet" className='py-[14px] px-[32px] bg-[#26353C] rounded text-[16px] font-medium leading-6 text-white' >Contact Us</button>
                            <Helmet>
                                <script src="https://embed.typeform.com/next/embed.js"></script>
                            </Helmet>
                        </div>
                    </form>
                    {/* <div id="amo_forms_1264475"></div> */}
            </div>

            <ConfirmModal open={open} onClose={onClose} onConfirm={onConfirm} />
        </div>
    )
}