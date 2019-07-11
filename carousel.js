$(document).ready(function(){
  
    var carouselImages = [
      {
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkDMD4EWB7uuaI4FvcRWI19c9e4Au6G3rrjJ64RpdSoj6fkQrPQ',
      },
      {
        image_url: 'https://shepherdexpress.com/downloads/41509/download/FusionPoke.jpg?cb=3074cc98a341787b1a48b0a2f15cc463&w=1200',
      },
      {
        image_url: 'https://scontent-atl3-1.cdninstagram.com/vp/e4b9ccdc1f577f61c7b81671b25c96ee/5D441245/t51.2885-15/e35/55818882_1228739217289318_4546728994198878593_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com',
      }
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