  
import Logs from "../Components/Logs";

const Index = ({ logs }) => {
  return (
    <div className='Index'>
      <h3>Index</h3>
      <Logs log={logs} />
    </div>
  );
};

export default Index;