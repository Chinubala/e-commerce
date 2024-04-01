import { useEffect, useState } from "react"
import ProductList from "./ProductList";
import Card from "./Card";

function Shopping() {

    const [product, setProduct] = useState([
        {
            url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
            name: 'TRQ White Shoes',
            category: 'Shoes',
            seller: 'AMZ Seller Ghz',
            price: 1999
        },
        {
            url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
            name: 'LOREM Watch Black',
            category: 'Watches',
            seller: 'Watch Ltd Siyana',
            price: 2599
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
            name: 'AMZ Laptop 8GB RAM',
            category: 'Laptops',
            seller: 'Delhi Laptops',
            price: 50000
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
            name: 'Security Camera',
            category: 'CCTV',
            seller: 'Camron LTD',
            price: 4000
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
            name: 'Watch Pink',
            category: 'Watches',
            seller: 'Watch Ltd',
            price: 2000
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
            name: 'Cup red Color',
            category: 'Cup',
            seller: 'ABS Ltd',
            price: 100
        },])

        const [card , setCard] = useState([]);
        const [showCard , setShowCard] = useState(false)

    const addtocard = (data) => {
        console.log(data)
        setCard([...card, {...data , quantity : 1}])
    }
    return (
        <>
            <div className="flex shopping-card">
                <h2 onClick={()=>setShowCard(false)} className="pointer">Shopping Card</h2>
                <h3 onClick={()=>setShowCard(true)} className="pointer">Card <sup>{card.length}</sup></h3>
            </div>
            <div>
                {showCard ? <Card card={card}></Card>:<ProductList product={product} addtocard={addtocard} />}
            

                
            </div>
        </>
    )
}
export default Shopping