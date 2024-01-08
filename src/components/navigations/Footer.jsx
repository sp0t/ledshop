import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#263238] text-[#F5F7FA]">
            <div className="mx-auto max-w-screen-xl  space-y-8 px-10 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 text-left font-normal text-sm">
                    <div>
                        <p className="mt-16 max-w-xs">
                            Copyright &copy; 2024 Leadshop ltd.
                        </p>
                        <p className="mt-2 max-w-xs">
                            All rights reserved
                        </p>

                        <ul className="mt-8 flex gap-4">
                        <li>
                            <div className='rounded-full p-1.5 bg-[#3c464c] '>
                                <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className='rounded-full p-1.5 bg-[#3c464c] '>
                                <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Dribbble</span>

                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className='rounded-full p-1.5 bg-[#3c464c] '>
                                <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Twitter</span>

                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className='rounded-full p-1.5 bg-[#3c464c] '>
                                <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="transition hover:opacity-75"
                                >
                                    <span className="sr-only">Youtube</span>

                                    <svg className="h-5 w-5" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.6677 1.1714C16.4021 1.3729 16.9804 1.96665 17.1767 2.72066C17.5333 4.0872 17.5333 6.93851 17.5333 6.93851C17.5333 6.93851 17.5333 9.78972 17.1767 11.1564C16.9804 11.9104 16.4021 12.5041 15.6677 12.7057C14.3369 13.0718 9.00001 13.0718 9.00001 13.0718C9.00001 13.0718 3.66309 13.0718 2.33218 12.7057C1.59783 12.5041 1.0195 11.9104 0.823232 11.1564C0.466675 9.78972 0.466675 6.93851 0.466675 6.93851C0.466675 6.93851 0.466675 4.0872 0.823232 2.72066C1.0195 1.96665 1.59783 1.3729 2.33218 1.1714C3.66309 0.805176 9.00001 0.805176 9.00001 0.805176C9.00001 0.805176 14.3369 0.805176 15.6677 1.1714ZM7.40002 4.53845V9.87179L11.6667 7.20522L7.40002 4.53845Z" fill="white"/>
                                    </svg>
                                </a>
                            </div>
                        </li>
                        </ul>
                    </div>

                    <div className="text-left grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                        <div>
                            <p className="font-semibold text-xl">Company</p>

                            <ul className="mt-6 space-y-3 font-normal text-sm">
                                <li>
                                    <a href="#" className="transition hover:opacity-75">About us</a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75">Blog</a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75">Contact us</a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75">Pricing</a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75">Testimonials</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-xl">Support</p>

                            <ul className="mt-6 space-y-4 font-normal text-sm">
                                <li>
                                    <a href="#" className="transition hover:opacity-75">Help center</a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75">Terms of service</a>
                                </li>

                                <li>
                                    <a href="#" className="transition hover:opacity-75">Legal</a>
                                </li>
                                <li>
                                    <a href="#" className="transition hover:opacity-75">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#" className="transition hover:opacity-75">Status</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-xl">Stay up to date</p>

                            <ul className="mt-6 space-y-4 font-normal text-sm">
                                <li>
                                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center">
                                        <div className="relative w-full">
                                            <input 
                                                type="email" 
                                                className="w-full p-4 pl-4 pr-10 font-normal text-sm text-[#D9DBE1] bg-[#515b60] rounded-xl focus:outline-none transition-colors"
                                                placeholder="Your email address"
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                                <button className='cursor-pointer'>
                                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.0303 0.641566C17.2341 0.845294 17.3031 1.14772 17.2079 1.41966L11.9579 16.4197C11.8563 16.7099 11.5878 16.9087 11.2806 16.9213C10.9733 16.9338 10.6895 16.7575 10.5646 16.4765L7.6818 9.9901L1.1954 7.10725C0.91439 6.98236 0.738092 6.69858 0.750627 6.39132C0.763163 6.08406 0.961991 5.81559 1.25224 5.714L16.2522 0.464002C16.5242 0.368823 16.8266 0.437837 17.0303 0.641566ZM9.14456 9.588L11.1671 14.1386L14.7064 4.02616L9.14456 9.588ZM13.6457 2.9655L3.53331 6.50485L8.0839 8.52734L13.6457 2.9655Z" fill="white"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
 }

 export default Footer;
