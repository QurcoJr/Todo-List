// Check off specific todos
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

$('#plus').on('click', function () {
    $('input[type="text"').fadeToggle();
});
// Click on X to delete todo
$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$('input[type="text"').keypress(function (event) {
    if (event.which === 13) {
        // Get new todo text from input
        var todoText = $(this).val();
        $(this).val('');
        // Create new li 
        $('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`);
    }
});
