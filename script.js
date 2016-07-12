/**
 * Created by Jackson on 7/11/16.
 */

$(document).ready(function(){
    var titles = [
        'A Spiral Galaxy',
        'A Beautiful Nebula',
        'Many Galaxies',
        'Planet Saturn',
        'Saturn\'s Rings'
    ];

    $('.block img').mouseenter(function(){
        var index = $(this).attr('name').substring(5, 6);

        $('.image').fadeOut('fast', function(){
            $('.image').attr('src', 'images/image' + index + '.jpg');
        }).fadeIn('fast');

        $('#desc').fadeOut('fast', function(){
            $('#desc').text(titles[index - 1]);
        }).fadeIn('fast');

        console.log(index);
    });
});