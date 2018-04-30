$(function () {
    $('.navigation-icon').click(function () {
      $('nav ul').toggleClass('open')
      $('.navigation-icon').toggleClass('open')
    })
    $('nav').on('click', '.open li a', function () {
      $('nav ul').removeClass('open')
      $('.navigation-icon').removeClass('open')
    })
  })