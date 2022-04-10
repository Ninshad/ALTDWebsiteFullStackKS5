const { Text, Relationship } = require('@keystonejs/fields');


module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    blog: { type: Relationship, ref: 'Blog', many: true },
    
  },
};
