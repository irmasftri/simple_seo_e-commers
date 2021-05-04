import './App.css'
import React, { Component } from 'react';
import data from "./detilProduk.json";

class Example3 extends Component {
	render() {
		return (
            <div><h3 className='sub-judul'>Produk Lainnya</h3>
            {
                data.offers.offers.map((skillDetail) => {
                    return (
                        <ul className='card'>
                            <li><img height='314' src={skillDetail.image} alt="another"/></li>
                            <li id='color'><p>{skillDetail.color}</p></li>
                            <li id='price'><p>{skillDetail.price}</p></li>    
                        </ul>
                    );
                })
            }
            </div>
        );
    }
} 
export default Example3;