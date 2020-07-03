import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

import {deleteSong, getSongs} from '../queries';

class SongList extends Component {
    constructor(props) {
        super(props);
        this.renderSongs = this.renderSongs.bind(this);
        this.deleteSong = this.deleteSong.bind(this);
    }

    renderSongs() {
        return this.props.data.songs.map(({id, title}) => {
            return (
                <li className="collection-item" key={id}>
                    {title}
                    <i className="material-icons" 
                        onClick={() => this.deleteSong(id)}>delete</i>
                </li>
            );
        })
    }

    deleteSong(id) {
        console.log('deleting', id);
        this.props.mutate({
            variables: {id}
        }).then(() => this.props.data.refetch());
    }

    render() {
        if(this.props.data.loading) {
            return (
                <div>
                    Loading....
                </div>
            )
        }
        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link  to="/songs/new"
                    className="btn-floating btn-medium red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
           
        );
    }
}

export default graphql(deleteSong)(
    graphql(getSongs)(SongList)
);