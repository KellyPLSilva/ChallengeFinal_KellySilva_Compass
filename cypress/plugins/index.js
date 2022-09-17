/// <reference types="cypress" />
// ***********************************************************
const fs = require('fs-extra');
const path = require('path');

function buscarArquivosDeConfig(arquivo){
  const caminhoDoArquivo = path.resolve('.', 'cypress', 'config', `${arquivo}.json`)
  return fs.readJson(caminhoDoArquivo)
}

module.exports = (on, config) => {
  const arquivo = config.env.configFile || 'dev'
  return buscarArquivosDeConfig(arquivo)
}
