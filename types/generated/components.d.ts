import type { Schema, Struct } from '@strapi/strapi';

export interface PricePrice extends Struct.ComponentSchema {
  collectionName: 'components_price_prices';
  info: {
    description: '';
    displayName: 'Price';
    icon: 'priceTag';
  };
  attributes: {
    Unit: Schema.Attribute.String;
    Value: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'price.price': PricePrice;
    }
  }
}
