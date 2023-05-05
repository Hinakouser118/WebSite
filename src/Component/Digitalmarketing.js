import React from 'react'
import { Link } from 'react-router-dom'
export default function Digitalmarketing() {
  return (
    <div className='container'style={{textAlign:"center"}}>
      <h2 style={{color:"black"}}>Digitalmarketing</h2>
      
  <div class="row">
    <div class="col-md-3 mx-4">
    <div class="card h-100" style={{width: 18+"rem"}}>
  <img src="https://tse1.mm.bing.net/th?id=OIP.XKWui42Hh-kyUjzmQ2j2yAHaH_&pid=Api&P=0" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BitCoin</h5>
  <Link to="https://coinmarketcap.com/currencies/bitcoin/" class="btn btn-primary">ClickMe</Link>
  </div>
</div>
    </div>
    <div class="col-md-3 mx-4">
    <div class="card h-100" style={{width: 18+"rem"}}>
  <img src="https://tse2.mm.bing.net/th?id=OIP.uDooUiF96oSycrETgThqagHaFQ&pid=Api&P=0" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ethereum</h5>
  <Link to="https://crypto.com/price/ethereum" class="btn btn-primary">ClickMe</Link>
  </div>
</div>
    </div>
    <div class="col-md-3 mx-4">
  <div class="card h-100" style={{width: 18+"rem"}}>
  <img src="https://tse2.mm.bing.net/th?id=OIP.CteQe68IMESR-3wogIyqQgHaEK&pid=Api&P=0" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BNB</h5>
  <Link to="https://crypto.com/price/bnb" class="btn btn-primary">ClickMe</Link>
  </div>
</div>
    </div>
  </div>
  <br/>
<button type="button" class="btn btn-primary my-4" disabled>See More</button>
 </div>
  )
}
