import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce/lib';

import { useResultContext } from '../context/ResultsContextProvider';

export const Search = () => {
    const { setSearchTerm } = useResultContext();
    const [text, setText] = useState('');
    const [debouncedValue] = useDebounce(text, 700);

    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue);
    }, [debouncedValue]);

    return (
        <div className="relative sm:mx-auto sm:-mt-10 mt-3">
            <input
                value={text}
                type="text"
                className="w-80 md:w-80 lg:w-96 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
                placeholder="🔎 Search GitHub Users"
                onChange={(e) => setText(e.target.value)}
            />
            {text !== '' && (
                <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
                    x
                </button>
            )}
        </div>
    );
};