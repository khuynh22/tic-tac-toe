import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    function handleSelectSquare() {
        setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    }
    
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name="Player 1" symbol="X" />
                    <Player name="Player 2" symbol="O" />
                </ol>
                <GameBoard />
            </div>
        </main>
    );
}

export default App;
