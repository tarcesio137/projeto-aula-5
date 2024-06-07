let xCircle = 325; // coord. X do bola
let yCircle = 250; // coord. Y do bola

let diametro = 20; // diâmetro do bola
let raio = diametro/2; // raio da bola

let xvb = 5; // velocidade x da bola
let yvb = 5; // velocidade y da bola

let Xraquete = 5; // coord. X da raquete
let Yraquete = 150; // coord. Y da raquete

let Lraquete = 10; // largura raquete
let Araquete = 80; // altura raquete

let XraqueteO = 638; // coord. X da raquete do oponente
let YraqueteO = 150; // coor. Y da raquete do oponente

let meuspontos = 0; // marca meus pontos como 0 no inicio do jogo
let pontosdooponente = 0; // marca os pontos do oponente como 0 no inicio do jogo

let colidiu = false; // ESTÁ DANDO ERRO // colisão

let imagem; // apenas para deixar a imagem no background

// Cria a tela

function setup() {
  createCanvas(650, 500);
  
}

// Cria e altera o fundo

function draw() {
 image(imagem, 0, 0, 650, 500)
  
// funções que serão usadas ao longo do código
  
  mostrabola();
  mexebola();
  quicabola();
  mostraR(Xraquete, Yraquete);
  mostraR(XraqueteO, YraqueteO);
  mexeR();
  mexeRO();
  quicaRB(XraqueteO, YraqueteO);
  quicaRB(Xraquete, Yraquete);
  pontosx();
  placar();
  texto();
}

function preload(){
  imagem = loadImage("pong.jfif");
}

// Cada função é destinada para cada movimento/ação que será realizada

function mostraR(X,Y) {
    rect(X, Y, Lraquete, Araquete)
}

// Funcão que cria a bola

function mostrabola(){
  fill("white")
  circle(xCircle,yCircle,diametro);
}

// Função que move a bola

function mexebola(){
  xCircle += xvb
  yCircle += yvb
}

// Função que mexe a raquete

function mexeR() {
  if (keyIsDown(UP_ARROW))
    Yraquete -= 10;
  
  if (keyIsDown(DOWN_ARROW))
    Yraquete += 10;
}

// Função que mexe a raquete do oponente

function mexeRO(){
    if (keyIsDown(87)) //s
    YraqueteO -= 10;
  
  if (keyIsDown(83)) //w
    YraqueteO += 10;
}

// Função que faz a bola quicar nas beiradas

function quicaRB(x, y){
  colidiu = collideRectCircle(x, y, Lraquete, Araquete, xCircle, yCircle);
  
  if(colidiu){
    xvb *= -1;
  }
}

// Faz a bola quicar

function quicabola(){
      if (xCircle + raio > width || xCircle - raio < 0){
    xvb *= -1
  }
  
  if (yCircle + raio > height || yCircle - raio < 0){
    yvb *= -1
  }
}

// Altera meus pontos

  function pontosx(){
    if (xCircle > 640){
      meuspontos += 1
    }
    if (xCircle < 10){
      pontosdooponente += 1
    }
  }

// Mostra meu placar
  
  function placar(){
    stroke("black")
    textAlign(CENTER)
    textSize(20)
    fill("pink")
    rect(150, 10, 40, 20);
    fill("black");
    text(meuspontos, 170, 12.5)
    fill("pink")
    rect(430, 10, 40, 20);
    fill("black");
    text(pontosdooponente, 450, 12.5);
  }

// Mostra o texto dos pontos
    
    function texto(){
      let frase = "PONTIN DI CRIA"
      let xf = 90;
      let yf = 40;
      textSize(20);
      textAlign(LEFT, TOP);
      fill("black");
      text(frase, xf, yf);
      
// Mostra o texto dos pontos do oponente
      
      let frase2 = "PONTIN DU BESTA"
      let xf2 = 350;
      let yf2 = 40;
      textSize(20);
      textAlign(LEFT, TOP);
      fill("black");
      text(frase2, xf2, yf2);
    }