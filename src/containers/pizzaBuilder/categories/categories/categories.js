import React from 'react';
import './categories.css';
import CategorieItem from '../categorieItem/categorieItem';

const Categories = ({categories, selectCat}) => {
    return (
        <div className="row row_cats">
            <div className="title_block">
                <h1>catigories</h1>
            </div>
            <div className="option_blocks option_cat_blocks">
                <div className="cat_block">
                    <div className="add_div">
                        {
                            categories.map(categorieItem=>
                            <CategorieItem 
                            key={categorieItem.id} 
                            categorieItem={categorieItem} 
                            selectCat={selectCat}/>)
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;