import styled from 'styled-components'

export const ThumbnailsContainer = styled.ul`
list-style: none;
margin: 0 auto 0 auto;
padding: 0;
display: grid;
max-width: 960px;
grid-template-columns: 1fr;   
grid-template-rows: auto;
grid-auto-flow: dense;
@media (min-width: 460px) {
   
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 660px) {
   
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`
export const PrimaryArtworkThumbnail = styled.li`
position:relative;
margin: 10px;
		border: 1px solid #eee;
		border-radius: 5px;
        padding: 10px;
        @media (min-width: 460px) {
   
            grid-column: 1/3;
        }
        @media (min-width: 660px) {
            grid-column:1/3;
            grid-row: 1/3;
        }
`
export const SecondaryArtworkThumbnail = styled.li`
position:relative;
margin: 10px;
		border: 1px solid #eee;
		border-radius: 5px;
		padding: 10px;
`
export const ArtworkThumbnailImage = styled.img`
width:100%;
`
export const ArtworkCaption = styled.div`
        position:absolute;
        bottom:5%;
        left: 5%;
        width:90%;
        background-color:rgba(230,212,230,0.7);
`
