import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner'
import { getPosts } from '../../actions/post';


const posts = ({ getPosts, posts: { posts, loading }}) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    
    return (
        <div>
            
        </div>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapSatteToProps = state => ({
    post: state.post
});

export default connect(mapSatteToProps, { getPosts })(Posts);
