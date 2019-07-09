$(document).on('turbolinks:load',function(){
  $(function(){
    $(".card-content-add__button").on('click', function(){
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
      var new_button_add = $(card_button_wrapper).find(".card-content-add__button")
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
  $(function(){
    $(".card-detail").on("click", function(){
      var card_id = $(this).data();
      var ca = card_id.id
      parent_1 = $(this).parent()
      parent_2 = $(parent_1).parent()
      edit_card_content = $(parent_2).find(".card-content__edit-wrapper");
      $(edit_card_content).css({"display" : "block"});
      $(".content_main").css("overflow-x", "hidden");
      var scrollTop = $(window).scrollTop();
      $(".modal-overlay").css({"display" : "block"});
      // if(("#myModal").data() == ca){
      // var modal = ("#myModal").data() 
      //   $(modal).css({"display": "block"})
      //   $(modal).css({"opacity": 1})
      //   $(modal).css("overflow-x", "hidden")
      //   $(modal).css("overflow-y", "auto")
      // }else{}
    });
    $(".card-content__add-box__button--cancel").on("click", function(){
      var parent_1 = $(this).parent()
      var parent_2 = $(parent_1).parent();
      var edit_card_content = $(parent_2).parent();
      $(".content_main").css("overflow-x", "auto");
      $(edit_card_content).removeAttr("style");
      $(".modal-overlay").removeAttr("style");
    });
  })
});