import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link, hashHistory} from 'react-router';
import {addSong, getSongs} from '../queries';

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: ''
        };
    }

    onSubmit(evt) {
        evt.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{query: getSongs}]
        }).then(() => hashHistory.push('/'));
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a new song</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Song Title</label>
                    <input onChange={event => this.setState({title: event.target.value})}
                        value={this.state.title}
                    />
                </form>
            </div>
        )
    }
};

export default graphql(addSong)(SongCreate);
