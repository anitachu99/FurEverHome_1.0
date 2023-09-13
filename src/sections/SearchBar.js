import style from './styling/SearchBar.module.scss';

const SearchBar = ({ onSearch }) => {
    // const [query, setQuery] = useState('');

    const handleInput = (e) => {
        const newInput = e.target.value;
        onSearch(newInput);
    }

    return (
        <div className={style.searchBarWrapper}>
                <input 
                    className={style.searchbar}
                    type="text"
                    name='query'
                    placeholder="Search dog or cat"
                    onChange={handleInput}
                />
        </div>
    )
}

export default SearchBar;