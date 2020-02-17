import React from 'react';
import './Screen.css';

class Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            device: props.device,
            dimensions: this.calcDimensions(props.device),
            position: this.calcPosition(props.device),
            showExample: props.showExample === true
        };
        this.toggleExample = this.toggleExample.bind(this);
    }

    calcDimensions(device) {
        const preview = device.preview;
        return {
            height: `${(preview.offset.top - preview.offset.bottom) * preview.zoom}px`,
            width: `${(preview.offset.right - preview.offset.left) * preview.zoom}px`
        };
    }

    calcPosition(device) {
        const preview = device.preview;
        return {
            bottom: `${preview.offset.bottom * preview.zoom}px`,
            left: `${preview.offset.left * preview.zoom}px`,
            right: `${preview.offset.right * preview.zoom}px`,
            top: `${preview.offset.top * preview.zoom}px`
        };
    }

    toggleExample() {
        this.setState({ showExample: this.state.showExample ? false : true });
    }

    render() {
        return (
            <div className="screen" onClick={this.toggleExample} style={this.state.position}>
                <div style={this.state.size}>
                    <div className="draw" />
                    {this.state.showExample && <img alt="Device face example" className="example" src={`devices/${this.state.device.name}.example.png`} />}
                </div>
            </div>
        );
    }
}

export default Screen;
