//alert("Si entra");
$('head').append('<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">');
$(document).ready(function(){
    
    var heightSlider =$('#slider').css('height').replace("px","");
    var colorArrow=($('#slider').attr('color-arrow'))?$('#slider').attr('color-arrow'):"#333";
    var arrowPosition=(heightSlider/2)-14;
    var widthSlider=$('#slider').outerWidth();
    $("#slider").append(iconBuild('arrow-circle-o-left','3','arrow left','top:'+arrowPosition+'px;color:'+colorArrow));
    $("#slider").append(iconBuild('arrow-circle-o-right','3','arrow right','top:'+arrowPosition+'px;color:'+colorArrow));
    var noSlides=getSliderNo();
    for(var i=0;i<noSlides.length;i++){
        $("#slider").append(iconBuild('circle-o','1','slide_dial','top:'+((arrowPosition*2))+'px; left:'+(widthSlider/2.5)+'px'));
    }
    $('.slide_dial').on('mousedown',function(){
        $('.slide_dial').removeClass('fa-dot-circle-o');
        $('.slide_dial').addClass('fa-circle-o');
        $(this).removeClass('fa-circle-o');
        $(this).addClass('fa-dot-circle-o');
    });
});

function iconBuild(name,size,extraclass,style){
    var extraClass=(extraclass)?extraclass:'';
    var customStyle=(style)?style:"";
    var iconHtml='<i class=" fa fa-'+size+'x fa-' ;
    return iconHtml+= name+" "+extraClass+'" style="'+customStyle+'"></i>';
}

function getSliderNo(){
    var length=$('#slider').children().length;
    var slides=[];
    for(var i=0;i<length;i++){
        if($('#slider').children()[i].tagName=="DIV"){
            slides[i]=i;
            }
    }
    return slides;
}
