var moueEvent = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = document.getElementById("color");
var radius = document.getElementById("radius");
var width = document.getElementById("width_of_line");
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_event = "mouseUP";
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;
}

function my_mousemove(e) {
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;


        console.log("Last position of X and Y coordinates are");
        console.log("X=" + last_position_of_x + "Y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Last current of X and Y coordinates are");
        console.log("X=" + current_position_of_mouse_X + "Y=" + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y);
        ctx.stroke();

        last_position_of_x=current_position_of_mouse_X;
        last_position_of_y=current_position_of_mouse_Y;

    }

}