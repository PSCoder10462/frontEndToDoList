//check off specific todo
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});


//to delete todo when x is clicked
$("ul").on("click","span" ,function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation(); 
});

//adding a todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoNext = $(this).val();
        $("ul").append("<li>"+ " <span><i class='fa fa-trash'></i></span> " + todoNext +"</li>");
        $(this).val("");
    }
});

$(".fa-plus").on("click", function(){
    $("input").fadeToggle();
});