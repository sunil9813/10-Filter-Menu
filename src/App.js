import React, { useState } from "react"
import "./App.css"
import Categories from "./components/Categories"
import data from "./components/data"
import Menu from "./components/Menu"

// sabai category lai fetch lai fetch garxa
// but problem is that it will repeate the category i need one button for one category
//const allCategories = data.map((item) => item.category)
//console.log(allCategories)

const allCategories = ["all", ...new Set(data.map((item) => item.category))]
console.log(allCategories)

function App() {
  /*
  const [menuItems, setMenuItem] = useState(data)
  const [categories, setCategories] = useState([])

  
  // this is manunaly approche
  const filterItems = (category) => {
    // from our original data we are filtering and assiging the pararmetr in my i put items
    //if my items.category match to category then display it

    const newItems = data.filter((item) => item.category === category)
    setMenuItem(newItems)

    // for all data show
    if (category === "all") {
      setMenuItem(data)
      return
    }
  }*/

  const [menuItems, setMenuItem] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    const newItems = data.filter((item) => item.category === category)
    setMenuItem(newItems)

    if (category === "all") {
      setMenuItem(data)
      return
    }
  }
  return (
    <>
      <main>
        <div className='title'>
          <h1>Our Menu</h1>
        </div>
        {/*
         manulay approch

        <Categories filterItems={filterItems} />
        <Menu menuItems={menuItems} />

        */}
        <Categories filterItems={filterItems} categories={categories} />
        <Menu menuItems={menuItems} />
      </main>
    </>
  )
}

export default App
