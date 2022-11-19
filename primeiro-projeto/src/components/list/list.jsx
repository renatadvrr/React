import Card from "../Card/card";

const List = () => {
 const users = [
  {
   name: "Renata",
   idade: 29,
   apelido: "Hinata",
  },
  {
   name: "mariana",
   idade: 24,
   apelido: "Yoda",
  },
  {
   name: "jullia",
   idade: 19,
   apelido: "linguiça",
  },
  {
   name: "jao",
   idade: 28,
   apelido: "feijao",
  },
 ];
 return (
  <ul>
   {users.map((user, index) => (

    <Card key={index} {...user} />
   ))}
   {/* {users.map((user) => {
    return (
     <li>
      {user.apelido} - {user.idade} - {user.name}
     </li>
    );
   })} */}
  </ul>
 );
};

export default List;
