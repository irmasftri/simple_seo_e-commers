import './App.css'
import React, { Component } from 'react';
import data from "./detilProduk.json";

class Example3 extends Component {
	render() {
		return (
            <div><h3 className='sub-judul'>Produk Lainnya</h3>
                {
                    data.offers.offers.map((Detail) => {
                        return (
                            <ul className='card'>
                                <li><img height='314' src={Detail.image} alt="another"/></li>
                                <li id='color'><p>{Detail.color}</p></li>
                                <li id='price'><p>{Detail.price} ({Detail.priceCurrency})</p></li>    
                            </ul>
                        );
                    })
                }
                <div className='footer'>
                    <h4>Irma Safitri @2021 | <a href='https://github.com/irmasftri/simple_seo_e-commers.git'>Github</a></h4>                   
                </div>
            </div>
        );
    }
} 
export default Example3;