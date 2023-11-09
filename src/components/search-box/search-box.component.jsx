import { Component } from 'react'


class SearchBox extends Component {


    render() {
        const { searchHandler, className, placeholder } = this.props
        return(
            <input type="search" 
                placeholder={ placeholder }
                className={ className }
                onChange={ searchHandler }
          />
        ) 
    }
}


export default SearchBox