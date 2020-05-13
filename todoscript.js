// toggle task completed;
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// fade out and remove task completely;
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation(); // event won't pass on to other elements (you click the span only, not li, ul, div#container, body, html);
});

// add a new task to the to-do list;
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) { // check for the enter key (13);
        var todoText = $(this).val();
        $(this).val(""); // clear input
        // if input is not empty, create a new li, add to ul
        if (todoText !== "") {
            $("ul").append("<li><span><i class='fas fa-minus'></i></span> " + todoText + "</li>");
        }
    }
});