window.onload = function () { 
    
    var md = new MobileDetect(window.navigator.userAgent);
    
    if (!md.tablet()){
        var width = $( window ).width();
        console.log(width);
    }
    
    var logo = $("#logo"),
    timelineLite = $("#timelinelite"),
    tagline = $("#tagline span"),
    restartBtn = $("#restartBtn"),
    
    cateferiaBg = $(".cateferia-bg"),
    
    titleLine1 = $(".text-title .line1"),
    titleLine2 = $(".text-title .line2"),
    titleLine3 = $(".text-title .line3"),
    
    subtitleLine1 = $(".text-subtitle .line1"),
    subtitleLine2 = $(".text-subtitle .line2"),
    subtitleLine3 = $(".text-subtitle .line3"),

    form1 = $("#form1"),
    
    tl = new TimelineLite();
    
    tl.from(cateferiaBg, 1, { alpha:0, ease:Back.easeOut})
    
    .from(titleLine1, 0.3, {left:"-=50px", alpha:0}, "-=0.01")
    .from(titleLine2, 0.3, {left:"-=50px", alpha:0}, "-=0.01")
    .from(titleLine3, 0.3, {left:"-=50px", alpha:0}, "-=0.01")
    
    .from(subtitleLine1, 0.2, {top:"-=50px", alpha:0}, "-=0.01")
    .from(subtitleLine2, 0.4, {top:"-=50px", alpha:0}, "-=0.01")
    .from(subtitleLine3, 0.5, {left:"-=150px", alpha:0}, "-=0.01")

    .from(form1, 0.5, {bottom:"-=150px", alpha:0}, "-=0.01")
    
    .from(timelinelite, 0.5, {width:"0px", alpha:0}, "-=0.02")
    .from(logo, 0.5, {left:"-=600px", alpha:0, ease:Back.easeOut})
    .staggerFrom(tagline, 0.5, {top:"-=30px", rotation:"-40deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2);
    
	restartBtn.click(function() {
        tl.restart();
        // tl.reverse(1);
	});
	
    TweenLite.set($("#stage"), {visibility:"visible"});
    
    $( window ).resize(function() {
        location.reload();
    });

    configFields();
}

function configFields(){
    $('#userMobile').mask('(00) 00000-0000');
}