import React from "react"

const Categories = ({ filterItems, categories }) => {
  return (
    <>
      {/*
      manullay add button
      <div className='button'>
        <button onClick={() => filterItems("all")}>all</button>
        <button onClick={() => filterItems("breakfast")}>breakfast</button>
      </div>
      */}

      <div className='button'>
        {categories.map((category, index) => {
          return (
            <button key={index} onClick={() => filterItems(category)}>
              {category}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default Categories
