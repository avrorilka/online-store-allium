$(document).ready(function(){
    $('.gallery-single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

    $('#buyModal').on('hidden.bs.modal', function (e) {
      console.log('closed')
    });

    $("#userInfo").on("submit", function (event) {
      event.preventDefault();
      $(".modal-content .close").click();
      alert("Дякуємо, ми надішлемо Вам повідомлення!");
  });
 });

