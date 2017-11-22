var runAutoComplete = (function(){
  var ajaxUrl = "http://cspro.sogang.ac.kr/~cse20101697/cgi-bin/db_display.php";

  $("#order_number").autocomplete({
    source: function(request, response){
      $.ajax({
          type: 'get'
        , url: ajaxUrl
        , dataType: "json"
        , data: {"order_number" : 1}
        , success: function(data) {
          return data;
        }
      });
    },
    minLength: 2,
    select: function(event, ui){

    }
  });
}());
