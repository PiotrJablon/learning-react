import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQData} from '../../data/dataStore';
import styles from './FAQ.scss';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQData.title} imagePicture={FAQData.image} />
    <p className={styles.subtitle}>{FAQData.description}</p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default FAQ;