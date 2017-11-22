var runAutoComplete = (function(){
  var ajaxUrl = "http://cspro.sogang.ac.kr/~cse20101697/cgi-bin/db_display.php";
  var $target;
  $.when(function(){
    $('.target').on('click', function(){
      $target  = $(this).attr('id');
    })
  }).done(console.log("#"+$target););
  $.when(function(){
    $('.target').on('click', function(){
      $target  = $(this).attr('id');
    })
  }).done(console.log(1));

  $("#"+$target).autocomplete({
    source: function(request, response){
      $.ajax({
          type: 'get'
        , url: ajaxUrl
        , dataType: "json"
        , data: {$target : request.term}
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
