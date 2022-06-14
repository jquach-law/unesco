


function SearchBox({handleChange}) {
    return (
          <div className="search-container">
              <input 
                  type="text"
                  placeholder="Search country or site name..."
                  name="search"
                  onChange = {handleChange}
              />
              <button type="submit"><i class="fa fa-search"></i></button>
          </div>
    )
}

export default SearchBox;