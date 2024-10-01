import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Add your search logic here
  };

  return (
    <div className="flex justify-center my-4">
      <div className="relative flex items-center w-full">
        <RiSearchLine className="absolute left-2 text-gray-500 text-lg" />
        <input
          type="search"
          placeholder="search for your favorite news source by #topic, title, url..."
          id='search'
          value={searchTerm}
          onChange={handleSearch}
          className="w-full border py-1.5 pl-10 text-gray-900 outline-none "
        />
      </div>
    </div>
  );
};

export default Search;