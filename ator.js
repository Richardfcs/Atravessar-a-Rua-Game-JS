//código do ator

let yAtor = 366;
let xAtor = 100;
let colisao = false;
let diametro = 30
let meusPontos = 0

function mostrarAtor(){
    image(imagemDoAtor, xAtor, yAtor, diametro, diametro);
}
function movimentarAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if (podeSeMover())
    yAtor += 3;
  }
}
function verificarColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++ ){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, diametro/4);
    if (colisao){
      voltarPosicaoInicial();
      somDaColisao.play()
      if (pontosMaiorQueZero()){
              meusPontos --;
      }
    }
  }
}
function voltarPosicaoInicial(){
  yAtor = 366;
}
function incluirPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 0));
  text(meusPontos, width / 5, 27);
}
function marcarPontos(){
  if (yAtor < 15){
    meusPontos ++;
    somDoPonto.play()
    voltarPosicaoInicial();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0
}
function podeSeMover(){
  return yAtor < 366;
}