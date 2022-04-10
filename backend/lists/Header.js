const { Text, Select, Checkbox, Relationship } = require('@keystonejs/fields');

const options =[
  { label: 'Home page', value: 'Home' },
  { label: 'About us page', value: 'About' },
  { label: 'Service page', value: 'Service' },
  { label: 'Service detail page', value: 'ServiceDetail' },
  { label: 'Work page', value: 'Work' },
  { label: 'Work detail page', value: 'WorkDetail' },
  { label: 'Blog page', value: 'Blog' },
  { label: 'Blog detail page', value: 'BlogDetail' },
  { label: 'contact page', value: 'contact' },
];

module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    title: {type: Text, isRequired: true},
    subTitle: {type: Text, isRequired: true}, 
    page: {type: Select, options},
    headerImage: { type: Relationship, ref: 'HeaderImage', many: true },  
    showCta: {type: Checkbox},
    CtaLabel: {type: Text},
    CtaUrl: {type: Text},
  },
};




