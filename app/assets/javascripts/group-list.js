$(document).on('turbolinks:load',function(){
  $(".task_title").on("click", function(){
    var task_header = $(this).parent()
    var task_title_form = $(task_header).find(".task_title-form")
    var edit_icon = $(task_header).find(".task_icons__edit-button")
    var edit_button = $(task_header).find(".edit_title_icon")
    var trash_icon = $(task_header).find("#trash_title_icon")
    $(this).css({"display" : "none"});
    $(task_title_form).css({"display" : "block"});
    $(edit_icon).css({"display" : "none"});
    $(edit_button).css({"display" : "block"});
    $(trash_icon).css({"position" : "relative"});
    $(trash_icon).css({"top" : "-37px"});
  });
  $(".task_icons__edit-button").on("click", function(){
    var task_header = $(this).closest(".task-box-wrapper__contentent__task-header")

    var task_title_form = $(task_header).find(".task_title-form")
    var task_title = $(task_header).find(".task_title")
    var edit_button = $(task_header).find(".edit_title_icon")
    var trash_icon = $(task_header).find("#trash_title_icon")
    $(task_title_form).css({"display" : "block"});
    $(task_title).css({"display" : "none"})
    $(this).css({"display" : "none"});
    $(edit_button).css({"display" : "block"});
    $(trash_icon).css({"position" : "relative"});
    $(trash_icon).css({"top" : "-37px"});
  });
});