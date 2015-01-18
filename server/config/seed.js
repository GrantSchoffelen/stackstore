/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Category = require('../api/categories/categories.model');
var Order = require('../api/orders/orders.model');
var Review = require('../api/review/review.model');
// var Cart = require('../api/cart/cart.model');



Review.find({}).remove(function() {
  Review.create({
    var ReviewSchema = new Schema({
      _user: {type: Schema.Types.ObjectId, ref: 'user'}, 
      _prod: {type: Schema.Types.ObjectId, ref: 'product'},
      date: Date,
      text: "First review",
      rating: 5
    });
  }, {
    var ReviewSchema = new Schema({
      _user: {type: Schema.Types.ObjectId, ref: 'user'}, 
      _prod: {type: Schema.Types.ObjectId, ref: 'product'},
      date: Date,
      text: "Second review",
      rating: 3
    });
  })
});


Order.find({}).remove(function() {
  Order.create({
  cartId: "54b547f72bfa3d6e05706d63",
  userId: "54b547f72bfa3d6e05706d56",
  orderDate: 'Tue, 13 Jan 2015 17:10:53 GMT',
  orderStatus: 'Completed'
});
});


// Cart.find({}).remove(function() {
//   Cart.create({
//   userId: "54b547f72bfa3d6e05706d56",
//   cartCreationDate: 'Tue, 13 Jan 2015 17:10:53 GMT',
//   isActive: false,
//   lineItems: {quantity: 1,
//          productId: "54b547f72bfa3d6e05706d60",
//          purchasePrice:  0,
//          tax: 0.00,
//          shipping: 0
//         }
// });
// });

Product.find({}).remove(function() {
  Product.create({
    name: 'i-phone',
    description: 'New i-phone 6 -Plus',
    price: 299,
    isAvailable: false,
    pictures: ['http://store.storeimages.cdn-apple.com/4330/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6/plus/iphone6-plus-box-silver-2014?'],
    categories: ['electronics']
},

{

  name: 'Beats Matte Solo HD Headset - Matte black',
  description: 'Beats Matte Solo HD headphones are made to be a lighter, on-ear version of studios. Compact enough to fit in your purse, Beats Matte Solo HD headphones carry the powerful signature sound Beats by Dr. Dre products are famous for.',
  price: 129.99,
  isAvailable: true,
  pictures: ['http://www.blogcdn.com/www.engadget.com/media/2008/07/7-22-08-dr.dre_beats.jpg'],
  categories: ['electronics']
},


{

  name: 'i-pad',
  description: 'New i-pad air 2',
  price:  299,
  isAvailable: true,
  pictures: ['http://www.ncjwavic.wildapricot.org/Resources/Pictures/Misc/ipad.jpg'],
  categories: ['electronics']
},

{

  name: 'Logitech K350 - Wireless Keyboard',
  description: 'A large 3.5-inch, built-in touchpad makes vertical scrolling intuitive. And multi-touch navigation makes it easier than ever to point and scroll your way through the web. Setup couldnt be easier - you simply plug the tiny wireless receiver into a USB port and enjoy',
  price:  299,
  isAvailable: true,
  pictures: ['http://www.wpclipart.com/computer/hardware/keyboard/keyboard_black.png'],
  categories: ['electronics']
},

{
  name: 'Adesso iMouse E10 - 6-btn Mouse - Wireless',
  description: 'With 2.4 GHz Radio Frequency technology, the Adesso iMouse E10 provides you with wireless convenience and the freedom of a smooth connection without tangled cables. This iMouse E1 ergonomic mouse is designed with a vertical orientation and a contoured shape that provides a uniquely comfortable user experience. With this wrist-friendly contour support, you will hold your hand in a "handshake position" which is the neutral position of your forearm.',
  price:  29.99,
  isAvailable: true,
  pictures: ['http://www.adesso-shop.com/images/20130804175152.png'],
  categories: ['electronics']
},

{

  name: 'Harry Potter and the Sorcerers Stone -Book',
  description: 'Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility.',
  price:  15.37,
  isAvailable: true,
  pictures: ['https://bookysh.files.wordpress.com/2012/04/harry-potter-and-the-sorcerers-stone.jpg'],
  categories: ['books']
},

{
  name: 'A Game of Thrones -Book',
  description: "Here is the first volume in George R. R. Martin's magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords. As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer. Magic, mystery, intrigue, romance, and adventure fill these pages and transport us to a world unlike any we have ever experienced. Already hailed as a classic, George R. R. Martin's stunning series is destined to stand as one of the great achievements of imaginative fiction.",
  price:  17.99,
  isAvailable: false,
  pictures: ['http://www.georgerrmartin.com/wp-content/uploads/2013/03/GOTMTI2.jpg'],
  categories: ['books']
},

{
  name: 'The Fountainhead',
  description: "When The Fountainhead was first published, Ayn Rand's daringly original literary vision and her groundbreaking philosophy, Objectivism, won immediate worldwide interest and acclaim. This instant classic is the story of an intransigent young architect, his violent battle against conventional standards, and his explosive love affair with a beautiful woman who struggles to defeat him. This edition contains a special afterword by Rand’s literary executor, Leonard Peikoff, which includes excerpts from Ayn Rand’s own notes on the making of The Fountainhead. As fresh today as it was then, here is a novel about a hero—and about those who try to destroy him.",
  price:  25.99,
  isAvailable: true,
  pictures: ['http://www.ayn-rand-quotes.com/wp-content/uploads/2014/01/the-fountainhead.jpg'],
  categories: ['books']
},

{
  name: 'JavaScript: The Definitive Guide',
  description: "Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer's guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers. The 6th edition covers HTML5 and ECMAScript 5.",
  price:  31.45,
  isAvailable: true,
  pictures: ['http://ecx.images-amazon.com/images/I/51mb6UvEDdL._SX258_BO1,204,203,200_.jpg'],
  categories: ['books']
},

{
  name: 'To Kill a Mockingbird -Book',
  description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960.",
  price:  4.99,
  isAvailable: true,
  pictures: ['http://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG'],
  categories: ['books']
},

{
name: "Star Wars: The Complete Saga (Episodes I-VI) [Blu-ray]",
description: "The complete set of Star Wars movies in Blu-ray loaded with special features",
price: 89.96,
isAvailable: true,
pictures: ["http://ecx.images-amazon.com/images/I/81oef51MNOL._SL1500_.jpg"],
categories:['movies']
},


{
name: "The Lord of the Rings: The Motion Picture Trilogy (The Fellowship of the Ring / The Two Towers / The Return of the King Extended Editions) [Blu-ray]",
description: "Deluxe 15-Disc Set Includes 9 Special Features DVDs with over 26 Hours of Spellbinding Behind-the-Moviemaking Material Including the Rare Costa Botes Documentaries. The Lord Of The Rings: The Fellowship Of The Ring Extended Edition: With the help of a courageous fellowship of friends and allies, Frodo embarks on a perilous mission to destroy the legendary One Ring. The Lord Of The Rings: The Two Towers Extended Edition: In the middle chapter of this historic movie trilogy, the Fellowship is broken but its quest to destroy the One Ring continues. The Lord Of The Rings: The Return Of The King Extended Edition: The final battle for Middle-earth begins. Frodo and Sam, led by Gollum, continue their dangerous mission toward the fires of Mount Doom in order to destroy the One Ring.",
price: 49.99,
isAvailable: true,
pictures: ['http://www.filmchronicles.com/wp-content/uploads/2011/05/lotrBLUbig.jpg'],
categories:['movies']
},


{
name: "The Princess Bride (25th Anniversary Edition) [Blu-ray]",
description: "TRUE LOVE: THE PRINCESS BRIDE PHENOMENON (Pts. 1 & 2) For 25 years, viewers have watched and loved The Princess Bride. But why does it resonate so strongly for all ages? This two-part featurette offers some answers, along with funny and touching tributes from Rob Reiner, Cary Elwes, Robin Wright, Billy Crystal and William Goldman just to name a few.  Loaded with bonus features!",
price: 9.96,
isAvailable: true,
pictures: ['http://www.redefinedmom.com/wp-content/uploads/2013/12/Screen-Shot-2013-12-27-at-8.29.12-AM.png'],
categories:['movies']
},


{
name: "Rounders [Blu-ray]",
description: "A young man is a reformed gambler who must return to playing big stakes poker to help a friend pay off loan sharks.",
price: 7.88,
isAvailable: true,
pictures: ["http://wpc.556e.edgecastcdn.net/80556E/img.product/DVDE0HFGsVtfHG_1_l.jpg"],
categories:['movies']
},


{
name: 'V for Vendetta',
description: "The futuristic tale unfolds in a Great Britain that's a fascist state. A freedom fighter known as V uses terrorist tactics to fight the oppressive society. He rescues a young woman from the secret police, and she becomes his unlikely ally.",
price: 9.96,
isAvailable: true,
pictures: ['http://images.static-bluray.com/movies/covers/76574_medium.jpg'],
categories:['movies', 'electronics']
}



);
});


Category.find({}).remove(function() {
  Category.create({
    name : "all"
  }, {
    name : 'kitchenware'
  }, {
    name : 'entertainment'
  }, {
    name : 'clothes'
  },  {
    name : 'books'
  },  {
    name : 'movies'
  },{
    name : 'electronics'
  });
});




// Thing.find({}).remove(function() {
//   Thing.create({
//     name : 'Development Tools',
//     info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
//   }, {
//     name : 'Server and Client integration',
//     info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//   }, {
//     name : 'Smart Build System',
//     info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//   },  {
//     name : 'Modular Structure',
//     info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//   },  {
//     name : 'Optimized Build',
//     info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//   },{
//     name : 'Deployment Ready',
//     info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//   });
// });

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
     // console.log('finished populating users');
    }
  );
});