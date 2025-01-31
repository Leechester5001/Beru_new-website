jQuery(document).ready(function($){
    //open popup
    $('.popup-trigger').on('click', function(event){
      event.preventDefault();
      $('.popup').addClass('is-visible');
    });
    
    //close popup
    $('.popup').on('click', function(event){
      if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
        event.preventDefault();
        $(this).removeClass('is-visible');
      }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
          $('.popup').removeClass('is-visible');
        }
      });
  });

  document.getElementById("openPopup").addEventListener("click", function() {
    // Open the popup window
    window.open(
        'https://forms.gle/xAbsP21DtHdoJ5JNA?embedded=true', 
        'Popup', 
        'width=600,height=500,scrollbars=yes,resizable=no,menubar=no,toolbar=no,status=no,fullscreen=no'
    );
});