$(document).ready(function(){
    function setBounds(){
       $('#bg').width($('body').width()).height($('body').height());
     } //prevent scrolling via cursor

     window.setTimeout(setBounds, 500);

     $(window).resize(function() {
       setBounds();
     });

     $(document).on('mousemove', function(e){
       console.log('cursormove');
         $('#cursor').css({
            left:  e.pageX - 150,
            top:   e.pageY - 150
         });
     });
     });
