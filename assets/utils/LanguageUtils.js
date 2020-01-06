export default class GradientUtils {

  static getTitle(language){
    const languages = {
      fr: {
        title: 'Français',
        img: require('../images/flags/france.png')
      },
      en: {
        title: 'English',
        img: require('../images/flags/united-kingdom.png')
      }
    };

    return languages[language].title;
  }

  static getImage(language){
    const languages = {
      fr: {
        title: 'Français',
        img: require('../images/flags/france.png')
      },
      en: {
        title: 'English',
        img: require('../images/flags/united-kingdom.png')
      }
    };

    return languages[language].img;
  }
}
