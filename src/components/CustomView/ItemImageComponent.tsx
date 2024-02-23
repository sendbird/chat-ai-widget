import { Component } from 'react';

export class ItemImageComponent extends Component<{ image: string }> {
  render() {
    return (
      <img
        src={this.props.image}
        alt="item"
        style={{
          width: 44,
          height: 44,
          borderRadius: 8,
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    );
  }
}
