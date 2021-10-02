canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")


nasa_mars_images_array = ["nasa_img_1.jpg", "nasa_img_2.jpg", "nasa_img_3.jpg", "nasa_img_4.jpg"];
random_number = Math.floor(Math.random() *4);


rover_width = 100;
row_height = 90;
background_image = nasa_mars_images_array[random_number];

rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() { 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 
} 

function uploadrover() { 
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); 
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)
    if(keyPressed=="38") {
        up();
        console.log("up")
    }
    if(keyPressed=="40") {
        down();
        console.log("down")
    }
    if(keyPressed=="37") {
        left();
        console.log("left")
    }
    if(keyPressed=="39") {
        right();
        console.log("right")
    }
}
 function up() {
     if(rover_y >= 0) {
         rover_y = rover_y - 10
         console.log("When up arrow is pressed, x = " + rover_x + "y = " + rover_y);
         uploadrover()
         uploadBackground()
     }
 }

 function down() {
    if(rover_y <= 600) {
        rover_y = rover_y + 10
        console.log("When down arrow is pressed, x = " + rover_x + "y = " + rover_y);
        uploadrover()
        uploadBackground()
    }
}

function left() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10
        console.log("When left arrow is pressed, x = " + rover_x + "y = " + rover_y);
        uploadrover()
        uploadBackground()
    }
}

function right() {
    if(rover_x <= 800) {
        rover_x = rover_x + 10
        console.log("When right arrow is pressed, x = " + rover_x + "y = " + rover_y);
        uploadrover()
        uploadBackground()
    }
}

