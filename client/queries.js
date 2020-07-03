import gql from 'graphql-tag';

export const getSongs = gql`
    {
        songs {
            id,
            title
        }
    }
`;

export const addSong = gql`
    mutation AddSong($title: String){
        addSong(title: $title) {
        id,
        title
        }
    }
`;

export const deleteSong = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;

export const getSong = gql`
    query SongQuery($id: ID!) {
        song(id: $id) {
            id,
            title
        }
    }
`;