import React, { Component } from "react";
import "./UpdateForm.scss";

export default class componentName extends Component {
  state = {
    identification: "",
    names: "",
    surNames: "",
    city: "",
    email: "",
    number: "",
    specialites: "",
    date: "",
    comments: "",
    state: "",
    calification: "",
    origin: ""
  };

  handleInput = (e, keyText) => {
    const value = e.target.value;
    this.setState({
      [keyText]: value,
      errorStatus: false,
      sucefullStatus: false,
      message: ""
    });
  };

  updateRow = event => {
    event.preventDefault(); //Detener la funcion por defecto
  };

  render() {
    return (
      <div className="update">
        <h3 className="update-title">Update Applicant</h3>
        <form className="update-form" onSubmit={this.updateRow}>
          <div className="form-row col-md-6">
            <label htmlFor="inputId4">Identification number</label>
            <input
              value={this.state.identification}
              type="number"
              className="form-control"
              id="inputId4"
              placeholder="Identification number"
              onChange={e => this.handleInput(e, "identification")}
            />
          </div>
          <div className="form-row col-md-6">
            <div className="form-group col-md-6">
              <label htmlFor="inputName4">Names</label>
              <input
                value={this.state.names}
                type="text"
                className="form-control"
                id="inputName4"
                placeholder="Names"
                onChange={e => this.handleInput(e, "names")}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputSurname4">Surnames</label>
              <input
                value={this.state.surNames}
                type="text"
                className="form-control"
                id="inputSurname4"
                placeholder="Surnames"
                onChange={e => this.handleInput(e, "surNames")}
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="city4">City</label>
            <input
              value={this.state.city}
              type="text"
              className="form-control"
              id="inputCity4"
              placeholder="City"
              onChange={e => this.handleInput(e, "city")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              value={this.state.email}
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              onChange={e => this.handleInput(e, "email")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputContactNumber">Contact number</label>
            <input
              value={this.state.number}
              type="number"
              className="form-control"
              id="inputContactNumber"
              placeholder="Contact number"
              onChange={e => this.handleInput(e, "number")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputContactNumber">Specialties</label>
            <select
              value={this.state.specialites}
              className="custom-select"
              required
              onChange={e => this.handleInput(e, "specialites")}
            >
              <option value="">Choose options...</option>
              <option value="ABAP">ABAP</option>
              <option value="BC">BC</option>
              <option value="BC-STMS">BC-STMS</option>
              <option value="CO">CO</option>
              <option value="CO-CCA">CO-CCA</option>
              <option value="CO-CEL">CO-CEL</option>
              <option value="CO-PC">CO-PC</option>
              <option value="CO-PA">CO-PA</option>
              <option value="CO-OPA">CO-OPA</option>
              <option value="CO-ABC">CO-ABC</option>
              <option value="FI">FI</option>
              <option value="FI-GL">FI-GL</option>
              <option value="FI-AP">FI-AP</option>
              <option value="FI-AR">FI-AR</option>
              <option value="FI-BL">FI-BL</option>
              <option value="FI-FM">FI-FM</option>
              <option value="FI-AA">FI-AA</option>
              <option value="FI-LA">FI-LA</option>
              <option value="FI-TM">FI-TM</option>
              <option value="FI-SL">FI-SL</option>
              <option value="HR">HR</option>
              <option value="HR-PA">HR-PA</option>
              <option value="HR-EMP">HR-EMP</option>
              <option value="HR-PD">HR-PD</option>
              <option value="HR-PAY">HR-PAY</option>
              <option value="HR-ECM">HR-ECM</option>
              <option value="HR-PCP">HR-PCP</option>
              <option value="HR-EDD">HR-EDD</option>
              <option value="HR-TEM">HR-TEM</option>
              <option value="HR-E-R">HR-E-R</option>
              <option value="HR-ESS">HR-ESS</option>
              <option value="HR-MSS">HR-MSS</option>
              <option value="HR-TRV">HR-TRV</option>
              <option value="HR-OM">HR-OM</option>
              <option value="HR-BN">HR-BN</option>
              <option value="HR-EHS">HR-EHS</option>
              <option value="HR-TIM">HR-TIM</option>
              <option value="HR-IS">HR-IS</option>
              <option value="LE">LE</option>
              <option value="LE-SHP">LE-SHP</option>
              <option value="LE-TRA">LE-TRA</option>
              <option value="LE-WMS">LE-WMS</option>
              <option value="LE-TRM">LE-TRM</option>
              <option value="LE-IDW">LE-IDW</option>
              <option value="LO">LO</option>
              <option value="LO-BM">LO-BM</option>
              <option value="LO-HU">LO-HU</option>
              <option value="LO-VC">LO-VC</option>
              <option value="LO-ECM">LO-ECM</option>
              <option value="LO-CM">LO-CM</option>
              <option value="LO-LIS">LO-LIS</option>
              <option value="LO-MD">LO-MD</option>
              <option value="LO-PR">LO-PR</option>
              <option value="MM">MM</option>
              <option value="MM-CBP">MM-CBP</option>
              <option value="MM-PUR">MM-PUR</option>
              <option value="MM-IM">MM-IM</option>
              <option value="MM-IV">MM-IV</option>
              <option value="MM-SRV">MM-SRV</option>
              <option value="MM-EDI">MM-EDI</option>
              <option value="MM-MRP">MM-MRP</option>
              <option value="MM-IS">MM-IS</option>
              <option value="PP">PP</option>
              <option value="PP-PM">PP-PM</option>
              <option value="PP-PI">PP-PI</option>
              <option value="PP-E-HS">PP-E-HS</option>
              <option value="PP-BD">PP-BD</option>
              <option value="PP-SOP">PP-SOP</option>
              <option value="PP-MP">PP-MP</option>
              <option value="PP-CRP">PP-CRP</option>
              <option value="PP-MRP">PP-MRP</option>
              <option value="PP-SFC">PP-SFC</option>
              <option value="PP-IS">PP-IS</option>
              <option value="SD">SD</option>
              <option value="SD-BF">SD-BF</option>
              <option value="SD-MD">SD-MD</option>
              <option value="SD-SLS">SD-SLS</option>
              <option value="SD-LE-SHP">SD-LE-SHP</option>
              <option value="SD-TRA">SD-TRA</option>
              <option value="SD-FTT">SD-FTT</option>
              <option value="SD-BILL">SD-BILL</option>
              <option value="SD-CAS">SD-CAS</option>
              <option value="SD-FT">SD-FT</option>
              <option value="SD-EDI">SD-EDI</option>
              <option value="SD-IS">SD-IS</option>
              <option value="QM">QM</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputDate4">Date</label>
            <input
              value={this.state.date}
              type="date"
              className="form-control"
              id="inputDate4"
              placeholder="Date"
              onChange={e => this.handleInput(e, "date")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputcomments4">Comments</label>
            <input
              value={this.state.comments}
              type="text"
              className="form-control"
              id="inputComments4"
              placeholder="Comments"
              onChange={e => this.handleInput(e, "comments")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCalification">Calification</label>
            <select
              value={this.state.calification}
              className="custom-select"
              required
              onChange={e => this.handleInput(e, "calification")}
            >
              <option value="">Choose options...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">State</label>
            <select
              value={this.state.state}
              className="custom-select"
              required
              onChange={e => this.handleInput(e, "state")}
            >
              <option value="">Choose options...</option>
              <option value="Hired">Hired</option>
              <option value="In process">In process</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputOrigin">Origin</label>
            <select
              value={this.state.origin}
              className="custom-select"
              required
              onChange={e => this.handleInput(e, "origin")}
            >
              <option value="">Choose options...</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputFile">Choose file</label>
            <br></br>
            <div className="custom-file col-md-6">
              <input
                type="file"
                className="custom-file-input"
                id="validatedCustomFile"
              />
              <label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                Choose file...
              </label>
            </div>
          </div>
          <div className=" col-md-6">
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
