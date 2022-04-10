const { Text } = require('@keystonejs/fields');
const { Content } = require('@keystonejs/fields-content');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    haveQuestionsMailId: {type: Text, isRequired: true},
    joinOurTeamMailId: {type: Text, isRequired: true},
    businessInquiriesMailId: {type: Text, isRequired: true},
    address: {type: Text, isRequired: true, isMultiline: true},
    address: {type: Wysiwyg},
    contactNumber1: {type: Text, isRequired: true},
    contactNumber2: {type: Text, isRequired: true},
    
  },
};


