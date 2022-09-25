// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category',
});

// Categories have many Products
Category.hasMany(Products,{
  foreignKey: 'category',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: 'ProductTag',
  foreignKey: 'product',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, {  
  throw: 'ProductTag',
  foreignKey: 'tag',
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
