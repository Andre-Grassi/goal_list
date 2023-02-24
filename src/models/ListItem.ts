import generateKey from "../helpers/generateKey";

class ListItem {
  key: number | null;
  title: string;
  constructor(decimals:number = 1000, newTitle:string) {
    this.key = generateKey(decimals)
    this.title = newTitle
  }
}

export default ListItem