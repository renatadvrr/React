const Imput = ({ id, label, type, name, children }) => {
 return (
  <>
   <label htmlFor="{id}">{label}</label>
   {children}
   <input type="text" name="text" id={id} />
  </>
 );
};

export default Imput;
