import React, {useEffect, useState} from 'react';

interface FilterByAuthorProps {
    onChange: (author: string | null) => void;
    clear: boolean;
}

const FilterByAuthor: React.FC<FilterByAuthorProps> = ({onChange, clear}) => {
    const [isActive, setIsActive] = useState(false);
    const [authorName, setAuthorName] = useState('');

    const handleToggle = () => {
        setIsActive(!isActive);
        onChange(isActive ? null : authorName);
    };

    const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setAuthorName(name);
        onChange(isActive ? name : null);
    };

    useEffect(() => {
        setIsActive(false);
        setAuthorName('');
    }, [clear]);

    return (
        <div className="w-full mb-5 max-w-[300px] rounded-md bg-[#eef5fc40] p-10 shadow-custom">
            <div className="flex items-center mb-6">
                <p className="text-lg font-medium ">Filter par auteur :</p>

                <>
                    <label className='relative inline-flex items-center cursor-pointer select-none '>
                        <input
                            type='checkbox' className="sr-only"
                            checked={isActive}
                            onChange={handleToggle}
                        />
                        <span
                            className={` border slider ml-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
                                isActive ? 'bg-[#5555f8]' : ' bg-gray-500'
                            }`}
                        >
          <span
              className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                  isActive ? 'translate-x-6' : ''
              }`}
          ></span>
        </span>


                    </label>
                </>


            </div>
            <input
                type="text"
                placeholder="Enter author name"
                value={authorName}
                disabled={!isActive}
                onChange={handleAuthorChange}
                className={`border w-full p-2 rounded-md ${
                    isActive ? 'bg-[#EEF5FC] border-blue-500' : 'bg-gray-100'
                }`}
            />
        </div>
    );
};

export default FilterByAuthor;
