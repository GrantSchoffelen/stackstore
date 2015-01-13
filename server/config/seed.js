/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Product = require('../api/product/product.model')

Product.find({}).remove(function() {
  Product.create({ 
  name: 'i-phone',
  description: 'New i-phone 6 -Plus',
  price: '$299',
  isAvailable: false,
  pictures: ['http://store.storeimages.cdn-apple.com/4330/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6/plus/iphone6-plus-box-silver-2014?'],
  categories: ['electronics']
},

{
  
  name: 'Beats Matte Solo HD Headset - Matte black',
  description: 'Beats Matte Solo HD headphones are made to be a lighter, on-ear version of studios. Compact enough to fit in your purse, Beats Matte Solo HD headphones carry the powerful signature sound Beats by Dr. Dre products are famous for.',
  price: '$129.99',
  isAvailable: true,
  pictures: ['http://www.blogcdn.com/www.engadget.com/media/2008/07/7-22-08-dr.dre_beats.jpg'],
  categories: ['electronics']
},


{  
  
  name: 'i-pad',
  description: 'New i-pad air 2',
  price: '$299',
  isAvailable: true,
  pictures: ['http://www.ncjwavic.wildapricot.org/Resources/Pictures/Misc/ipad.jpg'],
  categories: ['electronics']
},

{  
  
  name: 'Logitech K350 - Wireless Keyboard',
  description: 'A large 3.5-inch, built-in touchpad makes vertical scrolling intuitive. And multi-touch navigation makes it easier than ever to point and scroll your way through the web. Setup couldnt be easier - you simply plug the tiny wireless receiver into a USB port and enjoy', 
  price: '$299',
  isAvailable: true,
  pictures: ['http://www.wpclipart.com/computer/hardware/keyboard/keyboard_black.png'],
  categories: ['electronics']
}, 

{  
  
  name: 'Adesso iMouse E10 - 6-btn Mouse - Wireless',
  description: 'With 2.4 GHz Radio Frequency technology, the Adesso iMouse E10 provides you with wireless convenience and the freedom of a smooth connection without tangled cables. This iMouse E1 ergonomic mouse is designed with a vertical orientation and a contoured shape that provides a uniquely comfortable user experience. With this wrist-friendly contour support, you will hold your hand in a "handshake position" which is the neutral position of your forearm.', 
  price: '$29.99',
  isAvailable: true,
  pictures: ['http://www.adesso-shop.com/images/20130804175152.png'],
  categories: ['electronics']
});
});

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});