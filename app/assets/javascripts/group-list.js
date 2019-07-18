$(document).on('turbolinks:load',function(){
  $(".task_title").on("click", function(){
    var task_header = $(this).parent();
    var task_title_form = $(task_header).find(".task_title-form");
    var edit_icon = $(task_header).find(".task_icons__edit-button");
    var edit_button = $(task_header).find(".edit_title_icon");
    var trash_icon = $(task_header).find("#trash_title_icon");
    $(this).css({"display" : "none"});
    $(task_title_form).css({"display" : "block"});
    $(edit_icon).css({"display" : "none"});
    $(edit_button).css({"display" : "block"});
    $(trash_icon).css({"position" : "relative"});
    $(trash_icon).css({"top" : "-37px"});
  });
  $(".task_icons__edit-button").on("click", function(){
    var task_header = $(this).closest(".task-box-wrapper__contentent__task-header");
    var task_title_form = $(task_header).find(".task_title-form");
    var task_title = $(task_header).find(".task_title");
    var edit_button = $(task_header).find(".edit_title_icon");
    var trash_icon = $(task_header).find("#trash_title_icon");
    $(task_title_form).css({"display" : "block"});
    $(task_title).css({"display" : "none"});
    $(this).css({"display" : "none"});
    $(edit_button).css({"display" : "block"});
    $(trash_icon).css({"position" : "relative"});
    $(trash_icon).css({"top" : "-37px"});
  });
  $(".task_title-form").on("submit", function(){
    var list_title = $(this).find(".task_title-form__field").val()
    if (list_title == ""){
      swal ("リストの名前を入力してください", "" ,"error")
    }else{
    }
  });
  $(".task-box-add__hidden-post__button").on("click", function(e){
    var new_task_wrapper = $(this).closest(".task-box-add-wrapper__content")
    var new_task_tittle  = $(new_task_wrapper).find(".task-box-add__hidden-post__form").val()
    if(new_task_tittle == ""){
      swal("新規作成するにはタイトルの記入が必要です", "", "error")
      $(document).on("click", function(){
        location.reload()
      })
    }else{}
  });
});