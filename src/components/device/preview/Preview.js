import React from 'react';
import './Preview.css';

import Screen from '../screen/Screen';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            device: props.device,
            size: this.calcSize(props.device),
            showExample: props.showExample === true
        };
    }

    calcSize(device) {
        const preview = device.preview;
        return {
            height: `${preview.dimensions.height * preview.zoom}px`,
            width: `${preview.dimensions.width * preview.zoom}px`,
        };
    }

    render() {
        return (
            <div className="preview" style={this.state.size}>
                <img alt="Device preview." className="watch" src={`devices/${this.state.device.name}.watch.png`} style={this.state.size} />
                <Screen device={this.state.device} showExample={this.state.showExample} />
            </div>
        );
    }
}

export default Preview;
