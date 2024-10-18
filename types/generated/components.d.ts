import type { Struct, Schema } from '@strapi/strapi';

export interface PricePrice extends Struct.ComponentSchema {
  collectionName: 'components_price_prices';
  info: {
    displayName: 'Price';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    Value: Schema.Attribute.Decimal & Schema.Attribute.Required;
    Unit: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'price.price': PricePrice;
    }
  }
}
