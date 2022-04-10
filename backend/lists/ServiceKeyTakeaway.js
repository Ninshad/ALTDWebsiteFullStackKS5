const { Text, Select, Checkbox, Relationship } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

const options =[
    { label: 'Quality Assurance', value: 'QualityAssurance' },
    { label: 'Excellent Support', value: 'ExcellentSupport' },
    { label: 'Affordable Price', value: 'AffordablePrice' },
    { label: 'Great Partnership', value: 'GreatPartnership' },
    { label: 'Rest Assured', value: 'RestAssured' },
    { label: 'Expert Team', value: 'ExpertTeam' },
];

module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    icon: {type: Select, options},
    title: {type: Text, isRequired: true},
    description: {type: Wysiwyg}, 
  },
};




