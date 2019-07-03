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
  });
});