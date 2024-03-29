/*
 * @version 0.1.0
 * @description Lead model.
 */

// --------------- Module Imports
const mongoose = require('mongoose')

// require('mongoose-schema-jsonschema')(mongoose)

// --------------- Module Schema
const LeadSchema = mongoose.Schema({
  email: { type: String, lowercase: true, required: true, unique: true }
}, {
  timestamps: true
})

// --------------- Module Plugins
// const timestamps = require('mongoose-timestamp')
// const lifecycle = require('mongoose-lifecycle')
// const mongoose_delete = require('mongoose-delete');
// LeadSchemaema.plugin(mongoose_delete, { overrideMethods: 'all', validateBeforeDelete: false });
// LeadSchema.plugin(lifecycle)
// LeadSchema.plugin(timestamps)

const Lead = mongoose.model('Lead', LeadSchema)

Lead.createIndexes()

// --------------- Module Model
module.exports = Lead
