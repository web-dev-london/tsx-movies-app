import { MoviesId } from "../../type";
import './Pagination.css'
import _ from 'lodash'

/* pageSize, itemsCount, onPageChange, currPage */

/*    pageSize: number;
    currPage: number;
    onPageChange?: (item: number) => void;
    itemsCount: MoviesId[];
 */

const Pagination = (props: {
    pageSize: number;
    currPage: number;
    onPageChange?: (item: number) => void;
    itemsCount: MoviesId[];
}) => {
    console.log("Current Page Clicked", props.currPage);
    const pagesCount = Math.ceil(props.itemsCount.length / props.pageSize);

    const pagesArray = [..._.range(1, pagesCount + 1)];

    const listItems = pagesArray.map(page => <li key={page} className={page === props.currPage ? 'page-item active' : 'page-item'}><a className="page-link" onClick={() => props.onPageChange(page)} >{page}</a></li>)

    return (
        <>
            <nav aria-label="...">
                <ul className="pagination pagination-md">
                    {listItems}
                </ul>
            </nav>
        </>
    )
}

export default Pagination

