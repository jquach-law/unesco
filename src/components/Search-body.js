import NavBar from "./NavBar"
import SearchList from "./PicTile"

function SearchBody({handleChange, filteredSites}) {
    return (
        <div>
            <NavBar handleChange={handleChange}/>
            <SearchList filteredSites={filteredSites} />
        </div>
    )
}

export default SearchBody