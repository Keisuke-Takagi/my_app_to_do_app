$(document).on('turbolinks:load',function(){
  $(function(){

    $(".task-box-wrapper__contentent__cards__add-button").on('click', function(){
      var add_button_id = $(this).data("id")
      debugger
      $(this).css('display', 'none');

      $(".card-title-field").css("display", "block")
      $(".new-card-buttons__card-new-button").css("display", "block")
      $(".new-card-buttons__remove-button").css("display", "block")
    });
    $(".new-card-buttons__remove-button").on("click", function(){
      $(".new-card-buttons__remove-button").css("display", "none")
      $(".new-card-buttons__card-new-button").css('display', 'none')
      $(".card-title-field").css('display', 'none')
      $(".task-box-wrapper__contentent__cards__add-button").css("display", "block")
    });
  });
});