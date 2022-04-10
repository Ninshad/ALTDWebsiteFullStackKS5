const { Text } = require('@keystonejs/fields');
const { Content } = require('@keystonejs/fields-content');

module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    email: {type: Text, isRequired: true},
    message: {type: Text, isRequired: true, isMultiline: true},
    
  },
};