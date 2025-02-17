import { BiSortAZ, BiSortZA } from "react-icons/bi"
import { FaDice } from "react-icons/fa";

const Searcher = ({ searchChange , az, za, reset}) => {
    return (
        <div className='pa2 bg-lightest-blue'>
            <div className="absolute f1 ml3">
                <a href="#0" title="Ascending order" onClick={az}><BiSortAZ /></a>
                <a href="#0" title="Descending order" onClick={za}><BiSortZA /></a>
                <a href="#0" title="Country" onClick={reset}><FaDice /></a> 

            </div>
            <input
                className='ba b--blue bg-light-green pa3 br3 w-20'
                type='search'
                placeholder='search contacts'
                onChange={searchChange}
            />
        </div>
    );
}
export default Searcher;