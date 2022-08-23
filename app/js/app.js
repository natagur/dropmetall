$(document).on('click', '.btn-header.burger', function(event){
    $('.header-nav').toggle();
    $('.btn-header.burger').toggle();
  
    event.preventDefault();
  });
  $(document).on('click', '.cross', function(event){
    $('.header-nav').toggle();
    $('.btn-header.burger').toggle();
  
    event.preventDefault();
  });