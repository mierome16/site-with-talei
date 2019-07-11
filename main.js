$(document).ready(() => {

    $("#story").on('click', function(e) {
        $("#story").addClass("border")
        $("#menu").removeClass("border")
        $("#reserve").removeClass("border")
    
        $("#storyinfo").addClass("show")
        $("#ourmenu").removeClass("show")
        $("#reserveinfo").removeClass("show")
     })
    
     $("#menu").on('click', function(e) {
        $("#story").removeClass("border")
        $("#menu").addClass("border")
        $("#reserve").removeClass("border")
    
        $("#storyinfo").removeClass("show")
        $("#ourmenu").addClass("show")
        $("#reserveinfo").removeClass("show")
    })
    
    $("#reserve").on('click', function(e) {
        $("#story").removeClass("border")
        $("#menu").removeClass("border")
        $("#reserve").addClass("border")
    
        $("#storyinfo").removeClass("show")
        $("#ourmenu").removeClass("show")
        $("#reserveinfo").addClass("show")
    })
    
     $(".appetizers #allergy").hover(function(e) {
         $(".appetizers #extras").addClass("highlight")
     })
    
    
    
    $.get('https://obscure-tundra-54269.herokuapp.com/casual-dining', function(data) {
        makeApp(data);
        makeEnt(data);
        makeDes(data);
    })
    var appTemplate = '';
    function makeApp(apps) {
        apps.appetizers.map(function(item) {
            appTemplate += `
            <div>
                <h3>${item.name}</h3>
                <h3>${item.price}</h3>
            </div>
            <div>
                <i class="fas fa-exclamation id="allergy" "></i>           
                <i class="fas fa-fire-alt" id="spicy"></i>
                <i class="fas fa-leaf" id="veg"></i>
            </div>
            <div id="extras"> 
                <p>Is it Spicy? ${item.extra.spicy}</p>
                <p>Does it have Gluten? ${item.extra.glutenfree}</p>
                <p>Vegetarian Dish? ${item.extra.vegetarian}</p>
            </div>
            <p>${item.description}</p>
            <br>
            `
        }).join('')
        $(".appetizers").html(appTemplate);
    }
    var entreeTemplate = '';
    function makeEnt(apps) {
        apps.entrees.map(function(item) {
            entreeTemplate += `
            <div>
                <h3>${item.name}</h3>
                <h3>${item.price}</h3>
            </div>
            <div>
                <i class="fas fa-exclamation id="allergy" "></i>            
                <i class="fas fa-fire-alt" id="spicy"></i>
                <i class="fas fa-leaf" id="veg"></i>
            </div>
            <div id="extras"> 
                <p>Is it Spicy? ${item.extra.spicy}</p>
                <p>Does it have Gluten? ${item.extra.glutenfree}</p>
                <p>Vegetarian Dish? ${item.extra.vegetarian}</p>
            </div>
            <p>${item.description}</p>
            <br>
            `
        }).join('')
        $(".entrees").html(entreeTemplate);
    }
    var dessertTemplate = '';
    function makeDes(apps) {
        apps.desserts.map(function(item) {
            dessertTemplate += `
            <div>
                <h3>${item.name}</h3>
                <h3>${item.price}</h3>
            </div>
            <div>
                <i class="fas fa-exclamation id="allergy" "></i>            
                <i class="fas fa-fire-alt" id="spicy"></i>
                <i class="fas fa-leaf" id="veg"></i>
            </div>
            <div id="extras"> 
                <p>Is it Spicy? ${item.extra.spicy}</p>
                <p>Does it have Gluten? ${item.extra.glutenfree}</p>
                <p>Vegetarian Dish? ${item.extra.vegetarian}</p>
            </div>
            <p>${item.description}</p>
            <br>
            `
        }).join('')
        $(".desserts").html(dessertTemplate);
    }
    









    })
     


    // code for all the extras 

    // <div class="extra">
            //     
            // </div>


            // <div class="extra">
            //     <p>Is it Spicy? ${item.extra.spicy}</p>
            //     <p>Does it have Gluten? ${item.extra.glutenfree}</p>
            //     <p>Vegetarian Dish? ${item.extra.vegetarian}</p>
            // </div>


            // <div class="extra"> 
            //     <p>Is it Spicy? ${item.extra.spicy}</p>
            //     <p>Does it have Gluten? ${item.extra.glutenfree}</p>
            //     <p>Vegetarian Dish? ${item.extra.vegetarian}</p>
            // </div>
