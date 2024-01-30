$('.thumbnail').click(function(){
  $('.modal-body').empty();
$($(this).parents('div').html()).appendTo('.modal-body');
$('#modal').modal({show:true});


});

$('#modal').on('show.bs.modal', function () {
$('.col-6,.row .thumbnail').addClass('blur');

})

$('#modal').on('hide.bs.modal', function () {
$('.col-6,.row .thumbnail').removeClass('blur');

}) 




const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('refresh')) {
   // Redirect to the game page without adding a new history entry
   window.location.replace('index.html');
} else {
   // Add the refresh parameter to the URL
   window.history.replaceState({}, document.title, window.location.pathname + '?refresh=true');
}