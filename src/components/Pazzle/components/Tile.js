const Tile = ({tile, onClick}) => {

  const isEmpty = tile === '9';

  return <div onClick={onClick} className={`tile ${isEmpty && 'empty'}`}>
    {tile}
  </div>
}

export default Tile;
