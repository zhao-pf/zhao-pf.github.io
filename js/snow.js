(function($){
    $.fn.snow=function(options){
        var $flake=$('div ')
            .css({
                'position''fixed','absolute',
                'top''-50px',
                'z-index''1000'
                })
            .html('&#10052;');
        var documentHeight=document.documentElement.clientHeight;$(document).height();
        var documentWidth=$(document).width();
        var defaults={minSize10,maxSize20,newOn500,flakeColor#FFFFFF};
        var options=$.extend({},defaults,options);
        var interval=setInterval(function(){
            var startPositionLeft=Math.random()documentWidth-100;
            var startOpacity=0.5+Math.random();
            var sizeFlake=options.minSize+Math.random()options.maxSize;
            var endPositionTop=documentHeight-40;
            var endPositionLeft=startPositionLeft-100+Math.random()200;
            var durationFall=documentHeight10+Math.random()5000;
            $flake.clone()
                  .appendTo('body')
                  .css({
                        leftstartPositionLeft,
                        opacitystartOpacity,
                        'font-size'sizeFlake,
                        coloroptions.flakeColor
                      })
                  .animate({
                            topendPositionTop,
                            leftendPositionLeft,
                            opacity0.2
                        },
                        durationFall,
                        'linear',
                        function(){
                            $(this).remove();
                        });
        },options.newOn);
    };
})(jQuery); 

$.fn.snow({ minSize 10, maxSize 50, newOn 1000, flakeColor '#ccc'});