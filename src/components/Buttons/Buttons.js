import './Buttons.css';
import SingleButton from '../SingleButton/SingleButton';

const Buttons = () => {
  const buttonsNeeded = ['Back', 'Edit', 'Delete'];
  const allButtons = buttonsNeeded.map((button, i) => (
    <SingleButton key = {i.toString()} buttonData={button} />
  ));
  return <div className="Buttons">{allButtons}</div>;
};

export default Buttons;