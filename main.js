const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');

toogleBtn.addEventListener('click', () =>{
	menu.classList.toggle('active');
});

$(function(){
		var valueAr=new Array(0.95,1,0.90,0.85,0.88);
		$('.profile>div:nth-of-type(3)').find('div').each(function(i){
			$(this).circleProgress({
    			value: valueAr[i],
    			fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4}
 				}).on('circle-animation-progress', function(event, progress, stepValue) {
    			$(this).find('strong').html(Math.round(100 * valueAr[i]) + '<i>%</i>');
  			});
		});
	});

let nav = document.querySelector(".navbar");
let navHeight = nav.offsetHeight;
window.onscroll = function(){
    let windowTop = window.scrollY;
    if(windowTop >= navHeight){
        nav.classList.add("navfix");
    } else {
        nav.classList.remove("navfix");
    }
};

window.addEventListener("load", function(){
            var options = {
                text:"",
                textEffect:"neon",
                position:"top",
                height:"200px",
                backgroundStyle:"dark"
            };
            var div = new Hakademy.util.meteor(".meteor", options);

            $("input:not([type=checkbox])").on("input", function(){
                changeOptions($(this).attr("name"), $(this).val());
            });
            $("input[type=checkbox]").change(function(){
                if($(this).prop("checked"))
                    changeOptions($(this).attr("name"), $(this).val());
                else
                    changeOptions($(this).attr("name"), null);
            });

            optionDisplay();

            function changeOptions(k, v){
                div.set(k, v);
                
                optionDisplay();
            };
            function optionDisplay(){
                var line = "<ul>";
                for(var i in div.options){
                    var str = "[" + i + "] : " + div.options[i];
                    line += "<li>";
                    line += str;
                    line += "</li>";
                }
                line += "</ul>";
                $(".option-display").html(line);
            };            
        });

$(".navbar_menu a").on("click",function(event){
            event.preventDefault();
            var index=$(this).parent().index();
            var className=$(this).attr('href');
            var heightgap;
            if(index==0){
                heightgap=148;
            }else{
                heightgap=233;
            }
            $("html,body").animate({scrollTop:$(className).offset().top-heightgap },300); 
        });

$(function(){
    let poseY;
    $(".modal-all").click(function(){
        let modalid = $(this).attr("href");
        $(modalid).fadeIn(300);
        $(".modal-close").fadeIn(300);
        poseY = $(window).scrollTop();
        $("html,body").addClass("not-scroll")
        $(".navbar,.meteor").hide();
        $(".contents").css({top: -poseY})
    })
    $(".modal-close").click(function (event) {
        event.preventDefault()
        $(".content").fadeOut(300)
        $(".modal-close").fadeOut(0)
        $(".navbar,.meteor").show();
        $("html,body").removeClass("not-scroll");
        poseY = $(window).scrollTop(poseY);
    })
});
