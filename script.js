$(document).ready(function() {
 
    console.log('trigger')
    $("#owl-demo").owlCarousel({
   
        autoPlay: 4000, //Set AutoPlay to 4 seconds
   
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
   
    });

    fetch('./article1.json').then(async (response)=>{

        const data = await response.json();

        console.log(data);

        const element = document.getElementById('article');
        element.innerText =  JSON.stringify(data);
    })

   
  });