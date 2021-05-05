import React, { Component } from 'react';
import data from "./detilProduk.json";

class Example2 extends Component {
	render() {
		return (
            <section className='tengah'>
				<div className='label'>
				   <h3>{data.name}</h3>
				   <p>Basic Coat Kuma Kawaii Hoodie adalah hoodie berbahan kain import dari jepang yang lembut dan nyaman untuk digunakan.</p>
				   <img height='400' src={data.image} alt='sampel' id='image'/>
				</div>
				<div className='keterangan'>
				   <p></p>
				   <p className='color'>Warna : {data.color}</p>
				   <p className="price">Harga : {data.price} ({data.priceCurrency})</p>
				   <br></br>
				</div>
				<button>Buy it for {data.price} ({data.priceCurrency})</button>
            </section>
        );
    }
} 
export default Example2;