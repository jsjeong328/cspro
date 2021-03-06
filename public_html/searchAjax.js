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
    $("#order_number").autocomplete({
      source: function(request, response){
        // console.log($(this).text())
        // console.log($opt)
        $opt.toString();
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
    $("#id_number").autocomplete({
      source: function(request, response){
        // console.log($(this).text())
        // console.log($opt)
        $opt.toString();
        $.ajax({
            type: 'get'
          , url: ajaxUrl
          , dataType: "json"
          , data: {"id_number" : request.term}
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
    $("#name").autocomplete({
      source: function(request, response){
        // console.log($(this).text())
        // console.log($opt)
        $opt.toString();
        $.ajax({
            type: 'get'
          , url: ajaxUrl
          , dataType: "json"
          , data: {"name" : request.term}
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
    $("#email").autocomplete({
      source: function(request, response){
        // console.log($(this).text())
        // console.log($opt)
        $opt.toString();
        $.ajax({
            type: 'get'
          , url: ajaxUrl
          , dataType: "json"
          , data: {"email" : request.term}
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
    $("#phone_number").autocomplete({
      source: function(request, response){
        // console.log($(this).text())
        // console.log($opt)
        $opt.toString();
        $.ajax({
            type: 'get'
          , url: ajaxUrl
          , dataType: "json"
          , data: {"phone_number" : request.term}
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
    $("#topping").autocomplete({
      source: function(request, response){
        // console.log($(this).text())
        // console.log($opt)
        $opt.toString();
        $.ajax({
            type: 'get'
          , url: ajaxUrl
          , dataType: "json"
          , data: {"topping" : request.term}
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
    $("#pay_method").autocomplete({
      source: function(request, response){
        // console.log($(this).text())
        // console.log($opt)
        $opt.toString();
        $.ajax({
            type: 'get'
          , url: ajaxUrl
          , dataType: "json"
          , data: {"pay_method" : request.term}
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
    $("#call_first").autocomplete({
      source: function(request, response){
        // console.log($(this).text())
        // console.log($opt)
        $opt.toString();
        $.ajax({
            type: 'get'
          , url: ajaxUrl
          , dataType: "json"
          , data: {"call_first" : request.term}
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
    $("#order_date").autocomplete({
      source: function(request, response){
        // console.log($(this).text())
        // console.log($opt)
        $opt.toString();
        $.ajax({
            type: 'get'
          , url: ajaxUrl
          , dataType: "json"
          , data: {"order_date" : request.term}
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
