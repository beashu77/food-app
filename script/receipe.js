import {navbar} from "../components2/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


import {enterfood ,append}from "./fetch.js";

let getData = async()=>{
  
    let url =`https://www.themealdb.com/api/json/v1/1/random.php`;
    let data = await enterfood(url);
   append(data);
};

 getData();
