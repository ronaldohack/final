

$(document).ready(function(){
    $(document).ready(function(){
        $(window).on("scroll",function(){
          var wn = $(window).scrollTop();
        if(wn > 800){
            $(".black").css("background","rgba(1,1,1,1)");
        }
        else{
            $(".black").css("background","rgba(1,1,1,0)");
        }
      });
    });
})

function ocutarImagens(seletor){
    let imagens = document.querySelectorAll(seletor);
    for(let umaImagem of imagens){
        if(umaImagem.style.display == 'block'){
            umaImagem.style.opacity = '1';
            umaImagem.style.display = 'block';    
            console.log('alguma coisa');
               
    }else{
        
        umaImagem.style.opacity = '0';
        umaImagem.style.display = 'none';
        console.log('foi crl');
        
    }
   
    
}};

function mostrarImagens(seletor1, seletor2, seletor3, seletor4){
    let kings = document.querySelectorAll(seletor1);
    let selc2 = document.querySelectorAll(seletor2);
    let selc3 = document.querySelectorAll(seletor3);
    let selc4 = document.querySelectorAll(seletor4);
    

    for(let umKing of kings){
       
        umKing.style.opacity = '1';
        umKing.style.display = 'block';
        
    }
    for(let umKing of selc2){
       
        umKing.style.opacity = '1';
        umKing.style.display = 'block';
    
    }
    for(let umKing of selc3){
       
        umKing.style.opacity = '1';
        umKing.style.display = 'block';
    
    }
    for(let umKing of selc4){
        
        umKing.style.opacity = '1';
        umKing.style.display = 'block';

    }

}


