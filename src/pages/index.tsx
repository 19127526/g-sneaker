import React, {Fragment, useEffect, useState} from "react"
import nike from "../assets/nike.png"
import {Product} from "@/services/product"
import CardProductComponent from "@/components/card/product"
import CardCartComponent from "@/components/card/cart"
import {useSelector} from "react-redux"

const HomePage = (props: any) => {
    const {products} = props
    const CartPage = useSelector((state: any) => state.CartPage?.cartItem)
    const [totalPrice, setTotalPrice] = useState<string>("0.00")
    useEffect(() => {
        if (CartPage?.length == 0) {
            setTotalPrice("0.00")
        } else {
            const temp = CartPage?.map((index: any) => {
                return index?.price * index?.quantity
            })
            setTotalPrice((Math.round(temp.reduce((prev: number, cur: number) => prev + cur, 0) * 100) / 100) as unknown as string)
        }
    }, [CartPage])
    return (
        <Fragment>
            <div className="main-container">
                <div className='card'>
                    <div className='card-logo'>
                        <img src={nike?.src} className='logo-image'/>
                    </div>
                    <div className='card-title'>
                        Our Products
                    </div>
                    <div className='card-body'>
                        {
                            products?.shoes?.map((shoe: any) => (
                                <CardProductComponent shoe={shoe as any} key={shoe?.id as number}
                                                      isChoose={CartPage?.filter((index: any) => index?.id == shoe?.id)[0] as any}/>
                            ))
                        }
                    </div>
                </div>
                <div className='card'>
                    <div className='card-logo'>
                        <img src={nike?.src} className='logo-image'/>
                    </div>
                    <div className='card-title'>
                        Your cart
                        <span className='card-cart-image'>
                          ${totalPrice}
                        </span>
                    </div>
                    <div className='card-body'>
                        {
                            CartPage?.length == 0 ?
                                <span>Your cart is empty</span>
                                :
                                CartPage?.map((shoeCart: any) => (
                                    <CardCartComponent shoe={shoeCart as any} key={shoeCart?.id as number}/>
                                ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export async function getServerSideProps(context: any) {
    try {
        const products = await Product.getProducts()
        return {
            props: {
                products: products
            }
        }
    } catch (err) {
        return {
            props: {
                products: []
            }
        }
    }
}

export default HomePage

