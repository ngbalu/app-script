import './ItemCard.css'

const ItemCard=props=>{
    const{productDetails}=props
    const{image,title,price}=productDetails
   return(
       <li>
        <div className='countainer-lart'>

      
<img className='main-image' src={image} alt={title}/>
<h1 className='title-name'>{title}</h1>
<p>{price}</p>
</div>
       </li>

    )
}

export default ItemCard