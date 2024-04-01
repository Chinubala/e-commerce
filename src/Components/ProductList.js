import React from "react";

function ProductList({product,addtocard}) {
    return (
        <>
            <div className="flex">
                {product.map((item) => {
                    return (
                        <div style={{width:"50%"}}>
                            <div className="productItem">
                                <img src={item.url} width="30%"/>
                                <p>{item.name} | {item.category}</p>
                                <p>{item.seller}</p>
                                <p>Rs.{item.price}/-</p>
                                <button type="button" class="btn btn-outline-secondary" onClick={()=>addtocard(item)}>Add To Card</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default ProductList;