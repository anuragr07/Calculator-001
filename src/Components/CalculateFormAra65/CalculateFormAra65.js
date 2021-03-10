import React from "react";

function CalculateFormAra65(props){
    return(
        <div className="row">
            <div className="col-4">
                <label for="operand1"></label>
                <input type="text" class="form-control-plaintext" id="operand1" onChange="{props.update}"></input>
            </div>
            <div className="col-4">
                <label for="operand2"></label>
                <input type="text" class="form-control-plaintext" id="operand2" onChange="{props.update}"></input>
            </div>
        </div>
    )
}

export default CalculateFormAra65;