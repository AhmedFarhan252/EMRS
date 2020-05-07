import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import "../css/records-styles.css";
import pdfIcon from "../../img/pdfIcon.svg";

class DocView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      patName: "",
      docName: "",
      dob: "",
      gender: "",
      date: "",
      prescription: "",
      observation: "",
      private_note: "",
      disease: [],
    };
  }

  getRecord() {
    const id = this.state.id;
    if (id !== -1) {
      axios
        .post("/doctor/records/", {
          rid: id,
        })
        .then((result) => {
          const {
            date,
            doc_fname,
            doc_lname,
            dob,
            gender,
            id,
            observation,
            pat_fname,
            pat_lname,
            prescription,
            private_note,
          } = result.data.res.data;

          const docName = doc_fname + " " + doc_lname;
          const patName = pat_fname + " " + pat_lname;
          const diseases = result.data.res.diseases.map(
            (element) => element.disease
          );

          this.setState({
            id: id,
            patName: patName,
            docName: docName,
            dob: dob,
            gender: gender,
            date: date,
            prescription: prescription,
            observation: observation,
            private_note: private_note,
            disease: diseases,
          });
        });
    }
  }

  componentDidMount() {
    if (this.props.location.state) {
      const { id } = this.props.location.state;
      this.setState({ id: id }, () => {
        this.getRecord();
      });
    } else {
      this.setState({ id: -1 });
    }
  }

  render() {
    if (this.state.id === -1) {
      return <Redirect to="/d/records" />;
    }
    const HeadingStyle1 = {
      fontWeight: "bold",
      fontVariant: "small-caps",
      marginRight: "7%",
      fontSize: "170%",
    };
    const HeadingStyle2 = {
      fontWeight: "bold",
      fontVariant: "small-caps",
      marginLeft: "28%",
      fontSize: "170%",
    };
    const InfoStyle = {
      fontWeight: 500,
      fontSize: "130%",
    };
    const FlexStyle1 = {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "3%",
    };
    const FlexStyle2 = {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: "4%",
      marginLeft: "7%",
    };
    const FlexStyle3 = {
      display: "flex",
      justifyContent: "flex-start",
      width: "75%",
      marginTop: "2%",
      marginLeft: "12.8%",
    };
    const FlexStyle4 = {
      display: "flex",
      justifyContent: "space-evenly",
      width: "80%",
      marginLeft: "5%",
      marginTop: "6%",
    };
    const CardStyle = {
      width: "22%",
      padding: "3.5% 1%",
      marginTop: "1.5%",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    };
    const ScrollBar = {
      overflowY: "scroll",
      height: "100px",
      padding: "1rem",
      resize: "none",
    };
    const pdfBtn = {
      width: "100%",
      height: "100%",
      backgroundColor: "Transparent",
      textAlign: "center",
      textDecoration: "none",
      border: "none",
    };
    const linkStyle = {
      width: "5%",
      height: "5%",
    };

    const {
      id,
      patName,
      docName,
      dob,
      gender,
      date,
      prescription,
      observation,
      private_note,
      disease,
    } = this.state;

    return (
      <div>
        <div style={FlexStyle1}>
          <h1 style={HeadingStyle1}>Medical Record #{id}</h1>
          <h1 style={HeadingStyle2}>Date : {date}</h1>
          <Link
            to={{
              pathname: "pdf",
              state: {
                data: this.state,
              },
            }}
            style={linkStyle}
          >
            <button style={pdfBtn}>
              <img src={pdfIcon} alt="pdf Icon" />
            </button>
          </Link>
        </div>
        <div className="flex-container" style={FlexStyle2}>
          <div className="col-2" style={InfoStyle}>
            {patName}
          </div>
          <div className="col-2" style={InfoStyle}>
            {dob}
          </div>
          <div className="col-2" style={InfoStyle}>
            {gender}
          </div>
          <div className="col-3" style={InfoStyle}>
            {docName}
          </div>
        </div>
        <div className="flex-container" style={FlexStyle3}>
          <div className="LabelStyle" style={{ flexGrow: 0.275 }}>
            Name
          </div>
          <div className="LabelStyle" style={{ flexGrow: 0.287 }}>
            DOB
          </div>
          <div className="LabelStyle" style={{ flexGrow: 0.262 }}>
            Gender
          </div>
          <div className="LabelStyle">Doctor</div>
        </div>
        <div className="flex-container" style={FlexStyle4}>
          <div className="card" style={CardStyle}>
            <h4 style={{ marginBottom: "7%" }}>Prescription</h4>
            <textarea readOnly={true} value={prescription} style={ScrollBar} />
          </div>
          <div className="card" style={CardStyle}>
            <h4 style={{ marginBottom: "5%" }}>Observations</h4>
            <textarea readOnly={true} value={observation} style={ScrollBar} />
          </div>
          <div className="card" style={CardStyle}>
            <h4 style={{ marginBottom: "5%" }}>Private Notes</h4>
            <textarea readOnly={true} value={private_note} style={ScrollBar} />
          </div>
          <div className="card" style={CardStyle}>
            <h4 style={{ marginBottom: "5%" }}>Disease(s)</h4>
            <ul style={ScrollBar}>
              {disease.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DocView;
