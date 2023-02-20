import React, {Component} from "react";

import alface from '../images/alface.png'
import laranja from '../images/laranja.png'
import cereja from '../images/cereja.png'
import cenoura from '../images/cenoura.png'
import manga from '../images/manga.png'
import limao from '../images/limao.png'
import beterraba from '../images/beterraba.png'
import tomate from '../images/tomate.png'
import vector from '../images/Cart.png'



class Main extends Component{

    state = {
        produtos: [
            {
                name: alface,
                image: alface,
            },
            {
                name: laranja,
                image: laranja,
            },
            {
                name: cereja,
                image: cereja,
            },
            {
                name: cenoura,
                image: cenoura,
            },
            {
                name: manga,
                image: manga,
            },
            {
                name: limao,
                image: limao,
            },
            {
                name: beterraba,
                image: beterraba,
            },
            {
                name: tomate,
                image: tomate,
            },
        ]
    }

    render(){

        const {produtos} = this.state;

        return(
          <main>
            <section className="areaMain">
                <section className="areaProdutos">
                    <section className="text">
                        <h2>Nossos Produtos</h2>
                    </section>
                    <section className="conteinerProdutos">
                        {produtos.map((item) => (
                            <section className="cardName">
                                <figure>
                                    <img src={item.image} alt={item.name} />
                                </figure>
                            </section>
                        ))}

                    </section>
                </section>
                <section className="conteinerCart">
                    <section className="cart">
                            <div className="cartProduto">
                                <figure>
                                    <img src={vector} alt={'cart'}/>
                                    <figcaption>Arraeste o seu produto aqui para colocar no carrinho</figcaption>
                                </figure>
                            </div>
                            <div className="conteinerCont">
                                <div className="mais">+</div>
                                <div className="display">0</div>
                                <div className="menos">-</div>
                            </div>
                    </section>       
                </section>
            </section>    
          </main>
        )
    }
}



export default Main;