var initWidth = $("ul").width();

// Llamado de la funcion de precarga
preloadImg(initWidth);


// Detector de resizing de pantalla
$(window).resize(function(){

    $(".list-stories li").remove();

    var newWidth = $("ul").width();

    const imgWidth = 80;

    var possibleImg = Math.floor (newWidth/imgWidth);

    for (let index = 1; index <= possibleImg; index++) {
        
        $(".list-stories").prepend('<li><img src="images/fotoPerfil.svg" alt="imagen perfil"></li>');

    }

}); 


// Se precargan las imagenes que sea posible colocar en el contenedor
function preloadImg(parm1){

    const imgWidth = 80;

    var possibleImg = Math.floor (parm1/imgWidth);

    for (let index = 1; index <= possibleImg; index++) {
        
        $(".list-stories").prepend('<li><img src="images/fotoPerfil.svg" alt="imagen perfil"></li>');
        
    }

};