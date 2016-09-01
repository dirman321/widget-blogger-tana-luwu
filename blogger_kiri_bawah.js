var Ovr2='';
if(typeof document.compatMode!='undefined' && document.compatMode!='BackCompat')
{
   cot_t1_DOCtp="_top:expression(document.documentElement.scrollTop+document.documentElement.clientHeight-this.clientHeight);_left:expression(document.documentElement.scrollLeft + document.documentElement.clientWidth - offsetWidth);}";
}
else
{
   cot_t1_DOCtp="_top:expression(document.body.scrollTop+document.body.clientHeight-this.clientHeight);_left:expression(document.body.scrollLeft + document.body.clientWidth - offsetWidth);}";
}

if(typeof document.compatMode!='undefined'&&document.compatMode!='BackCompat')
{
   cot_t1_DOCtp2="_top:expression(document.documentElement.scrollTop-20+document.documentElement.clientHeight-this.clientHeight);}";
}
else
{
   cot_t1_DOCtp2="_top:expression(document.body.scrollTop-20+document.body.clientHeight-this.clientHeight);}";
}


var bloggertanaluwu_bottom_leftCSS='#bloggertanaluwu_bottom_left{position:fixed;';
bloggertanaluwu_bottom_leftCSS=bloggertanaluwu_bottom_leftCSS+'_position:absolute;';
bloggertanaluwu_bottom_leftCSS=bloggertanaluwu_bottom_leftCSS+'bottom:0px;';
bloggertanaluwu_bottom_leftCSS=bloggertanaluwu_bottom_leftCSS+'left:0px;';
bloggertanaluwu_bottom_leftCSS=bloggertanaluwu_bottom_leftCSS+'clip: inherit;';
bloggertanaluwu_bottom_leftCSS=bloggertanaluwu_bottom_leftCSS+cot_t1_DOCtp;

var cot_tl_popCSS='#cot_tl_pop {background-color: transparent;';
cot_tl_popCSS=cot_tl_popCSS+'position:fixed;';
cot_tl_popCSS=cot_tl_popCSS+'_position:absolute;';
cot_tl_popCSS=cot_tl_popCSS+'height:194px;';
cot_tl_popCSS=cot_tl_popCSS+'width: 244px;';
cot_tl_popCSS=cot_tl_popCSS+'border: thin solid #000000;';
cot_tl_popCSS=cot_tl_popCSS+'right: 100px;';
cot_tl_popCSS=cot_tl_popCSS+'bottom: 30px;';
cot_tl_popCSS=cot_tl_popCSS+'overflow: hidden;';
cot_tl_popCSS=cot_tl_popCSS+'visibility: hidden;';
cot_tl_popCSS=cot_tl_popCSS+'z-index: 100;';
cot_tl_popCSS=cot_tl_popCSS+cot_t1_DOCtp2;

document.write('<style type="text/css">'+bloggertanaluwu_bottom_leftCSS+cot_tl_popCSS+'</style>');

function cot_tl_bigPopup(url)
{
   newwindow=window.open(url,'name');

   if(window.focus)
   {
      newwindow.focus()
   }
   return false;
}

function cot(cot_tl_theLogo,cot_tl_LogoType,LogoPosition,theAffiliate)
{
   var cot_tl_bigBaseURL= " http://blogertanaluwu.blogspot.co.id/";
   document.write('<div id="bloggertanaluwu_bottom_left">');
   document.write('<a href='+cot_tl_bigBaseURL+' onClick="return cot_tl_bigPopup(\''+cot_tl_bigBaseURL+'\')"><img src='+cot_tl_theLogo+' border="0" ></a>');document.write('</div>');
}
