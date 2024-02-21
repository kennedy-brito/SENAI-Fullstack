import { CanActivateFn, Router} from '@angular/router';

import { LocalstorageService } from '../LocalStorage/LocalStorage';

export const guardGuard: CanActivateFn = (route, state) => {

  const _localStorageService = new LocalstorageService;
  const router = new Router;
  
  if(_localStorageService.getItem('token') !== null) {
    return true;
  }
  router.navigate(['/login'])
  return false;
};

  