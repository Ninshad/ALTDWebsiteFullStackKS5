const { Text, Select, Checkbox, Relationship } = require('@keystonejs/fields');


module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    counter1Till:{type: Text, isRequired: true},
    counter1Suffix: {type: Text, isRequired: true},
    counter1Label: {type: Text, isRequired: true},
    counter2Till:{type: Text, isRequired: true},
    counter2Suffix: {type: Text, isRequired: true},
    counter2Label: {type: Text, isRequired: true},
    counter3Till:{type: Text, isRequired: true},
    counter3Suffix: {type: Text, isRequired: true},
    counter3Label: {type: Text, isRequired: true}, 
  },
};
