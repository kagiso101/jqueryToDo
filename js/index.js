$( document ).ready(function() {
  
      $(".taskInput").on("keyup",function(e){
        //13  means enter button

        if(e.keyCode == 13 && $(".taskInput").val() != "")
        {
          var task = $("<div class='task'></div>").text($(".taskInput").val());
          var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
              p.remove();
            });
          });

          var check = $("<i class='fas fa-check'></i>").click(function(){
            var p = $(this).parent();
            p.fadeOut(function(){
              $(".done").append(p);
              p.fadeIn();
            });
            $(this).remove();
          });

          task.append(del,check);
          $(".toDo").append(task);
            //to clear the input
          $(".taskInput").val("");
        }
      });
    



});