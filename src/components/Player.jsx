import { useState } from "react";
export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEdit() {
        setIsEditing((editing) => !editing);
    }

    function handleSave(event) {
        setPlayerName(event.target.value);
    }

    let player = <span className="player-name">{playerName}</span>;
    let buttonAction = "Edit";
    if (isEditing) {
        player = (
            <input
                type="text"
                required value={playerName}
                onChange={handleSave}
            />
        );
        buttonAction = "Save";
    }
    return (
        <li>
            <span className="player">
                {player} 
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{buttonAction}</button>
        </li>
    );
}
