import { useState } from 'react';
import style from './styling/SearchBar.module.scss';

const SearchBar = ({ onSearch }) => {

    const[searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query)
        onSearch(query);
    }

    return (
        <div className={style.searchBarWrapper}>
                <input 
                    className={style.searchbar}
                    type="text"
                    placeholder="Search Your FurEver Pet"
                    value={searchQuery}
                    onChange={(e) => {
                        const newQuery = e.target.value;
                        setTimeout(() => handleSearch(newQuery), 300);
                        }
                    }
                />
        </div>
    )
}

export default SearchBar;