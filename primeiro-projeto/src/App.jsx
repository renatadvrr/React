import Input from "./components/input/index";
import Card from "./components/Card";

import { MdEmail } from "react-icons/md";
import GlobalStyles from "./styles/GlobalStyles";

// import teste1 from "";
// import teste2 from "./assets/teste2.jpg";
// import teste3 from "./assets/teste3.jpg";
// import teste4 from "./assets/teste4.jpg";
// import teste5 from "./assets/teste5.jpg";

function App() {
 return (
  <div>
   <GlobalStyles />

   <Input label="Nome:" id="name" type="text" name="name"></Input>
   <Input label="Email:" id="email" type="email" name="email">
    <MdEmail></MdEmail>
   </Input>
   <Input
    label="Password:"
    id="password"
    type="password"
    name="password"
   ></Input>
  </div>
 );
}

export default App;
