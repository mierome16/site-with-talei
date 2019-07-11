$(document).ready(function(){
  
    var carouselImages = [
        {
            image_url: 'https://gleehospitality.com/wp-content/uploads/2017/10/roux_01.jpg'
        },
      {
        image_url: 'https://www.uniondowntown.com/uploads/1/1/7/3/117360645/union-ribs_1_orig.jpg',
      },
      {
        image_url: 'https://shepherdexpress.com/downloads/41509/download/FusionPoke.jpg?cb=3074cc98a341787b1a48b0a2f15cc463&w=1200',
      },
      {
        image_url: 'https://scontent-atl3-1.cdninstagram.com/vp/e4b9ccdc1f577f61c7b81671b25c96ee/5D441245/t51.2885-15/e35/55818882_1228739217289318_4546728994198878593_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com',
      },
      {
        image_url: 'https://order.chopstixsthaicuisine.com/web/documents/chopstixs/menu_item_images/item_image_bd413911-c22f-4775-876b-9d9bb7825995.jpg',
      },
      {
        image_url: 'https://blog.kingarthurflour.com/wp-content/uploads/2014/11/CarmelCheeseCake-C0F.jpg',
      },
      {
        image_url: 'http://www.paradordelsol.com/images/prettyPhotoImages/pic13.jpg',
      }
    ];
  
    var htmlStr = ""
    carouselImages.forEach(function(item,i){
       htmlStr += `
         <div id="image${i}" class="pics">
            <div><img src="${item.image_url}" /></div>
             <div class= "prev">&laquo</div>
             <div class= "next">&raquo</div>
         </div>
         `
        
    })
  
       $("#carousel").html(htmlStr)
       $(".pics:first-child").addClass("current opacity")
       
       
  
  
  
      $(".next").on('click', function(){
      
          var current = $(".current").attr("id").substr(5)
          var nextIndex = Number(current) + 1;
    
          if(nextIndex === carouselImages.length){
          nextIndex = 0
          }
       
        
       $(`#image${current}`).removeClass("current opacity")
       $(`#image${nextIndex}`).addClass("current opacity")
       
      })
      $(".prev").on('click', function(){
      
          var current = $(".current").attr("id").substr(5)
          var prevIndex = Number(current) - 1;
    
          if(prevIndex === -1){
          prevIndex = carouselImages.length-1
          }
       
        
       $(`#image${current}`).removeClass("current opacity")
       $(`#image${prevIndex}`).addClass("current opacity")
       
      })
      
  })




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
     