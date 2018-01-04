import React, {
    PureComponent
} from 'react'
import {PrimaryArtworkThumbnail, ArtworkCaption,PrimaryArtworkThumbnailImage,SecondaryArtworkThumbnail, SecondaryNest, ArtworkThumbnailImage, ThumbnailsContainer, PrimaryArtwork, SecondaryArtwork, SecondaryCell} from '../styled-components/ArtworkThumbnail'

export default class ArtistPlaybacks extends PureComponent {
        render() {
        const {
            songPlaybacks
        } = this.props.data
        if (!songPlaybacks) return null
        let artistPlaybacksWithCount = songPlaybacks.reduce((result, playback) => {
            if (result && result.find(resultItem => resultItem.artist.id === playback.artist.id)) {
                return result
            } else {
                let count = songPlaybacks.filter(artist => artist.artist.id === playback.artist.id)
                result.push(Object.assign({}, playback, {
                    "count": count.length
                }))
                return result
            }
        }, [])

        artistPlaybacksWithCount.sort((a, b) => {
            return b.count - a.count
        })
        return ( 
            <div>
                <h3>Artists</h3>
                <ThumbnailsContainer>
                {artistPlaybacksWithCount[0] && 
                 <PrimaryArtworkThumbnail>
                    <ArtworkThumbnailImage src={artistPlaybacksWithCount[0].artist.artist_image}/>
                    <ArtworkCaption>
                        <div>{artistPlaybacksWithCount[0].artist.name}</div>
                        <div>Plays: {artistPlaybacksWithCount[0].count}</div>
                        </ArtworkCaption>
                </PrimaryArtworkThumbnail>
                }
                {artistPlaybacksWithCount[1] && 
                 <SecondaryArtworkThumbnail>
                    <ArtworkThumbnailImage src={artistPlaybacksWithCount[1].artist.artist_image}/>
                    <ArtworkCaption>
                        <div>{artistPlaybacksWithCount[1].artist.name}</div>
                        <div>Plays: {artistPlaybacksWithCount[1].count}</div>
                        </ArtworkCaption>
                </SecondaryArtworkThumbnail>
                }
                {artistPlaybacksWithCount[2] && 
                 <SecondaryArtworkThumbnail>
                    <ArtworkThumbnailImage src={artistPlaybacksWithCount[2].artist.artist_image}/>
                    <ArtworkCaption>
                        <div>{artistPlaybacksWithCount[2].artist.name}</div>
                        <div>Plays: {artistPlaybacksWithCount[2].count}</div>
                        </ArtworkCaption>
                </SecondaryArtworkThumbnail>
                }
                {artistPlaybacksWithCount[3] &&
                 <SecondaryArtworkThumbnail>
                    <ArtworkThumbnailImage src={artistPlaybacksWithCount[3].artist.artist_image}/>
                    <ArtworkCaption>
                        <div>{artistPlaybacksWithCount[3].artist.name}</div>
                        <div>Plays: {artistPlaybacksWithCount[3].count}</div>
                        </ArtworkCaption>
                </SecondaryArtworkThumbnail>
                }
                {artistPlaybacksWithCount[4] &&
                 <SecondaryArtworkThumbnail>
                    <ArtworkThumbnailImage src={artistPlaybacksWithCount[4].artist.artist_image}/>
                    <ArtworkCaption>
                        <div>{artistPlaybacksWithCount[4].artist.name}</div>
                        <div>Plays: {artistPlaybacksWithCount[4].count}</div>
                        </ArtworkCaption>
                </SecondaryArtworkThumbnail>
                }
                </ThumbnailsContainer>
            </div>
        )
    }
}