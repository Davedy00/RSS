// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
// import { getData, Data } from '@/data';
import { getData } from '@/data';
import { Data } from '@/data';
// import { getData, Data } from '../data'; // Adjust the import path
import Search from '@/app/components/search'; // Adjust the import path
import Button from '@/app/components/button'; // Adjust the import path
import { useRouter } from 'next/navigation';

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(158,158,158,1)">
      <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
  </svg>
);

const MentionPage: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

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
        'Events',
        'Conferences',
        'E-commerce',
        'Top News',
        'Technology',
        'Artificial Intelligence',
        'Stunts',
    ];

    const handleTagSelect = (tag: string) => {
        if (tag === 'Events') {
            router.push('/events');
        }
        setIsDropdownOpen(false);
    };

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
                    {/* Sidebar icons */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(103,103,103,1)">
                        <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.6418 20 15.1681 19.5054 16.4381 18.6571L17.5476 20.3214C15.9602 21.3818 14.0523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13.5C22 15.433 20.433 17 18.5 17C17.2958 17 16.2336 16.3918 15.6038 15.4659C14.6942 16.4115 13.4158 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.1258 7 14.1647 7.37209 15.0005 8H17V13.5C17 14.3284 17.6716 15 18.5 15C19.3284 15 20 14.3284 20 13.5V12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" />
                    </svg>
                    <p className="pl-4">Mentions</p>
                </div>
                <div className="ms-6 mt-5 p-2 ps-6 flex justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(103,103,103,1)">
                        <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.6418 20 15.1681 19.5054 16.4381 18.6571L17.5476 20.3214C15.9602 21.3818 14.0523 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13.5C22 15.433 20.433 17 18.5 17C17.2958 17 16.2336 16.3918 15.6038 15.4659C14.6942 16.4115 13.4158 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.1258 7 14.1647 7.37209 15.0005 8H17V13.5C17 14.3284 17.6716 15 18.5 15C19.3284 15 20 14.3284 20 13.5V12ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" />
                    </svg>
                    <p className="pl-4">Read Later</p>
                </div>
            </div>
            
            <div className="container mx-auto py-8 bg-white w-2/3 overflow-y-auto" style={{ maxHeight: '100vh', paddingRight: '15px' }}>
                <h2 className="text-xl font-bold mb-4">Find the best information sources</h2>
                <div className="w-full flex items-center justify-between">
                    <div className="relative w-2/6">
                        <Button
                            text={'Filter'}
                            type={'button'}
                            onClick={toggleDropdown}
                            icon={<FilterIcon />}
                        />
                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 z-10">
                                {tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => handleTagSelect(tag)}
                                    >
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
                <div className="container mx-auto py-8">
                    {data.map(item => (
                        <div key={item.id} className="flex items-center border-b border-gray-300 py-4">
                            <img src={item.imageUrl} alt="Article Image" className="w-1/3 mr-6" />
                            <div className="">
                                <h1 className="font-bold">{item.title}</h1>
                                <div className="flex">
                                    <p className='text-green-500 w-1/2'>{item.feeds}</p>
                                    <p className='text-gray-400'>{item.source}</p>
                                </div>
                                <div className="flex">
                                    <p className='w-1/2'>
                                        <input type="radio" className="checked:border-indigo-500" />
                                    </p>
                                    <p className='text-gray-400'>{item.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MentionPage;