import LogDetails from "../Components/LogDetails";

const Show = ({ deleteLog }) => {
  return (
    <section>
      <h1>Show</h1>
      <LogDetails deleteLog={deleteLog}/>
    </section>
  );
};

export default Show;
