import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import DisList from "./DisList";
import "../css/records-styles.css";

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pat_id: 0,
      patName: "",
      docName: "",
      dob: "",
      gender: "",
      today: "",
      prescription: "",
      observations: "",
      priv_notes: "",
      diseases: [],
      diseaseList: [],
      loading: true,
      redirect: false,
    };
  }

  //Gets patient + user data from server and sets today's date as well
  getInformation() {
    axios
      .post("/doctor/recordinfo", { pat_id: this.state.pat_id })
      .then((res) => {
        const response = res.data.data;

        //set diseases list
        let disList = [];
        response.diseases.map((e) => {
          return disList.push(Object.values(e)[0]);
        });

        //set patient info
        const { pat_fname, pat_lname, gender, dob } = response.pat;
        const patName = pat_fname + " " + pat_lname;

        //set doctor info
        const { doc_fname, doc_lname } = response.doc;
        const docName = doc_fname + " " + doc_lname;

        //set date
        let present = new Date();
        const year = present.getFullYear();
        let month = present.getMonth();
        let date = present.getDate();

        if (month < 10) {
          month = "0" + month;
        }

        if (date < 10) {
          date = "0" + date;
        }

        const today = year + "-" + month + "-" + date;

        //Update state
        this.setState({
          diseaseList: disList.sort(),
          patName: patName,
          docName: docName,
          dob: dob,
          gender: gender,
          today: today,
          loading: false,
        });
      });
  }

  //updates the diseases that were selected
  updateDiseases = (selections) => {
    const dis = [];
    selections.forEach((v) => dis.push(v.value));
    this.setState({ diseases: dis });
  };

  componentDidMount() {
    if (this.props.location.state) {
      const { id } = this.props.location.state;
      this.setState({ pat_id: id }, () => {
        this.getInformation();
      });
    } else {
      this.setState({ pat_id: -1 });
    }
  }

  InputHandle = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  //Send data to router on submit
  ClickHandle = (e) => {
    e.preventDefault();

    axios
      .post("/doctor/newrecord", {
        date: this.state.today,
        observation: this.state.observations,
        prescription: this.state.prescription,
        private_note: this.state.priv_notes,
        pat_id: this.state.pat_id,
        disease: this.state.diseases,
      })
      .then((res) => {
        this.setState({ redirect: true });
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/d/patList" />;
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
      marginTop: "3%",
      marginLeft: "8%",
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
      justifyContent: "space-around",
      width: "100%",
      //   marginLeft: "5%",
      //   marginTop: "6%",
      margin: "6% auto",
    };
    const CardStyle = {
      width: "22%",
      textAlign: "center",
      paddingRight: "0.5%",
      paddingLeft: "0.5%",
      paddingBottom: "5%",
      marginTop: "1.5%",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    };
    const ScrollBar = {
      overflowY: "scroll",
      height: "100px",
      padding: "1rem",
      resize: "none",
    };
    const DiseaseListStyle = {
      width: "22%",
    };

    return (
      <div>
        <div className="flex-container" style={FlexStyle1}>
          <h1 className="col" style={HeadingStyle1}>
            Medical Record
          </h1>
          <h1 className="col" style={HeadingStyle2}>
            Date : {this.state.today}
          </h1>
        </div>
        <div className="flex-container" style={FlexStyle2}>
          <div className="col-2" style={InfoStyle}>
            {this.state.patName}
          </div>
          <div className="col-2" style={InfoStyle}>
            {this.state.dob}
          </div>
          <div className="col-2" style={InfoStyle}>
            {this.state.gender}
          </div>
          <div className="col-3" style={InfoStyle}>
            {this.state.docName}
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
            <h4 style={{ marginBottom: "5%" }}>Prescription</h4>
            <textarea
              className="txtarea"
              style={ScrollBar}
              id="prescription"
              onChange={this.InputHandle}
            ></textarea>
          </div>
          <div className="card" style={CardStyle}>
            <h4 style={{ marginBottom: "5%" }}>Observations</h4>
            <textarea
              className="txtarea"
              style={ScrollBar}
              id="observations"
              onChange={this.InputHandle}
            ></textarea>
          </div>
          <div className="card" style={CardStyle}>
            <h4 style={{ marginBottom: "5%" }}>Private Notes</h4>
            <textarea
              className="txtarea"
              style={ScrollBar}
              id="priv_notes"
              onChange={this.InputHandle}
            ></textarea>
          </div>
          <div style={DiseaseListStyle}>
            <h4 style={{ marginBottom: "5%" }}>Disease(s)</h4>
            <DisList
              diseases={this.state.diseaseList}
              loading={this.state.loading}
              updateDiseases={this.updateDiseases}
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{ marginLeft: "5%" }}
          onClick={this.ClickHandle}
        >
          Add
        </button>
      </div>
    );
  }
}

export default Add;
