import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <h1>Title: {post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default BlogPost;

BlogPost.defaultProps = {
  data: Object,
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string,
    }),
  }),
};
