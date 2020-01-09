module.exports["swagger-generator"] = {
  disabled: false,
  swaggerJsonPath: "./swagger.json",
  parameters: {
  },
  blueprint_parameters: {list: []},
  swagger: {
    swagger: '2.0',
    info: {
      title: 'Beam API',
      description: 'Beam API doc.',
      termsOfService: 'https://github.com/PHClement/Beam-Invoice',
      contact: {name: 'Clément de Louvencourt', url: 'http://github.com/PHClement', email: 'beam@nocturne.app'},
      license: {name: 'MIT', url: 'https://opensource.org/licenses/MIT'},
      version: '1.0.0'
    },
    host: 'localhost:3000',
    basePath: '/',
    externalDocs: {url: 'https://beam3.docs.apiary.io/'}
  }
};
