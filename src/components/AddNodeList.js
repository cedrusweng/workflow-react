import React from 'react'
import AddNodeOption from './AddNodeOption'
import {OptionNames, OptionTypes} from './AddNodeConstant'
function AddNodeList(props) {
    return (<div className="add-node-popover-body">
                    <AddNodeOption type="approver" onClick={() => props.onOptionClick(OptionTypes.APPROVER)} name={OptionNames[OptionTypes.APPROVER]} />
                    <AddNodeOption type="notifier" onClick={() => props.onOptionClick(OptionTypes.NOTIFIER)} name={OptionNames[OptionTypes.NOTIFIER]} />
                    <AddNodeOption type="condition" onClick={() => props.onOptionClick(OptionTypes.CONDITION)} name={OptionNames[OptionTypes.CONDITION]} />
            </div>)
}

export default AddNodeList