import NewLog from '../Components/NewLog'

const New = ({ addLog }) => {
  return (
    <div className='New'>
      <h2>New Log</h2>
      <NewLog addLog={addLog}/>
    </div>
  );
};

export default New;