console.log('components');



function shineLinks(id){
    try{
        var el=document.getElementById(id).getElementsByTagName('.nav__item');
        var url=document.location.href;
        for(var i=0;i<el.length; i++){
            if (url==el[i].href){
                el[i].className += 'nav__item-action';
            };
        };
    }catch(e){}
};


