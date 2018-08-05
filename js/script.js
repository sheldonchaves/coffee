var screen = 1;
var question = 0;

var questions = [
    {
        question: "Qual a sua estação do ano favorita?",
        a1:"Outono",
        a2:"Inverno",
        a3:"Primavera",
        a4:"Verão"
    },
    {
        question: "No seu Happy Hour não pode faltar...",
        a1:"Coca-cola gelo e limão",
        a2:"Um bom Vinho Tinto",
        a3:"Caipirinha de limão",
        a4:"Uma breja bem gelada"
    },
    {
        question: "Na sua playlist só toca...",
        a1:"Música Eletrônica",
        a2:"Música Clássica",
        a3:"Rock",
        a4:"Sertanejo"
    }
];


window.onload = function () { 
    
    var md = new MobileDetect(window.navigator.userAgent);
    
    if (!md.tablet()){
        var width = $( window ).width();
        console.log(width);
    }
    
    var logo = $("#logo"),
    
    cateferiaBg = $(".cateferia-bg"),
    
    titleLine1 = $(".text-title .line1"),
    titleLine2 = $(".text-title .line2"),
    titleLine3 = $(".text-title .line3"),
    
    subtitleLine1 = $(".text-subtitle .line1"),
    subtitleLine2 = $(".text-subtitle .line2"),
    subtitleLine3 = $(".text-subtitle .line3"),
    
    tl = new TimelineLite();
    // tlForm1 = new TimelineLite();
    // tlForm2 = new TimelineLite();
    // tlForm3 = new TimelineLite();
    // tlForm4 = new TimelineLite();
    // tlForm5 = new TimelineLite();
    
    tl.from(cateferiaBg, 1, { alpha:0, ease:Back.easeOut})
    
    .from(titleLine1, 0.3, {left:"-=50px", alpha:0}, "-=0.01")
    .from(titleLine2, 0.3, {left:"-=50px", alpha:0}, "-=0.01")
    .from(titleLine3, 0.3, {left:"-=50px", alpha:0}, "-=0.01")
    
    .from(subtitleLine1, 0.2, {top:"-=50px", alpha:0}, "-=0.01")
    .from(subtitleLine2, 0.4, {top:"-=50px", alpha:0}, "-=0.01")
    .from(subtitleLine3, 0.5, {left:"-=150px", alpha:0}, "-=0.01")
    
    .from(logo, 0.5, {left:"-=600px", alpha:0, ease:Back.easeOut});
    // .staggerFrom(tagline, 0.5, {top:"-=30px", rotation:"-40deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2);
    
    
    
    // TweenLite.set($("#stage"), {visibility:"visible"});
    /*
   
    */
    configFieldsForm1();
    setTimeout(function(){ form1screen(); }, 3000);
    
    // form2screen();
    // gotoResult();
}

function form1screen(){
    var form1 = $("#form1");
    form1.css("opacity", 1);
    form1.css("display", "block");
    var tlForm1 = new TimelineLite();
    tlForm1.from(form1, 0.5, {bottom:"-=550px", alpha:0}, "-=0.01")
}

function form2screen(){
    var form1 = $("#form1");
    var form2 = $("#form2");
    
    fillQuestion();
    
    $("#form2 .answer1").click(function() {
        // chamar serviço para resultado 1
        nextQuestion();
    });
    $("#form2 .answer2").click(function() {
        // chamar serviço para resultado 2
        nextQuestion();
    });
    $("#form2 .answer3").click(function() {
        // chamar serviço para resultado 3
        nextQuestion();
    });
    $("#form2 .answer4").click(function() {
        // chamar serviço para resultado 4
        nextQuestion();
    });
    
    form2.css("opacity", 1);
    form2.css("display", "block");
    var tlForm2 = new TimelineLite();
    tlForm2.staggerFrom(form2, 0.5, {left:"-=130px", alpha:0, ease:Back.easeOut}, 0.2);
    TweenLite.to(form1, .3, {left:"100vw", alpha:0});
}

function fillQuestion(){
    var activeQuestion = questions[question];
    
    $("#form2 .question").text(activeQuestion.question);
    $("#form2 .answer1").text(activeQuestion.a1);
    $("#form2 .answer2").text(activeQuestion.a2);
    $("#form2 .answer3").text(activeQuestion.a3);
    $("#form2 .answer4").text(activeQuestion.a4);
}

function nextQuestion(){
    TweenLite.to(form2, .3, {left:"100vw", alpha:0, onComplete:changeQuestion});
}

function changeQuestion() {
    question++;
    if (question == 3){
        gotoResult();
    } else {
        fillQuestion();
        TweenLite.to(form2, 0, {left:"-100vw", alpha:1});
        TweenLite.to(form2, .5, {left:"40px", alpha:1});
    }
    // TweenMax.staggerTo([red, yellow, green, blue, pink, purple], 1,  {scale:0.2, opacity:0.3}, 0.25);	
}

function gotoResult(){

    console.log("gotoResult();");

    var result = $("#result");
    result.css("opacity", 1);
    result.css("display", "block");

    var subtitleLine1 = $(".text-subtitle .line1"),
    subtitleLine2 = $(".text-subtitle .line2"),
    subtitleLine3 = $(".text-subtitle .line3"),
    
    tl = new TimelineLite();
    
    tl.to(subtitleLine1, 0.2, {left:"100vw", alpha:0, scale:0}, "-=0.1")
    .to(subtitleLine2, 0.2, {left:"100vw", alpha:0, scale:0}, "-=0.1")
    .to(subtitleLine3, 0.2, {left:"100vw", alpha:0, scale:0}, "-=0.1")
    // .from(result, 0.2, {left:"-100vw", alpha:0}, "-=0.1")


    $("#result button").click(function(event){
        location.reload();
    });
}

function configFieldsForm1(){
    setValidation($('#user_name'), 'text');
    setValidation($('#user_company'), 'text');
    setValidation($('#user_jobtitle'), 'text');
    setValidation($('#user_email'), 'email');
    setValidation($('#user_mobile'), 'mobile');
    
    var form_data=$("#form1").serializeArray();
    for (var input in form_data){
        var element=$("#" + form_data[input]['name']);
        $(element).on('input change', function() {
            $("#form1 button").prop('disabled', !checkForm($("#form1")));
        });
    }
    
    $("#form1 button").click(function(event){
        event.preventDefault(); 
        checkForm($("#form1"));
        
        if (checkForm($("#form1"))){
            console.log("enviar");
            form2screen();
        } else {
            console.log("nao enviar");
        }
    });
}

function setValidation(input, type){
    if(type == 'mobile'){
        $(input).mask('(00) 00000-0000');
    }
    
    $(input).on('input focusout focusin', function() {
        var isvalid=input.val();
        
        if (type == 'email'){
            var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            isvalid=re.test(input.val());
        } 
        input.removeClass("untouched");
        if(isvalid){input.removeClass("invalid").addClass("valid");}
        else{input.removeClass("valid").addClass("invalid");}
    });
}

function checkForm(form){
    var form_data=$(form).serializeArray();
	var error_free=true;
	for (var input in form_data){
        var element=$("#" + form_data[input]['name']);
		var valid=element.hasClass("valid");
		var error_element=$("span", element.parent());
		if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
		else{error_element.removeClass("error_show").addClass("error");}
	}
	return error_free;
}


