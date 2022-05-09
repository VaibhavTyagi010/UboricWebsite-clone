let navbar=()=>{

    return`

    <div id="vtopbox"><div id="vtop"> FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500 </div></div>



    <div id="vsearch">
    <div id="input_div"> <input id="vinput" type="search"></div>
    <div id="v1icon"><a><i style="color:white" class="fa-solid fa-magnifying-glass"></i></a></div>
    </div>
   <img id="vlogo" src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg" alt="">
   <div id="vuser" class="signindropdown">
      <i id="accountLogo" style="padding: 6px;" class="fa-solid fa-user"></i>
      <div class="signindropdown-content">
      <h1>Sign in</h1>
     <a href="New_user.html"> <p style="font-size: 20px;" >CREATE AN ACCOUNT</p><a>
      <hr/>
    <form>
        <label id="signinBoxtxt">Username or email<span id="redStar"> *</span></label><br/>
        <input id="signinEmail" type="text"/><br/>
        <label id="signinBoxtxt">Password<span id="redStar"> *</span></label><br/>
        <input id="signinPassword" type="password"/><br/>
        <a id="passwordLost" href="">LOST YOUR PASSWORD?</a><br/>
        <input id="signinButton" type="submit" value="LOGIN"/><br/>
    </form>
  </div>
</div>
   </div>
   <div id="vcart">
     <a href="cart.html" style="display: flex; text-decoration: none ;color: #1E516C;">  <i id="vi" class="fa-solid fa-cart-plus"></i><p class="vcount">(</p> <p id="vvalue">0</p><p class="vcount">)</p></a>
    </div>



    `
}
let navbar1=()=>{
    return`
    <nav id="nav">
    <ul class="menu">
    <li class="item"><a href="index.html">Home</a></li>
    <li class="submenu">
        <a tabindex="0">Categories
            <i style="padding-left: 5px;" class="fa-solid fa-angle-down"></i>
        </a>
        <div  class="sub-menu">
        <ul class="inner">
            <li class="subitem"><a id="a" href="">Fasion <i style="margin-left: 135px;"class="fa-solid fa-caret-right"></i></i></a>
               <div>
                <ul class="inner2">
                <li ><p style="font-size: 20px; font-weight:bold;"> Men's footwear</p>

                    <ul id="vmens">
                <li>Casual Chapple/Slippers</li>
                <li>Casual Sandals</li>
                <li>Casual/Party Shoes</li>
                <li>Chappal /Slippers</li>
                <li>Crocs</li>
                <li>Flip Flops</li>
                <li>Loafers</li>
                <li>Mojdi</li>
                <li>Sneakers</li>
                <li>Sports Sandals</li>
                <li>Sports Shoes</li>
            </ul>
            </li>
            <li><p style="font-size: 20px; font-weight:bold;">Product clouser</p>
                <ul id="v2mens">
                    <li>lace up</li>
                    <li>Slip on</li>

                </ul>
            </li>
            <li><p style="font-size: 20px; font-weight:bold;">Clothing</p>
                <ul id="v3mens">
                    <li>Men's colthing</li>
                    <li>Women's clothing</li>
                </ul>

            </li>
            </ul>
        </div>
            </li>
            <li class="subitem submenu1"><a id="a" href="">Kitchen<i style="margin-left: 129px;" class="fa-solid fa-caret-right"></i></a>
            <div class="sub-menu1">
                <ul class="inner3">
                    <li>kitchen ware
                        <ul class="vkitchen">
                            <li>Air Tight Container</li>
                            <li>Gas Lighter</li>
                            <li>Kitchen Tools</li>
                        </ul>
                    </li>
                    <li>Grocery</li>
                    <li>Spices</li>
                    <li>household supplies</li>

                </ul>

            </div>

            </li>
            <li class="subitem submenu2"><a id="a" href="">Accessories<i style="margin-left: 90px;" class="fa-solid fa-caret-right"></i></i></a>
                <div class="sub-menu2">
                    <ul class="inner4">
                        <li>Unisex Bracelets</li>
                        <li>Jewellery</li>
                        <li>Bathroom Accessories</li>

                    </ul>

                </div></li>
            <li class="subitem submenu3"><a id="a" href="">Health & Persnal care<i  class="fa-solid fa-caret-right"></i></a>
                <div class="sub-menu3">
                    <ul class="inner5">
                        <li>Heath care
                            <ul class="vheath">
                                <li>Day joy </li>
                                <li>Face mask</li>
                                <li>GNFC</li>
                                <li>OXIA</li>
                            </ul>
                        </li>
                        <li>Persnal care
                            <ul class="vheath">
                                <li>Bombay shaving company</li>
                                <li>Day joy</li>
                                <li>Dr Batras</li>
                                <li>DYNA</li>
                            </ul>
                        </li>

                    </ul>

                </div></li>
            <li class="subitem submenu4"><a id="a" href="">Electroins<i style="margin-left: 110px;" class="fa-solid fa-caret-right"></i></a>
                    <div class="sub-menu4">
                <ul class="inner6">
                    <li>Headphone
                        <ul class="vphone">
                            <li>from 549</li>
                            <li>from 1132</li>
                            <li>from 1714</li>
                            <li>from 2297</li>
                        </ul>
                    </li>

                </ul>

            </div></li>
            <li class="subitem"><a id="a" href="">Panting</a></li>
            <li class="subitem"><a id="a" href="">Anti Punctur Liquid</a></li>
        </ul>
    </div>

    </li>
     <li class="item"><a href="New_user.html">Customer/Guest Login</a></li>
    <li class="item"><a href="New_user.html">Merchant/Bulk Order</a></li>
    <li class="item"><a href="lastpg.html">Become A Seller</a></li>
</ul>

</nav>`
}

export {navbar,navbar1}