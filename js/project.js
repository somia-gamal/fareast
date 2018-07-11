  $(document).ready(function(){
      //start navbar
      $(window).on("scroll",function(){
          if($(this).scrollTop()>100){
              $(".navbar").css({
                  backgroundColor:"#141e1b",
                  padding:"10px",
                  borderBottom:"1px solid #aa9273"
              })
          }else{
              $(".navbar").css({
                  backgroundColor:"transparent",
                  borderBottom:"1px solid transparent"
              })   
          }
      })
    
        //start slider  
      var leftArrow=$(".two .slide  .fa-angle-left"),
          rightArrow=$(".two .slide  .fa-angle-right");
      function checkclients(){
          if($(".image1").hasClass("active")){
              leftArrow.fadeOut();
          }else{
              leftArrow.fadeIn()
          }
           if($(".image3").hasClass("active")){
              rightArrow.fadeOut();
          }else{
              rightArrow.fadeIn()
          }   
      }
      checkclients();
      
      $(".slide i").click(function(){
          if($(this).hasClass('fa-angle-right')){
              $(".slide .active").fadeOut(100,function(){
                  $(this).removeClass("active").next(".col").addClass("active").fadeIn();
                  
                  checkclients();
              });
          }else{
               $(".slide .active").fadeOut(100,function(){
                  $(this).removeClass("active").prev(".col").addClass("active").fadeIn();                   
                  checkclients();
               });
          }
      })
       //start spinner
       $("#loading").fadeOut(5000, function () {
        $("body").css("overflow-y",'auto');
        $(this).remove();
    })
      
      //start arrow
      var _scrollTop  = $("#scrollToTop");
       $(window).on('scroll', function () {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 500) {
            _scrollTop.show(300);
        } else {
            _scrollTop.hide(300);
        }
    })
      _scrollTop.on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1200);
    })
  
      $('img').parazoom();

   });