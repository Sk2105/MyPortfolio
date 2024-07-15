import React, { useState } from 'react'
import tabs from '../Tabs'
import { Link } from 'react-scroll'

export default function Header() {
    const [activeTab, setActiveTab] = useState('about')
    return (
        <div className='w-full sticky bg-[#0a192f] top-0 backdrop-blur-sm'>
            <div className='w-full  flex justify-center gap-5 items-center  p-2'>
                {
                    tabs.map((tab) => (
                        <Link
                            to={tab.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            key={tab.id}
                            onClick={() => setActiveTab(tab.to)}
                            onSetActive={() => setActiveTab(tab.to)}
                        >
                            <p className={`duration-300 cursor-pointer text-gray-400 hover:text-white hover:underline ${activeTab === tab.to ? 'text-white underline' : ''}`}>{tab.name}</p>
                        </Link>
                    ))
                }


            </div>
            <div className='w-full h-0.5 bg-gray-300'>

            </div>
        </div>
    )
}
