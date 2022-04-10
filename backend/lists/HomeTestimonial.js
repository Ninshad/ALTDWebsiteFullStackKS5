const { Text, Select } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    clientName: {type: Text, isRequired: true},
    companyName: {type: Text, isRequired: true},
    testimonial: {type: Wysiwyg}, 

    
  },
};

