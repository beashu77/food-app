import {navbar} from "../components2/navbar.js"

document.getElementById("navbar").innerHTML = navbar();


// let container = document.getElementById("products");

import {enterfood ,append}from "./fetch.js";
let id;
let input=document.getElementById("food");
let getData = async()=>{
   let name=input.value
    let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    let data = await enterfood(url);
    
   append(data);
};


input.addEventListener("input",async()=>{
    if(id)clearTimeout(id);
    id=setTimeout(()=>{
        getData();
    },1000);
    // getData();
});



