import 'focus-visible';
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';

documentReady(() => {
  lazyImages();
});
