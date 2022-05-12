const searchRecepieDiv = document.querySelector(".searchRecepie");
// searchRecepie()
let id;

async function searchRecepie()
{
   try{
       const query = document.getElementById("query").value;
       if(query.length===0){

            searchRecepieDiv.innerHTML=null;
            return;
        }
       const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
       let res = await fetch(url);
       let data = await res.json();
       console.log(data);
       let recepie = data.meals;
       return recepie;

   }catch(err)
   {
       console.log(err);
   }
}

function appendData(data)
{
  
    searchRecepieDiv.innerHTML="";
  
   data.forEach(({strInstructions, strMeal, strMealThumb, strYoutube, strArea, strCategory}) => {
   
    // searchRecepieDiv.style.visibility = "visible";
       let smallDiv = document.createElement("div");
       smallDiv.setAttribute("class","smallDiv");

       let image = document.createElement("img");
       image.setAttribute("id","posterImage");
       image.src=strMealThumb;

       let textdiv = document.createElement("div");
       textdiv.setAttribute("class", "textdiv");

       let name = document.createElement("p");
       name.innerText=strMeal;

       textdiv.append(name);
       smallDiv.append(image,textdiv);
       smallDiv.addEventListener("click", function(){
        displayData(strInstructions,strMeal, strMealThumb, strYoutube, strCategory)
        });
       searchRecepieDiv.append(smallDiv)
   });
}

async function main()
{
    let data = await searchRecepie();
    if (data === undefined) {
    return false;}
    appendData(data)

}

function debounce(func, delay) {
if (id) {
clearTimeout(id);
}
id = setTimeout(() => {
func();
}, delay);
}




function Cf(strInstructions,strMeal, strMealThumb, strYoutube,strCategory)
{
    this.image=strMealThumb;
    this.name=strMeal;
    this.link=strYoutube;
    this.instructions=strInstructions;
    this.category=strCategory;
}

let data = [];

function displayData(strInstructions,strMeal, strMealThumb, strYoutube, strCategory)
{
let cfObj = new Cf(strInstructions,strMeal, strMealThumb, strYoutube, strCategory);
data.push(cfObj);
console.log(data);

localStorage.setItem("localData",JSON.stringify(data));
window.location.href="./searchRecepie.html"
}