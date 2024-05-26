import React, { useContext } from 'react'
import './DisplayFood.css'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../foodItem/FoodItem'
const DisplayFood = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div className='displsy-food'>
      <h2>Our Special Items</h2>
      <div className="food-list">
        {food_list.map((item,index)=>{
          if(category === "All" || category === item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
          })}
      </div>
    </div>
  )
}

export default DisplayFood
