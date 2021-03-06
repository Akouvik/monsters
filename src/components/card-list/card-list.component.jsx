import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component {
  render() {
    // console.log('card list render', this.props);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id } = monster;
          return <Card key={id} monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardList;
