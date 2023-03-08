import React from "react";
import Count from "../Count/count";
import "./ItemListContainer.css"

const ItemListContainer = (props)=>{
    return(
       <>
      <h2 className="itemListContainerStyles">{props.greeting}</h2>
      <Count></Count>
       </>
    )
};

export default ItemListContainer;