import React, { Component } from 'react'; 
import logo from './image/logo.png';
//import data from "./detilProduk.json";

class Example1 extends Component {
	render() {
		return (
            <section className="atas">
                <div>
                    <ul id='head'>
                        <li><img height='50' src={logo} alt='Logo'/></li>
                        <li> Kawaii Stuff</li>
                    </ul>  
                </div>
            </section>    
        );
    }
} 
export default Example1;