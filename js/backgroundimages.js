$(document).ready(function(){
	var bgArray = [
        [ 'bg_image_1', 'center top'],
        [ 'bg_image_2', 'center center'],
        [ 'bg_image_3', 'center center'],
        [ 'bg_image_4', 'center bottom'],
        [ 'bg_image_5', 'center center'],
        [ 'bg_image_6', 'center bottom'],
        [ 'bg_image_7', 'center top'],
        [ 'bg_image_8', 'center center'],
        [ 'bg_image_9', 'center bottom'],
        [ 'bg_image_10', 'center center'],
        [ 'bg_image_11', 'center top'],
        [ 'bg_image_12', 'center center'],
        [ 'bg_image_13', 'center bottom'],
        [ 'bg_image_14', 'center center'],
         [ 'bg_image_15', 'center top']
            ];
    var i = Math.floor(Math.random() * bgArray.length);
    var bg = bgArray[i][0];
    var cls = bgArray[i][1];
    
  var path = './img/';

    $('body').css("background-image", "url("+ path + bg +".jpg)");
    $('body').css("background-position", cls);
	
});