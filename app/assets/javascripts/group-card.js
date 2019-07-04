$(document).on('turbolinks:load',function(){
  $(function(){

    $(".task-box-wrapper__contentent__cards__add-button").on('click', function(){
      var add_button_wrapper = $(this).parent();
      var add_text_area = $(add_button_wrapper).find(".card-title-field");
      var add_button = $(add_button_wrapper).find(".new-card-buttons__card-new-button")
      var remove_button = $(add_button_wrapper).find(".new-card-buttons__remove-button")
      $(add_text_area).css("display", "block")
      $(add_button).css("display", "block")
      $(remove_button).css("display", "block")
      $(this).css('display', 'none');
    });
    $(".new-card-buttons__remove-button").on("click", function(){
      var this_new_card_buttons = $(this).parent();
      var add_button_wrapper = $(this_new_card_buttons).parent();
      var card_button_wrapper = $(add_button_wrapper).parent();
      var add_text_area = $(add_button_wrapper).find(".card-title-field")
      var add_button = $(add_button_wrapper).find(".new-card-buttons__card-new-button")
      var new_button_add = $(card_button_wrapper).find(".task-box-wrapper__contentent__cards__add-button")
      $(this).css("display", "none")
      $(add_text_area).css('display', "none")
      $(add_button).css('display', 'none')
      $(new_button_add).css("display", "block")
    });
    $(".task-box-add__text").on("click", function(){
      var task_box_add = $(this).parent();
      var task_box_add_form = $(task_box_add).find(".task-box-add__hidden-post")
      var task_box_add_text_area = $(task_box_add_form).children();
      var task_box_add_button_submit = $(task_box_add).find(".task-box-add__hidden-post__button")
      $(this).css("display", "none")
      $(task_box_add_form).css("display", "block")
      $(task_box_add_text_area).css("display", "block")
      $(task_box_add_button_submit).css("display", "block")

    })
    $(".task-box-add__hidden-post__button").on("click", function(){
      var task_box_add = $(this).parent();
      var task_box_add_form = $(task_box_add).find(".task-box-add__hidden-post")
      var task_box_add_text_area = $(task_box_add_form).children();
      var task_box_add_button = $(task_box_add).find(".task-box-add__text")
      $(this).css("display", "none")
      $(task_box_add_form).css("display", "none")
      $(task_box_add_text_area).css("display", "none")
      $(task_box_add_button).css("display", "block")
    });
  });
});