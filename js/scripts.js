// JavaScript Document

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}
	function isScrolledIntoView(elem)
{
$("#topNav").children('li').removeClass('text-shadow');
	if($('#scrollingContent').scrollTop() == 0)
		{
			$("#homelnk").addClass('text-shadow');
		}

	if($('#scrollingContent').scrollTop() > $('#AboutMeDiv').innerHeight() - 20)
		{

				$("#webSiteNavlnk").addClass('text-shadow');
				
		 }
	 if($('#scrollingContent').scrollTop() + $('#scrollingContent').innerHeight()>=$('#scrollingContent')[0].scrollHeight-$('#ArtWorklnk').height())
	  {
			$("#ArtWorklnk").addClass('text-shadow');/*this is to check if the scroll end of doc has been reached*/
	  }

}

function goToByScroll(id, me){
		var mytheme = $(this).attr("data-theme");

   if($("#pagestyle").attr("href") == "css/pinkPassion.css")
   {
	   $("body").css('background-image','url("images/bgfullwink.jpg")');
	   setTimeout(function(){ $("body").css('background-image',' url(images/bgfull2.jpg) '); }, 500);
	   }
		var exactscrollTop = $("#"+id).offset().top ;
		$("#topNav").children('li').removeClass('text-shadow');
		$(me).addClass('text-shadow');

		 $('#scrollingContent').slimScroll({ scrollBy: exactscrollTop - 100 });
}

    $(document).ready(function(){
$(".navbar-toggle").click(function(){
	if($("#topNav").children('li').is(":visible"))
	{
		$("#topNav").children('li').hide();
		}
		else{
				$("#topNav").children('li').show();
			}
	
	
	})


	$('body').click(function(e) {
    var target = $(e.target);
    if(!target.is('#theams li')) {
       if ( $('#theams ul').is(':visible') ) $('#theams ul').hide();
    }
});	
		$("#topNav").click();
		 $('#scrollingContent').scroll(function(){
			$("#topNav").children('li').removeClass('text-shadow');
	if($('#scrollingContent').scrollTop() == 0)
		{
			$("#homelnk").addClass('text-shadow');
			// $("body").css('background-image',' url(images/bgfull2.jpg) ');
		}

	if($('#scrollingContent').scrollTop() > $('#AboutMeDiv').innerHeight() - 20)
		{
			
				$("#webSiteNavlnk").addClass('text-shadow');
// $("body").css('background-image','url("images/bgfullwink.jpg")');
		 }
		
	 if($('#scrollingContent').scrollTop() + $('#scrollingContent').innerHeight()>=$('#scrollingContent')[0].scrollHeight- $('#ArtWorklnk').height())
	  {$("#topNav").children('li').removeClass('text-shadow');
			$("#ArtWorklnk").addClass('text-shadow'); // $("body").css('background-image',' url(images/bgfull2.jpg) ');;/*this is to check if the scroll end of doc has been reached*/
	  }
			/* $(".fixedHeight").each(function(index, element) {
				
               var myH1 =   $(this).children("h1"); 
			   isScrolledIntoView( myH1 );
            });*/
			
			 
			 })
    $('#scrollingContent').slimscroll({
    size: '7px',
      height: '600px',
  width: '99%'
  });


            $('.imageanchors').fancybox({
                openEffect  : 'none',
                closeEffect : 'none',

                prevEffect : 'none',
                nextEffect : 'none',

                helpers : {
                    title : {
                        type : 'inside'
                    }
                },

                afterLoad : function() {
                    this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
                }
            });
$("body").one('mouseover',function(){
$(".contentDivInner").fadeTo( 5000 , 1, function() {
});

})
$('#changeThemeLink').click(function(){
		$("body").removeAttr('style');

if($("#theams").find("ul").css('display') == 'block')
{
$("#theams").find("ul").slideUp('slow',function(){
$(this).css('display', 'none');
$("#theams").find('h2').html('Change Theme');
});
}
else{

$("#theams").find("ul").slideDown('slow',function(){
$(this).css('display', 'block');
});

}
$("body").removeAttr('style');
});
/*$("body").click(funtion(e){
if(e.target.id == "theams")
{}

})*/
$("#changeThemeLink").find("li").on('click',function(){
	var mytheme = $(this).attr("data-theme");
	$('body').removeAttr('style');
	    $("#pagestyle").attr("href", mytheme);  
	
//	swapStyleSheet(mytheme);
	});
$(".otherFont").click(function(){
/**/if($(".contentDiv").hasClass('sanFont')){
$(".contentDiv").removeClass("sanFont")
//$("#AboutMeDiv").addClass("hometext");
}
else{
$(".contentDiv").addClass("sanFont")
//$("#AboutMeDiv").find(".hometext");
}
})
    });
