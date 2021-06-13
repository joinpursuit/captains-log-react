import CaptainLogs from "../Components/CaptainLogs";

function Index({ captainLogs }) {
  return (
    <div className="Index">
      <CaptainLogs captainLogs={captainLogs} />
    </div>
  );
}

export default Index;
