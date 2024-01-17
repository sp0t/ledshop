import { useState, image } from "react"

import ExpandIcon from '../../../asset/image/expand.png';
import CollapseIcon from '../../../asset/image/collapse.png';

export default function Faq() {

    const [ faqs, setFaqs ] = useState([
        {
            id: 1, 
            q: "How can we be sure that the data collected is accurate and reliable?", 
            a: "Addressing the concern about the quality and reliability of the gathered data, especially considering the importance of accurate information for effective marketing strategies."
        }, 
        {
            id: 2, 
            q: "What measures does TreatCoin have in place to ensure compliance with data protection regulations like GDPR, CCPR, and LGPD?", 
            a: "Providing reassurance about the platform's commitment to data privacy and the implementation of robust measures to comply with global data protection regulations."
        }, 
        {
            id: 3, 
            q: "Can you provide examples or case studies demonstrating the success of TreatCoin in delivering high-quality leads compared to competitors?", 
            a: "Offering proof of concept through real-world examples or case studies that showcase TreatCoin's performance in generating valuable leads in a competitive landscape."
        }, 
        {
            id: 4, 
            q: "How does TreatCoin prevent fraudulent or low-quality traffic, ensuring that the leads acquired are genuinely interested and valuable?", 
            a: "Explaining the fraud prevention tools and methodologies in place to filter out undesirable traffic, emphasizing the platform's dedication to maintaining data quality."
        }, 
        {
            id: 5, 
            q: "What types of businesses or industries have successfully used TreatCoin, and what were their results?", 
            a: "Highlighting the diversity of businesses or industries that have found success with TreatCoin, providing specific examples or success stories to demonstrate versatility."
        }, 
        {
            id: 6, 
            q: "Can you walk us through the process of data customization, and how it ensures that we receive leads with the desired qualification?", 
            a: "Offering clarity on the customization process, detailing how businesses can tailor data acquisition to their specific needs and receive leads that meet their qualification criteria."
        }, 
        {
            id: 7, 
            q: "How does TreatCoin handle situations where incentive traffic might not be suitable for our business?", 
            a: "Addressing concerns about the adaptability of TreatCoin's methods, particularly for businesses where incentive traffic might not align with their goals, and explaining alternative strategies available."
        }, 
        {
            id: 8, 
            q: "What kind of analytics and insights does TreatCoin provide, and how can they help us in planning future marketing strategies?", 
            a: "Outlining the analytics and insights offered by TreatCoin, with a focus on how these tools empower businesses to make informed decisions and plan effective marketing strategies."
        }, 
        {
            id: 9, 
            q: "Can you provide proof of the identity validation process, such as KYC (Know Your Customer), to ensure the leads are legitimate and trustworthy?", 
            a: "Clarifying the identity validation process and assuring businesses of the legitimacy and trustworthiness of leads by detailing the KYC or similar procedures in place."
        }, 
        {
            id: 10, 
            q: "How does TreatCoin ensure global reach, and what specific insights can we gain from data gathered in different regions?", 
            a: "Discussing TreatCoin's global reach and elucidating the valuable localized insights available, including the exploration of untapped markets and the potential for expanding businesses globally."
        }, 
    ]);
    const [ currentId, setCurrentId ] = useState(0);


    return (
        <div className="bg-[#26353C] flex flex-col gap-4 items-center py-12">
            <div className="text-center font-normal text-[18px] text-[#3E8989]">FAQ</div>

            <div className="text-center text-[36px] leading-10 text-white md:text-[64px] md:leading-[76px]">
                <div>Frequently Asked</div>
                <div>Questions</div>
            </div>

            <div className="text-[#ABBED1] leading-7 text[18px] text-center max-w-[300px] md:max-w-[520px] pb-20">
                In doubt about our services or how our product works? Here are some of the most asked questions from our partners
            </div>

            <div className="w-full md:w-[1024px] bg-[#F5F7FA] rounded-2xl p-5 md:p-20 gap-8 flex flex-col">
 
                {
                    faqs.map((item) => 
                    <div>
                        <div className="hidden bg-white min-h-32 md:flex flex-row rounded-2xl p-4 md:p-9 gap-10 justify-between">
                            <div className="max-w-[720px] flex flex-col gap-4">
                                <div className="text-[20px] leading-7 font-semibold text-start">
                                    {item.q}
                                </div>
                                {
                                    currentId === item.id && 
                                    <div className="text-lg font-semibold text-[#89939E]  text-start">
                                        {item.a}
                                    </div>
                                }
                            </div>
                            <div>
                                {
                                    currentId === item.id ? 
                                    <img src={ ExpandIcon } onClick={ () => setCurrentId(0) } className="w-[50px] h-[50px] min-w-[50px] m-4 cursor-pointer" />
                                    :
                                    <img src={ CollapseIcon } onClick={ () => setCurrentId(item.id) } className="min-w-[80px] w-[80px] h-[80px] cursor-pointer" />
                                }
                            </div>
                        </div>
                        <div className="bg-white min-h-32 flex flex-col rounded-2xl p-4 md:p-9 gap-10 justify-between md:hidden">
                            <div className="max-w-[720px] flex flex-row gap-4">
                                <div className="text-[20px] leading-7 font-semibold text-start">
                                    {item.q}
                                </div>
                                <div>
                                    {
                                        currentId === item.id ? 
                                        <img src={ ExpandIcon } onClick={ () => setCurrentId(0) } className="w-[50px] h-[50px] min-w-[50px] m-4 cursor-pointer" />
                                        :
                                        <img src={ CollapseIcon } onClick={ () => setCurrentId(item.id) } className="min-w-[80px] w-[80px] h-[80px] cursor-pointer" />
                                    }
                                </div>
                            </div>
                            {
                                currentId === item.id && 
                                <div className="text-lg font-semibold text-[#89939E]  text-start">
                                    {item.a}
                                </div>
                            }
                            
                        </div>
                    </div>
                    )
                }
                
            </div>
        </div>
    )
}