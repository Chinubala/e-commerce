import React, { useEffect, useState } from "react";

function Card({ card }) {
    const [CARD, setCARD] = useState([])
    useEffect(() => {
        setCARD(card)
    }, [card])
    return (
        <>
            <div>
                {
                    CARD?.map((cardItem , cardIndex) => {
                        return (
                            <div className="mt-5">
                                <img src={cardItem.url} width={50} />
                                <span className="mx-3">{cardItem.name}</span>
                                <button type="button" class="btn btn-outline-dark"

                                onClick={()=> {
                                    const _card = CARD.map((item , index)=>{
                                        return(
                                            cardIndex === index ?{...item , quantity : cardItem.quantity + 1} : item
                                        )
                                    })
                                    setCARD(_card)
                                }}
                                
                                > + </button>
                                <span className="mx-3">{cardItem.quantity}</span>
                                <button type="button" class="btn btn-outline-dark"
                                 onClick={()=> {
                                    const _card = CARD.map((item , index)=>{
                                        return(
                                            cardIndex === index ?{...item , quantity : cardItem.quantity > 0 ? cardItem.quantity - 1 : 0} : item
                                        )
                                    })
                                    setCARD(_card)
                                }}
                                
                                > - </button>
                                <span className="mx-3">Rs.{cardItem.price * cardItem.quantity}</span>
                            </div>
                        )
                    })
                }
                <div className="mt-5">
                <span><b>Total</b>   Rs.{CARD.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)  }</span>

                </div>
                

            </div>
        </>
    )
}
export default Card;