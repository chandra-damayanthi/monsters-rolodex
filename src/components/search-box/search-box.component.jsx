import './search-box.styles.css'


const SearchBox = ({ searchHandler, className, placeholder }) => (
    <input type="search" 
        placeholder={ placeholder }
        className={ `search-box ${className}` }
        onChange={ searchHandler }
  />
) 


export default SearchBox