$(document).on('turbolinks:load',function(){
  $(function(){
    $(".card-icons__next").on("click", function(){
      var parent_1 = $(this).parent();
      var parent_2 = $(parent_1).parent();
      var list_id = $(this).data("id")
      var list_id_next = list_id + 1
      // うえで取得して計算したlist_id
      var card_title__hidden = $(parent_2).find(".card-title__hidden").val();
      var card_discription__hidden = $(parent_2).find(".card-discription__hidden").val();
      var card_list_id__hidden = $(parent_2).find(".card-list_id__hidden");
      var edit__form = $(parent_2).find(".move-card-form");
      // 上でフォームを取得できた
      // var car_list_id__hidden__edit = card_list_id__hidden.attr("value", 1);
    });
    $(".move-card-form").on("submit", function(){
      return false
    });
    $(".edit-card-form").on("submit", function(){
      return false
    });
  });
});