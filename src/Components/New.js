const New = () => {
  const form = () => {
    return (
      <div>
        <h1>Add Log</h1>
        <form>
          <input type="text"/>
          <input type="text"> Title: </input>
          <input type="text"> Post: </input>
          <input type="text"> Mistakes Were Made Today: </input>
          <input type="number"> Days Since Last Crisis: </input>
        </form>
      </div>
    );
  };

  return form ;
};

export default New;
