import React, {useEffect} from 'react';
import cls from './productsListPage.module.css'
import ProductsListComponent from "../../components/productsListComponent/ProductsListComponent";
import korzina from '../../img/korzina.png'
import visa from '../../img/visa.png'
import shape from '../../img/shape.png'
import {useDispatch, useSelector} from "react-redux";
import {fulfillProducts} from "../../store/productsSlice";

function ProductsListPage(props) {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fulfillProducts());
    }, [dispatch])

    return (
        <div className={cls.pageWrapper}>
            <div className={cls.leftSide}>
                <span>Monthly Suscription</span>

                <div><ProductsListComponent products={products}/></div>

                <button className={cls.addButton}>ADD NEW ITEM</button>
            </div>
            <div>
                <img className={cls.korzina} src={korzina} alt=""/>
                <span className={cls.goBack}>GO BACK</span>
                <div className={cls.verticalLine}></div>
                <div className={cls.rightSideContent}>
                    <h2>N2095 for Shipping</h2>
                    <div className={cls.LoremText1}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has
                    </div>
                    <div className={cls.productParams}>
                        <p>Box include:</p>
                        <p>Moisturizing Balm <b>N3000</b></p>
                        <p>Charcoal Cleanser <b>N3000</b></p>
                        <p>Dark Circle <b>N3000</b></p>
                        <p>Recovery Oil <b>N3000</b></p>
                    </div>
                    <div className={cls.LoremText}>Exprected Delivery Date: 27th June, 2021</div>
                    <div className={cls.LoremText}>Shipped to: 12A Mackson Street, Los Angeles, CA</div>
                    <div className={cls.LoremText}>Payment Billed to: <img src={visa} alt=""/>VISA (6509) Exp: 12/23
                        Oluwatobi Olowu
                    </div>
                    <div className={cls.topContentRightSide}>
                        <div>
                            <hr/>
                        </div>
                        <div><span>How to use</span> <img src={shape} alt=""/></div>
                        <div>
                            <hr/>
                        </div>
                        <div><span>Key Benefits</span> <img src={shape} alt=""/></div>
                        <div>
                            <hr/>
                        </div>
                        <div><span>Key Ingredient</span> <img src={shape} alt=""/></div>
                        <div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <button className={cls.cancel}>Cancel</button>
            </div>
        </div>
    );
}

export default ProductsListPage;
