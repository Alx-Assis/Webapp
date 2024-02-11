import React from 'react'
import './style.css'


function Home() {
  return(
    <>
      <div className="container">
        <div className="parci4alBox">
          <div className="p">
             <label>custo parcial</label>
             <input type='number' />
           </div>
          <div className='p'>
               <label>venda parcial</label>
                <input type='number' />
             </div>
          <div className='p'>
                  <label>saldo parcial</label>
                   <input type='number' />
          </div>
          </div>

      </div>
    </>
  )
  
}
export default Home
