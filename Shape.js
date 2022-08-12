function drawSnake(){
  canvas.fillStyle = "white";
  canvas.fillRect(0, 0, 300, 350);

  for(var i = 0; i < snake.length; i++){
    canvas.fillStyle = snake[i].color;
    canvas.fillRect(snake[i].x, snake[i].y, snake[i].width, snake[i].height);
  }
}

function addressSnake(evento){
  for(var k = 0; k < key.length; k++){
    if(evento.keyCode == key[k]){
      tecla = parseInt(evento.keyCode);
      teclaPress = 1;

      if(tecla == 40 && teclaUsada == 38){
        tecla = 38;
        teclaPress = 0;
      }else if(tecla == 38 && teclaUsada == 40){
        tecla = 40;
        teclaPress = 0;
      }else if(tecla == 37 && teclaUsada == 39){
        tecla = 39;
        teclaPress = 0;
      }else if(tecla == 39 && teclaUsada == 37){
        tecla = 37;
        teclaPress = 0;
      }else if(tecla == 37 && teclaUsada == null){
        tecla = 39;
        teclaPress = 0;
      }

      break;
    }else if(teclaUsada != null){
      tecla = teclaUsada;
    }else{
      tecla = null;
    }
  }
}

function addressSnake(evento){
  for(var k = 0; k < key.length; k++){
    if(evento.keyCode == key[k]){
      tecla = parseInt(evento.keyCode);
      teclaPress = 1;

      if(tecla == 40 && teclaUsada == 38){
        tecla = 38;
        teclaPress = 0;
      }else if(tecla == 38 && teclaUsada == 40){
        tecla = 40;
        teclaPress = 0;
      }else if(tecla == 37 && teclaUsada == 39){
        tecla = 39;
        teclaPress = 0;
      }else if(tecla == 39 && teclaUsada == 37){
        tecla = 37;
        teclaPress = 0;
      }else if(tecla == 37 && teclaUsada == null){
        tecla = 39;
        teclaPress = 0;
      }

      break;
    }else if(teclaUsada != null){
      tecla = teclaUsada;
    }else{
      tecla = null;
    }
  }
}

function Direccion(direccion){
  //guarda la posicion anterior de la serpiente
  for(var e = 0; e < snake.length; e++){
    if(Cen[e] != null){
      Cen[e].x = snake[e].x;
      Cen[e].y = snake[e].y;
    }else {
      Cen.push({
        x: snake[e].x,
        y: snake[e].y
      })
    }
  }

  switch (direccion) {
    case 38:
      //Movimiento cabeza hacia arriba.
      if(snake[0].y > 0){
        snake[0].y -= 6;
      }else{
        snake[0].y = 294;
      }
      
      teclaUsada = 38;
      break;
    case 40:
      //Movimiento cabeza hacia abajo.
      
      if(snake[0].y < 294){
        snake[0].y += 6;
      }else{
        snake[0].y = 0;
      }
      teclaUsada = 40;
      break;
    case 39:
      //Movimiento cabeza hacia derecha.
      
      if(snake[0].x < 294){
        snake[0].x += 6;
      }else{
        snake[0].x = 0
      }
      teclaUsada = 39;
      break;
    case 37:
      //Movimiento cabeza hacia izquierda.
      
      if(snake[0].x > 0){
        snake[0].x -= 6;
      }else{
        snake[0].x = 294
      }
      teclaUsada = 37;
      break;
    default:
      
      if(snake[0].x < 294){
        snake[0].x += 6;
        
      }else{
        snake[0].x = 0;
      }

      break;
  }

  for(var i = 1; i < snake.length; i++){
    //cambia el valor de las partes de la serpiente al valor anterior de la parte de delante.
    snake[i].x = Cen[i-1].x;
    snake[i].y = Cen[i-1].y;
  }
}

function growUpSnake(){
  snake.push({
    name: "cola",
    x: Cen[Cen.length-1].x, y: Cen[Cen.length-1].y,
    width: 6, height: 6,
    color: "green"
  })
}



//Inicio Manzana
function random(min, max){
    return Math.ceil(Math.floor((Math.random() * (max - min + 1)) + min)/6)*6;
}

function drawApple(){
  if(apple.x == 300){
    apple.x = apple.x - 6;
  }else if(apple.y == 300){
    apple.y = apple.y - 6;
  }
    canvas.fillStyle = "red";
    canvas.fillRect(apple.x, apple.y, 6, 6);
}

function colisionApple(){
  var pointCSnake = {
    x: snake[0].x + 3,
    y: snake[0].y + 3
  }
  var pointCApple = {
    x: apple.x + 3,
    y: apple.y + 3
  }

  if(snake[1].width != 6){
    var pointCSCuello = {
      x: snake[1].x + 3,
      y: (snake[1].y) + 3
    }
  }else{
    var pointCSCuello = {
      x: (snake[1].x) + 3,
      y: snake[1].y + 3
    }
  }

  if(pointCSnake.x == pointCApple.x && pointCSnake.y == pointCApple.y){
    return true;
  }else if(pointCSCuello.x == pointCApple.x && pointCSCuello.y == pointCApple.y){
    return true;
  }else{
    return false;
  }
}

function aleatoreApple(){
  if(colisionApple()){
    canvas.clearRect(apple.x, apple.y, 6, 6);
    growUpSnake();
    puntuacion = puntuacion + 3;
    drawScore();
    apple.x = random(0, 300);
    apple.y = random(0,300);
  }
}
//fin manzana

function contador(){
  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(180, 312, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(186, 309, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(198, 312, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(186, 324, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(180, 327, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(186, 339, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(198, 327, 6, 12);

  //2

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(210, 312, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(216, 309, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(228, 312, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(216, 324, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(210, 327, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(216, 339, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(228, 327, 6, 12);

  //3
  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(240, 312, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(246, 309, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(258, 312, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(246, 324, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(240, 327, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(246, 339, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(258, 327, 6, 12);

  //4 
  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(270, 312, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(276, 309, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(288, 312, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(276, 324, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(270, 327, 6, 12);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(276, 339, 12, 3);

  canvas.fillStyle = "#f7f7f7";
  canvas.fillRect(288, 327, 6, 12);
}

function drawScore(){
  miles = Math.trunc(puntuacion / 1000);
  resDesc = puntuacion - (miles * 1000);
  centenas = Math.trunc(resDesc / 100);
  resDesc = resDesc - (centenas * 100);
  decenas = Math.trunc(resDesc / 10);
  unidad = resDesc - (decenas * 10);

  Control[0] = unidad;
  Control[1] = decenas;
  Control[2] = centenas;
  Control[3] = miles;

  if(puntuacion < 10){

    Coordenadas(Control[0], 288, 276, 270);

  }else if(puntuacion < 100){

    Coordenadas(Control[0], 288, 276, 270);
    Coordenadas(Control[1], 258, 246, 240);

  }else if(puntuacion < 1000){

    Coordenadas(Control[0], 288, 276, 270);
    Coordenadas(Control[1], 258, 246, 240);
    Coordenadas(Control[2], 228, 216, 210);

  }else if(puntuacion < 10000){

    Coordenadas(Control[0], 288, 276, 270);
    Coordenadas(Control[1], 258, 246, 240);
    Coordenadas(Control[2], 228, 216, 210);
    Coordenadas(Control[3], 198, 186, 180);

  }
  
}

function Coordenadas(Control, x1, x2, x3){
  switch (Control) {
    case 0:
      canvas.fillStyle = "black";
      canvas.fillRect(x3, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 309, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x3, 327, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 339, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 327, 6, 12);
      break;
    case 1:
      canvas.fillStyle = "black";
      canvas.fillRect(x1, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 327, 6, 12);
      break;
    case 2:
      canvas.fillStyle = "black";
      canvas.fillRect(x2, 309, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 324, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x3, 327, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 339, 12, 3);
      break;
    case 3:
      canvas.fillStyle = "black";
      canvas.fillRect(x2, 309, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 324, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 339, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 327, 6, 12);
      break;
    case 4: 
      canvas.fillStyle = "black";
      canvas.fillRect(x3, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 324, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 327, 6, 12);
      break;
    case 5:
      canvas.fillStyle = "black";
      canvas.fillRect(x3, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 309, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 324, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 339, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 327, 6, 12);
      break;
    case 6:
      canvas.fillStyle = "black";
      canvas.fillRect(x3, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 309, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 324, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x3, 327, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 339, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 327, 6, 12);
      break;
    case 7:
      canvas.fillStyle = "black";
      canvas.fillRect(x2, 309, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 327, 6, 12);
      break;
    case 8:
      canvas.fillStyle = "black";
      canvas.fillRect(x3, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 309, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 324, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x3, 327, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 339, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 327, 6, 12);
      break;
    case 9:
      canvas.fillStyle = "black";
      canvas.fillRect(x3, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 309, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 312, 6, 12);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 324, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x2, 339, 12, 3);

      canvas.fillStyle = "black";
      canvas.fillRect(x1, 327, 6, 12);
      break;
    default:
      break;
  }
}
//animacion de muerte

function animMuerte(){
  for(var i = 1; i < snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
      ubCM = i;
      colisionMuerte = 1;
      canvas.fillStyle = snake[0].color;
      canvas.fillRect(snake[0].x, snake[0].y, snake[0].width, snake[0].height);
      break;
    }
  }
}

function desaparecer(){
  for(var i = 0; i < snake.length; i++){
      canvas.fillStyle = "white";
      canvas.fillRect(snake[i].x, snake[i].y, snake[i].width, snake[i].height);
  }
}

function reaparecer(){
  for(var i = 0; i < snake.length; i++){
      canvas.fillStyle = snake[i].color;
      canvas.fillRect(snake[i].x, snake[i].y, snake[i].width, snake[i].height);
      canvas.fillStyle = snake[0].color;
      canvas.fillRect(snake[0].x, snake[0].y, snake[0].width, snake[0].height);
  }
}

function finMuerte(){
  if(contrPSD >= 0){
    if(contrPSD != ubCM){
      canvas.fillStyle = "white";
      canvas.fillRect(snake[contrPSD].x, snake[contrPSD].y, snake[contrPSD].width, snake[contrPSD].height);
      contrPSD = contrPSD - 1;
      setTimeout(finMuerte, 100);
    }else{
      contrPSD = contrPSD - 1;
      setTimeout(finMuerte, 100);
    }
  }
  
}

function loop(){
  if(contrAnimM < 3){
    setTimeout(desaparecer, 100);
    setTimeout(reaparecer, 200);
    setTimeout(loop, 300);
    contrAnimM = contrAnimM + 1;
  }else{
    finMuerte();
    canvas.fillStyle = "white";
    canvas.fillRect(apple.x, apple.y, 6, 6);
  }

}
//inicio animacion juego
function animGame(){
    if(colisionMuerte == 0){
      aleatoreApple();
      document.addEventListener("keydown", addressSnake);
      Direccion(tecla);
      drawSnake();
      drawApple();
      animMuerte();
      contador();
      drawScore();
      
      contrPSD = snake.length - 1;
      canvas.beginPath();
      canvas.strokeStyle = "black";
      canvas.moveTo(0, 0);
      canvas.lineTo(300, 0);
      canvas.stroke();
      canvas.clossPath;

      canvas.beginPath();
      canvas.strokeStyle = "black";
      canvas.moveTo(300, 0);
      canvas.lineTo(300, 300);
      canvas.stroke();
      canvas.clossPath;

      canvas.beginPath();
      canvas.strokeStyle = "black";
      canvas.moveTo(300, 300);
      canvas.lineTo(0, 300);
      canvas.stroke();
      canvas.clossPath;

      canvas.beginPath();
      canvas.strokeStyle = "black";
      canvas.moveTo(0, 300);
      canvas.lineTo(0, 0);
      canvas.stroke();
      canvas.clossPath;

      canvas.beginPath();
      canvas.strokeStyle = "black";
      canvas.moveTo(176, 300);
      canvas.lineTo(176, 350);
      canvas.stroke();
      canvas.clossPath;

      canvas.beginPath();
      canvas.strokeStyle = "black";
      canvas.moveTo(176, 350);
      canvas.lineTo(300, 350);
      canvas.stroke();
      canvas.clossPath;

      canvas.beginPath();
      canvas.strokeStyle = "black";
      canvas.moveTo(300, 350);
      canvas.lineTo(300, 300);
      canvas.stroke();
      canvas.clossPath;
      setTimeout(animGame, 100);
    }else{
      loop();
    }
}
//fin animacion juego

var containerCanvas = document.getElementById("canvasShape");
var canvas = containerCanvas.getContext("2d");
var snake = [];
var key = [38, 40, 37, 39]; //UP, DOWN, LEFT, RIGHT
var tecla;
var teclaUsada;
var teclaPress = 0;
var colisionMuerte = 0;
var contrAnimM = 0;
var contrPSD = 0;
var ubCM = 0;
var puntuacion = 0;
var Cen = [];
var resDesc = 0;
var unidad = 0;
var centenas = 0;
var decenas = 0;
var miles = 0;
var Control = [];

Cen.push({
  x: 0, y:0
})

snake.push({
  name: "cabeza",
  x: 144, y: 150,
  width: 6, height: 6,
  color: "#052400",
  locate: "derecha"
})

snake.push({
  name: "cuello",
  x: snake[0].x - 6, y: snake[0].y,
  width: 6, height: 6,
  color: "#052400",
  locate: "derecha"
})

snake.push({
  name: "cuerpo",
  x: snake[1].x - 6, y: snake[1].y,
  width: 6, height: 6,
  color: "green",
  locate: "derecha"
})

snake.push({
  name: "cola",
  x: snake[2].x - 6, y: snake[2].y,
  width: 6, height: 6,
  color: "green",
  locate: "derecha"
})


var apple = {
  COLOR: "red",
  x: random(0, 300),
  y: random(0, 300),
  width: 6, height: 6
}
animGame();
