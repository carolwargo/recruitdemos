import React from "react";
import { InView } from "react-intersection-observer";
import PDFViewer from "../../components/DemoDownloads/PDFViewer";

  const PlayerDownloads = () => {
    return (
      <div>
        <div className="page-container ">
          {/* Page Content */}
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`
              ${inView ? "animate-fade-in" : ""}`}
                id="downloads-page"
              >
                <PDFViewer />
              </div>
            )}
          </InView>
          {/* END PAGE CONTENT */}
        </div>
      </div>
    );
  };
  
  export default PlayerDownloads;
