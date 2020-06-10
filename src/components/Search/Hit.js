import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostItem';

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    background={hit.background}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
  />
);

Hit.defaultProps = {
  hit: Object,
};

Hit.propTypes = {
  hit: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    background: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default Hit;
