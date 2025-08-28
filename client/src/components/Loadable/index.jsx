import { Suspense } from "react";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<p>loading ...</p>}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
