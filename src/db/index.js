import Product from "./models/product.js";
import User from "./models/user.js";
import Category from "./models/category.js";
import sequlize from "./models/index.js";

Category.hasMany(Product);
Product.belongsTo(Category);

export { Product, sequlize, User, Category };
