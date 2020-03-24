import React from 'react';
import './categorieItem.css';

const CategorieItem = ({categorieItem, selectCat}) => {
    
    return (
        <div className="cat_item_block">
            <div className="cat_image">
                <img src={categorieItem.imgSrc} alt=""  onClick={()=>selectCat(categorieItem.id)}/>
            </div>
            <div className="cat_label">
                <p>{categorieItem.label}</p>
            </div>
        </div>
    );
}

export default CategorieItem;