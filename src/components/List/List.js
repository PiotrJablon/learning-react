import React from 'react';
import styles from './List.scss';
import App from '../App/App.js';
import Hero from '../Hero/Hero.js';

class List extends React.Component {
  render() {
    return (
      <section>
        <Hero titleText={this.props.title} />
        <div className={styles.description}>
  		  {this.props.children}
		</div>
      </section>
    )
  }
}

export default List;