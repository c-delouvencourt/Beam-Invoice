export default class GradientUtils {

  static gradients = [
    "linear-gradient(180deg, #F5515F 0%,#A1051D 20%,#fff 21%,#fff 100%)",
    "linear-gradient(180deg, #13f1fc 0%,#0470dc 20%,#fff 21%,#fff 100%)",
    "linear-gradient(180deg, #CE9FFC 0%,#7367F0 20%,#fff 21%,#fff 100%)",
    "linear-gradient(180deg, #fad961 0%,#f76b1c 20%,#fff 21%,#fff 100%)",
    "linear-gradient(180deg, #17ead9 0%,#6078ea 20%,#fff 21%,#fff 100%)",
    "linear-gradient(180deg, #42e695 0%,#3bb2b8 20%,#fff 21%,#fff 100%)",
    "linear-gradient(180deg, #fcdf8a 0%,#f38381 20%,#fff 21%,#fff 100%)",
    "linear-gradient(180deg, #c3ec52 0%,#0ba29d 20%,#fff 21%,#fff 100%)",
    "linear-gradient(180deg, #F36265 0%,#961276 20%,#fff 21%,#fff 100%)"
  ];

  static randomGradient(){
    return this.gradients[Math.floor(Math.random() * this.gradients.length)];
  }


}
