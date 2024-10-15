import { Component } from 'react';

export class ItemImageComponent extends Component<{
  image: string;
  width: number;
  height: number;
}> {
  render() {
    return (
      <img
        src={this.props.image}
        alt="item"
        style={{
          width: this.props.width,
          height: this.props.height,
          borderRadius: 8,
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'brightness(80%)',
        }}
      />
    );
  }
}
