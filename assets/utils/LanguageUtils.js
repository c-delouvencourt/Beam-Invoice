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
      },
      it: {
        title: 'Italian',
        img: require('../images/flags/italy.png')
      },
      es: {
        title: 'Spanish',
        img: require('../images/flags/spain.png')
      },
      de: {
        title: 'German',
        img: require('../images/flags/germany.png')
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
      },
      it: {
        title: 'Italian',
        img: require('../images/flags/italy.png')
      },
      es: {
        title: 'Spanish',
        img: require('../images/flags/spain.png')
      },
      de: {
        title: 'German',
        img: require('../images/flags/germany.png')
      }
    };

    return languages[language].img;
  }
}
