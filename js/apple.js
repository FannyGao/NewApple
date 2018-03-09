/**
 * Created by Admin on 2018/3/9.
 */
window.onload=function () {
    $(window).scroll(function () {
        let roll=$(document).scrollTop();
        if(roll>=40){

            $('nav').addClass('fixed');
        }
        else {
            $('nav').removeClass('fixed');
        }
    })
    $('.nav_min .main:first').click(function (e) {
        e.preventDefault();
        $('.black').height($(window).height())
        $('.black').slideDown('slow').siblings().hide();
    })
    $('.black_top:first').click(function (e) {
        e.preventDefault();
        $('.black').slideUp('slow').siblings().show('slow');
    })
}