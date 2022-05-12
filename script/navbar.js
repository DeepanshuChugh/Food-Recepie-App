function navbar(){
    return `<a class="logo" href="./index.html"><img src="https://static.otta.com/uploads/images/company-logos/1791-chKstLMHpIGRPw_KTfO5UZSkDNTPAGzKQtw5mqlaU_E.png" alt=""></a>
    <div class="search">
        <input oninput="debounce(main, 500)" type="text"   id="query" placeholder="Search..." >
        <button type="submit" id="searchbutton"></i></button>
    </div>
  
    <ul class="nav">
<li><a href="#home">Home</a></li>
<li><a href="./login.html">Login</a></li>
<li><a href="./signup.html">signup</a></li>
<!-- <i class="fa fa-cart-shopping"></i> -->
</ul>`
};
export default navbar;

