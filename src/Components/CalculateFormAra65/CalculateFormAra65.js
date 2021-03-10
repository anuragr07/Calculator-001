import React from "react";

function CalculateFormAra65(props){
    return(
        <div className="container row">
            <div className="col-4">
                <label for="operand1"></label>
                <input type="text" class="form-control" id="operand1" onChange="{props.update}"></input>
            </div>
            <div className="col-4">
                <label for="operand2"></label>
                <input type="text" class="form-control" id="operand2" onChange="{props.update}"></input>
            </div>
            <div className="col-4">
                <select className="form-control" id="operation" onChange={props.update}>
                    <option selected>Please select an option</option>
                    <option value="add">Addition</option>
                    <option></option>
                </select>
                </div>
            <button className="btn btn-primary" onClick={props.action}>Go</button>
        </div>
    )
}

export default CalculateFormAra65;