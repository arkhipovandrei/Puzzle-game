export default interface ITileProps{
  tile:string; 
  index: number;
  onMove: (index: number) => void
}