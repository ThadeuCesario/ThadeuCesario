<h1>Fundamentos React Native</h1>
  <strong>SafeAreaView</strong>:
  <p>
    Garantimos que o conteúdo será apresentado sempre na área visível tanto do IPhone quanto do Android.
  </p>
<hr/>
  <strong>JSX</strong>:
  <p>
    Sintaxe HTML com JS, relembrando que sempre que tivermos JSX, precisamos importar o React.
  </p>
  <code>import 'React' from react;</code>
<hr/>
  <strong>Execurando Projeto</strong>:
  <p>
    <ul>
      <li>executar studio.sh</li>
      <li>executar npm start</li>
      <li>executar react-native run-android</li>
    </ul>
  </p>
<hr/>
  <strong>flex:1</strong>
  <p>
    Estamos liberando o componente para ocupar a tela inteira.
    <br/>
    Essa propriedade é muito semelhante ao "flexGrow".
  </p>
<hr/>
  <strong>Propriedades são somente leitura</strong>
  <p>
    Uma regra importante do React é que as <i>props</i> , são <strong>Somente Leitura!!!</strong>
    <br/>
    Portanto precisamos ter cuidado para não alterar diretamente esses propriedades.
    <br/>
    Caso você aplique o destructuring, funcionará normalmente a alteração dos valores de props. Então por exemplo, vamos supor que recebo dois valores pelo props:
  </p>
    <code>
      <pre>
      export default = props => {
        const {min, max} = props;
        let incrementarMin = min + 1;
        let incrementarMax = min + 1;
        return(
          < Text >{incrementarMin}< /Text >
          < Text >{incrementarMax}< /Text >
        )
      }
      </pre>
    </code>

   Veja,  que eu criei uma variável para incrementar Min e outra para incrementar Max. <br/>
   Não incrimentei diretamente o valor dele. 
   <br/>
   Em breve veremos os estados. ;D
   <hr/>
    