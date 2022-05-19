import React from 'react';
import './MonpmvieRow.css';

export default ({title,items}) => {
    return(
        <div ClassName="MovieRow">
            <h2>{title}</h2>
            <div ClassName="MovieRow--listarea">
                <div ClassName="MovieRow--list">
                {items.results.length > 0 && items.results.map((item,key)=>(
                    <div key={key} ClassName="MovieRow--item">
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
