import React from 'react'

const Footer = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "Explore", "My Order", "Account", "Contact"]
        },
        {
            title: "Contact Us",
            links: ["+234 801 234 5678", "hello@chukskitchen.com", "123 Taste Blvd, Lagos, Nigeria"]
        },
        {
            title: "Follow Us",
            links: [ "Facebook", "Twitter", "Linkedin", "Instagram"]
        }
    ];
  return (
    <div className='bg-[#62412E] text-white'>
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10">
                <div>
                    <a href="/" >
                        <h1 className='text-[#FF7A18] text-[40px] leading-10 font-normal font-island '>Chuks Kitchen</h1>
                    </a>
                    <p className="max-w-40 mt-4">Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-start text-xs md:text-sm">
                © 2020 Lift Media All Right Reserved, Developed by Habheey Global.
            </p>
        </div>
    </div>
  )
}

export default Footer