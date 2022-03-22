import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isSolvedState } from "./state/isSolvedState";
import tileState from "./state/tilesState";
import Tile from './components/Tile';


const Puzzle = () => {

  const isSolved = useRecoilValue(isSolvedState);
  const [tiles, setTiles] = useRecoilState(tileState);

  useEffect(() => {
    if(isSolved){
      alert("Solved.")
    }
  }, [isSolved])

  const moves = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4, 6],
    [1, 3, 5, 7],
    [2, 4, 8],
    [3, 7],
    [4, 6, 8],
    [5, 7]
  ]

  const isEmpty = (tile) =>  {
    return tiles.findIndex(tile => tile === '9')
  }

  const move = (i) => {
    
    if (moves[i].includes(isEmpty(i))) {

      let tileIndex  = i
      let tile       = tiles[i]
      let emptyIndex = isEmpty(tile);
      
      setTiles(prevState => {
        const nextState = [...prevState];
        nextState[tileIndex] = tiles[emptyIndex];
        nextState[emptyIndex] = tile;
        return nextState;
      })

    }
  }


  return <>
    <section>
      <div id="puzzle">
        {tiles && tiles.map((tile, i) => <Tile 
        key={tile} 
        tile={tile}
        onClick={() => move(i)} 
      />)}
      </div>   
    </section>
  </>
}

export default Puzzle;