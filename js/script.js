
$(document).ready(function(){
   $("#navi-toggle").change(function(){
       if ($(this).is(":checked")) {
           $("body").addClass("checked");
       } else {
           $("body").removeClass("checked");
       }
   });
});