import React from 'react';
import cls from "./productsListComponent.module.css";
import cross from "../../img/Vector.png";
import image from "../../img/complete skin care set 2.png";
import {useSelector} from "react-redux";

function ProductsListComponent({products}) {
    return (
        <div className={cls.products}>
            {products.map(product => (
                    <div className={cls.product}>
                        <img src={cross} className={cls.cross} alt=""/>
                        <img src={product.img} alt=""/>
                        <div>
                            <p>{product.name}</p>
                            <span>{product.description}</span>
                        </div>
                    </div>
            ))}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className={cls.product}>*/}
        {/*        <img src={cross} className={cls.cross} alt=""/>*/}
        {/*        <img src={image} alt=""/>*/}
        {/*        <div>*/}
        {/*            <p>CHARCOAL CLEANSER</p>*/}
        {/*            <span>N8,000</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        </div>
    );
}

export default ProductsListComponent;