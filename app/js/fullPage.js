//-------------------init fullPage js
jQuery(document).ready(function($) {
    $("#fullpage").fullpage ({
        anchors: ['header', 'work', 'why', 'review', 'footer'],
        menu: '#myMenu',
        slidesNavigation: true,
        navigation: true,
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            if(index == 2){
                $(".work img").delay(500).animate({"left":"0%"},500);
            }
        } 
    });
})
//-----------button ckick down
$(document).on('click', '#moveDown', function(){
    $.fn.fullpage.moveSectionDown();
  });
//-----------button ckick up
  $(document).on('click', '#moveUp', function(){
    $.fn.fullpage.moveTo(1);
  });
