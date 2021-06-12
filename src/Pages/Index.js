import Logs from "../Components/Logs";

const Index = ({logs}) => {
  return (
    <section>
      <h2>Index</h2>
      <Logs logs={logs} />
    </section>
  );
};

export default Index;
