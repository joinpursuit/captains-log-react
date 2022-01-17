import './SingleButton.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SingleButton = ({ buttonData }) => {
  const { index } = useParams();
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const linkURL =
    buttonData === 'Edit'
      ? '/logs/' + index + '/edit'
      : buttonData === 'Back'
      ? '/logs'
      : '';

  const handleBack = () => {
    navigate('/logs');
  };

  const handleEdit = () => {
    navigate('/logs/' + index + '/edit');
  };

  const handleDelete = () => {
    const deletePost = async () => {
      await axios.delete(URL + '/logs/' + index);
    };
    deletePost();
    navigate('/logs');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const resultButton =
    buttonData === 'Submit' ? (
      <button type="submit" className="SingleButton">
        Submit
      </button>
    ) : (
      <button
        className="SingleButton"
        type={buttonData === 'Submit' ? 'submit' : 'button'}
        onClick={
          buttonData === 'Back'
            ? handleBack
            : buttonData === 'Edit'
            ? handleEdit
            : buttonData === 'Delete'
            ? handleDelete
            : ''
        }
      >
        <a href={linkURL}>{buttonData}</a>
      </button>
    );

  return resultButton;
};

export default SingleButton;
