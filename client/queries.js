import gql from 'graphql-tag';

export const getSongs = gql`
    {
        songs {
            id
            title
        }
    }
`;

export const addSong = gql`
    mutation AddSong($title: String){
        addSong(title: $title) {
        id
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
            id
            title
            lyrics {
                id
                content
                likes
            }
        }
    }
`;

export const addLyric = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`;

export const upvoteLyric = gql`
    mutation LikeLyric($id: ID) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`;