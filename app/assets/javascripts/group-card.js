$(document).on('turbolinks:load',function(){
  $(function(){
    $(".task-box-wrapper__content__cards__add-button").on('click', function(){
      $('.card-title-field').css('display', 'block');
      
    });
  });
});