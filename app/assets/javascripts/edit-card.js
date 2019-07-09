$(document).on('turbolinks:load',function(){
  $(function(){
    $(".card-icons__next").on("click", function(){
      var parent_1 = $(this).parent();
      var parent_2 = $(parent_1).parent();
      var list_id = $(this).data("id")
      var list_id_next = list_id + 1
      // うえで取得して計算したlist_id
      var card_id__hidden = $(parent_2).find(".card-id__hidden").val();
      var card_title__hidden = $(parent_2).find(".card-title__hidden").val();
      var card_discription__hidden = $(parent_2).find(".card-discription__hidden").val();
      var card_list_id__hidden = $(parent_2).find(".card-list_id__hidden");
      var move_card__form = $(parent_2).find(".move-card-form");
      var $dir = location.href.split("/");  
      var $dir2 = $dir[$dir.length -1];
      var url = "/groups/" + $dir2 + "/lists/" + list_id_next + "/cards/" +  card_id__hidden
      move_card__form.attr("action", url)
      $(parent_2).find(".card-list_id__hidden").attr("value", list_id_next)

      // $.ajax({
      //   type: "POST" ,
      //   url: url ,
      //   data: ,
      //   dataType: json
      // })
      // 上でフォームを取得できた
      // $(parent_2).find('input[name="list_id" ]').attr("name", list_id_next)
      debugger
    });

    $(".edit-card-button").on("click", function(){
      debugger
    })
    $(".move-card-form").on("submit", function(){

    });
    $(".edit-card-form").on("submit", function(){
      return false
    });
  });
});