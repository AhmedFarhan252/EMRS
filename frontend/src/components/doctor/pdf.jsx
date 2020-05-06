import React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

class Pdf extends React.Component {
  exportPdf = () => {
    this.pdf.save();
  };

  render() {
    const pageStyle = {
      height: "100vh",
      width: "100vw",
      backgroundColor: "#808080",
    };
    const pdfStyle = {
      height: "660px",
      width: "595px",
      padding: "none",
      backgroundColor: "#ffffff",
      boxShadow: "2px 2px 6px #5a5a5a",
      margin: "auto",
      overflowX: "hidden",
      overflowY: "hidden",
    };
    const downloadBtn = {
      marginTop: "1%",
      marginBottom: "0.5%",
      textAlign: "center",
      boxShadow: "2px 2px 6px #5a5a5a",
    };
    const pageTitle = {
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: "5%",
    };
    const SubtitleRowStyle = {
      display: "flex",
      justifyContent: "space-between",
      margin: "3% 1%",
    };
    const Subtitles = {
      display: "inline",
    };
    const ContentStyle = {
      margin: "4% 1%",
    };
    const {
      id,
      date,
      gender,
      dob,
      docName,
      patName,
      observation,
      prescription,
      disease,
      private_note,
    } = this.props.location.state.data;
    return (
      <div style={pageStyle}>
        <div style={{ textAlign: "center" }}>
          <button
            className="btn btn-primary"
            style={downloadBtn}
            onClick={this.exportPdf}
          >
            Download
          </button>
        </div>
        <PDFExport
          paperSize={"A4"}
          fileName="Report.pdf"
          title=""
          subject=""
          keywords=""
          ref={(r) => (this.pdf = r)}
        >
          <div style={pdfStyle}>
            <h2 style={pageTitle}>{"Record #" + id}</h2>
            <div style={SubtitleRowStyle}>
              <div>
                <h5 style={Subtitles}>Doctor: </h5>
                <span>{docName}</span>
              </div>
              <div>
                <h5 style={Subtitles}>Date: </h5>
                <span>{date}</span>
              </div>
            </div>

            <div style={SubtitleRowStyle}>
              <div>
                <h5 style={Subtitles}>Patient: </h5>
                <span>{patName}</span>
              </div>
              <div>
                <h5 style={Subtitles}>DOB: </h5>
                <span>{dob}</span>
              </div>
              <div>
                <h5 style={Subtitles}>Gender: </h5>
                <span>{gender}</span>
              </div>
            </div>
            <div style={ContentStyle}>
              <h4>Prescription</h4>
              <span>{prescription}</span>
            </div>
            <div style={ContentStyle}>
              <h4>Observation</h4>
              <p>{observation}</p>
            </div>
            <div style={ContentStyle}>
              <h4>Private Notes</h4>
              <p>{private_note}</p>
            </div>
            <div style={ContentStyle}>
              <h4>Diseases</h4>
              {disease.map((d, i) => {
                return <div key={i}>{d}</div>;
              })}
            </div>
          </div>
        </PDFExport>
      </div>
    );
  }
}

export default Pdf;
