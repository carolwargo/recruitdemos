import { Document, Page } from "react-pdf";

const PDFViewer = () => {
  return (
    <div>
      <Document file={require("./path-to-your-pdf-file.pdf")}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
