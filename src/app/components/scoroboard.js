import './scoreboard.css'

function ScoreBoard({xTurn, scores}) {
    const {xScore,oScore} = scores

    return (
        <div className="scoreboard">
            <span className={`score x-score ${xTurn && 'inactive'}`}>X - Score : {xScore}</span>
            <span className={`score o-score ${!xTurn && 'inactive'}`}>O - Score : {oScore}</span>
        </div>
    );
}

export default ScoreBoard;