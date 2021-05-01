import { datatype, commerce } from 'faker';
import { define } from 'typeorm-seeding';
import { Product } from '../../product/entities/product.entity';

define(Product, () => {
  const dimensionW = datatype.number();
  const dimensionL = datatype.number();
  const dimensionH = datatype.number();

  const product = new Product();
  product.name = commerce.productName();
  product.description = commerce.productDescription();
  product.category = commerce.department();
  product.price = commerce.price();
  product.material = commerce.productMaterial();
  product.dimension = `${dimensionW} x ${dimensionL} x ${dimensionH}`;
  product.weight = datatype.number();
  return product;
});
