import './SingleButton.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SingleButton = ({ buttonData }) => {
  const { index } = useParams();
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;

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

  return (
    <button
      className="SingleButton"
      onClick={
        buttonData === 'Back'
          ? handleBack
          : buttonData === 'Edit'
          ? handleEdit
          : handleDelete
      }
    >
      <a
        href={
          buttonData === 'Edit'
            ? '/logs/' + index + '/edit'
            : buttonData === 'Back'
            ? '/logs'
            : ''
        }
      >
        {buttonData}
      </a>
    </button>
  );
};

export default SingleButton;