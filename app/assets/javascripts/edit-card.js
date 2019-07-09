$(document).on('turbolinks:load',function(){
  $(function(){
    $(".card-icons__next").on("click", function(){
      // var this_page_move_forms = $(".move-card-form")
      var this_page_move_forms = $(".task-box-wrapper__contentent__cards")
      var parent_1 = $(this).parent();
      var parent_2 = $(parent_1).parent();
      var card_id__hidden = $(parent_2).find(".card-id__hidden").val();
      var move_card__form = $(parent_2).find(".move-card-form");
      var this_form_data_id = $(move_card__form).data("id")
      $.each(this_page_move_forms, function(index, a_form){
        var each_list_id = $(a_form).data("id");
        if(each_list_id >  this_form_data_id){
          sessionStorage.setItem("list_id_next", each_list_id)
          return false
        };
      });
      var list_id_next = Number(sessionStorage.getItem("list_id_next"))
      var $dir = location.href.split("/");  
      var $dir2 = $dir[$dir.length -1];
      var url = "/groups/" + $dir2 + "/lists/" + list_id_next + "/cards/" +  card_id__hidden
      move_card__form.attr("action", url)
      $(parent_2).find(".card-list_id__hidden").attr("value", list_id_next)
    });
    $(".edit-card-button").on("click", function(){
    })
    $(".move-card-form").on("submit", function(){
    });
    $(".edit-card-form").on("submit", function(){
      return false
    });
  });
});