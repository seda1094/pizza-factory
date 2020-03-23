import React, { Component } from 'react'
import './PizzaBuilder.css';

class PizzaBulder extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="main_block">
                <div className="section section_options">
                    <div className="row row_cats">
                        <div className="title_block">
                            <h1>catigories</h1>
                        </div>
                        <div className="option_blocks option_cat_blocks">
                            <div className="cat_block">
                                <div className="add_div">
                                    <div className="cat_item_block">
                                        <div className="cat_image">
                                            <img src="https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png" alt="" />
                                        </div>
                                        <div className="cat_label">
                                            <p>cheese</p>
                                        </div>
                                    </div>
                                    <div className="cat_item_block cat_item_block_selected">
                                        <div className="cat_image">
                                            <img src="https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png" alt="" />
                                        </div>
                                        <div className="cat_label">
                                            <p>cheese</p>
                                        </div>
                                    </div>
                                    <div className="cat_item_block">
                                        <div className="cat_image">
                                            <img src="https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png" alt="" />
                                        </div>
                                        <div className="cat_label">
                                            <p>cheese</p>
                                        </div>
                                    </div>
                                    <div className="cat_item_block">
                                        <div className="cat_image">
                                            <img src="https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png" alt="" />
                                        </div>
                                        <div className="cat_label">
                                            <p>cheese</p>
                                        </div>
                                    </div>
                                    <div className="cat_item_block">
                                        <div className="cat_image">
                                            <img src="https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png" alt="" />
                                        </div>
                                        <div className="cat_label">
                                            <p>cheese</p>
                                        </div>
                                    </div>                                    
                                    <div className="cat_item_block">
                                        <div className="cat_image">
                                            <img src="https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png" alt="" />
                                        </div>
                                        <div className="cat_label">
                                            <p>cheese</p>
                                        </div>
                                    </div>                                    
                                    <div className="cat_item_block">
                                        <div className="cat_image">
                                            <img src="https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png" alt="" />
                                        </div>
                                        <div className="cat_label">
                                            <p>cheese</p>
                                        </div>
                                    </div>                                    
                                    <div className="cat_item_block">
                                        <div className="cat_image">
                                            <img src="https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png" alt="" />
                                        </div>
                                        <div className="cat_label">
                                            <p>cheese</p>
                                        </div>
                                    </div>                                    
                                    <div className="cat_item_block">
                                        <div className="cat_image">
                                            <img src="https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png" alt="" />
                                        </div>
                                        <div className="cat_label">
                                            <p>cheese</p>
                                        </div>
                                    </div>                                    
                                    <div className="cat_item_block">
                                        <div className="cat_image">
                                            <img src="https://pngimage.net/wp-content/uploads/2018/05/cheese-clipart-png.png" alt="" />
                                        </div>
                                        <div className="cat_label">
                                            <p>cheese</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row_ings">
                        <div className="title_ing_block">
                            <h1>ingredients</h1>
                        </div>
                        <div className="option_blocks">
                            <div className="option_ings_blocks">
                                <div className="option_ings_blocks">
                                    <div className="ing_block">
                                        <div className="add_div">
                                            <div className="ing_item_block ing_item_block_selected">
                                                <div className="ing_image">
                                                    <img src="https://lh3.googleusercontent.com/proxy/NrZVOzNT1QRRJG2Gh-XCAggyMJEnvhnh5o2UF_WVZDE5aKJl7h9NcwB6_TJpNmOxbkr5S1To7E_VWV9wWCRR7PaSNvqVtF8GeMSCoiLoa0e79E0_BAORHS5zD86xmKo9pCBlkmqAVDk" alt=""/>
                                                </div>
                                                <div className="ing_label">
                                                    <p className="label">tomato</p>
                                                    <p className="price">3$</p>
                                                </div>
                                            </div>
                                            <div className="ing_item_block">
                                                <div className="ing_image">
                                                    <img src="https://i.pinimg.com/originals/2d/77/c3/2d77c396afa27d5363678e04671ce97d.png" alt=""/>
                                                </div>
                                                <div className="ing_label">
                                                    <p className="label">peper</p>
                                                    <p className="price">2$</p>
                                                </div>
                                            </div>
                                            <div className="ing_item_block">
                                                <div className="ing_image">
                                                    <img src="https://webstockreview.net/images/clipart-barn-orange-9.png" alt=""/>
                                                </div>
                                                <div className="ing_label">
                                                    <p className="label">mushroom</p>
                                                    <p className="price">5$</p>
                                                </div>
                                            </div>
                                            <div className="ing_item_block">
                                                <div className="ing_image">
                                                    <img src="https://i.ya-webdesign.com/images/pepperoni-transparent-clip-art-1.png" alt=""/>
                                                </div>
                                                <div className="ing_label">
                                                    <p className="label">peperoni</p>
                                                    <p className="price">4$</p>
                                                </div>
                                            </div>
                                            <div className="ing_item_block">
                                                <div className="ing_image">
                                                    <img src="https://i.ya-webdesign.com/images/corn-clipart-png-5.png" alt=""/>
                                                </div>
                                                <div className="ing_label">
                                                    <p className="label">kukuruz</p>
                                                    <p className="price">2$</p>
                                                </div>
                                            </div>
                                            <div className="ing_item_block">
                                                <div className="ing_image">
                                                    <img src="https://lh3.googleusercontent.com/proxy/NrZVOzNT1QRRJG2Gh-XCAggyMJEnvhnh5o2UF_WVZDE5aKJl7h9NcwB6_TJpNmOxbkr5S1To7E_VWV9wWCRR7PaSNvqVtF8GeMSCoiLoa0e79E0_BAORHS5zD86xmKo9pCBlkmqAVDk" alt=""/>
                                                </div>
                                                <div className="ing_label">
                                                    <p className="label">kjkljl</p>
                                                    <p className="price">40</p>
                                                </div>
                                            </div>
                                            <div className="ing_item_block">
                                                <div className="ing_image">
                                                    <img src="https://lh3.googleusercontent.com/proxy/NrZVOzNT1QRRJG2Gh-XCAggyMJEnvhnh5o2UF_WVZDE5aKJl7h9NcwB6_TJpNmOxbkr5S1To7E_VWV9wWCRR7PaSNvqVtF8GeMSCoiLoa0e79E0_BAORHS5zD86xmKo9pCBlkmqAVDk" alt=""/>
                                                </div>
                                                <div className="ing_label">
                                                    <p className="label">kjkljl</p>
                                                    <p className="price">40</p>
                                                </div>
                                            </div>
                                            <div className="ing_item_block">
                                                <div className="ing_image">
                                                    <img src="https://lh3.googleusercontent.com/proxy/NrZVOzNT1QRRJG2Gh-XCAggyMJEnvhnh5o2UF_WVZDE5aKJl7h9NcwB6_TJpNmOxbkr5S1To7E_VWV9wWCRR7PaSNvqVtF8GeMSCoiLoa0e79E0_BAORHS5zD86xmKo9pCBlkmqAVDk" alt=""/>
                                                </div>
                                                <div className="ing_label">
                                                    <p className="label">kjkljl</p>
                                                    <p className="price">40</p>
                                                </div>
                                            </div>
                                            <div className="ing_item_block">
                                                <div className="ing_image">
                                                    <img src="https://lh3.googleusercontent.com/proxy/NrZVOzNT1QRRJG2Gh-XCAggyMJEnvhnh5o2UF_WVZDE5aKJl7h9NcwB6_TJpNmOxbkr5S1To7E_VWV9wWCRR7PaSNvqVtF8GeMSCoiLoa0e79E0_BAORHS5zD86xmKo9pCBlkmqAVDk" alt=""/>
                                                </div>
                                                <div className="ing_label">
                                                    <p className="label">kjkljl</p>
                                                    <p className="price">40</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section_pizza">
                    <div className="total_price_block">
                        <div className="total_price"></div>
                    </div>
                    <div className="main_pizza_block">
                        <div className="pizza_block">
                            <div className="pizza">
                                <img src="https://i.ibb.co/cLdL2JV/Drawing.png" alt="" className="ss"/>
                                <img src="https://i.ibb.co/PCDtHBt/Drawing-4.png" alt="ss" className="ss"/>
                                <img src="https://i.ibb.co/Q694kgb/Drawing-1.png" alt="" className="ss"/>
                                <img src="https://i.ibb.co/zVkL69R/Drawing-3.png" alt="" className="ss"/>
                                <img src="https://i.ibb.co/R92XhBJ/Drawing-2.png" alt="" className="ss"/>
                                <img src="https://i.ibb.co/BL6zXZh/Drawing-5.png" alt="" className="ss"/>

                            </div>
                        </div>
                        <div className="order_block">
                            <div className="order_block_item">
                            <p><span className="boldPrice">Price:</span><span className="price">13$</span></p>
                            <button>order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PizzaBulder;