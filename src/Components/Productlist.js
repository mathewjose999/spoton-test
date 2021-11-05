import React, { Fragment } from "react";
import axios from 'axios';
import logo from '../images/logo.svg';
import menu from '../images/bars.svg';
import times from '../images/times.svg';

export default class Produclist extends React.Component {


    state = {
        products: [],
        showModal: false,
        selectedProduct: {}
    }
    componentDidMount() {
        axios.get('https://86ypveeq84.execute-api.eu-central-1.amazonaws.com/production/products/')
            .then(res => {
                this.setState({ products: res.data });
                this.showDetails(res.data[0])
            }
            )

    }
    showProducts(status) {
        this.setState({ showModal: status })
    }
    showDetails(item) {
        axios.get('https://86ypveeq84.execute-api.eu-central-1.amazonaws.com/production/products/' + item.productId)
            .then(res => {
                this.setState({ selectedProduct: res.data, showModal: false })
            }
            )
    }

    render() {
        return (
            <Fragment>
                <section className="site-content">
                    <header className="header">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="menu-icon">
                            <span className="bars" onClick={() => this.showProducts(true)}>
                                <img src={menu} alt="bars" />
                            </span>
                        </div>
                    </header>
                    <div className="site-content__left">


                        <div className="site-content__left--content">
                            <h1>{this.state.selectedProduct.productName}</h1>
                            <h2>{this.state.selectedProduct.productSub}</h2>

                            <p>{this.state.selectedProduct.productDesc}</p>
                        </div>

                    </div>
                    <div className="site-content__right">
                        <div className="main-image">
                            <img src={this.state.selectedProduct.envImage} alt="test" />
                        </div>
                        <div className="sub-content">
                            <div className="sub-content--image">
                                <img src={this.state.selectedProduct.prodImage} alt="test" />
                            </div>

                            <div className="sub-content--details">
                                <h2>{this.state.selectedProduct.linkBoxTitle}</h2>
                                <a className="link-item" href={this.state.selectedProduct.link} target="_blank"><i></i> {this.state.selectedProduct.linkText}</a>
                            </div>

                        </div>

                    </div>
                </section>

                {
                    this.state.showModal ? <div className="product-modal">
                        <div className="pop-up-header">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="close" onClick={() => this.showProducts(false)}>
                                <img src={times} alt="times" />
                            </div>
                        </div>

                        <div className="product-list">

                            <ul>
                                {this.state.products &&
                                    this.state.products.map((item, index) => {
                                        return <li onClick={() => this.showDetails(item)}>{item.productName}</li>
                                    })}
                            </ul>
                        </div>

                    </div> : null
                }

            </Fragment>
        )

    }

}
