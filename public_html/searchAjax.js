var runAutoComplete = (function(){
  var ajaxUrl = "http://cspro.sogang.ac.kr/~cse20101697/cgi-bin/db_display.php";

  $("#order_number").autocomplete({
    source: function(request, response){
      $.ajax({
          type: 'get'
        , url: ajaxUrl
        , dataType: "json"
        , data: {"order_number" : 1}
        ,  success: function(data) {
                        //서버에서 json 데이터 response 후 목록에 뿌려주기 위함
                        response(
                            $.map(data, function(item) {
                                return {
                                    label: item.data,
                                    value: item.data
                                }
                            })
                        );
                    }

      });
    },
    minLength: 2,
    select: function(event, ui){

    }
  });
}());
