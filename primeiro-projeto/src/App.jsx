import Imput from "./components/input/input";
import List from "./components/list/list";

function App() {
 return (
  <>
   <h1>oi</h1>

    <List></List>

   <Imput label="Nome:" id="name" type="text" name="name">
    teste
   </Imput>
   <Imput label="Email:" id="email" type="email" name="email"></Imput>
   <Imput label="Senha:" id="password" type="password" name="password"></Imput>
  </>
 );
}

export default App;
