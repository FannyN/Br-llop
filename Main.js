$(function () {
    $('.navigation-icon, nav ul li a').click(function () {
      $('nav ul').toggleClass('open')
      $('.navigation-icon').toggleClass('open')
    })
  })