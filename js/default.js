//alert("Si entra");
$(document).ready(function(){
    var heightSlider =$('#slider').css('height').replace("px","");
    var arrowPosition=(heightSlider/2)+10;
    $("#slider").append(iconBuild('arrow-circle-o-left','3','arrow'));
    $("#slider").append(iconBuild('arrow-circle-o-right','3','arrow right'));
    
});

function iconBuild(name,size,extraclass){
    var extraClass=(extraclass)?extraclass:'';
    var iconHtml='<i class=" fa fa-'+size+'x fa-' ;
    return iconHtml+= name+" "+extraClass+'"></i>';
}
