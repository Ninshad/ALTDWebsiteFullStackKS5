const { Text } = require('@keystonejs/fields');
const { Content } = require('@keystonejs/fields-content');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');



module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    contentBlockTitle:{type: Text, isRequired: true},
    contentBlockSubTitle:{type: Text, isRequired: true},
    content:{type: Wysiwyg},
  },
};
