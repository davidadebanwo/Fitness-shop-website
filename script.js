let herodata = [
    {
        url:"https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg"
    },
    {
        url:"https://phantom-marca.unidadeditorial.es/746e69f29df0fa7da1f9df1cffc2af10/crop/0x20/1499x861/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/12/16419960151339.jpg"
    },
    {
        url:"./Bodybuilder-Working-Out.webp"
    }
]
let productsdata = [
    {
        url:"https://www.eatthis.com/wp-content/uploads/sites/4/2021/02/holding-dumbbells.jpg?quality=82&strip=1"
    },
    {
        url:"https://www.muscleandfitness.com/wp-content/uploads/2020/05/boxer-training-bag.jpg?quality=86&strip=all"
    },
    {
        url:"https://www.scotsman.com/jpim-static/image/2021/04/19/18/Best%20mens%20gym%20clothes%20for%20a%20comfortable%2C%20high%20performance%20workout.jpg?width=1200&enable=upscale"
    },
    {
        url:"https://www.themanual.com/wp-content/uploads/sites/9/2021/02/pre-workout-supplement.jpg?fit=800%2C533&p=1"
    }
]
let recommendedProductData = [
    {
        url:"https://cdn.shopify.com/s/files/1/0017/9650/5709/products/precor-efx-222-elliptical_300x.jpg?v=1674202537",
        productName:"PRECOR EFX 222 ELLIPTICAL",
        price:"US$ 1999.99"
    },
    {
        url:"https://www.tradeinn.com/h/13869/138690458/fitfiu-fitness-best-220-exercise-bike.jpg",
        productName: "Fitfiu Fitness BEST-220 Exercise Bike",
        price: "US$ 175.49"
    },
    {
        url:"https://www.tradeinn.com/h/13768/137685974/gymstick-pro-pump-set-20kg.jpg",
        productName:"Gymstick Pro Pump Set 20kg",
        price:"US$ 127.99"
    },
    {
        url:"https://www.tradeinn.com/h/13819/138193462/xiaomi-dumbbell-barbell-kettlebell-kit-30kg.jpg",
        productName:"Xiaomi Dumbbell + Barbell + Kettlebell Kit 30kg",
        price:"US$ 96.99"
        
    },
    {
        url:"https://www.tradeinn.com/h/13751/137517266/leone1947-shock-combat-gloves.jpg",
        productName:"Leone1947 Shock Combat Gloves",
        price:"US$ 67.99"
        
    },
    {
        url:"https://www.tradeinn.com/h/13898/138980674/under-armour-emea-track-suit.jpg",
        productName:"Under Armour Emea Track Suit",
        price:"US$ 51.99"
        
    },
    {
        url:"https://www.tradeinn.com/h/13738/137385551/adidas-sportswear-strutter.jpg",
        productName:"Adidas Sportswear Strutter",
        price:"US$ 42.99"
        
    },
    {
        url:"https://www.tradeinn.com/h/13907/139073597/under-armour-insulate-vest.jpg",
        productName:"Under Armour Insulate Vest",
        price:"US$ 66.99"
        
    }
]

let bestsellersProductData = [
    {
        url:"https://www.tradeinn.com/h/13844/138442263/tunturi-e100-exercise-bike.jpg",
        productName:"Tunturi E100 Exercise Bike",
        price:"US$ 417.49"
    },
    {
        url:"https://www.tradeinn.com/h/13916/139167167/bodytone-hex-dumbbells-20kg.jpg",
        productName: "Bodytone Hex Dumbbells 20kg",
        price: "US$ 150.99"
    },
    {
        url:"https://www.tradeinn.com/h/13945/139452206/everlast-nevatear-heavy-filled-bag-40-libras.jpg",
        productName:"Everlast Nevatear Heavy Filled Bag 40 Libras",
        price:"US$ 81.49"
    },
    {
        url:"https://www.tradeinn.com/h/13811/138118784/everlast-everfresh-sauna-suit.jpg",
        productName:"Everlast Everfresh Sauna Suit",
        price:"US$ 31.49"
        
    },
    {
        url:"https://www.tradeinn.com/h/13855/138551961/nike-air-max-bella-tr-5-trainers.jpg",
        productName:"Nike Air Max Bella TR 5 Trainers",
        price:"US$ 70.49"
        
    },
    {
        url:"https://www.tradeinn.com/h/13756/137564807/powershot-logo-medicine-ball-5kg.jpg",
        productName:"Powershot Logo Medicine Ball 5kg",
        price:"US$ 25.49"
        
    }
]


let hamburgerMenu = document.getElementById("hamburger-div");
let verticalMenu = document.getElementById("section__nav-menu-vertival")

let hero = document.getElementById("section__header");
let products2 = document.querySelectorAll(".section__product-products-each2");
let producth1 = document.querySelectorAll(".section__recommend-options-each");
let recommendedImage = document.querySelectorAll(".each-recommended-image");
let recommendedProductName = document.querySelectorAll(".recommend-product-name");
let recommendedProductPrice = document.querySelectorAll(".recommend-product-price");

let bestsellersImage = document.querySelectorAll(".each-bestsellers-image");
let bestsellersProductName = document.querySelectorAll(".bestsellers-product-name");
let bestsellersProductPrice = document.querySelectorAll(".bestsellers-product-price");

// let each
verticalMenu.style.display = "none";

let click = 2
hamburgerMenu.onclick=()=>{
    if(click%2==0){
        verticalMenu.style.display = "flex";
        console.log(click);
        click++
    }
    else{
        verticalMenu.style.display = "none";
        console.log(click);
        click++
    }
}

let i=0;
setInterval(()=>{
        if(i>=3){
        i=0;
    }
    // i+=1;
    if (window.matchMedia("(max-width: 320px)").matches) {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="310%";
        hero.style.backgroundPositionX="-250px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
        // i+=1;
      } 
    else if (window.matchMedia("(max-width: 430px)").matches) {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="230%";
        hero.style.backgroundPositionX="-250px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
        // i+=1;
      } 
    else if (window.matchMedia("(max-width: 500px)").matches) {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="180%";
        hero.style.backgroundPositionX="-200px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
        // i+=1;
      } 
    else if (window.matchMedia("(max-width: 800px)").matches) {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="150%";
        hero.style.backgroundPositionX="-100px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
        // i+=1;
      } else {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="110%";
        // hero.style.backgroundPositionX="-80px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
        // i+=1;
      }
      i+=1;
},10000)

window.addEventListener('resize',()=>{
    if (window.matchMedia("(max-width: 320px)").matches) {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="310%";
        hero.style.backgroundPositionX="-250px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
        // i+=1;
      } 
    else if (window.matchMedia("(max-width: 430px)").matches) {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="230%";
        hero.style.backgroundPositionX="-250px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
        // i+=1;
      } 
    else if (window.matchMedia("(max-width: 500px)").matches) {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="180%";
        hero.style.backgroundPositionX="-200px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
        // i+=1;
      } 
    else if (window.matchMedia("(max-width: 430px)").matches) {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="230%";
        hero.style.backgroundPositionX="-250px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
      }
    else if (window.matchMedia("(max-width: 500px)").matches) {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="180%";
        hero.style.backgroundPositionX="-200px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
      } 
    else if (window.matchMedia("(max-width: 800px)").matches) {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="150%";
        hero.style.backgroundPositionX="-100px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
      } else {
        hero.style.background=`url(${herodata[i].url})`;
        // hero.style.animation="opacitytransitionon 2s ease-in ";
        hero.style.animation="opacitytransition 10s ease-in infinite ";
        hero.style.transition="1s";
        hero.style.backgroundRepeat="no-repeat";
        hero.style.backgroundSize="110%";
        // hero.style.backgroundPositionX="-200px";
        hero.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        console.log("ah");
      }
});


console.log(i)
products2.forEach((element)=>{
    // element.style.backgroundColor = "royalblue";
    element.style.background=`url(${productsdata[i].url})`;
    element.style.backgroundRepeat = "no-repeat";
    element.style.backgroundSize = "150%";
    element.style.backgroundPositionX = "-80px"
    element.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    element.style.backgroundColor.backgroundBlendMode = "multiply";    
    i+=1;
    element.style.transition = "1s"
    element.addEventListener("mouseover",()=>{
        element.style.backgroundSize = "170%";
        element.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        // producth1.style.marginBottom = "50%";

    })
    element.addEventListener("mouseout",()=>{
        element.style.backgroundSize = "150%";
        element.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    })
})
// background-position-x: 200px;

let j=0
recommendedImage.forEach((element)=>{
    element.src= recommendedProductData[j].url ;
    j++;
})
console.log(j)
j=0
recommendedProductName.forEach((element)=>{
    element.innerHTML=recommendedProductData[j].productName;
    j+=1
})
j=0
recommendedProductPrice.forEach((element)=>{
    element.innerHTML=recommendedProductData[j].price;
    console.log(i+"qwerty");
    j+=1
})



j=0
bestsellersImage.forEach((element)=>{
    element.src= bestsellersProductData[j].url ;
    j++;
})
console.log(j)
j=0
bestsellersProductName.forEach((element)=>{
    element.innerHTML=bestsellersProductData[j].productName;
    j+=1
})
j=0
bestsellersProductPrice.forEach((element)=>{
    element.innerHTML=bestsellersProductData[j].price;
    console.log(i+"qwerty");
    j+=1
})