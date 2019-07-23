/**
 * @version 0.1.0
 * @description Lead routes.
 */

const controller = require('./lead.controller')
const express = require('express')
const router = express.Router()

/*
 * operationId: 'addLead',
 * tags: [router.entity],
 * parameters: [{
 *  name: 'lead',
 *  in: 'body',
 *  description: 'JSON representation of the lead.',
 *  schema: { type: 'object' }
 * }],
 * responses: swaggerUtils.defaultResponses()
 */
router.post('/', async (req, res) => {
  const lead = req.body
  console.log(req.body)
  const saved = await controller.save(lead)
  return res.status(200).json(saved)
})

/*
 * tags: [router.entity],
 * operationId: 'getLeads',
 * parameters: [swaggerUtils.authParam()],
 * responses: swaggerUtils.defaultResponses()
 */
router.get('/', async (req, res) => {
  const leads = await controller.list()
  return res.status(200).json(leads)
})

/*
 * tags: [router.entity],
 * operationId: 'getLead',
 * parameters: [swaggerUtils.authParam()],
 * responses: swaggerUtils.defaultResponses()
 */
router.get('/:id', async (req, res) => {
  const id = req.params.id
  const leads = await controller.get(id)
  return res.status(200).redirect(leads)
})

module.exports = router
