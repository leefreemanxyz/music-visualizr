import React, {
    PureComponent
} from 'react'
import {PrimaryArtworkThumbnail, ArtworkCaption,PrimaryArtworkThumbnailImage,SecondaryArtworkThumbnail, SecondaryNest, ArtworkThumbnailImage, ThumbnailsContainer, PrimaryArtwork, SecondaryArtwork, SecondaryCell} from '../styled-components/ArtworkThumbnail'

const styles = {
   
}
export default class AlbumPlaybacks extends PureComponent {
        render() {
        const {
            songPlaybacks
        } = this.props.data
        if (!songPlaybacks) return null
        let albumPlaybacksWithCount = songPlaybacks.reduce((result, playback) => {
            if (result && result.find(resultItem => resultItem.album.id === playback.album.id)) {
                return result
            } else {
                let count = songPlaybacks.filter(album => album.album.id === playback.album.id)
                result.push(Object.assign({}, playback, {
                    "count": count.length
                }))
                return result
            }
        }, [])

        albumPlaybacksWithCount.sort((a, b) => {
            return b.count - a.count
        })
        return ( 
            <div>
                <h3>Albums</h3>
                <ThumbnailsContainer>
                {albumPlaybacksWithCount[0] && 
                 <PrimaryArtworkThumbnail>
                    <ArtworkThumbnailImage src={albumPlaybacksWithCount[0].album.album_image}/>
                    <ArtworkCaption>
                        <div>{albumPlaybacksWithCount[0].album.name}</div>
                        <div>Plays: {albumPlaybacksWithCount[0].count}</div>
                        </ArtworkCaption>
                </PrimaryArtworkThumbnail>
                }
                {albumPlaybacksWithCount[1] && 
                 <SecondaryArtworkThumbnail>
                    <ArtworkThumbnailImage src={albumPlaybacksWithCount[1].album.album_image}/>
                    <ArtworkCaption>
                        <div>{albumPlaybacksWithCount[1].album.name}</div>
                        <div>Plays: {albumPlaybacksWithCount[1].count}</div>
                        </ArtworkCaption>
                </SecondaryArtworkThumbnail>
                }
                {albumPlaybacksWithCount[2] && 
                 <SecondaryArtworkThumbnail>
                    <ArtworkThumbnailImage src={albumPlaybacksWithCount[2].album.album_image}/>
                    <ArtworkCaption>
                        <div>{albumPlaybacksWithCount[2].album.name}</div>
                        <div>Plays: {albumPlaybacksWithCount[2].count}</div>
                        </ArtworkCaption>
                </SecondaryArtworkThumbnail>
                }
                {albumPlaybacksWithCount[3] &&
                 <SecondaryArtworkThumbnail>
                    <ArtworkThumbnailImage src={albumPlaybacksWithCount[3].album.album_image}/>
                    <ArtworkCaption>
                        <div>{albumPlaybacksWithCount[3].album.name}</div>
                        <div>Plays: {albumPlaybacksWithCount[3].count}</div>
                        </ArtworkCaption>
                </SecondaryArtworkThumbnail>
                }
                {albumPlaybacksWithCount[4] &&
                 <SecondaryArtworkThumbnail>
                    <ArtworkThumbnailImage src={albumPlaybacksWithCount[4].album.album_image}/>
                    <ArtworkCaption>
                        <div>{albumPlaybacksWithCount[4].album.name}</div>
                        <div>Plays: {albumPlaybacksWithCount[4].count}</div>
                        </ArtworkCaption>
                </SecondaryArtworkThumbnail>
                }
                </ThumbnailsContainer>            </div>
        )
    }
}