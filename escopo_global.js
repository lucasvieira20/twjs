var global = "eu sou global";
var globalLocal = 'eu nao sei que existe outro de mim';

function criarEscopoLocal(){
  var globalLocal = 'eu sou local';
  var local = 'eu tambem sou local';

  console.log('criarEscopoLocal() '+global);
  console.log('criarEscopoLocal() '+globalLocal);
  console.log('criarEscopoLocal() '+local);

  function criarOutroEscopoLocal(){
    console.log('criarOutroEscopoLocal() '+global);
    console.log('criarOutroEscopoLocal() '+globalLocal);
  }

  criarOutroEscopoLocal();
}

criarEscopoLocal();