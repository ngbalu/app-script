import {Component} from 'react'

import ItemCard from '../ItemCard/index'

import './productCard.css'

import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { IoChevronDownSharp } from "react-icons/io5";





class ProductCard extends Component{

state={storeProductData:[]}


componentDidMount(){
    this.getProduct()
}

getProduct=async ()=>{
    const response=await fetch('https://fakestoreapi.com/products')
    if(response.ok){
        const updated=await response.json()
        const fetchedData=updated.map(eachItem=>({
            id:eachItem.id,
            title:eachItem.title,
            image:eachItem.image,
            price:eachItem.price
        }))
        this.setState({storeProductData:fetchedData})
        
    }
    
}


    render(){

    const {storeProductData}=this.state

        return(
<div>


<div className='product-header'>
    <h1 className='product-heading'>DISCOVER OUR PRODUCTS</h1>
    <p className='product-para'>Lorem ipsum dolor site amet consectetur.Amet est posuere rhoncus<br/>
        scelerisque.Dolor integer scelerisque nibh amet mi ut elementum dolor
         </p>
</div>

<div className='filter-countainer'>
<p className='recommended'>3425Items</p>
<div>
<p className='hide'><MdOutlineKeyboardArrowLeft/> HIDE FILTER</p>
</div>
<div>
    <p className='recommended'>RECOMMENDED<IoChevronDownSharp /></p>
</div>
</div>


<div className='image-counatiner'>
    <div className='label-count'>
    <input id="input" type="checkbox"/>
<label className='label' htmlFor='input'>CUSTOMIZBLE</label>
    </div>

 


<div className='side-countainer'>   

<div>



    <div className='list-card'>
     <div className='name_countainer'>
    <h1 className='name-list'>IDEAL FOR</h1>
    <p className='paga-all'>All</p>
    </div>
    <div className='log-card'>
    <IoChevronDownSharp/>
       
    </div>
    </div>

    <div className='list-card'>
     <div className='name_countainer'>
    <h1 className='name-list'>OCCASION</h1>
    <p className='paga-all'>All</p>
    </div>
    <div className='log-card'>
    <IoChevronDownSharp/>
       
    </div>
    </div>

    <div className='list-card'>
     <div className='name_countainer'>
    <h1 className='name-list'>WORK</h1>
    <p className='paga-all'>All</p>
    </div>
    <div className='log-card'>
    <IoChevronDownSharp/>
       
    </div>
    </div>


    <div className='list-card'>
     <div className='name_countainer'>
    <h1 className='name-list'>FABRIC</h1>
    <p className='paga-all'>All</p>
    </div>
    <div className='log-card'>
    <IoChevronDownSharp/>
       
    </div>
    </div>

    <div className='list-card'>
     <div className='name_countainer'>
    <h1 className='name-list'>SEGMENT</h1>
    <p className='paga-all'>All</p>
    </div>
    <div className='log-card'>
    <IoChevronDownSharp/>
       
    </div>
    </div>

    <div className='list-card'>
     <div className='name_countainer'>
    <h1 className='name-list'>STUTABULE FOR</h1>
    <p className='paga-all'>All</p>
    </div>
    <div className='log-card'>
    <IoChevronDownSharp/>
       
    </div>
    </div>

    <div className='list-card'>
     <div className='name_countainer'>
    <h1 className='name-list'>RAW MATERIAL</h1>
    <p className='paga-all'>All</p>
    </div>
    <div className='log-card'>
    <IoChevronDownSharp/>
       
    </div>
    </div>

    <div className='list-card'>
     <div className='name_countainer'>
    <h1 className='name-list'>PATTERN</h1>
    <p className='paga-all'>All</p>
    </div>
    <div className='log-card'>
    <IoChevronDownSharp/>
       
    </div>
    </div>

    </div>
    
    <div>
        <ul className='un-list'>
            {storeProductData.map(eachItem=>(
                <ItemCard productDetails={eachItem} key={eachItem.id}/>
            ))}
        </ul>
    </div>

   
    
    
</div>


</div>


</div>


        )
    }
}

export default ProductCard