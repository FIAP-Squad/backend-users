import { type Express, Router } from 'express'
import { account, login, logout, health } from '@/main/routes'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  account(router)
  login(router)
  logout(router)
  health(router)
}
