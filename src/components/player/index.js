import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Overlay, Inner, Close, Button } from './styles/player';
import Youtube from 'react-youtube';

export const PlayerContext = createContext();

const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

export default function Player({ children, ...restProps }){
const [showPlayer, setShowPlayer] = useState(false);

return (
    <PlayerContext.Provider value = {{ showPlayer, setShowPlayer }}>
       <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
)
}

Player.Video = function PlayerVideo({ trailerUrl, ...restProps }){
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return showPlayer ? 
    ReactDOM.createPortal(
    <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
      <Inner>
      <Youtube videoId={trailerUrl} opts={opts} />
          <Close />
      </Inner>
    </Overlay>,
    document.body
    ) : null; 
}

Player.Button = function PlayerButton({ ...restProps }){
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);
    return (
        <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
            Play
        </Button>
    )
}