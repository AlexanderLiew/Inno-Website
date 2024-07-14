$(function () {
    $('.filterbtn').click(filtershow);
    $('.close').click(filterclose);
});
function filtershow(){
    $('.filter').addClass('appear');
}
function filterclose(){
    $('.filter').removeClass('appear');
}