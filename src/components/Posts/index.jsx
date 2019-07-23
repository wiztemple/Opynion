import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";

// action creators
import { getPosts } from "../../store/actions/posts";
import { getComments } from "../../store/actions/comments";

// component
import Loader from '../skeletons/PostsLoader';

// utils

// components
import Post from '../SinglePost';
// css
import './Post.scss';

class Posts extends React.Component {
  state = {
    isTruncated: true,
    page: 0
  }

  componentDidMount() {
    this.props.getPosts(this.state.page);
    document.addEventListener('scroll', this.handlePageScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll');
  }

  handlePageScroll = () => {
    const { page } = this.state;
  
    const docHeight = document.body.clientHeight;
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = docHeight - windowHeight;
    const scrollPercentage = scroll / bodyHeight;

    if (scrollPercentage > 0.99) {
      this.setState({ page: this.state.page + 1 }, () => {
        console.log(page, 'page')

        this.props.getPosts(this.state.page);
      });

    }
  }



  render() {
    const { posts, loading } = this.props;
    if (posts) console.log(posts.length);

    if (loading) {
      return <Loader />
    }

    return (
      <div>
        {posts.length && posts.map((post, index) => {
          return (
            <Post key={index} post={post} getComments={this.props.getComments}/>
          )
        })}
      </div>
    );
  };
}

const mapDispatchToProps = {
  getPosts,
  getComments
};

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts,
    loading: posts.loading
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Posts);
