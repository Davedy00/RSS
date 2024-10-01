'use client';

import React, { useState, useEffect } from 'react';
import { getData, Data } from '@/data';
// import { Data } from '../../data';
import Search from '@/app/components/search';
import Button from '@/app/components/button';

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(158,158,158,1)">
      <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
  </svg>
);

const EventsPage: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setData(data);
        }
        fetchData();
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const tags = [
        'Trends',
        'Conferences',
        'E-commerce',
        'Top News',
        'Technology',
        'Artificial Intelligence',
        'Stunts',
    ];

    if (data.length === 0) {
        return (
            <div className="flex flex-row h-screen">
                <div className="bg-gray-200 w-1/6 pt-10">
                    {/* Sidebar content */}
                </div>
                <div className="container mx-auto py-8 bg-white w-2/3">
                    <div>Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-row h-screen">
            <div className="bg-gray-200 w-1/6 pt-10 overflow-y-auto" style={{ maxHeight: '100vh' }}>
                <div className="bg-white mt-10 ms-6 p-2 ps-6 flex justify-start">
                    <p className="pl-4">Mentions</p>
                </div>
                <div className="ms-6 mt-5 p-2 ps-6 flex justify-start">
                    <p className="pl-4">Read Later</p>
                </div>
            </div>

            <div className="container mx-auto py-8 bg-white w-2/3 overflow-y-auto" style={{ maxHeight: '100vh', paddingRight: '15px' }}>
                <h2 className="text-2xl font-bold mb-4">Events</h2>
                <div className="w-full flex items-center justify-between mb-4">
                    <div className="relative w-2/6">
                        <Button text={'Filter'} type={'button'} onClick={toggleDropdown} icon={<FilterIcon />}/>
                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 z-10">
                                {tags.map((tag, index) => (
                                    <div key={index} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="w-5/6">
                        <Search />
                    </div>
                </div>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="w-1/5 p-2 text-left"></th>
                            <th className="w-1/4 p-2 text-left"></th>
                            <th className="w-3/10 p-2 text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id} className="border-b">
                                <td className="p-2">
                                    <img src={item.accountimg || '/default-account.png'} alt="Account Image" className="w-16 h-16" />
                                    <h1 className="font-semibold">{item.source}</h1>
                                    <p className='text-sm text-gray-500'>{item.followers}</p>
                                    <button className='bg-blue-500  rounded text-center text-white px-4 mt-2'>Follow</button>
                                </td>
                                <td className=" p-2">
                                    <img src={item.imageUrl} alt="Article Image" className="w-full h-auto" />
                                </td>
                                <td className=" p-2">
                                    <h1 className="font-bold">{item.title}</h1>
                                    <div className="flex justify-between">
                                        <p className='text-gray-400'>{item.time}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" className="checked:border-indigo-500" />
                                        <label className='ml-2 text-gray-400'>Read Later</label>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EventsPage;