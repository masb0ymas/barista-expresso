import Express from 'express'

const route = Express.Router()

export default route

require('@controllers/Auth/controller')

require('@controllers/Account/Notification/controller')
require('@controllers/Account/Role/controller')
require('@controllers/Account/Session/controller')
require('@controllers/Account/User/controller')
