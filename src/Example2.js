import React, { Component } from 'react';
import data from "./detilProduk.json"; 

class Example2 extends Component {
	render() {
		return (
            <section class='tengah'>
               <div class='label'>
				   <h3>{data.name}</h3>
				   <img height='400' src={data.image} alt='sampel' id='image'/>
			   </div>
			   <div class='keterangan'>
				   <p></p>
				   <p>Warna : {data.color}</p>
				   <p>Harga : {data.price} ({data.priceCurrency})</p>
				   <br></br>
			   </div>
            </section>
        );
    }
} 
export default Example2;