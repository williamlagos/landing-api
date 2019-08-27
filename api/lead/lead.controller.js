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
    const saved = await Lead.create(lead)
    return saved // Returns the created lead
  },
  list: async function () {
    return (await Lead.find()).map((lead) => lead) // Gets leads list
  },
  get: async function (id) {
    return Lead.findOne({ _id: id }) // Gets the lead information
  }
}

module.exports = LeadCtrl
