$("#myMessage").attr('placeholder', $('.radio-buttons:checked').val())
$(".radio-buttons").click(function () {
    $("#myMessage").attr('placeholder', $(this).val())
});