import { type Router } from 'express'
import { adaptRoute } from '@/main/frameworks'
import { makeLogoutController } from '../factories/controllers/makeLogoutController'
import { auth } from '@/main/middlewares'

export const logout = (router: Router): void => {
  router.post('/logout', auth, adaptRoute(makeLogoutController()))
}
