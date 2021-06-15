import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults, createActionAddCard} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredCards = state.cards.filter(card => card.id === id);
  const cardParams = filteredCards[0] || {};

  return {
    ...cardParams,
    cards: getCardsForSearchResults(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);