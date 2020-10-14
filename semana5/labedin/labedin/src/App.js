import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fofinha from './imagens/fofinha.jpg'
import venda from './imagens/venda.png'
import cafe from './imagens/cafe.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
         imagem={fofinha}
          nome="Vanessa" 
          descricao="Oi, me chamo Vanessa. Sou Formada em Análise e Desenvolvimento de Sistemas. Resolvi estudar na Labenu para adquirir experiência e trabalhar a parte técnica. Na faculdade eu estudei 
          muito a parte teórica e para se desenvolver nessa área é preciso de muuuuuita prática."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={venda}
          nome="Consultora de vendas" 
          descricao="Trabalhei minha vida toda na área de vendas!" 
        />
        
        <CardGrande 
          imagem={cafe} 
          nome="Amo beber café" 
          descricao="Quem não gosta de um cafézinho não é." 
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={venda}
          email="vanessa@bol.com.br" 
          endereco="Rua das Palmeiras 250" 
        /> 

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
    </div>
  );
}

export default App;
