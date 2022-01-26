import React from 'react';
import '../styles/Pagination.css';

const Pagination = (props) => {
    
    const { page, lastPage, onLeftClick, onRightClick } = props;

    return (
        <div className="pagination">
            <button className="pagination-btn" onClick={onLeftClick}><span className="material-icons-outlined">navigate_before</span></button>
            <h4 className="pagination-txt">{ page } of { lastPage }</h4>
            <button className="pagination-btn" onClick={onRightClick}><span className="material-icons-outlined">navigate_next</span></button>
        </div>
    );
}

export default Pagination;