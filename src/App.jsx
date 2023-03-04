import React from 'react'
import { useState } from 'react'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'

import './App.css'

function App(props) {

return(
<>
<NavBar/>
<ItemListContainer greeting="Hola, este es el props de ItemListContainer"/>
</>
)  
 

}

export default App
