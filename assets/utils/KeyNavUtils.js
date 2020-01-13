import keydown, { Keys } from 'react-keydown';
const { up, down } = Keys;

export default class KeyNavUtils {

  constructor(nav, previousPage, nextPage){
    this.nav = nav;
    this.previousPage = previousPage;
    this.nextPage = nextPage;
  }

  @keydown(up)
  onUpPress(){
    this.nav.push(this.previousPage);
  }

  @keydown(up)
  onDownPress(){
    this.nav.push(this.nextPage);
  }

}
