let enterfood = async (url)=>{
   try{
       let res = await fetch(url);
       let data=await res.json();
       
       return data;
   }catch(err){
       console.log(err);
   }
};

let append = (data)=>{
    console.log(data)
    data.meals.map(({strMeal,strMealThumb}) => {
        //document.querySelector("#container").innerHTML=null
        let box=document.createElement("div");
        let img =document.createElement("img");
        console.log(img)
        img.setAttribute("id","image")
        img.src=strMealThumb;
        let name=document.createElement("h2");
        name.innerText= strMeal;
        box.append(img,name);
        document.querySelector("#container").append(box);
  
       
    });
};

 export {enterfood , append};

