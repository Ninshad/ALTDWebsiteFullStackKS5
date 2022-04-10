const { Text, Select, Checkbox, Relationship, Slug } = require('@keystonejs/fields');
const { Content } = require('@keystonejs/fields-content');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');


const fileAdapter = new CloudinaryAdapter({
  cloudName: "dpas8yc5q",
  apiKey: "318526265161286",
  apiSecret: "XFbKcYXSPBIimXBhA-8rr0rks84",
  folder: 'AltdWebsite',
  });

const options =[
    { label: 'Left side', value: 'left' },
    { label: 'Right side', value: 'right' },
  ];

module.exports = {
  fields: {
    name: {type: Text, isRequired: true}, 
    slug: {
      type: Slug,
      from: 'name',
    },
    serviceWrapperId: {type: Text, isRequired: true},
    column: {type: Select, options},
    serviceListingImage: { type: CloudinaryImage, adapter: fileAdapter },
    serviceDetailHeaderImage: { type: CloudinaryImage, adapter: fileAdapter },
    serviceSubHeading: {type: Text, isRequired: true},
    serviceSubText:{type: Wysiwyg},
    getQuoteHeading: {type: Text, isRequired: true},  
    getQuoteImage: { type: CloudinaryImage, adapter: fileAdapter },
    showCta: {type: Checkbox},
    CtaLabel: {type: Text},
    CtaUrl: {type: Text},
    keyTakeAwayHeading: {type: Text, isRequired: true},  
    serviceKeyTakeaway: { type: Relationship, ref: 'ServiceKeyTakeaway', many: true },
  },
};








