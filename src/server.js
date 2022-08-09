import app from './app.js';

const porta = process.env.PORT || 4000;

const server = app.listen(porta, () => console.log(`App ouvindo na porta ${porta}`));

// Para o caso de interromper a porta e a api ainda ficar em funcionamento
process.on('SIGINT', () => {
  server.close();
  console.log('App finalizado');
});