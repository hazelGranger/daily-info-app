import expense from './expense'

export const routes = (router) => {
  router.use('/expense', expense)
}
