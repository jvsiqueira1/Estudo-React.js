import Item from "./Item";

function List() {
  return (
    <>
      <h1>MINHA LISTA</h1>
      <ul>
        <Item marca="Ferrari" />
        <Item marca="Fiat" />
        <Item marca="Volkswagen" />
      </ul>
    </>
  );
}

export default List;
