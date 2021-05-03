import React from 'react';
import styles from './List.scss';
import App from '../App/App.js';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js'

class List extends React.Component {
  static propTypes = {
  	title: PropTypes.node.isRequired,
  	children: PropTypes.node.isRequired,
  }

  static defaultProps = {
  	children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section>
        <Hero titleText={this.props.title} imagePicture={this.props.image}/>
        <div className={styles.description}>
  		  {this.props.children}
		</div>
		<div className={styles.columns}>
		  <Column columnText={'Animals'}/>
          <Column columnText={'Plants'}/>
          <Column columnText={'Minerals'}/>
		</div>
      </section>
    )
  }
}

export default List;