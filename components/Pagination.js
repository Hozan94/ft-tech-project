import { useState } from "react";
import styles from "../styles/Pagination.module.css"

const Pagination = (props) => {

    const [pageNumber, setPageNumber] = useState(1)

    const paginate = (e) => {

        setPageNumber(e.target.innerText)
        props.currentPage(e.target.innerText)

        if (pageNumber !== + e.target.innerText) {
            e.target.ariaCurrent = "page"

            let nodes = Array.from(e.target.parentElement.childNodes)

            let filteredNodes = nodes.filter(node => node.innerText !== e.target.innerText)

            filteredNodes.map(node => (
                node.ariaCurrent = null
            ))
        }
    }

    return (
        <div className={styles.container}>
            <div className="o-buttons-pagination">
                <a onClick={paginate} className="o-buttons o-buttons--secondary" aria-current="page">1</a>
                <a onClick={paginate} className="o-buttons o-buttons--secondary"  >2</a>
                <a onClick={paginate} className="o-buttons o-buttons--secondary" >3</a>
                <a onClick={paginate} className="o-buttons o-buttons--secondary" >4</a>
                <a onClick={paginate} className="o-buttons o-buttons--secondary" >5</a>
                <a onClick={paginate} className="o-buttons o-buttons--secondary" >6</a>
                <a onClick={paginate} className="o-buttons o-buttons--secondary" >7</a>
            </div>
        </div>
    );
}

export default Pagination;