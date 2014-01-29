//alert("Si entra");
$(document).ready(function(){
    var heightSlider =$('#slider').css('height').replace("px","");
    var colorArrow=($('#slider').attr('color-arrow'))?$('#slider').attr('color-arrow'):"#333";
    console.log(colorArrow)
    var arrowPosition=(heightSlider/2)-14;
    $("#slider").append(iconBuild('arrow-circle-o-left','3','arrow left','top:'+arrowPosition+'px;color:'+colorArrow));
    $("#slider").append(iconBuild('arrow-circle-o-right','3','arrow right','top:'+arrowPosition+'px;color:'+colorArrow));
    
});

function iconBuild(name,size,extraclass,style){
    var extraClass=(extraclass)?extraclass:'';
    var Styel=(style)?style:"";
    var iconHtml='<i class=" fa fa-'+size+'x fa-' ;
    return iconHtml+= name+" "+extraClass+'" style="'+style+'"></i>';
}

function getSliderNo(){
    $('#slider')
}
