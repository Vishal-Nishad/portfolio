import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "auto"
          }}
        />
      </Suspense>
    );
  }
}