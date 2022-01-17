import './Buttons.css';
import SingleButton from '../SingleButton/SingleButton';

const Buttons = (props) => {
  const buttonsNeeded = props.buttonsNeeded || ['Back', 'Edit', 'Delete'];
  const allButtons = buttonsNeeded.map((button) => (
    <SingleButton buttonData={button} />
  ));
  return <div className="Buttons">{allButtons}</div>;
};

export default Buttons;
