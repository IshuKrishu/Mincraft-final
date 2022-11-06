

canvas=new fabric.Canvas('myCanvas');
var player_y=10;
var player_x=10;
var block_img_width=30;
var block_img_height=30;
var player_object="";
var block_img_object="";

function player_update()
{
fabric.Image.fromURL("player.png",function(Img){
 player_object=Img;
 player_object.scaleToWidth(150);
 player_object.scaleToHeight(140);
 player_object.set({
  top:player_y,
  left:player_x
 });
 canvas.add(player_object);

});
}
 
function new_img(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
  block_img_object=Img;
  block_img_object.scaleToWidth(block_img_width);
  block_img_object.scaleToHeight(block_img_height);
  block_img_object.set({
    top:player_y,
    left:player_x
   });
   canvas.add(block_img_object);
});
}

function my_keydown(e)
{
    key_pressed=e.keyCode;
    console.log(key_pressed);

    if(e.shiftKey==true && key_pressed=='80'){
      console.log("p & shif Key pressed together");
      block_img_width=block_img_width+10;
      block_img_height=block_img_height+10;
      document.getElementById("current_width").innerHTML=block_img_width;
      document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(e.shiftKey==true && key_pressed=='77'){
      console.log("m & shift Key pressed together");
      block_img_width=block_img_width-10;
      block_img_height=block_img_height-10;
      document.getElementById("current_width").innerHTML=block_img_width;
      document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(key_pressed == '30'){
     up();
     console.log("up key pressed");
    }

    if(key_pressed == '40'){
      down();
      console.log("down key pressed");
    }

    if(key_pressed == '37'){
      left();
      console.log("left key pressed");
    }

    if(key_pressed == '39'){
      right();
      console.log("right key pressed");
    }

    if(key_pressed == '87'){
       new_img('wall.jpg');
       console.log("w key pressed");
    }

    if(key_pressed == '71'){
      new_img('ground.png');
      console.log("g key pressed");
    }

    if(key_pressed == '76'){
      new_img('light_green.png');
      console.log("l key pressed");
    }

    if(key_pressed == '84'){
      new_img('trunk.jpg');
      console.log("t key pressed");
    }

    if(key_pressed == '82'){
      new_img('roof.jpg');
      console.log("r key pressed");
    }

    if(key_pressed == '89'){
      new_img('yellow_wall.png');
      console.log("y key pressed");
    }

    if(key_pressed == '68'){
      new_img('dark_green.png');
      console.log("d key pressed");
    }

    if(key_pressed == '85'){
      new_img('unique.png');
      console.log("u key pressed");
    }

    if(key_pressed == '67'){
      new_img('cloud.jpg');
      console.log("c key pressed");
    }

}



window.addEventListener("keydown",my_keydown);

function up()
{
   if(player_y >=0)
   {
    player_y=player_y-block_img_height;
    console.log("Block Image Height is : " + block_img_height);
    console.log("When Up key is pressed x= " +player_x +" ,y= " +player_y);
    canvas.remove(player_object);
    player_update();

   }

}

function down()
{
  if(player_y <=500)
  {
    player_y=player_y+block_img_height;
    console.log("Block Image Height is : " + block_img_height);
    console.log("When Up key is pressed x= " +player_x +" ,y= " +player_y);
    canvas.remove(player_object);
    player_update();
    
  }
}

function left()
{
   if(player_x >=0){
    player_x=player_x-block_img_width;
    console.log("Block Image Height is : " + block_img_height);
    console.log("When Up key is pressed x= " +player_x +" ,y= " +player_y);
    canvas.remove(player_object);
    player_update();
   }
}

function right(){
  if(player_x <=850)
  {
    player_x=player_x+block_img_width;
    console.log("Block Image Height is : " + block_img_height);
    console.log("When Up key is pressed x= " +player_x +" ,y= " +player_y);
    canvas.remove(player_object);
    player_update();
  }
}