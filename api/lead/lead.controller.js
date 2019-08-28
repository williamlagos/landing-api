/**
 * @version 0.1.0
 * @description Lead controller.
 */

// --------------- Module Imports
const Lead = require('./lead.model')

// --------------- Module Variables

// --------------- Module Controller
const LeadCtrl = {
  save: async function (lead) {
    const email = lead.email
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
    const validatedEmail = re.test(String(email).toLowerCase())
    if (!validatedEmail) return { _id: 0, error: 'Invalid email' }
    const result = await Lead.findOne({ email })
    if (result) return result
    else return Lead.create(lead)
  },
  list: async function () {
    return (await Lead.find()).map((lead) => lead) // Gets leads list
  },
  get: async function (id) {
    return Lead.findOne({ _id: id }) // Gets the lead information
  }
}

module.exports = LeadCtrl
