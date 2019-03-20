import React, { Component } from "react";
import { Button, Collapse, Media, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="collapse-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>

        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                width={100}
                className="mr-3"
                alt="thumbnail"
                src="https://s7d5.scene7.com/is/image/Anthropologie/45455450AA_067_b10?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain"
              />
              <Media.Body>
                <p>Joanna Gaines for Anthropologie Textured Eva Pillow.</p>
                <p>
                  <strong>Color: </strong>Terracotta
                </p>
                <p>
                  <strong>Style #: </strong> 45455450AA
                </p>
                <p>
                  <strong>Size: </strong> 20"x20"
                </p>
                <p>
                  <strong>Item Price: </strong>
                  {`$${this.props.price}`}
                </p>
                <p>
                  <strong>Qty: </strong>1
                </p>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
