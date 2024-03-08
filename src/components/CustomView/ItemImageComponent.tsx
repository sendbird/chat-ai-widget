import { Component } from 'react';

export class ItemImageComponent extends Component<{ image: string }> {
  render() {
    return (
      <img
        src={this.props.image}
        alt="item"
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    );
  }
}
