//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=11; attempts=0; attemptsMax=10;
var score=0; scoreMax=11; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1.¿Cuál de las siguientes opciones puedes realizar desde la pestaña Archivo?","2¿Qué recurso útil para un docente se puede agregar desde la pestaña Insertar?","3¿Qué permite realizar la pestaña Diseño en un documento?","4.¿Cómo puedes usar la pestaña Disposición para organizar una guía pedagógica?","5¿Qué herramienta de la pestaña Inicio es útil para formatear rápidamente un documento?","6 ¿Qué puedes lograr desde la pestaña Referencia para un material educativo?","7.¿Cómo puedes aprovechar la pestaña Correspondencia para un informe escolar?","8¿Qué opción de la pestaña Vista es ideal para revisar un documento antes de imprimirlo?","9 ¿Cómo puedes usar la pestaña Ayuda en Word para resolver dudas sobre herramientas?","10 ¿Qué utilidad tiene la pestaña Revisar para un docente al finalizar un documento?","10 ¿Qué utilidad tiene la pestaña Revisar para un docente al finalizar un documento?"];
var answers1=["MUd1YXJkYXIgZWwgZG9jdW1lbnRvIGVuIGRpZmVyZW50ZXMgZm9ybWF0b3Mu","MEluc2VydGFyIHVuYSB0YWJsYS4=","MENhbWJpYXIgZWwgZGlzZcOxbyBkZSBww6FnaW5hLg==","MEFwbGljYXIgZXN0aWxvcyBkZSB0ZXh0by4="];
var answers2=["MVVuIGVuY2FiZXphZG8gcGFyYSBwZXJzb25hbGl6YXIgdW4gZG9jdW1lbnRv","MENhbWJpYXIgbGEgb3JpZW50YWNpw7NuIGRlIGxhIHDDoWdpbmEu","MFJldmlzYXIgZXJyb3JlcyBvcnRvZ3LDoWZpY29zLg==","MEFqdXN0YXIgZWwgaW50ZXJsaW5lYWRvIGRlbCB0ZXh0by4="];
var answers3=["MUNhbWJpYXIgZWwgY29sb3IgZGUgZm9uZG8gZGVsIGRvY3VtZW50by4=","MENyZWFyIHVuYSB0YWJsYSBkZSBjb250ZW5pZG8gYXV0b23DoXRpY2Eu","MEluc2VydGFyIHVuYSBpbWFnZW4gcHJlZGlzZcOxYWRh","MENvbmZpZ3VyYXIgbGEgdmlzdGEgZGUgbGVjdHVyYSBkZWwgZG9jdW1lbnRvLg=="];
var answers4=["MUFqdXN0YW5kbyBsb3MgbcOhcmdlbmVzIGRlIGxhcyBww6FnaW5hcy4=","MEHDsWFkaWVuZG8gY29tZW50YXJpb3MgYWwgdGV4dG8u","MENhbWJpYW5kbyBlbCBmb3JtYXRvIGRlbCB0ZXh0by4=","MEluc2VydGFuZG8gdW5hIG51bWVyYWNpw7NuIGRlIHDDoWdpbmEu"];
var answers5=["MUFwbGljYXIgZXN0aWxvcyBwcmVkZWZpbmlkb3MgYWwgdGV4dG8u","MENhbWJpYXIgbGEgb3JpZW50YWNpw7NuIGRlIGxhcyBww6FnaW5hcy4=","MENyZWFyIHVuIGdyw6FmaWNvLg==","MENvbmZpZ3VyYXIgbGFzIHByb3BpZWRhZGVzIGRlbCBkb2N1bWVudG8u"];
var answers6=["MUluc2VydGFyIHVuYSB0YWJsYSBkZSBjb250ZW5pZG8gYXV0b23DoXRpY2FtZW50ZS4=","MENhbWJpYXIgZWwgY29sb3IgZGUgZm9uZG8gZGVsIGRvY3VtZW50by4=","MFJldmlzYXIgbGEgb3J0b2dyYWbDrWEgZGVsIHRleHRvLg==","MEluc2VydGFyIHVuYSBmb3JtYSBnZW9tw6l0cmljYS4="];
var answers7=["MUNyZWFyIHVuYSBjb21iaW5hY2nDs24gZGUgY29ycmVzcG9uZGVuY2lhIHBhcmEgY2FydGFzIHBlcnNvbmFsaXphZGFzLg==","MEFncmVnYXIgdW4gZW5jYWJlemFkbyBhIGNhZGEgcMOhZ2luYS4=","MEFqdXN0YXIgbG9zIG3DoXJnZW5lcyBkZWwgZG9jdW1lbnRv","MENhbWJpYXIgbGEgZGlzcG9zaWNpw7NuIGRlIGxhcyBjb2x1bW5hcy4="];
var answers8=["MUFjdGl2YXIgbGEgdmlzdGEgcHJlbGltaW5hciBwYXJhIHZlciBlbCBkaXNlw7FvIGZpbmFsLg==","MEFncmVnYXIgdW5hIG5vdGEgYWwgcGllIGRlIHDDoWdpbmEu","MEFqdXN0YXIgZWwgZXNwYWNpYWRvIGVudHJlIGzDrW5lYXMu","MEFwbGljYXIgdW4gdGVtYSBhbCBkb2N1bWVudG8u"];
var answers9=["MUJ1c2NhciBpbnN0cnVjY2lvbmVzIGRldGFsbGFkYXMgc29icmUgY8OzbW8gdXNhciBsYXMgZnVuY2lvbmVzIGRlIFdvcmQu","MEFqdXN0YXIgbGEgb3JpZW50YWNpw7NuIGRlIGxhcyBww6FnaW5hcy4=","MEluc2VydGFyIHVuIGdyw6FmaWNvLg==","MENhbWJpYXIgbG9zIG3DoXJnZW5lcyBkZWwgZG9jdW1lbnRvLg=="];
var answers10=["MUlkZW50aWZpY2FyIHkgY29ycmVnaXIgZXJyb3JlcyBvcnRvZ3LDoWZpY29zIHkgZ3JhbWF0aWNhbGVzLg==","MENhbWJpYXIgZWwgZGlzZcOxbyBkZSBsYSBww6FnaW5hLg==","MEluc2VydGFyIHVuYSB0YWJsYSBlbiBlbCBkb2N1bWVudG8u","MEFqdXN0YXIgbG9zIG3DoXJnZW5lcyBkZSBsYXMgcMOhZ2luYXMu"];
var answers11=["MUlkZW50aWZpY2FyIHkgY29ycmVnaXIgZXJyb3JlcyBvcnRvZ3LDoWZpY29zIHkgZ3JhbWF0aWNhbGVzLg==","MENhbWJpYXIgZWwgZGlzZcOxbyBkZSBsYSBww6FnaW5hLg==","MEluc2VydGFyIHVuYSB0YWJsYSBlbiBlbCBkb2N1bWVudG8u","MEFqdXN0YXIgbG9zIG3DoXJnZW5lcyBkZSBsYXMgcMOhZ2luYXMu"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10,answers11];
var err=["Algo salió mal","Sorry","Lo sentimos","\"¡Uy! Esa no es la correcta.","Lo sentimos, no es correcto","Lo sentimos, vulelve a intentar","Incorrecto","Es incorrecto","up, intenta de nuevo","Incorrecto","Incorrecto"];
var ima=["descarga.jpg","INICIO.jpg","INICIO.jpg","","","","","","","",""];
var mp4=["","","","","","","","","","",""];
var ogv=["","","","","","","","","","",""];
var alt=["","","","","","","","","","",""];
var info=["","","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="index_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
var r_ans=[];var r_pos=[];var r_checks=[];var minSuccesses=11;
