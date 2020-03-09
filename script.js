//crear un elemento y posicionarlo dentro de un elemento con el id especificado
$(function () {
    var a = $('<a>',{
        href: 'http//platzi.com',
        target: '_blank',
        html : 'Ir a platzi'
    })
    $('#app-body').append(a);
    //a.attr('href'); -> get del objeto a
    
})

$(function(){
    $('<p>',{html: 'Me acaban de crear'}).appendTo($('header#app-header'))
})

//en jquery se manejan los objects jquery, a un objeto por convención se le antepone el signo $, var $variable

//manipular los estilos css

$(function(){
    $('h1').css({
        'font-size':'30px'
    })
})

