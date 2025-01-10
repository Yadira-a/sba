//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
randOrder();paintQuestion();
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}$("#goLeftBut").mousedown(function(e) {e.preventDefault();changeTag(-1);});$("#goRightBut").mousedown(function(e) {e.preventDefault();changeTag(1);});
}
function randOrder(){for (var i = 0; i < ans.length; i++) {r_ans.push(-1);}if (tiRandOrder){var rA=[];for (var i = 0; i < ans.length; i++) {rA.push(i);}
while (rA.length > 0) {var randN = Math.floor(Math.random() * rA.length);r_order.push(rA[randN]);rA.splice(randN, 1);}}else{for (var i = 0; i < ans.length; i++) {r_order.push(i);}}
for (var i = 0; i < ans.length; i++) {var randArray = [].concat(ans[i]);var newAnswers=[];var newChecks=[];while (randArray.length > 0) {var randN = Math.floor(Math.random()*randArray.length);newAnswers.push(randArray[randN]);newChecks.push(0);randArray.splice(randN, 1);}
r_pos.push(newAnswers);r_checks.push(newChecks);while (randArray.length>0){randArray.splice(0, 1);}}indexTag=r_order[iT];}
function paintQuestion(){$.each($("audio"), function() {$(this).get(0).pause();});actualAnswers=r_pos[indexTag];$("#imaForTag").remove();$("#videoForTag").remove();document.getElementById("txtTag").innerHTML=tags[indexTag];
var inH='<ul>';for (i = 0; i < actualAnswers.length; i++) {
inH=inH+'<li class="checkbox-grid" tabindex="0"><input id="check'+i.toString()+'" type="checkbox" name="check'+i.toString()+'" value="check'+i.toString()+'"><label for="check'+i.toString()+'">'+testWords(actualAnswers[i]).substr(1)+'</label></li>';
}inH=inH+"</ul>";document.getElementById("ardoraChecks").innerHTML=inH;
$(".checkbox-grid").keydown(function(e){if (e.which != 9){$(this).find("input").click();}})
if (actualAnswers.length>10){$(".checkbox-grid").css("width","50%");}else{$(".checkbox-grid").css("width","100%");}
for (i=0;i<actualAnswers.length; i++) {if (r_checks[iT][i]==1){$("#check"+i.toString()).prop("checked",true);}else{$("#check"+i.toString()).prop("checked",false);}}
if (ima[indexTag].length>0){$("#ardoraChecks").css("width","435");
var newDiv = $('<div id="imaForTag" tabindex="0"></div>);');newDiv.css({height:"200px",width:"200px",position:"relative",padding: "0px",margin: "0px",float:"right"});
newDiv.html("<img alt='"+alt[indexTag]+"' src="+dirMedia+"thumb_"+ima[indexTag]+" height='auto' width='auto'>");
$("#ardoraAct").append(newDiv);$("#imaForTag").css({cursor:"pointer"});
$("#imaForTag img").css({maxWidth:"100%",maxHeight:"100%",display:"block"});
$("#imaForTag").keydown(function(e) {if (e.which != 9){$("#imaForTag").mousedown();}});
$("#imaForTag").mousedown(function (e) {var newDivBig = $('<div id="imaForTagBig" <span class="background-image" role="img" aria-label="'+alt[indexTag]+'"> </span> tabindex="0"></div>);');
newDivBig.css({height: "100%",width: "100%",position: "fixed",padding: "0px",margin: "0px",
backgroundColor: "rgba(255,253,253,0.5)",top: "0",left: "0",display: "flex",alignItems: "center",justifyContent: "center",zindex: 500});
newDivBig.html("<img id='imaBig' alt='" + alt[indexTag] + "' src=" + dirMedia + "thumb_" + ima[indexTag] + " height='auto' width='auto'>");
$("body").append(newDivBig);if (info[indexTag].localeCompare("") != 0) {$("#imaForTagBig").append('<button id="ifbut" tabindex="0">🛈</button>');$("#imaForTagBig").append('<div id="infoText" class="infoText">' + info[indexTag] + '</div>');
document.getElementById("ifbut").addEventListener("click", toggleInfoText);document.getElementById("ifbut").addEventListener("keydown", function(e) {if (e.key !== "Tab") {e.preventDefault();toggleInfoText();}});
$("#ifbut").mousedown(function(e) {e.stopPropagation();});
function toggleInfoText(event) {if (event) {event.stopPropagation();};var textDiv = document.getElementById("infoText");var infoButton = document.getElementById("ifbut");if (textDiv.style.display==="none" || textDiv.style.display==="") {textDiv.style.display="block";infoButton.style.bottom='calc(5px + ' + textDiv.offsetHeight + 'px)';} else {textDiv.style.display = "none";infoButton.style.bottom = "0px";}}}
$("#imaForTagBig img").css({maxWidth:"90vw",maxHeight:"90vh",margin:"5px",display: "block"});
$("#imaBig").css({backgroundColor:"white",display:"inline-block",position: "relative"});
newDivBig.mousedown(function (e) {$("#imaForTagBig").remove();});
$("#imaForTagBig").focus();$("#imaForTagBig").keydown(function(e){if (e.which == 27) {newDivBig.mousedown();}});});
}
if ((mp4[indexTag].length>0)||(ogv[indexTag].length>0)){$("#ardoraChecks").css("width","435px");var newDiv=$('<div id="videoForTag"></div>);');
newDiv.css({height: "200px",width: "200px",position: "relative",padding: "0px",margin: "0px",float: "right",clear: "right"});var src_mp4="";var src_ogv="";
if (mp4[indexTag].length > 0){src_mp4= " <source src='"+ dirMedia+mp4[indexTag]+"' type='video/mp4'>"}
if (ogv[indexTag].length > 0){src_ogv= " <source src='"+ dirMedia+ogv[indexTag]+"' type='video/ogg'>"}
newDiv.html("<video width='200' controls>"+src_mp4+src_ogv+"</video>");$("#ardoraAct").append(newDiv);$("#videoForTag").css({cursor: "pointer"});}
if ((ima[indexTag].length==0)&&(mp4[indexTag].length==0)&&(ogv[indexTag].length==0)){$("#ardoraChecks").css("width", "650px");}
var audioDiv="audio"+ indexTag.toString();if (document.getElementById(audioDiv)==null) {$("#ardoraTag").css("cursor", "auto");$("#ardoraTag").unbind("mousedown");} else {
$("#ardoraTag").css("cursor", "pointer");$("#ardoraTag").mousedown(function (e) {$("#audio" + indexTag.toString()).get(0).play();});}$("#ardoraTag").mousedown(function (e) {});
 var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight})
$("#goLeftBut").hide();$("#goRightBut").hide();if (iT!=0){$("#goLeftBut").show();}if (iT!=ans.length-1){$("#goRightBut").show();}}
function changeTag(des){var correct=true;for (i=0;i<actualAnswers.length; i++) {if ($("#check"+i.toString()).is(":checked")) {r_checks[iT][i]=1;if (testWords(actualAnswers[i]).substr(0, 1).localeCompare("0")==0) {correct=false};}else{r_checks[iT][i]=0;if (testWords(actualAnswers[i]).substr(0, 1).localeCompare("1")==0){correct=false};}}
if (correct){r_ans[iT]=1;}else{r_ans[iT]=0;} iT=iT+des;indexTag=r_order[iT];paintQuestion();}
function randomSort(){
}
function paintButtonTime(){if (tiTime || tiAttempts || tiScore || tiSuccesses ){clearInterval(timeInterval);}
var canvas = document.getElementById("ardoraActCanvas"); var contexto = canvas.getContext("2d");contexto.globalAlpha = 0.10;contexto.fillStyle = colorButton; contexto.fillRect(0,0,canvas.width,canvas.height);
contexto.font="14px " + fMenssage; var metricsW = contexto.measureText(textButtonTime).width; var x=(canvas.width / 2)-(metricsW / 2); var y=(canvas.height / 2); contexto.beginPath();
contexto.globalAlpha = 1; contexto.lineWidth = 2; contexto.fillStyle = colorBack; var xAnim=canvas.width/2; var wAnim=0;
interval = setInterval(function () { contexto.strokeStyle = colorText; roundedRect(contexto,xAnim,y-20,wAnim,30,5,colorBack);xAnim-=1;wAnim+=2;
if (wAnim>metricsW+30){clearInterval(interval); contexto.shadowColor = "black"; contexto.shadowBlur = 20; contexto.shadowOffsetX = 10; contexto.shadowOffsetY = 10;contexto.stroke();contexto.beginPath();
contexto.textAlign = "left"; contexto.fillStyle = colorText; contexto.fillText(textButtonTime,x,y);contexto.lineWidth = 5;contexto.stroke();}},1);
$("#ardoraActCanvas").mousedown(function(e){ if (tiTime || tiAttempts || tiScore || tiSuccesses ){ timeInterval=setInterval("paintTab()",1000); $("#ardoraActCanvas").css("cursor", "default"); $("#ardoraActCanvas").unbind("mousedown"); }});}
function isCorrect(){$.each($("audio"), function () {$(this).get(0).pause();});r_ans[iT]=1;for (i = 0; i < actualAnswers.length; i++) {if ($("#check" + i.toString()).is(":checked")) {
if (testWords(actualAnswers[i]).substr(0, 1).localeCompare("0")==0){r_ans[iT]=0;};} else {if (testWords(actualAnswers[i]).substr(0, 1).localeCompare("1")==0){r_ans[iT]=0;};}}
var correct=true;successes=0;score=0;for (i=0;i<ans.length; i++){if (r_ans[i]!=1){if (err[r_order[i]].length > 0) {messageError = err[r_order[i]];} else {messageError = messageErrorG;}
score=score-scoreDec;}else{successes++;score=score+scoreInc;}}if (successes<minSuccesses){correct=false}if (correct) {timeAct = timeAct + timeBon;$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();} else {
attempts++;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");}else{$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}else{$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ for (i = 0; i < actualAnswers.length; i++) {if (testWords(actualAnswers[i]).substr(0, 1).localeCompare("0") == 0) {$("#check" + i.toString()).prop("checked", false);}
if (testWords(actualAnswers[i]).substr(0, 1).localeCompare("1") == 0) {$("#check" + i.toString()).prop("checked", true);}}
}
function paintBack(){}
function testWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
