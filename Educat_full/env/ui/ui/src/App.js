import React, { Component } from 'react';
import Question from './Question';
import './index.css';



class App extends Component {
  render() {
    return (
      <body >
     <div class="teste">
       <div class="pag"> 
     
        <h3  >What is Lorem Ipsum? </h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum 
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
        </p>
        <h3  >What is Lorem Ipsum? </h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy 
          text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
        </p>
        <h3  >What is Lorem Ipsum? </h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply 
          dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
        </p>
         <h3  >What is Lorem Ipsum? </h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply 
          dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
           since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
       </p>
        </div>
     </div>
     <div class="contato">
       <h4>Não encontrou o que procurava?</h4><hr></hr>
          <p>Encie-nos sua dúvida por WhatsApp</p>

          <h5><span>W</span> +55 5266288039 </h5>
    </div>

    <div class="aj">
        <h4>Ajuda</h4><hr></hr>  
     </div>

    <form>
       <div class="formgroup">
          <input  type="text" placeholder="Nome" class="fm" /><br></br>
          <input  type="text" placeholder="Assunto" class="fm" />
       </div>
       <div class="formgroup-2">
          <input  type="text" placeholder="Sobrenome" class="fm-2" /><br></br>
          <input  type="email" placeholder="Email"   class="fm-2" />
       </div>
           <textarea rows="4" cols="50"></textarea>
           <input type="submit" class="btn" value="Enviar"/>
    </form>
        
        <div id="esp"></div>
      
     </body>
    );
  }
}



export default App;
