import styled from "styled-components";

const Container = styled.div`
 height: 48px;
 position: relative;
 display: flex;
 align-items: center;

 padding: 0 15px;

 background: rgba(255, 255, 255, 0.02);
 border: 1px solid rgba(255, 255, 255, 0.2);
 border-radius: 6px;
 color: var(--color-text);

 :focus-within {
  border: 1px solid var(--color-primary);
 }

 input {
  width: 100%;
  height: 100%;
  color: var(--color-primary);
  background: none;
  border: none;
 }

 label {
  position: absolute;
  top: 0;
  left: 12px;
  height: 100%;
  display: flex;
  align-items: center;

  transition: top 0.1s, left 0.3s, ease-out;
 }

 /* input:focus + label,
  input:not(:placeholder-shown) + label{ 
   para abreviar sintaxe */
 input:is(:focus, :not(:placeholder-shown)) + label {
  top: -12px;
  left: 20px;
  height: fit-content;

  background-color: var(--color-primary);
  color: #000;
  font-size: 14px;

  padding: 2px 10px;
  border-radius: 14px;
 }

 input:focus ~ svg {
  color: var(--color-primary);
 }

 svg {
  width: 22px;
  height: 22px;
 }

 & + & {
  margin-top: 32px;
 }
`;

export default Container;
