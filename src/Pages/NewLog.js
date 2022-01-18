import LogNewForm from "../Components/LogNewForm";

const NewLog = () => {
  return (
    <div className="NewLog container p-5 my-5 bg-dark text-white text-center rounded">
      <h2>Captain's Log</h2>
      <LogNewForm />
    </div>
  );
}

export default NewLog;
