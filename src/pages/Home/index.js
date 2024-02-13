import React from 'react'
import './style.css'


function Home() {
  return(
    <>
      <div className="container">
        <h2>PARCIAL DO DIA</h2>
        <div className="parcialBox">
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
        <br />
        
            <h2>CADASTRO DE VENDAS</h2>
            <div className="boxForm">
  
    
            <div >
    
              <label >Origem Venda</label>
              <select name="" className="mkplace">
       <option value="Shopee" >Shopee</option>
       <option value="Merc. Livre">Merc. Livre</option>
       <option value="L&A">L&A</option>
    </select>
            </div>
  <div>
    
    
    <label >ID Pedido</label>
    <input type="text"  className="id_pedido"/>
  </div>
    
    <div>
      
    <label >Data Venda</label>
    <input type="date" className="data_venda"/>
    </div>
    <div>
      
    <label >Produto</label>
    <input type="text" className="produto"/>
    
    </div>
    <div>
      
    <label >Qtde SKU</label>
    <input type="number" className="qtde_prod"/>
    </div>
    
    <div>
          
    <label >Vlr da venda</label>
    <input type="number"  className="vlr_venda"/>
    </div>
    <div>
      
    <label >Desconto</label>
    <input type="number"  className="desconto"/>
    </div>
    <div>
      
    <label >Cust Emb</label>
    <input type="number"  className="cust_emb"/>
    </div>
    <div>
      
    <label >Frete</label>
    <input type="number"  className="frete"/>
    
    </div>
    <div>
      
    <label >Custo Prod</label>
    <input type="number"  className="cust_prod"/>
    </div>
    

  
  <div className="boxBtn">
    <button className="save" class="btn">SAVE</button>
    <button className="relatory"class="btn">RELATORY</button>
  </div>
  </div>
        <p>
          Copyright © 2018-2024 Last. All rights reserved.
        </p>
      </div>
    </>
  )
  
}
export default Home
