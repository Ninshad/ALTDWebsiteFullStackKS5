const { Text, Select, Checkbox, Relationship } = require('@keystonejs/fields');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');


const fileAdapter = new CloudinaryAdapter({
  cloudName: "dpas8yc5q",
  apiKey: "318526265161286",
  apiSecret: "XFbKcYXSPBIimXBhA-8rr0rks84",
  folder: 'AltdWebsite',
  });

module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    serviceImage: { type: CloudinaryImage, adapter: fileAdapter },
    readMoreLink: {type: Text, isRequired: true}, 
  },
};
