window.onscroll=function(){shrinkHeader()}

function shrinkHeader(){
   if(document.body.scrollTop>40||document.documentElement.scrollTop>40)
   {
       $('header').addClass("newheader");
   } 
   else{
       $('header').removeClass("newheader");
   }
}

