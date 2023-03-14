import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="wrapper">
      <Oval
        height={80}
        width={80}
        color="#080807"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#c9202c"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
