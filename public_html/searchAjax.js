var runAutoComplete = (function(){
  var ajaxUrl = "http://cspro.sogang.ac.kr/~cse20101697/cgi-bin/db_display.php";
  $('.target').on('click', function(){
    console.log($(this).attr('id'));
  })
  $("#order_number").autocomplete({
    source: function(request, response){
      $.ajax({
          type: 'get'
        , url: ajaxUrl
        , dataType: "json"
        , data: {"order_number" : request.term}
        , success: function(data) {
          response( $.map( data, function( item ) {
            return {
              label: item,
              value: item
            }
          }));
        }
      });
    },
    minLength: 2,
    select: function(event, ui){

    }
  });
}());
