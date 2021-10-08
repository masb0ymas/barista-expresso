import asyncHandler from '@expresso/helpers/asyncHandler'
import HttpResponse from '@expresso/modules/Response/HttpResponse'
import Authorization from '@middlewares/Authorization'
import route from '@routes/v1'
import { Request, Response } from 'express'
import RoleService from './service'

route.get(
  '/role',
  asyncHandler(async function findAll(req: Request, res: Response) {
    const query = req.getQuery()

    const response = await RoleService.findAll(query)

    const httpResponse = HttpResponse.get(response.data)
    return res.status(200).json(httpResponse)
  })
)

route.get(
  '/role/:id',
  asyncHandler(async function findById(req: Request, res: Response) {
    const { id } = req.getParams()

    const response = await RoleService.findById(id)

    const httpResponse = HttpResponse.get(response.data)
    return res.status(200).json(httpResponse)
  })
)

route.post(
  '/role',
  Authorization,
  asyncHandler(async function create(req: Request, res: Response) {
    const formData = req.getBody()

    const response = await RoleService.create(formData)

    const httpResponse = HttpResponse.get(response.data)
    return res.status(200).json(httpResponse)
  })
)

route.put(
  '/role/:id',
  Authorization,
  asyncHandler(async function update(req: Request, res: Response) {
    const { id } = req.getParams()
    const formData = req.getBody()

    const response = await RoleService.update(id, formData)

    const httpResponse = HttpResponse.get(response.data)
    return res.status(200).json(httpResponse)
  })
)

route.put(
  '/role/restore/:id',
  Authorization,
  asyncHandler(async function restore(req: Request, res: Response) {
    const { id } = req.getParams()

    const response = await RoleService.restore(id)

    const httpResponse = HttpResponse.get(response.data)
    return res.status(200).json(httpResponse)
  })
)

route.delete(
  '/role/soft-delete/:id',
  Authorization,
  asyncHandler(async function softDelete(req: Request, res: Response) {
    const { id } = req.getParams()

    const response = await RoleService.softDelete(id)

    const httpResponse = HttpResponse.get(response.data)
    return res.status(200).json(httpResponse)
  })
)

route.delete(
  '/role/force-delete/:id',
  Authorization,
  asyncHandler(async function forceDelete(req: Request, res: Response) {
    const { id } = req.getParams()

    const response = await RoleService.forceDelete(id)

    const httpResponse = HttpResponse.get(response.data)
    return res.status(200).json(httpResponse)
  })
)
