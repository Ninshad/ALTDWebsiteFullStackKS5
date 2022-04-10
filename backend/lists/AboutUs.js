const { Text, Select, Checkbox, Relationship } = require('@keystonejs/fields');


module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    header: { type: Relationship, ref: 'Header', many: true },
    Counter: { type: Relationship, ref: 'Counter', many: true },
    descriptionContent: { type: Relationship, ref: 'Content', many: true },
    processContent: { type: Relationship, ref: 'Content', many: true },
    process: { type: Relationship, ref: 'Process', many: true },
  },
};
