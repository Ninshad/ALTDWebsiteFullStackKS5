const { Text, Select, Checkbox, Relationship } = require('@keystonejs/fields');


module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    header: { type: Relationship, ref: 'Header', many: true },
    Counter: { type: Relationship, ref: 'Counter', many: true },
    aboutUsContent: { type: Relationship, ref: 'Content', many: true },
    showReadMoreButton: {type: Checkbox},
    ReadMoreButtonLabel: {type: Text},
    ReadMoreButtonUrl: {type: Text},
    servicesContent: { type: Relationship, ref: 'Content', many: true },
    ourService: { type: Relationship, ref: 'HomeOurService', many: true },
    workContent: { type: Relationship, ref: 'Content', many: true },
    ourWork: { type: Relationship, ref: 'HomeOurWork', many: true },
    clientLogo: { type: Relationship, ref: 'HomeClientLogo', many: true },
    Testimonial: { type: Relationship, ref: 'HomeTestimonial', many: true },   
  },
};
