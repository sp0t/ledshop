import { useState } from "react";
import LogoIcon from "../../asset/image/Logo.png"

const MenuBar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-blue shadow bg-[#F5F7FA]">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="md:hidden">
                            <button
                                className="p-2 text-[#263238] rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-12 h-6 text-[#263238]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-12 h-6 text-[#263238]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <a href="javascript:void(0)">
                            <img src={LogoIcon} />
                        </a>
                        {/* <div className="block space-x-2 md:hidden">
                            <a
                                href="javascript:void(0)"
                                className="px-4 py-2 font-medium text-[#26353C] text-sm hover:text-white bg-[#F5F7FA] rounded-md hover:bg-[#3E8989]"
                            >
                                Sign up
                            </a>
                        </div> */}
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="font-medium text-base items-center justify-center space-y-8 gap-[15px] md:flex md:space-x-6 md:space-y-0">
                            <li className="text-[#18191F] hover:text-indigo-200">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-[#18191F] hover:text-indigo-200">
                                <a href="javascript:void(0)">Service</a>
                            </li>
                            <li className="text-[#18191F] hover:text-indigo-200">
                                <a href="javascript:void(0)">Feature</a>
                            </li>
                            <li className="text-[#18191F] hover:text-indigo-200">
                                <a href="javascript:void(0)">Product</a>
                            </li>
                            <li className="text-[#18191F] hover:text-indigo-200">
                                <a href="javascript:void(0)">Testimonial</a>
                            </li>
                            <li className="text-[#18191F] hover:text-indigo-200">
                                <a href="javascript:void(0)">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="hidden space-x-2 md:inline-block">
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 font-medium text-[#26353C] text-sm hover:text-white bg-[#F5F7FA] rounded-md hover:bg-[#3E8989]"
                    >
                        Login
                    </a>
                    <a
                        href="javascript:void(0)"
                        className="px-4 py-2 font-medium text-[#26353C] text-sm hover:text-white bg-[#F5F7FA] rounded-md hover:bg-[#3E8989]"
                    >
                        Sign up
                    </a>
                </div> */}
            </div>
        </nav>
    );
}

export default MenuBar;