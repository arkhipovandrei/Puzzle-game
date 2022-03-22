import { VFC, MouseEvent } from "react";
import ITileProps from "./interfaces/ITileProps";

export const isEmptyTile = (tile: string):boolean => {
  return tile === '9';
}

const Tile:VFC<ITileProps> = (props) => {

  const {
    tile, index,
    onMove
  } = props;

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    onMove(index);
  }

  return <div 
    onClick={handleClick} 
    className={`tile ${isEmptyTile(tile) && 'empty'}`}
    >
      {tile}
  </div>
}

export default Tile;
