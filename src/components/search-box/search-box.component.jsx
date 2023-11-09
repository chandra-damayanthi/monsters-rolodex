import { Component } from 'react'

import './search-box.styles.css'

class SearchBox extends Component {


    render() {
        const { searchHandler, className, placeholder } = this.props
        return(
            <input type="search" 
                placeholder={ placeholder }
                className={ `search-box ${className}` }
                onChange={ searchHandler }
          />
        ) 
    }
}


export default SearchBox