$(document).ready(function() {
      $('.header-container nav a').click(function() {
            // event.preventDefault();
            $('.header-container nav a').removeClass('active');
            $(this).addClass('active');
      })
})