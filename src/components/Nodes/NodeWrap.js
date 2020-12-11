import React from 'react'
import {NodeTypes} from './AddNodeConstant'
import AddNode from './AddNode'
function NodeWrap(props) {
    return (
        <div>
            <div className="node-wrap">
                <div className={"node-wrap-box "+ (props.type === NodeTypes.START ? 'start-node' : '')} >
                    <div className="title" style={props.titleStyle}>
                        {props.title}
                    </div>
                    <div className="content" onClick={props.onContentClick}>
                        {props.children}
                    </div>
                </div>
                <AddNode objRef={props.objRef} />
            </div>
            
        </div>
    )
}
export default NodeWrap