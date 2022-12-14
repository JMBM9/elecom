// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products in category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories and their  Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products 
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});


Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
