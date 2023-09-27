//Posição e tamanho da bolinha
let xBolinha = 300
let yBolinha = 200;
let diametro = 25;
let raio = 12.5;

//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Raquete
let xRaquete = 5;
let yRaquete = 150
let RaqueteComprimento = 10;
let RaqueteAltura = 90;
  
function stup(){
  creatCanvas(600,400);
}

function draw(){
  background(0);
 mostraBolinha();
 movimentaBolinha();
 colideBorda();
 mostraRaquete();
 movimentaRaquete();
 colideRaquete();
}
//
 function mostraBolinha() {
  circle(XBolinha, YBolinha, diametro);
}
function mostraBolinha(){
  XBolinha+= VelocidadeDaBolinhaX;
  YBolinha+= VelocidadeDaBolinhaY;
}
function colideBorda(){
 if (xBolinha > width ||xBolinha < 0){
      velocidadeXBolinha *= -1;
  }
  if (yBolinha > height||yBolinha < 0 ){
      velocidadeYBolinha *= -1;
  }
}    
function mostraRaquete() {
  rect(xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura);
}
function movimentaRaquete(){
  if(KeyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
function colideRaquete() 
  if (
    XBolinha - raio < xRaquete + RaqueteComprimento &&
    YBolinha - raio < yRaquete + RaqueteAltura &&
    YBolinha + raio > yRaquete
    ) {
    VelocidadeDaBolinha
    
    
