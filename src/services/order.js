import { Request } from '@utils/request.js';

const getMenu = () => {
  return Request.get('/api/getMenu')
}

export {
  getMenu
}