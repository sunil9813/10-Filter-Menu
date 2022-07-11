import React from "react"

const Menu = ({ menuItems }) => {
  return (
    <>
      <section className='menu'>
        {menuItems.map((items) => {
          const { id, title, img, price, desc } = items
          return (
            <>
              <article>
                <div className='img'>
                  <img src={img} alt='' />
                </div>
                <div className='details'>
                  <div className='info'>
                    <h4>{title}</h4>
                    <h3>${price}</h3>
                  </div>
                  <p>{desc}</p>
                </div>
              </article>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Menu
