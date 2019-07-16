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
    $(document).on('click',   function(e) {
      if (!$(e.target).closest('.card-icons__next').length) {
        $(".card-detail").on("click", function(){
        var card_id = $(this).data();
        var ca = card_id.id
        parent_1 = this.parentElement
        parent_2 = $(parent_1).parent()
        edit_card_content = $(parent_2).find(".card-content__edit-wrapper");
        $(edit_card_content).css({"display" : "block"});
        // $(".content_main").css("overflow-x", "hidden");
        var scrollTop = $(window).scrollTop();
        $(".modal-overlay").css({"display" : "block"});
         var aa = $(document).on('click',function(e) {
          // if(!$(e.target).closest(".card-content__edit-wrapper__mordal").length) {
          //   $(".content_main").css("overflow-x", "auto");
          //   $(".modal-overlay").removeAttr("style");
          //   $(".card-content__edit-wrapper").removeAttr("style")
          // } else {
          // }
        });
      });
      }
    })
    // $(".card-detail").on("click", function(){
      // var card_id = $(this).data();
      // var ca = card_id.id
      // parent_1 = $(this).parent()
      // parent_2 = $(parent_1).parent()
      // edit_card_content = $(parent_2).find(".card-content__edit-wrapper");
      // $(edit_card_content).css({"display" : "block"});
      // $(".content_main").css("overflow-x", "hidden");
      // var scrollTop = $(window).scrollTop();
      // $(".modal-overlay").css({"display" : "block"});
      //  var aa = $(document).on('click',function(e) {
      //   if(!$(e.target).closest(".card-content__edit-wrapper__mordal").length) {
      //     // $(".content_main").css("overflow-x", "auto");
      //     // $(".modal-overlay").removeAttr("style");
      //     // $(".card-content__edit-wrapper").removeAttr("style")
      //   } else {
      //   }
      // });
    // });
    $(".window-content__discription-content__show").on("click", function(){
      $(this).css({"display" : "none"})
      var card_discripiton_content = $(this).closest(".window-content__discription-content")
      var edit_card_discription_field = card_discripiton_content.find("#edit-card-discription-field")
      edit_card_discription_field.css({"display" : "block"})
    });
    $(".card-content__add-box__button--cancel").on("click", function(){
      $(".content_main").css("overflow-x", "auto");
      $(".modal-overlay").removeAttr("style");
      $(".card-content__edit-wrapper").removeAttr("style")
    });
  })

});

