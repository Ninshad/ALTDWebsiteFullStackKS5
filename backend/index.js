const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const initialiseData = require('./initial-data');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'backend';
const adapterConfig = { mongoUri: "mongodb+srv://altdAdmin:LaKnUrYVNRgtfJea@cluster0.bw5iw.mongodb.net/ALT-D_Website?retryWrites=true&w=majority" };



const ContactUsPageContentSchema = require('./lists/ContactUsPageContent');
const ContactUsFormSchema = require('./lists/ContactUsForm');  
const HeaderSchema = require('./lists/Header'); 
const HeaderImageSchema = require('./lists/HeaderImage');
const ServiceSchema = require('./lists/Service'); 
// const ServiceImageSchema = require('./lists/ServiceImage');
const ServiceCardSchema = require('./lists/ServiceCard'); 
const ServiceKeyTakeawaySchema = require('./lists/ServiceKeyTakeaway'); 
const ContentSchema = require('./lists/Content'); 
const CounterSchema = require('./lists/Counter'); 
const ProcessSchema = require('./lists/Process'); 
const AboutUsSchema = require('./lists/AboutUs');
const BlogSchema = require('./lists/Blog');
const BlogCategorySchema = require('./lists/BlogCategory');
const BlogImageSchema = require('./lists/BlogImage');
const HomeSchema = require('./lists/Home');
const HomeOurWorkSchema = require('./lists/HomeOurWork');
const HomeClientLogochema = require('./lists/HomeClientLogo');
const HomeTestimonialSchema = require('./lists/HomeTestimonial');
const HomeOurServicekSchema = require('./lists/HomeOurService');





const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };



keystone.createList('ContactUsPageContent', ContactUsPageContentSchema); 
keystone.createList('ContactUsForm', ContactUsFormSchema);
keystone.createList('Header', HeaderSchema); 
keystone.createList('HeaderImage', HeaderImageSchema);
keystone.createList('Service', ServiceSchema);  
// keystone.createList('ServiceImage', ServiceImageSchema );  
keystone.createList('ServiceCard', ServiceCardSchema);  
keystone.createList('ServiceKeyTakeaway', ServiceKeyTakeawaySchema);
keystone.createList('Content', ContentSchema); 
keystone.createList('Counter', CounterSchema); 
keystone.createList('Process', ProcessSchema);
keystone.createList('AboutUsPageContent', AboutUsSchema);
keystone.createList('Blog', BlogSchema);
keystone.createList('BlogCategory', BlogCategorySchema);
keystone.createList('BlogImage', BlogImageSchema); 
keystone.createList('HomePageContent', HomeSchema);
keystone.createList('HomeOurWork', HomeOurWorkSchema);
keystone.createList('HomeClientLogo', HomeClientLogochema);
keystone.createList('HomeTestimonial', HomeTestimonialSchema);
keystone.createList('HomeOurService', HomeOurServicekSchema);
 






    

keystone.createList('User', {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      
      // access: {
      //   update: access.userIsAdmin,
      // },
    },
    password: {
      type: Password,
    },
  },
  // List-level access controls
  // access: {
  //   read: access.userIsAdminOrOwner,
  //   update: access.userIsAdminOrOwner,
  //   create: access.userIsAdmin,
  //   delete: access.userIsAdmin,
  //   auth: true,
  // },
});




const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: { protectIdentities: process.env.NODE_ENV === 'production' },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
      // hooks: require.resolve('./custom-hooks-path')
    }),

    // new AdminUIApp({ hooks: require.resolve('./custom-hooks-path') });

  ],
};
