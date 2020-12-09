import React from 'react';
import MatchNode from './MatchNode'

function Render({config, pRef}) {
    return (
        <React.Fragment>
            <MatchNode pRef={pRef} config={config} />
            {config.childNode && <Render pRef={config} config={config.childNode} />}
        </React.Fragment>
    )
}

export default Render