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
    
    
    
    
    
    $.get('https://obscure-tundra-54269.herokuapp.com/casual-dining', function(data) {
        makeApp(data);
        makeEnt(data);
        makeDes(data);
    })
    var appTemplate = '';
    function makeApp(apps) {
        apps.appetizers.map(function(item) {
            appTemplate += `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <p>${item.description}</p>
            <p>Is it Spicy? ${item.extra.spicy}</p>
            <p>Does it have Gluten? ${item.extra.glutenfree}</p>
            <p>Vegetarian Dish? ${item.extra.vegetarian}</p>
            <br>
            `
        }).join('')
        $(".appetizers").html(appTemplate);
    }
    var entreeTemplate = '';
    function makeEnt(apps) {
        apps.entrees.map(function(item) {
            entreeTemplate += `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <p>${item.description}</p>
            <p>Is it Spicy? ${item.extra.spicy}</p>
            <p>Does it have Gluten? ${item.extra.glutenfree}</p>
            <p>Vegetarian Dish? ${item.extra.vegetarian}</p>
            <br>
            `
        }).join('')
        $(".entrees").html(entreeTemplate);
    }
    var dessertTemplate = '';
    function makeDes(apps) {
        apps.desserts.map(function(item) {
            dessertTemplate += `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <p>${item.description}</p>
            <p>Is it Spicy? ${item.extra.spicy}</p>
            <p>Does it have Gluten? ${item.extra.glutenfree}</p>
            <p>Vegetarian Dish? ${item.extra.vegetarian}</p>
            <br>
            `
        }).join('')
        $(".desserts").html(dessertTemplate);
    }
    
    })
     