import { useParams } from "react-router-dom";
import CaptainLogDetail from "../Components/CaptainLogDetail";

const Show = ({ captainLog }) => {
  let { index } = useParams;

  return (
    <div>
      <section>
        <CaptainLogDetail captainLog={captainLog} index={index} />
      </section>
    </div>
  );
};
export default Show;
