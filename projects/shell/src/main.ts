import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';

const devStr = !environment.production ? '.dev' : ''

initFederation(`federation.manifest${devStr}.json`)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
