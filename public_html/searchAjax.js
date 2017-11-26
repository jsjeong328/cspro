var runAutoComplete = (function(){
  var ajaxUrl = "http://cspro.sogang.ac.kr/~cse20101697/cgi-bin/db_display.php";
  var str = "";
  var $opt = "";
  $( "select" ).on('change', function() {
    $( "select option:selected" ).each(function() {
      $opt = $(this).text();
      str =
         '<div class="ui-widget">'
          +'<label for="'+$opt+'">find by '+$opt+': </label>'
          +'<input id="'+$opt+'">'
        +'</div>'
        +'<HR>';
    });
    $("#selectbox").html( str );
    console.log($opt);
    $("#"+$opt+"").autocomplete({
      source: function(request, response){
        $.ajax({
            type: 'get'
          , url: ajaxUrl
          , dataType: "json"
          , data: {"order_number" : request.term}
          , success: function(data) {
            response( $.map( data, function( item ) {
              var toShow = item.order_number + ' '+ item.id_number + ' '+ item.name + ' '+ item.email + ' '+ item.phone_number + ' '+ item.topping + ' '+ item.pay_method + ' '+ item.call_first + ' '+ item.order_date;
              return {
                label: toShow,
                value: toShow
              }
            }));
          }
        });
      },
      minLength: 2
    });
  }).trigger( "change" );
}());
