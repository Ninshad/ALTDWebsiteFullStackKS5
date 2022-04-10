const { Text, Relationship, DateTime, Slug } = require('@keystonejs/fields');
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

module.exports = {
  fields: {
    name: {type: Text, isRequired: true},
    slug: {
        type: Slug,
        from: 'name',
      },
    category: { type: Relationship, ref: 'BlogCategory'},
    blogContent: { type: Relationship, ref: 'Content', many: true },
    blogTitle: {type: Text, isRequired: true},
    // category: { type: Relationship, ref: 'BlogCategory', many: true },
    author: { type: Relationship, ref: 'User', many: true },
    date: {
        type: DateTime,
        format: 'dd/MM/yyyy HH:mm O',
        yearRangeFrom: 1901,
        yearRangeTo: 2018,
        yearPickerType: 'auto',
      },
    blogDetailList:{type: Wysiwyg},
    blogListingImage: { type: CloudinaryImage, adapter: fileAdapter },
    blogListingImageAltText: {type: Text, isRequired: true},
    blogDetailImage: { type: CloudinaryImage, adapter: fileAdapter },
    blogDetailImageAltText: {type: Text, isRequired: true},


  },
};

