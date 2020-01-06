export default class StringUtils {

  static formatPrice(price, round = false) {
    try {
      let priceFinal = round ? ((price / 1000).toFixed() * 1000) : price;
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        useGrouping: true,
        minimumFractionDigits: 0,
        currency: 'EUR'
      }).format(priceFinal);
    } catch (e) {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        useGrouping: true,
        minimumFractionDigits: 0,
        currency: 'EUR'
      }).format(price);
    }
  }

  static formatPriceVirgule(price) {
    try {
      let priceFinal = ((price / 10).toFixed() * 10);
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        useGrouping: true,
        minimumFractionDigits: 0,
        currency: 'EUR'
      }).format(priceFinal);
    } catch (e) {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        useGrouping: true,
        minimumFractionDigits: 0,
        currency: 'EUR'
      }).format(price);
    }
  }

  static formatNumber(price) {
    try {
      return new Intl.NumberFormat('de-DE', {useGrouping: true, minimumFractionDigits: 0}).format(price);
    } catch (e) {
      return new Intl.NumberFormat('de-DE', {useGrouping: true, minimumFractionDigits: 0}).format(price);
    }
  }

  static search(pattern, text) {
    if (pattern.length == 0)
      return true;

    var lsp = [0];
    for (var i = 1; i < pattern.length; i++) {
      var j = lsp[i - 1];
      while (j > 0 && pattern.charAt(i) != pattern.charAt(j))
        j = lsp[j - 1];
      if (pattern.charAt(i) == pattern.charAt(j))
        j++;
      lsp.push(j);
    }

    var j = 0;
    for (var i = 0; i < text.length; i++) {
      while (j > 0 && text.charAt(i) != pattern.charAt(j))
        j = lsp[j - 1];
      if (text.charAt(i) == pattern.charAt(j)) {
        j++;
        if (j == pattern.length)
          return true;
      }
    }

    return false;
  }

}
