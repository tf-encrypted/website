const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withFonts(withImages(withCSS(withSass({
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
}))))
