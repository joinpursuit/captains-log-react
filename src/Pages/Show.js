import LogDetails from "../Components/LogDetails";

const Show = ({ deleteLog }) => {
  return (
    <main>
      <h1>Show</h1>
      <LogDetails deleteLog={deleteLog}/>
    </main>
  );
};

export default Show;
