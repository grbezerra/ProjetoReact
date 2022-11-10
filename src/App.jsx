import './App.css'
import Titulo from './Titulo'
import Subtitulo from './components/Subtitulo'
import Foto from './components/Foto'
import Imagem from './components/Imagem'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container'>
      <div className='div-card'>
        <Titulo />
        <hr /><hr />
        <br />
        <Foto />
        <hr /><hr />
        <br />
        <br />
        <Subtitulo informacao="Sem cravo ou canela, apenas Gabriela!" />
        <Subtitulo paragrafo="Oi! Sou Gabriela Ribeiro Bezerra, tenho 35 anos e nasci na cidade maravilhosa, Salvador/Bahia. Sou advogada, tecnóloga em Investigação Forense e Perícia Criminal, Empreendedora, CEO da Loja virtual Outfit Bezerra e aluna Front-End da REPROGRAMA." />
      </div>
      <br />

      <div>
        <Subtitulo informacao="Quais linguagens aprendi? " />
        <br />
        <br />
        
        <Imagem link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NGvaTUet1DCTx-zk7_Rak_ue9rr9gIEoP66leIeqy2fw4FjNskApGFIg7ZmAkfsSsyU&usqp=CAU" />
        <Subtitulo paragrafo="GIT: é um sistema de controle de versões, criado pelo mesmo desenvolvedor do linux(Linus Torvalds), usado principalmente no desenvolvimento de software para versionar código e registrar o histórico de edições dos arquivos. Com ele conseguimos desenvolver projetos colaborativos, no qual muitas pessoas podem trabalhar simultaneamente no mesmo código, adicionando e removendo conteúdos e novos arquivos. Também podemos consultar o histórico do que e quando foi modificado e até restaurar versões anteriores. Para fazer uma comparação com ferramentas que já utilizamos no dia a dia, ele é muito semelhante ao Google Drive/Docs, onde muitas pessoas podem editar arquivos e editar documentos.." />
      </div>

      <br />
      <br />

      <div>
        <Imagem link="https://github.com/grbezerra/on20-tet-s1-git-github/raw/main/imgs/gitbash.png" />
        <Subtitulo paragrafo="GIT BASH: É um software para utilizar as linhas de comando do Git além de alguns comandos Unix, necessário principalmente no Windows, já que inicialmente o Git foi desenvolvido para o Linux." />
      </div>

      <br />
      <br />

      <div>
        <Imagem link="https://apexensino.com.br/wp-content/uploads/2017/11/html-css-javascript.jpg" />
        <Subtitulo paragrafo="HTML é uma abreviação de Hyper Text Markup Language (linguagem de marcação em hipertexto). Não é uma linguagem de programação, pois não tem lógica (algoritmos, processos etc). Ele cria a estrutura de uma página ou aplicação web." />

        <Subtitulo paragrafo="CSS é abreviação de Cascading Style Sheet. É uma linguagem que define estilos para o HTML, não se tratando de linguagem de programação." />

        <Subtitulo paragrafo="JavaScript é uma linguagem de programação que permite implementar itens complexos em páginas web." />
      </div>

      <br />
      <br />

      <div>
        <Imagem link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dCG9FnTD68-8MTsO95bij5vSG4yhTGkc5A&usqp=CAU" />
        <Subtitulo paragrafo="O Web design responsivo é uma configuração em que o servidor sempre envia o mesmo código HTML a todos os dispositivos e o CSS é usado para alterar a renderização da página no dispositivo." />
      </div>
      <br />
      <br />

      <div>
        <Imagem link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8u2TegxmJuZsae8Ca-s73QokdmhrmPWJKQ&usqp=CAU" />
        <Subtitulo paragrafo="React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface)." />
      </div>
      <br />
      <br />
      <hr /><hr />
      <Footer/> <Imagem link="https://gifs.eco.br/wp-content/uploads/2021/06/gifs-de-beijo-2.gif"/><hr /><hr />
      
    </div>

    



  )
}

export default App
