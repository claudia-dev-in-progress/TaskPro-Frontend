import { RotatingLines } from 'react-loader-spinner';
import css from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="#9dc888"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;