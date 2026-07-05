import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const BrandScalarFieldEnumSchema = z.enum(['id','name','slug','createdAt','updatedAt']);

export const CartItemScalarFieldEnumSchema = z.enum(['id','cartId','productId','quantity','createdAt','updatedAt']);

export const UserCartScalarFieldEnumSchema = z.enum(['id','userId','createdAt','updatedAt']);

export const ColorScalarFieldEnumSchema = z.enum(['id','name','hex','slug','createdAt','updatedAt']);

export const ImageScalarFieldEnumSchema = z.enum(['id','url','variantId','createdAt','updatedAt']);

export const ProductScalarFieldEnumSchema = z.enum(['id','title','description','price','discount','gender','rating','brandId','createdAt','updatedAt']);

export const RefreshTokenScalarFieldEnumSchema = z.enum(['id','refreshToken','userId','expiresAt','createdAt']);

export const SizeScalarFieldEnumSchema = z.enum(['id','name','slug','createdAt','updatedAt']);

export const StyleScalarFieldEnumSchema = z.enum(['id','name','slug','createdAt','updatedAt']);

export const UploadsImagesScalarFieldEnumSchema = z.enum(['id','name','url']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','password','isActivated','activationLink','roles','createdAt','updatedAt']);

export const VariantScalarFieldEnumSchema = z.enum(['id','colorId','productId','createdAt','updatedAt']);

export const VariantStockScalarFieldEnumSchema = z.enum(['id','variantId','sizeId','stock']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const ProductGenderSchema = z.enum(['MAN','WOMAN','UNISEX']);

export type ProductGenderType = `${z.infer<typeof ProductGenderSchema>}`

export const RoleSchema = z.enum(['USER','ADMIN']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// BRAND SCHEMA
/////////////////////////////////////////

export const BrandSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Brand = z.infer<typeof BrandSchema>

// BRAND OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const BrandOptionalDefaultsSchema = BrandSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type BrandOptionalDefaults = z.infer<typeof BrandOptionalDefaultsSchema>

/////////////////////////////////////////
// CART ITEM SCHEMA
/////////////////////////////////////////

export const CartItemSchema = z.object({
  id: z.uuid(),
  cartId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type CartItem = z.infer<typeof CartItemSchema>

// CART ITEM OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const CartItemOptionalDefaultsSchema = CartItemSchema.merge(z.object({
  id: z.uuid().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type CartItemOptionalDefaults = z.infer<typeof CartItemOptionalDefaultsSchema>

/////////////////////////////////////////
// USER CART SCHEMA
/////////////////////////////////////////

export const UserCartSchema = z.object({
  id: z.uuid(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UserCart = z.infer<typeof UserCartSchema>

// USER CART OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const UserCartOptionalDefaultsSchema = UserCartSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type UserCartOptionalDefaults = z.infer<typeof UserCartOptionalDefaultsSchema>

/////////////////////////////////////////
// COLOR SCHEMA
/////////////////////////////////////////

export const ColorSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  hex: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Color = z.infer<typeof ColorSchema>

// COLOR OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ColorOptionalDefaultsSchema = ColorSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ColorOptionalDefaults = z.infer<typeof ColorOptionalDefaultsSchema>

/////////////////////////////////////////
// IMAGE SCHEMA
/////////////////////////////////////////

export const ImageSchema = z.object({
  id: z.uuid(),
  url: z.string(),
  variantId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Image = z.infer<typeof ImageSchema>

// IMAGE OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ImageOptionalDefaultsSchema = ImageSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ImageOptionalDefaults = z.infer<typeof ImageOptionalDefaultsSchema>

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  gender: ProductGenderSchema,
  id: z.uuid(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().nullable(),
  rating: z.number(),
  brandId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Product = z.infer<typeof ProductSchema>

// PRODUCT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ProductOptionalDefaultsSchema = ProductSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ProductOptionalDefaults = z.infer<typeof ProductOptionalDefaultsSchema>

/////////////////////////////////////////
// REFRESH TOKEN SCHEMA
/////////////////////////////////////////

export const RefreshTokenSchema = z.object({
  id: z.uuid(),
  refreshToken: z.string(),
  userId: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type RefreshToken = z.infer<typeof RefreshTokenSchema>

// REFRESH TOKEN OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const RefreshTokenOptionalDefaultsSchema = RefreshTokenSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type RefreshTokenOptionalDefaults = z.infer<typeof RefreshTokenOptionalDefaultsSchema>

/////////////////////////////////////////
// SIZE SCHEMA
/////////////////////////////////////////

export const SizeSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Size = z.infer<typeof SizeSchema>

// SIZE OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const SizeOptionalDefaultsSchema = SizeSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type SizeOptionalDefaults = z.infer<typeof SizeOptionalDefaultsSchema>

/////////////////////////////////////////
// STYLE SCHEMA
/////////////////////////////////////////

export const StyleSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Style = z.infer<typeof StyleSchema>

// STYLE OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const StyleOptionalDefaultsSchema = StyleSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type StyleOptionalDefaults = z.infer<typeof StyleOptionalDefaultsSchema>

/////////////////////////////////////////
// UPLOADS IMAGES SCHEMA
/////////////////////////////////////////

export const UploadsImagesSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  url: z.string(),
})

export type UploadsImages = z.infer<typeof UploadsImagesSchema>

// UPLOADS IMAGES OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const UploadsImagesOptionalDefaultsSchema = UploadsImagesSchema.merge(z.object({
  id: z.uuid().optional(),
}))

export type UploadsImagesOptionalDefaults = z.infer<typeof UploadsImagesOptionalDefaultsSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  roles: RoleSchema.array(),
  id: z.uuid(),
  email: z.string(),
  password: z.string(),
  isActivated: z.boolean(),
  activationLink: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

// USER OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  roles: RoleSchema.array().optional(),
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

/////////////////////////////////////////
// VARIANT SCHEMA
/////////////////////////////////////////

export const VariantSchema = z.object({
  id: z.uuid(),
  colorId: z.string(),
  productId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Variant = z.infer<typeof VariantSchema>

// VARIANT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const VariantOptionalDefaultsSchema = VariantSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type VariantOptionalDefaults = z.infer<typeof VariantOptionalDefaultsSchema>

/////////////////////////////////////////
// VARIANT STOCK SCHEMA
/////////////////////////////////////////

export const VariantStockSchema = z.object({
  id: z.uuid(),
  variantId: z.string(),
  sizeId: z.string(),
  stock: z.number().int(),
})

export type VariantStock = z.infer<typeof VariantStockSchema>

// VARIANT STOCK OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const VariantStockOptionalDefaultsSchema = VariantStockSchema.merge(z.object({
  id: z.uuid().optional(),
  stock: z.number().int().optional(),
}))

export type VariantStockOptionalDefaults = z.infer<typeof VariantStockOptionalDefaultsSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// BRAND
//------------------------------------------------------

export const BrandIncludeSchema: z.ZodType<Prisma.BrandInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BrandCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const BrandArgsSchema: z.ZodType<Prisma.BrandDefaultArgs> = z.object({
  select: z.lazy(() => BrandSelectSchema).optional(),
  include: z.lazy(() => BrandIncludeSchema).optional(),
}).strict();

export const BrandCountOutputTypeArgsSchema: z.ZodType<Prisma.BrandCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BrandCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BrandCountOutputTypeSelectSchema: z.ZodType<Prisma.BrandCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const BrandSelectSchema: z.ZodType<Prisma.BrandSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BrandCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CART ITEM
//------------------------------------------------------

export const CartItemIncludeSchema: z.ZodType<Prisma.CartItemInclude> = z.object({
  cart: z.union([z.boolean(),z.lazy(() => UserCartArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict();

export const CartItemArgsSchema: z.ZodType<Prisma.CartItemDefaultArgs> = z.object({
  select: z.lazy(() => CartItemSelectSchema).optional(),
  include: z.lazy(() => CartItemIncludeSchema).optional(),
}).strict();

export const CartItemSelectSchema: z.ZodType<Prisma.CartItemSelect> = z.object({
  id: z.boolean().optional(),
  cartId: z.boolean().optional(),
  productId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  cart: z.union([z.boolean(),z.lazy(() => UserCartArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

// USER CART
//------------------------------------------------------

export const UserCartIncludeSchema: z.ZodType<Prisma.UserCartInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  items: z.union([z.boolean(),z.lazy(() => CartItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCartCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const UserCartArgsSchema: z.ZodType<Prisma.UserCartDefaultArgs> = z.object({
  select: z.lazy(() => UserCartSelectSchema).optional(),
  include: z.lazy(() => UserCartIncludeSchema).optional(),
}).strict();

export const UserCartCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCartCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCartCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCartCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCartCountOutputTypeSelect> = z.object({
  items: z.boolean().optional(),
}).strict();

export const UserCartSelectSchema: z.ZodType<Prisma.UserCartSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  items: z.union([z.boolean(),z.lazy(() => CartItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCartCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COLOR
//------------------------------------------------------

export const ColorIncludeSchema: z.ZodType<Prisma.ColorInclude> = z.object({
  variant: z.union([z.boolean(),z.lazy(() => VariantFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ColorCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const ColorArgsSchema: z.ZodType<Prisma.ColorDefaultArgs> = z.object({
  select: z.lazy(() => ColorSelectSchema).optional(),
  include: z.lazy(() => ColorIncludeSchema).optional(),
}).strict();

export const ColorCountOutputTypeArgsSchema: z.ZodType<Prisma.ColorCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ColorCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ColorCountOutputTypeSelectSchema: z.ZodType<Prisma.ColorCountOutputTypeSelect> = z.object({
  variant: z.boolean().optional(),
}).strict();

export const ColorSelectSchema: z.ZodType<Prisma.ColorSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  hex: z.boolean().optional(),
  slug: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  variant: z.union([z.boolean(),z.lazy(() => VariantFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ColorCountOutputTypeArgsSchema)]).optional(),
}).strict()

// IMAGE
//------------------------------------------------------

export const ImageIncludeSchema: z.ZodType<Prisma.ImageInclude> = z.object({
  variant: z.union([z.boolean(),z.lazy(() => VariantArgsSchema)]).optional(),
}).strict();

export const ImageArgsSchema: z.ZodType<Prisma.ImageDefaultArgs> = z.object({
  select: z.lazy(() => ImageSelectSchema).optional(),
  include: z.lazy(() => ImageIncludeSchema).optional(),
}).strict();

export const ImageSelectSchema: z.ZodType<Prisma.ImageSelect> = z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  variantId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  variant: z.union([z.boolean(),z.lazy(() => VariantArgsSchema)]).optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  styles: z.union([z.boolean(),z.lazy(() => StyleFindManyArgsSchema)]).optional(),
  brand: z.union([z.boolean(),z.lazy(() => BrandArgsSchema)]).optional(),
  variants: z.union([z.boolean(),z.lazy(() => VariantFindManyArgsSchema)]).optional(),
  cartItems: z.union([z.boolean(),z.lazy(() => CartItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const ProductArgsSchema: z.ZodType<Prisma.ProductDefaultArgs> = z.object({
  select: z.lazy(() => ProductSelectSchema).optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
}).strict();

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  styles: z.boolean().optional(),
  variants: z.boolean().optional(),
  cartItems: z.boolean().optional(),
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  discount: z.boolean().optional(),
  gender: z.boolean().optional(),
  rating: z.boolean().optional(),
  brandId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  styles: z.union([z.boolean(),z.lazy(() => StyleFindManyArgsSchema)]).optional(),
  brand: z.union([z.boolean(),z.lazy(() => BrandArgsSchema)]).optional(),
  variants: z.union([z.boolean(),z.lazy(() => VariantFindManyArgsSchema)]).optional(),
  cartItems: z.union([z.boolean(),z.lazy(() => CartItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

// REFRESH TOKEN
//------------------------------------------------------

export const RefreshTokenIncludeSchema: z.ZodType<Prisma.RefreshTokenInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict();

export const RefreshTokenArgsSchema: z.ZodType<Prisma.RefreshTokenDefaultArgs> = z.object({
  select: z.lazy(() => RefreshTokenSelectSchema).optional(),
  include: z.lazy(() => RefreshTokenIncludeSchema).optional(),
}).strict();

export const RefreshTokenSelectSchema: z.ZodType<Prisma.RefreshTokenSelect> = z.object({
  id: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SIZE
//------------------------------------------------------

export const SizeIncludeSchema: z.ZodType<Prisma.SizeInclude> = z.object({
  stocks: z.union([z.boolean(),z.lazy(() => VariantStockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SizeCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const SizeArgsSchema: z.ZodType<Prisma.SizeDefaultArgs> = z.object({
  select: z.lazy(() => SizeSelectSchema).optional(),
  include: z.lazy(() => SizeIncludeSchema).optional(),
}).strict();

export const SizeCountOutputTypeArgsSchema: z.ZodType<Prisma.SizeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SizeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const SizeCountOutputTypeSelectSchema: z.ZodType<Prisma.SizeCountOutputTypeSelect> = z.object({
  stocks: z.boolean().optional(),
}).strict();

export const SizeSelectSchema: z.ZodType<Prisma.SizeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  stocks: z.union([z.boolean(),z.lazy(() => VariantStockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SizeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// STYLE
//------------------------------------------------------

export const StyleIncludeSchema: z.ZodType<Prisma.StyleInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StyleCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const StyleArgsSchema: z.ZodType<Prisma.StyleDefaultArgs> = z.object({
  select: z.lazy(() => StyleSelectSchema).optional(),
  include: z.lazy(() => StyleIncludeSchema).optional(),
}).strict();

export const StyleCountOutputTypeArgsSchema: z.ZodType<Prisma.StyleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => StyleCountOutputTypeSelectSchema).nullish(),
}).strict();

export const StyleCountOutputTypeSelectSchema: z.ZodType<Prisma.StyleCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const StyleSelectSchema: z.ZodType<Prisma.StyleSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StyleCountOutputTypeArgsSchema)]).optional(),
}).strict()

// UPLOADS IMAGES
//------------------------------------------------------

export const UploadsImagesSelectSchema: z.ZodType<Prisma.UploadsImagesSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  url: z.boolean().optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  refreshTokens: z.union([z.boolean(),z.lazy(() => RefreshTokenArgsSchema)]).optional(),
  cart: z.union([z.boolean(),z.lazy(() => UserCartArgsSchema)]).optional(),
}).strict();

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  isActivated: z.boolean().optional(),
  activationLink: z.boolean().optional(),
  roles: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  refreshTokens: z.union([z.boolean(),z.lazy(() => RefreshTokenArgsSchema)]).optional(),
  cart: z.union([z.boolean(),z.lazy(() => UserCartArgsSchema)]).optional(),
}).strict()

// VARIANT
//------------------------------------------------------

export const VariantIncludeSchema: z.ZodType<Prisma.VariantInclude> = z.object({
  color: z.union([z.boolean(),z.lazy(() => ColorArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  images: z.union([z.boolean(),z.lazy(() => ImageFindManyArgsSchema)]).optional(),
  variantStocks: z.union([z.boolean(),z.lazy(() => VariantStockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VariantCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const VariantArgsSchema: z.ZodType<Prisma.VariantDefaultArgs> = z.object({
  select: z.lazy(() => VariantSelectSchema).optional(),
  include: z.lazy(() => VariantIncludeSchema).optional(),
}).strict();

export const VariantCountOutputTypeArgsSchema: z.ZodType<Prisma.VariantCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => VariantCountOutputTypeSelectSchema).nullish(),
}).strict();

export const VariantCountOutputTypeSelectSchema: z.ZodType<Prisma.VariantCountOutputTypeSelect> = z.object({
  images: z.boolean().optional(),
  variantStocks: z.boolean().optional(),
}).strict();

export const VariantSelectSchema: z.ZodType<Prisma.VariantSelect> = z.object({
  id: z.boolean().optional(),
  colorId: z.boolean().optional(),
  productId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  color: z.union([z.boolean(),z.lazy(() => ColorArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  images: z.union([z.boolean(),z.lazy(() => ImageFindManyArgsSchema)]).optional(),
  variantStocks: z.union([z.boolean(),z.lazy(() => VariantStockFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VariantCountOutputTypeArgsSchema)]).optional(),
}).strict()

// VARIANT STOCK
//------------------------------------------------------

export const VariantStockIncludeSchema: z.ZodType<Prisma.VariantStockInclude> = z.object({
  variant: z.union([z.boolean(),z.lazy(() => VariantArgsSchema)]).optional(),
  size: z.union([z.boolean(),z.lazy(() => SizeArgsSchema)]).optional(),
}).strict();

export const VariantStockArgsSchema: z.ZodType<Prisma.VariantStockDefaultArgs> = z.object({
  select: z.lazy(() => VariantStockSelectSchema).optional(),
  include: z.lazy(() => VariantStockIncludeSchema).optional(),
}).strict();

export const VariantStockSelectSchema: z.ZodType<Prisma.VariantStockSelect> = z.object({
  id: z.boolean().optional(),
  variantId: z.boolean().optional(),
  sizeId: z.boolean().optional(),
  stock: z.boolean().optional(),
  variant: z.union([z.boolean(),z.lazy(() => VariantArgsSchema)]).optional(),
  size: z.union([z.boolean(),z.lazy(() => SizeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const BrandWhereInputSchema: z.ZodType<Prisma.BrandWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BrandWhereInputSchema), z.lazy(() => BrandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BrandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BrandWhereInputSchema), z.lazy(() => BrandWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional(),
});

export const BrandOrderByWithRelationInputSchema: z.ZodType<Prisma.BrandOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional(),
});

export const BrandWhereUniqueInputSchema: z.ZodType<Prisma.BrandWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    name: z.string(),
    slug: z.string(),
  }),
  z.object({
    id: z.uuid(),
    name: z.string(),
  }),
  z.object({
    id: z.uuid(),
    slug: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    name: z.string(),
    slug: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => BrandWhereInputSchema), z.lazy(() => BrandWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BrandWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BrandWhereInputSchema), z.lazy(() => BrandWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional(),
}));

export const BrandOrderByWithAggregationInputSchema: z.ZodType<Prisma.BrandOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BrandCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BrandMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BrandMinOrderByAggregateInputSchema).optional(),
});

export const BrandScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BrandScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BrandScalarWhereWithAggregatesInputSchema), z.lazy(() => BrandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BrandScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BrandScalarWhereWithAggregatesInputSchema), z.lazy(() => BrandScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const CartItemWhereInputSchema: z.ZodType<Prisma.CartItemWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CartItemWhereInputSchema), z.lazy(() => CartItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CartItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CartItemWhereInputSchema), z.lazy(() => CartItemWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  cartId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  cart: z.union([ z.lazy(() => UserCartScalarRelationFilterSchema), z.lazy(() => UserCartWhereInputSchema) ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema), z.lazy(() => ProductWhereInputSchema) ]).optional(),
});

export const CartItemOrderByWithRelationInputSchema: z.ZodType<Prisma.CartItemOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cartId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  cart: z.lazy(() => UserCartOrderByWithRelationInputSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
});

export const CartItemWhereUniqueInputSchema: z.ZodType<Prisma.CartItemWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    cartId_productId: z.lazy(() => CartItemCartIdProductIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    cartId_productId: z.lazy(() => CartItemCartIdProductIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  cartId_productId: z.lazy(() => CartItemCartIdProductIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => CartItemWhereInputSchema), z.lazy(() => CartItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CartItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CartItemWhereInputSchema), z.lazy(() => CartItemWhereInputSchema).array() ]).optional(),
  cartId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  cart: z.union([ z.lazy(() => UserCartScalarRelationFilterSchema), z.lazy(() => UserCartWhereInputSchema) ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema), z.lazy(() => ProductWhereInputSchema) ]).optional(),
}));

export const CartItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.CartItemOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cartId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CartItemCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CartItemAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CartItemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CartItemMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CartItemSumOrderByAggregateInputSchema).optional(),
});

export const CartItemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CartItemScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CartItemScalarWhereWithAggregatesInputSchema), z.lazy(() => CartItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CartItemScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CartItemScalarWhereWithAggregatesInputSchema), z.lazy(() => CartItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  cartId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const UserCartWhereInputSchema: z.ZodType<Prisma.UserCartWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserCartWhereInputSchema), z.lazy(() => UserCartWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserCartWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserCartWhereInputSchema), z.lazy(() => UserCartWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  items: z.lazy(() => CartItemListRelationFilterSchema).optional(),
});

export const UserCartOrderByWithRelationInputSchema: z.ZodType<Prisma.UserCartOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  items: z.lazy(() => CartItemOrderByRelationAggregateInputSchema).optional(),
});

export const UserCartWhereUniqueInputSchema: z.ZodType<Prisma.UserCartWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    userId: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => UserCartWhereInputSchema), z.lazy(() => UserCartWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserCartWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserCartWhereInputSchema), z.lazy(() => UserCartWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  items: z.lazy(() => CartItemListRelationFilterSchema).optional(),
}));

export const UserCartOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserCartOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCartCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserCartMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserCartMinOrderByAggregateInputSchema).optional(),
});

export const UserCartScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserCartScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserCartScalarWhereWithAggregatesInputSchema), z.lazy(() => UserCartScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserCartScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserCartScalarWhereWithAggregatesInputSchema), z.lazy(() => UserCartScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const ColorWhereInputSchema: z.ZodType<Prisma.ColorWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ColorWhereInputSchema), z.lazy(() => ColorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColorWhereInputSchema), z.lazy(() => ColorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  hex: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  variant: z.lazy(() => VariantListRelationFilterSchema).optional(),
});

export const ColorOrderByWithRelationInputSchema: z.ZodType<Prisma.ColorOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  hex: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  variant: z.lazy(() => VariantOrderByRelationAggregateInputSchema).optional(),
});

export const ColorWhereUniqueInputSchema: z.ZodType<Prisma.ColorWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    name: z.string(),
    hex: z.string(),
    slug: z.string(),
  }),
  z.object({
    id: z.uuid(),
    name: z.string(),
    hex: z.string(),
  }),
  z.object({
    id: z.uuid(),
    name: z.string(),
    slug: z.string(),
  }),
  z.object({
    id: z.uuid(),
    name: z.string(),
  }),
  z.object({
    id: z.uuid(),
    hex: z.string(),
    slug: z.string(),
  }),
  z.object({
    id: z.uuid(),
    hex: z.string(),
  }),
  z.object({
    id: z.uuid(),
    slug: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    name: z.string(),
    hex: z.string(),
    slug: z.string(),
  }),
  z.object({
    name: z.string(),
    hex: z.string(),
  }),
  z.object({
    name: z.string(),
    slug: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    hex: z.string(),
    slug: z.string(),
  }),
  z.object({
    hex: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  name: z.string().optional(),
  hex: z.string().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => ColorWhereInputSchema), z.lazy(() => ColorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColorWhereInputSchema), z.lazy(() => ColorWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  variant: z.lazy(() => VariantListRelationFilterSchema).optional(),
}));

export const ColorOrderByWithAggregationInputSchema: z.ZodType<Prisma.ColorOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  hex: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ColorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ColorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ColorMinOrderByAggregateInputSchema).optional(),
});

export const ColorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ColorScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ColorScalarWhereWithAggregatesInputSchema), z.lazy(() => ColorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ColorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ColorScalarWhereWithAggregatesInputSchema), z.lazy(() => ColorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  hex: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const ImageWhereInputSchema: z.ZodType<Prisma.ImageWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ImageWhereInputSchema), z.lazy(() => ImageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageWhereInputSchema), z.lazy(() => ImageWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  variantId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  variant: z.union([ z.lazy(() => VariantScalarRelationFilterSchema), z.lazy(() => VariantWhereInputSchema) ]).optional(),
});

export const ImageOrderByWithRelationInputSchema: z.ZodType<Prisma.ImageOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  variantId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  variant: z.lazy(() => VariantOrderByWithRelationInputSchema).optional(),
});

export const ImageWhereUniqueInputSchema: z.ZodType<Prisma.ImageWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => ImageWhereInputSchema), z.lazy(() => ImageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageWhereInputSchema), z.lazy(() => ImageWhereInputSchema).array() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  variantId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  variant: z.union([ z.lazy(() => VariantScalarRelationFilterSchema), z.lazy(() => VariantWhereInputSchema) ]).optional(),
}));

export const ImageOrderByWithAggregationInputSchema: z.ZodType<Prisma.ImageOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  variantId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ImageCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ImageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ImageMinOrderByAggregateInputSchema).optional(),
});

export const ImageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ImageScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ImageScalarWhereWithAggregatesInputSchema), z.lazy(() => ImageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageScalarWhereWithAggregatesInputSchema), z.lazy(() => ImageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  variantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  discount: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  gender: z.union([ z.lazy(() => EnumProductGenderFilterSchema), z.lazy(() => ProductGenderSchema) ]).optional(),
  rating: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  brandId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  styles: z.lazy(() => StyleListRelationFilterSchema).optional(),
  brand: z.union([ z.lazy(() => BrandScalarRelationFilterSchema), z.lazy(() => BrandWhereInputSchema) ]).optional(),
  variants: z.lazy(() => VariantListRelationFilterSchema).optional(),
  cartItems: z.lazy(() => CartItemListRelationFilterSchema).optional(),
});

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  discount: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  styles: z.lazy(() => StyleOrderByRelationAggregateInputSchema).optional(),
  brand: z.lazy(() => BrandOrderByWithRelationInputSchema).optional(),
  variants: z.lazy(() => VariantOrderByRelationAggregateInputSchema).optional(),
  cartItems: z.lazy(() => CartItemOrderByRelationAggregateInputSchema).optional(),
});

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  discount: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  gender: z.union([ z.lazy(() => EnumProductGenderFilterSchema), z.lazy(() => ProductGenderSchema) ]).optional(),
  rating: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  brandId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  styles: z.lazy(() => StyleListRelationFilterSchema).optional(),
  brand: z.union([ z.lazy(() => BrandScalarRelationFilterSchema), z.lazy(() => BrandWhereInputSchema) ]).optional(),
  variants: z.lazy(() => VariantListRelationFilterSchema).optional(),
  cartItems: z.lazy(() => CartItemListRelationFilterSchema).optional(),
}));

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  discount: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputSchema).optional(),
});

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema), z.number() ]).optional(),
  discount: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  gender: z.union([ z.lazy(() => EnumProductGenderWithAggregatesFilterSchema), z.lazy(() => ProductGenderSchema) ]).optional(),
  rating: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema), z.number() ]).optional(),
  brandId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const RefreshTokenWhereInputSchema: z.ZodType<Prisma.RefreshTokenWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => RefreshTokenWhereInputSchema), z.lazy(() => RefreshTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RefreshTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RefreshTokenWhereInputSchema), z.lazy(() => RefreshTokenWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  refreshToken: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
});

export const RefreshTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.RefreshTokenOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
});

export const RefreshTokenWhereUniqueInputSchema: z.ZodType<Prisma.RefreshTokenWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    refreshToken: z.string(),
    userId: z.string(),
  }),
  z.object({
    id: z.uuid(),
    refreshToken: z.string(),
  }),
  z.object({
    id: z.uuid(),
    userId: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    refreshToken: z.string(),
    userId: z.string(),
  }),
  z.object({
    refreshToken: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  refreshToken: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => RefreshTokenWhereInputSchema), z.lazy(() => RefreshTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RefreshTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RefreshTokenWhereInputSchema), z.lazy(() => RefreshTokenWhereInputSchema).array() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
}));

export const RefreshTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.RefreshTokenOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RefreshTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RefreshTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RefreshTokenMinOrderByAggregateInputSchema).optional(),
});

export const RefreshTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RefreshTokenScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => RefreshTokenScalarWhereWithAggregatesInputSchema), z.lazy(() => RefreshTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RefreshTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RefreshTokenScalarWhereWithAggregatesInputSchema), z.lazy(() => RefreshTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  refreshToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const SizeWhereInputSchema: z.ZodType<Prisma.SizeWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SizeWhereInputSchema), z.lazy(() => SizeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SizeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SizeWhereInputSchema), z.lazy(() => SizeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  stocks: z.lazy(() => VariantStockListRelationFilterSchema).optional(),
});

export const SizeOrderByWithRelationInputSchema: z.ZodType<Prisma.SizeOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  stocks: z.lazy(() => VariantStockOrderByRelationAggregateInputSchema).optional(),
});

export const SizeWhereUniqueInputSchema: z.ZodType<Prisma.SizeWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    name: z.string(),
    slug: z.string(),
  }),
  z.object({
    id: z.uuid(),
    name: z.string(),
  }),
  z.object({
    id: z.uuid(),
    slug: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    name: z.string(),
    slug: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => SizeWhereInputSchema), z.lazy(() => SizeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SizeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SizeWhereInputSchema), z.lazy(() => SizeWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  stocks: z.lazy(() => VariantStockListRelationFilterSchema).optional(),
}));

export const SizeOrderByWithAggregationInputSchema: z.ZodType<Prisma.SizeOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SizeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SizeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SizeMinOrderByAggregateInputSchema).optional(),
});

export const SizeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SizeScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SizeScalarWhereWithAggregatesInputSchema), z.lazy(() => SizeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SizeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SizeScalarWhereWithAggregatesInputSchema), z.lazy(() => SizeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const StyleWhereInputSchema: z.ZodType<Prisma.StyleWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => StyleWhereInputSchema), z.lazy(() => StyleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StyleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StyleWhereInputSchema), z.lazy(() => StyleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional(),
});

export const StyleOrderByWithRelationInputSchema: z.ZodType<Prisma.StyleOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional(),
});

export const StyleWhereUniqueInputSchema: z.ZodType<Prisma.StyleWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    name: z.string(),
    slug: z.string(),
  }),
  z.object({
    id: z.uuid(),
    name: z.string(),
  }),
  z.object({
    id: z.uuid(),
    slug: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    name: z.string(),
    slug: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => StyleWhereInputSchema), z.lazy(() => StyleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StyleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StyleWhereInputSchema), z.lazy(() => StyleWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional(),
}));

export const StyleOrderByWithAggregationInputSchema: z.ZodType<Prisma.StyleOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StyleCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StyleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StyleMinOrderByAggregateInputSchema).optional(),
});

export const StyleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StyleScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => StyleScalarWhereWithAggregatesInputSchema), z.lazy(() => StyleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StyleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StyleScalarWhereWithAggregatesInputSchema), z.lazy(() => StyleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const UploadsImagesWhereInputSchema: z.ZodType<Prisma.UploadsImagesWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UploadsImagesWhereInputSchema), z.lazy(() => UploadsImagesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UploadsImagesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UploadsImagesWhereInputSchema), z.lazy(() => UploadsImagesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
});

export const UploadsImagesOrderByWithRelationInputSchema: z.ZodType<Prisma.UploadsImagesOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
});

export const UploadsImagesWhereUniqueInputSchema: z.ZodType<Prisma.UploadsImagesWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => UploadsImagesWhereInputSchema), z.lazy(() => UploadsImagesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UploadsImagesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UploadsImagesWhereInputSchema), z.lazy(() => UploadsImagesWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
}));

export const UploadsImagesOrderByWithAggregationInputSchema: z.ZodType<Prisma.UploadsImagesOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UploadsImagesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UploadsImagesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UploadsImagesMinOrderByAggregateInputSchema).optional(),
});

export const UploadsImagesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UploadsImagesScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UploadsImagesScalarWhereWithAggregatesInputSchema), z.lazy(() => UploadsImagesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UploadsImagesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UploadsImagesScalarWhereWithAggregatesInputSchema), z.lazy(() => UploadsImagesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActivated: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  activationLink: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  roles: z.lazy(() => EnumRoleNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  refreshTokens: z.union([ z.lazy(() => RefreshTokenNullableScalarRelationFilterSchema), z.lazy(() => RefreshTokenWhereInputSchema) ]).optional().nullable(),
  cart: z.union([ z.lazy(() => UserCartNullableScalarRelationFilterSchema), z.lazy(() => UserCartWhereInputSchema) ]).optional().nullable(),
});

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  isActivated: z.lazy(() => SortOrderSchema).optional(),
  activationLink: z.lazy(() => SortOrderSchema).optional(),
  roles: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  refreshTokens: z.lazy(() => RefreshTokenOrderByWithRelationInputSchema).optional(),
  cart: z.lazy(() => UserCartOrderByWithRelationInputSchema).optional(),
});

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    email: z.string(),
    activationLink: z.string(),
  }),
  z.object({
    id: z.uuid(),
    email: z.string(),
  }),
  z.object({
    id: z.uuid(),
    activationLink: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    email: z.string(),
    activationLink: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
  z.object({
    activationLink: z.string(),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  email: z.string().optional(),
  activationLink: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isActivated: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  roles: z.lazy(() => EnumRoleNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  refreshTokens: z.union([ z.lazy(() => RefreshTokenNullableScalarRelationFilterSchema), z.lazy(() => RefreshTokenWhereInputSchema) ]).optional().nullable(),
  cart: z.union([ z.lazy(() => UserCartNullableScalarRelationFilterSchema), z.lazy(() => UserCartWhereInputSchema) ]).optional().nullable(),
}));

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  isActivated: z.lazy(() => SortOrderSchema).optional(),
  activationLink: z.lazy(() => SortOrderSchema).optional(),
  roles: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
});

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  isActivated: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  activationLink: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  roles: z.lazy(() => EnumRoleNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const VariantWhereInputSchema: z.ZodType<Prisma.VariantWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => VariantWhereInputSchema), z.lazy(() => VariantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VariantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VariantWhereInputSchema), z.lazy(() => VariantWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  colorId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  color: z.union([ z.lazy(() => ColorScalarRelationFilterSchema), z.lazy(() => ColorWhereInputSchema) ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema), z.lazy(() => ProductWhereInputSchema) ]).optional(),
  images: z.lazy(() => ImageListRelationFilterSchema).optional(),
  variantStocks: z.lazy(() => VariantStockListRelationFilterSchema).optional(),
});

export const VariantOrderByWithRelationInputSchema: z.ZodType<Prisma.VariantOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => ColorOrderByWithRelationInputSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
  images: z.lazy(() => ImageOrderByRelationAggregateInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockOrderByRelationAggregateInputSchema).optional(),
});

export const VariantWhereUniqueInputSchema: z.ZodType<Prisma.VariantWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    productId_colorId: z.lazy(() => VariantProductIdColorIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    productId_colorId: z.lazy(() => VariantProductIdColorIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  productId_colorId: z.lazy(() => VariantProductIdColorIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VariantWhereInputSchema), z.lazy(() => VariantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VariantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VariantWhereInputSchema), z.lazy(() => VariantWhereInputSchema).array() ]).optional(),
  colorId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  color: z.union([ z.lazy(() => ColorScalarRelationFilterSchema), z.lazy(() => ColorWhereInputSchema) ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema), z.lazy(() => ProductWhereInputSchema) ]).optional(),
  images: z.lazy(() => ImageListRelationFilterSchema).optional(),
  variantStocks: z.lazy(() => VariantStockListRelationFilterSchema).optional(),
}));

export const VariantOrderByWithAggregationInputSchema: z.ZodType<Prisma.VariantOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VariantCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VariantMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VariantMinOrderByAggregateInputSchema).optional(),
});

export const VariantScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VariantScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => VariantScalarWhereWithAggregatesInputSchema), z.lazy(() => VariantScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VariantScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VariantScalarWhereWithAggregatesInputSchema), z.lazy(() => VariantScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  colorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const VariantStockWhereInputSchema: z.ZodType<Prisma.VariantStockWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => VariantStockWhereInputSchema), z.lazy(() => VariantStockWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VariantStockWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VariantStockWhereInputSchema), z.lazy(() => VariantStockWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  variantId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sizeId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  stock: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  variant: z.union([ z.lazy(() => VariantScalarRelationFilterSchema), z.lazy(() => VariantWhereInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeScalarRelationFilterSchema), z.lazy(() => SizeWhereInputSchema) ]).optional(),
});

export const VariantStockOrderByWithRelationInputSchema: z.ZodType<Prisma.VariantStockOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  variantId: z.lazy(() => SortOrderSchema).optional(),
  sizeId: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  variant: z.lazy(() => VariantOrderByWithRelationInputSchema).optional(),
  size: z.lazy(() => SizeOrderByWithRelationInputSchema).optional(),
});

export const VariantStockWhereUniqueInputSchema: z.ZodType<Prisma.VariantStockWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    variantId_sizeId: z.lazy(() => VariantStockVariantIdSizeIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    variantId_sizeId: z.lazy(() => VariantStockVariantIdSizeIdCompoundUniqueInputSchema),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  variantId_sizeId: z.lazy(() => VariantStockVariantIdSizeIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VariantStockWhereInputSchema), z.lazy(() => VariantStockWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VariantStockWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VariantStockWhereInputSchema), z.lazy(() => VariantStockWhereInputSchema).array() ]).optional(),
  variantId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sizeId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  stock: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  variant: z.union([ z.lazy(() => VariantScalarRelationFilterSchema), z.lazy(() => VariantWhereInputSchema) ]).optional(),
  size: z.union([ z.lazy(() => SizeScalarRelationFilterSchema), z.lazy(() => SizeWhereInputSchema) ]).optional(),
}));

export const VariantStockOrderByWithAggregationInputSchema: z.ZodType<Prisma.VariantStockOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  variantId: z.lazy(() => SortOrderSchema).optional(),
  sizeId: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VariantStockCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VariantStockAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VariantStockMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VariantStockMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VariantStockSumOrderByAggregateInputSchema).optional(),
});

export const VariantStockScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VariantStockScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => VariantStockScalarWhereWithAggregatesInputSchema), z.lazy(() => VariantStockScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VariantStockScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VariantStockScalarWhereWithAggregatesInputSchema), z.lazy(() => VariantStockScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  variantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  sizeId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  stock: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
});

export const BrandCreateInputSchema: z.ZodType<Prisma.BrandCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutBrandInputSchema).optional(),
});

export const BrandUncheckedCreateInputSchema: z.ZodType<Prisma.BrandUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutBrandInputSchema).optional(),
});

export const BrandUpdateInputSchema: z.ZodType<Prisma.BrandUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutBrandNestedInputSchema).optional(),
});

export const BrandUncheckedUpdateInputSchema: z.ZodType<Prisma.BrandUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutBrandNestedInputSchema).optional(),
});

export const BrandCreateManyInputSchema: z.ZodType<Prisma.BrandCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const BrandUpdateManyMutationInputSchema: z.ZodType<Prisma.BrandUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const BrandUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BrandUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const CartItemCreateInputSchema: z.ZodType<Prisma.CartItemCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cart: z.lazy(() => UserCartCreateNestedOneWithoutItemsInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutCartItemsInputSchema),
});

export const CartItemUncheckedCreateInputSchema: z.ZodType<Prisma.CartItemUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  cartId: z.string(),
  productId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const CartItemUpdateInputSchema: z.ZodType<Prisma.CartItemUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cart: z.lazy(() => UserCartUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutCartItemsNestedInputSchema).optional(),
});

export const CartItemUncheckedUpdateInputSchema: z.ZodType<Prisma.CartItemUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cartId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const CartItemCreateManyInputSchema: z.ZodType<Prisma.CartItemCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  cartId: z.string(),
  productId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const CartItemUpdateManyMutationInputSchema: z.ZodType<Prisma.CartItemUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const CartItemUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CartItemUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cartId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserCartCreateInputSchema: z.ZodType<Prisma.UserCartCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCartInputSchema),
  items: z.lazy(() => CartItemCreateNestedManyWithoutCartInputSchema).optional(),
});

export const UserCartUncheckedCreateInputSchema: z.ZodType<Prisma.UserCartUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartInputSchema).optional(),
});

export const UserCartUpdateInputSchema: z.ZodType<Prisma.UserCartUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCartNestedInputSchema).optional(),
  items: z.lazy(() => CartItemUpdateManyWithoutCartNestedInputSchema).optional(),
});

export const UserCartUncheckedUpdateInputSchema: z.ZodType<Prisma.UserCartUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => CartItemUncheckedUpdateManyWithoutCartNestedInputSchema).optional(),
});

export const UserCartCreateManyInputSchema: z.ZodType<Prisma.UserCartCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const UserCartUpdateManyMutationInputSchema: z.ZodType<Prisma.UserCartUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserCartUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserCartUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ColorCreateInputSchema: z.ZodType<Prisma.ColorCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  hex: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  variant: z.lazy(() => VariantCreateNestedManyWithoutColorInputSchema).optional(),
});

export const ColorUncheckedCreateInputSchema: z.ZodType<Prisma.ColorUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  hex: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  variant: z.lazy(() => VariantUncheckedCreateNestedManyWithoutColorInputSchema).optional(),
});

export const ColorUpdateInputSchema: z.ZodType<Prisma.ColorUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  variant: z.lazy(() => VariantUpdateManyWithoutColorNestedInputSchema).optional(),
});

export const ColorUncheckedUpdateInputSchema: z.ZodType<Prisma.ColorUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  variant: z.lazy(() => VariantUncheckedUpdateManyWithoutColorNestedInputSchema).optional(),
});

export const ColorCreateManyInputSchema: z.ZodType<Prisma.ColorCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  hex: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ColorUpdateManyMutationInputSchema: z.ZodType<Prisma.ColorUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ColorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ColorUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ImageCreateInputSchema: z.ZodType<Prisma.ImageCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  url: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  variant: z.lazy(() => VariantCreateNestedOneWithoutImagesInputSchema),
});

export const ImageUncheckedCreateInputSchema: z.ZodType<Prisma.ImageUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  url: z.string(),
  variantId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ImageUpdateInputSchema: z.ZodType<Prisma.ImageUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  variant: z.lazy(() => VariantUpdateOneRequiredWithoutImagesNestedInputSchema).optional(),
});

export const ImageUncheckedUpdateInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  variantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ImageCreateManyInputSchema: z.ZodType<Prisma.ImageCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  url: z.string(),
  variantId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ImageUpdateManyMutationInputSchema: z.ZodType<Prisma.ImageUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ImageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  variantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  styles: z.lazy(() => StyleCreateNestedManyWithoutProductsInputSchema).optional(),
  brand: z.lazy(() => BrandCreateNestedOneWithoutProductsInputSchema),
  variants: z.lazy(() => VariantCreateNestedManyWithoutProductInputSchema).optional(),
  cartItems: z.lazy(() => CartItemCreateNestedManyWithoutProductInputSchema).optional(),
});

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  brandId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  styles: z.lazy(() => StyleUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  variants: z.lazy(() => VariantUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
});

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  styles: z.lazy(() => StyleUpdateManyWithoutProductsNestedInputSchema).optional(),
  brand: z.lazy(() => BrandUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  variants: z.lazy(() => VariantUpdateManyWithoutProductNestedInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUpdateManyWithoutProductNestedInputSchema).optional(),
});

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  styles: z.lazy(() => StyleUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  variants: z.lazy(() => VariantUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
});

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  brandId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const RefreshTokenCreateInputSchema: z.ZodType<Prisma.RefreshTokenCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  refreshToken: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRefreshTokensInputSchema),
});

export const RefreshTokenUncheckedCreateInputSchema: z.ZodType<Prisma.RefreshTokenUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  refreshToken: z.string(),
  userId: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export const RefreshTokenUpdateInputSchema: z.ZodType<Prisma.RefreshTokenUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRefreshTokensNestedInputSchema).optional(),
});

export const RefreshTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.RefreshTokenUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const RefreshTokenCreateManyInputSchema: z.ZodType<Prisma.RefreshTokenCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  refreshToken: z.string(),
  userId: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export const RefreshTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.RefreshTokenUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const RefreshTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RefreshTokenUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SizeCreateInputSchema: z.ZodType<Prisma.SizeCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  stocks: z.lazy(() => VariantStockCreateNestedManyWithoutSizeInputSchema).optional(),
});

export const SizeUncheckedCreateInputSchema: z.ZodType<Prisma.SizeUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  stocks: z.lazy(() => VariantStockUncheckedCreateNestedManyWithoutSizeInputSchema).optional(),
});

export const SizeUpdateInputSchema: z.ZodType<Prisma.SizeUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stocks: z.lazy(() => VariantStockUpdateManyWithoutSizeNestedInputSchema).optional(),
});

export const SizeUncheckedUpdateInputSchema: z.ZodType<Prisma.SizeUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  stocks: z.lazy(() => VariantStockUncheckedUpdateManyWithoutSizeNestedInputSchema).optional(),
});

export const SizeCreateManyInputSchema: z.ZodType<Prisma.SizeCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const SizeUpdateManyMutationInputSchema: z.ZodType<Prisma.SizeUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SizeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SizeUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const StyleCreateInputSchema: z.ZodType<Prisma.StyleCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutStylesInputSchema).optional(),
});

export const StyleUncheckedCreateInputSchema: z.ZodType<Prisma.StyleUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutStylesInputSchema).optional(),
});

export const StyleUpdateInputSchema: z.ZodType<Prisma.StyleUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutStylesNestedInputSchema).optional(),
});

export const StyleUncheckedUpdateInputSchema: z.ZodType<Prisma.StyleUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutStylesNestedInputSchema).optional(),
});

export const StyleCreateManyInputSchema: z.ZodType<Prisma.StyleCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const StyleUpdateManyMutationInputSchema: z.ZodType<Prisma.StyleUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const StyleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StyleUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UploadsImagesCreateInputSchema: z.ZodType<Prisma.UploadsImagesCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  url: z.string(),
});

export const UploadsImagesUncheckedCreateInputSchema: z.ZodType<Prisma.UploadsImagesUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  url: z.string(),
});

export const UploadsImagesUpdateInputSchema: z.ZodType<Prisma.UploadsImagesUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UploadsImagesUncheckedUpdateInputSchema: z.ZodType<Prisma.UploadsImagesUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UploadsImagesCreateManyInputSchema: z.ZodType<Prisma.UploadsImagesCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  url: z.string(),
});

export const UploadsImagesUpdateManyMutationInputSchema: z.ZodType<Prisma.UploadsImagesUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UploadsImagesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UploadsImagesUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  email: z.string(),
  password: z.string(),
  isActivated: z.boolean(),
  activationLink: z.string(),
  roles: z.union([ z.lazy(() => UserCreaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  refreshTokens: z.lazy(() => RefreshTokenCreateNestedOneWithoutUserInputSchema).optional(),
  cart: z.lazy(() => UserCartCreateNestedOneWithoutUserInputSchema).optional(),
});

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  email: z.string(),
  password: z.string(),
  isActivated: z.boolean(),
  activationLink: z.string(),
  roles: z.union([ z.lazy(() => UserCreaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  refreshTokens: z.lazy(() => RefreshTokenUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  cart: z.lazy(() => UserCartUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
});

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActivated: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  activationLink: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.union([ z.lazy(() => UserUpdaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  refreshTokens: z.lazy(() => RefreshTokenUpdateOneWithoutUserNestedInputSchema).optional(),
  cart: z.lazy(() => UserCartUpdateOneWithoutUserNestedInputSchema).optional(),
});

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActivated: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  activationLink: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.union([ z.lazy(() => UserUpdaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  refreshTokens: z.lazy(() => RefreshTokenUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  cart: z.lazy(() => UserCartUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
});

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  email: z.string(),
  password: z.string(),
  isActivated: z.boolean(),
  activationLink: z.string(),
  roles: z.union([ z.lazy(() => UserCreaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActivated: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  activationLink: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.union([ z.lazy(() => UserUpdaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActivated: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  activationLink: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.union([ z.lazy(() => UserUpdaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantCreateInputSchema: z.ZodType<Prisma.VariantCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  color: z.lazy(() => ColorCreateNestedOneWithoutVariantInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutVariantsInputSchema),
  images: z.lazy(() => ImageCreateNestedManyWithoutVariantInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockCreateNestedManyWithoutVariantInputSchema).optional(),
});

export const VariantUncheckedCreateInputSchema: z.ZodType<Prisma.VariantUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  colorId: z.string(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutVariantInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockUncheckedCreateNestedManyWithoutVariantInputSchema).optional(),
});

export const VariantUpdateInputSchema: z.ZodType<Prisma.VariantUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.lazy(() => ColorUpdateOneRequiredWithoutVariantNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutVariantsNestedInputSchema).optional(),
  images: z.lazy(() => ImageUpdateManyWithoutVariantNestedInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockUpdateManyWithoutVariantNestedInputSchema).optional(),
});

export const VariantUncheckedUpdateInputSchema: z.ZodType<Prisma.VariantUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.lazy(() => ImageUncheckedUpdateManyWithoutVariantNestedInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockUncheckedUpdateManyWithoutVariantNestedInputSchema).optional(),
});

export const VariantCreateManyInputSchema: z.ZodType<Prisma.VariantCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  colorId: z.string(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const VariantUpdateManyMutationInputSchema: z.ZodType<Prisma.VariantUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VariantUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantStockCreateInputSchema: z.ZodType<Prisma.VariantStockCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  stock: z.number().int().optional(),
  variant: z.lazy(() => VariantCreateNestedOneWithoutVariantStocksInputSchema),
  size: z.lazy(() => SizeCreateNestedOneWithoutStocksInputSchema),
});

export const VariantStockUncheckedCreateInputSchema: z.ZodType<Prisma.VariantStockUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  variantId: z.string(),
  sizeId: z.string(),
  stock: z.number().int().optional(),
});

export const VariantStockUpdateInputSchema: z.ZodType<Prisma.VariantStockUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  variant: z.lazy(() => VariantUpdateOneRequiredWithoutVariantStocksNestedInputSchema).optional(),
  size: z.lazy(() => SizeUpdateOneRequiredWithoutStocksNestedInputSchema).optional(),
});

export const VariantStockUncheckedUpdateInputSchema: z.ZodType<Prisma.VariantStockUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  variantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sizeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantStockCreateManyInputSchema: z.ZodType<Prisma.VariantStockCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  variantId: z.string(),
  sizeId: z.string(),
  stock: z.number().int().optional(),
});

export const VariantStockUpdateManyMutationInputSchema: z.ZodType<Prisma.VariantStockUpdateManyMutationInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantStockUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VariantStockUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  variantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sizeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter> = z.strictObject({
  every: z.lazy(() => ProductWhereInputSchema).optional(),
  some: z.lazy(() => ProductWhereInputSchema).optional(),
  none: z.lazy(() => ProductWhereInputSchema).optional(),
});

export const ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const BrandCountOrderByAggregateInputSchema: z.ZodType<Prisma.BrandCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const BrandMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BrandMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const BrandMinOrderByAggregateInputSchema: z.ZodType<Prisma.BrandMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const UserCartScalarRelationFilterSchema: z.ZodType<Prisma.UserCartScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => UserCartWhereInputSchema).optional(),
  isNot: z.lazy(() => UserCartWhereInputSchema).optional(),
});

export const ProductScalarRelationFilterSchema: z.ZodType<Prisma.ProductScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ProductWhereInputSchema).optional(),
  isNot: z.lazy(() => ProductWhereInputSchema).optional(),
});

export const CartItemCartIdProductIdCompoundUniqueInputSchema: z.ZodType<Prisma.CartItemCartIdProductIdCompoundUniqueInput> = z.strictObject({
  cartId: z.string(),
  productId: z.string(),
});

export const CartItemCountOrderByAggregateInputSchema: z.ZodType<Prisma.CartItemCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cartId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const CartItemAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CartItemAvgOrderByAggregateInput> = z.strictObject({
  quantity: z.lazy(() => SortOrderSchema).optional(),
});

export const CartItemMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CartItemMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cartId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const CartItemMinOrderByAggregateInputSchema: z.ZodType<Prisma.CartItemMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cartId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const CartItemSumOrderByAggregateInputSchema: z.ZodType<Prisma.CartItemSumOrderByAggregateInput> = z.strictObject({
  quantity: z.lazy(() => SortOrderSchema).optional(),
});

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
});

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional(),
});

export const CartItemListRelationFilterSchema: z.ZodType<Prisma.CartItemListRelationFilter> = z.strictObject({
  every: z.lazy(() => CartItemWhereInputSchema).optional(),
  some: z.lazy(() => CartItemWhereInputSchema).optional(),
  none: z.lazy(() => CartItemWhereInputSchema).optional(),
});

export const CartItemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CartItemOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const UserCartCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCartCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const UserCartMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserCartMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const UserCartMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserCartMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const VariantListRelationFilterSchema: z.ZodType<Prisma.VariantListRelationFilter> = z.strictObject({
  every: z.lazy(() => VariantWhereInputSchema).optional(),
  some: z.lazy(() => VariantWhereInputSchema).optional(),
  none: z.lazy(() => VariantWhereInputSchema).optional(),
});

export const VariantOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VariantOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const ColorCountOrderByAggregateInputSchema: z.ZodType<Prisma.ColorCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  hex: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const ColorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ColorMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  hex: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const ColorMinOrderByAggregateInputSchema: z.ZodType<Prisma.ColorMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  hex: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const VariantScalarRelationFilterSchema: z.ZodType<Prisma.VariantScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => VariantWhereInputSchema).optional(),
  isNot: z.lazy(() => VariantWhereInputSchema).optional(),
});

export const ImageCountOrderByAggregateInputSchema: z.ZodType<Prisma.ImageCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  variantId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const ImageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ImageMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  variantId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const ImageMinOrderByAggregateInputSchema: z.ZodType<Prisma.ImageMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  variantId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
});

export const FloatNullableFilterSchema: z.ZodType<Prisma.FloatNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
});

export const EnumProductGenderFilterSchema: z.ZodType<Prisma.EnumProductGenderFilter> = z.strictObject({
  equals: z.lazy(() => ProductGenderSchema).optional(),
  in: z.lazy(() => ProductGenderSchema).array().optional(),
  notIn: z.lazy(() => ProductGenderSchema).array().optional(),
  not: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => NestedEnumProductGenderFilterSchema) ]).optional(),
});

export const StyleListRelationFilterSchema: z.ZodType<Prisma.StyleListRelationFilter> = z.strictObject({
  every: z.lazy(() => StyleWhereInputSchema).optional(),
  some: z.lazy(() => StyleWhereInputSchema).optional(),
  none: z.lazy(() => StyleWhereInputSchema).optional(),
});

export const BrandScalarRelationFilterSchema: z.ZodType<Prisma.BrandScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => BrandWhereInputSchema).optional(),
  isNot: z.lazy(() => BrandWhereInputSchema).optional(),
});

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.strictObject({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional(),
});

export const StyleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StyleOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.strictObject({
  price: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
});

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  brandId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z.strictObject({
  price: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
});

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional(),
});

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
});

export const EnumProductGenderWithAggregatesFilterSchema: z.ZodType<Prisma.EnumProductGenderWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ProductGenderSchema).optional(),
  in: z.lazy(() => ProductGenderSchema).array().optional(),
  notIn: z.lazy(() => ProductGenderSchema).array().optional(),
  not: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => NestedEnumProductGenderWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumProductGenderFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumProductGenderFilterSchema).optional(),
});

export const RefreshTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.RefreshTokenCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const RefreshTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RefreshTokenMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const RefreshTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.RefreshTokenMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  refreshToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
});

export const VariantStockListRelationFilterSchema: z.ZodType<Prisma.VariantStockListRelationFilter> = z.strictObject({
  every: z.lazy(() => VariantStockWhereInputSchema).optional(),
  some: z.lazy(() => VariantStockWhereInputSchema).optional(),
  none: z.lazy(() => VariantStockWhereInputSchema).optional(),
});

export const VariantStockOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VariantStockOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const SizeCountOrderByAggregateInputSchema: z.ZodType<Prisma.SizeCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const SizeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SizeMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const SizeMinOrderByAggregateInputSchema: z.ZodType<Prisma.SizeMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const StyleCountOrderByAggregateInputSchema: z.ZodType<Prisma.StyleCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const StyleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StyleMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const StyleMinOrderByAggregateInputSchema: z.ZodType<Prisma.StyleMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const UploadsImagesCountOrderByAggregateInputSchema: z.ZodType<Prisma.UploadsImagesCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
});

export const UploadsImagesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UploadsImagesMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
});

export const UploadsImagesMinOrderByAggregateInputSchema: z.ZodType<Prisma.UploadsImagesMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
});

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
});

export const EnumRoleNullableListFilterSchema: z.ZodType<Prisma.EnumRoleNullableListFilter> = z.strictObject({
  equals: z.lazy(() => RoleSchema).array().optional().nullable(),
  has: z.lazy(() => RoleSchema).optional().nullable(),
  hasEvery: z.lazy(() => RoleSchema).array().optional(),
  hasSome: z.lazy(() => RoleSchema).array().optional(),
  isEmpty: z.boolean().optional(),
});

export const RefreshTokenNullableScalarRelationFilterSchema: z.ZodType<Prisma.RefreshTokenNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => RefreshTokenWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => RefreshTokenWhereInputSchema).optional().nullable(),
});

export const UserCartNullableScalarRelationFilterSchema: z.ZodType<Prisma.UserCartNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => UserCartWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserCartWhereInputSchema).optional().nullable(),
});

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  isActivated: z.lazy(() => SortOrderSchema).optional(),
  activationLink: z.lazy(() => SortOrderSchema).optional(),
  roles: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  isActivated: z.lazy(() => SortOrderSchema).optional(),
  activationLink: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  isActivated: z.lazy(() => SortOrderSchema).optional(),
  activationLink: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
});

export const ColorScalarRelationFilterSchema: z.ZodType<Prisma.ColorScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ColorWhereInputSchema).optional(),
  isNot: z.lazy(() => ColorWhereInputSchema).optional(),
});

export const ImageListRelationFilterSchema: z.ZodType<Prisma.ImageListRelationFilter> = z.strictObject({
  every: z.lazy(() => ImageWhereInputSchema).optional(),
  some: z.lazy(() => ImageWhereInputSchema).optional(),
  none: z.lazy(() => ImageWhereInputSchema).optional(),
});

export const ImageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ImageOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const VariantProductIdColorIdCompoundUniqueInputSchema: z.ZodType<Prisma.VariantProductIdColorIdCompoundUniqueInput> = z.strictObject({
  productId: z.string(),
  colorId: z.string(),
});

export const VariantCountOrderByAggregateInputSchema: z.ZodType<Prisma.VariantCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const VariantMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VariantMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const VariantMinOrderByAggregateInputSchema: z.ZodType<Prisma.VariantMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  colorId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const SizeScalarRelationFilterSchema: z.ZodType<Prisma.SizeScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => SizeWhereInputSchema).optional(),
  isNot: z.lazy(() => SizeWhereInputSchema).optional(),
});

export const VariantStockVariantIdSizeIdCompoundUniqueInputSchema: z.ZodType<Prisma.VariantStockVariantIdSizeIdCompoundUniqueInput> = z.strictObject({
  variantId: z.string(),
  sizeId: z.string(),
});

export const VariantStockCountOrderByAggregateInputSchema: z.ZodType<Prisma.VariantStockCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  variantId: z.lazy(() => SortOrderSchema).optional(),
  sizeId: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
});

export const VariantStockAvgOrderByAggregateInputSchema: z.ZodType<Prisma.VariantStockAvgOrderByAggregateInput> = z.strictObject({
  stock: z.lazy(() => SortOrderSchema).optional(),
});

export const VariantStockMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VariantStockMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  variantId: z.lazy(() => SortOrderSchema).optional(),
  sizeId: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
});

export const VariantStockMinOrderByAggregateInputSchema: z.ZodType<Prisma.VariantStockMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  variantId: z.lazy(() => SortOrderSchema).optional(),
  sizeId: z.lazy(() => SortOrderSchema).optional(),
  stock: z.lazy(() => SortOrderSchema).optional(),
});

export const VariantStockSumOrderByAggregateInputSchema: z.ZodType<Prisma.VariantStockSumOrderByAggregateInput> = z.strictObject({
  stock: z.lazy(() => SortOrderSchema).optional(),
});

export const ProductCreateNestedManyWithoutBrandInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutBrandInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema), z.lazy(() => ProductCreateWithoutBrandInputSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema), z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBrandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
});

export const ProductUncheckedCreateNestedManyWithoutBrandInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema), z.lazy(() => ProductCreateWithoutBrandInputSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema), z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBrandInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
});

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional(),
});

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.strictObject({
  set: z.coerce.date().optional(),
});

export const ProductUpdateManyWithoutBrandNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutBrandNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema), z.lazy(() => ProductCreateWithoutBrandInputSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema), z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutBrandInputSchema), z.lazy(() => ProductUpsertWithWhereUniqueWithoutBrandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBrandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutBrandInputSchema), z.lazy(() => ProductUpdateWithWhereUniqueWithoutBrandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutBrandInputSchema), z.lazy(() => ProductUpdateManyWithWhereWithoutBrandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema), z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
});

export const ProductUncheckedUpdateManyWithoutBrandNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema), z.lazy(() => ProductCreateWithoutBrandInputSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema), z.lazy(() => ProductCreateOrConnectWithoutBrandInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutBrandInputSchema), z.lazy(() => ProductUpsertWithWhereUniqueWithoutBrandInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyBrandInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutBrandInputSchema), z.lazy(() => ProductUpdateWithWhereUniqueWithoutBrandInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutBrandInputSchema), z.lazy(() => ProductUpdateManyWithWhereWithoutBrandInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema), z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
});

export const UserCartCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.UserCartCreateNestedOneWithoutItemsInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCartCreateWithoutItemsInputSchema), z.lazy(() => UserCartUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCartCreateOrConnectWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => UserCartWhereUniqueInputSchema).optional(),
});

export const ProductCreateNestedOneWithoutCartItemsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutCartItemsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutCartItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutCartItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutCartItemsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
});

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const UserCartUpdateOneRequiredWithoutItemsNestedInputSchema: z.ZodType<Prisma.UserCartUpdateOneRequiredWithoutItemsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCartCreateWithoutItemsInputSchema), z.lazy(() => UserCartUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCartCreateOrConnectWithoutItemsInputSchema).optional(),
  upsert: z.lazy(() => UserCartUpsertWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => UserCartWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserCartUpdateToOneWithWhereWithoutItemsInputSchema), z.lazy(() => UserCartUpdateWithoutItemsInputSchema), z.lazy(() => UserCartUncheckedUpdateWithoutItemsInputSchema) ]).optional(),
});

export const ProductUpdateOneRequiredWithoutCartItemsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutCartItemsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutCartItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutCartItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutCartItemsInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutCartItemsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutCartItemsInputSchema), z.lazy(() => ProductUpdateWithoutCartItemsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutCartItemsInputSchema) ]).optional(),
});

export const UserCreateNestedOneWithoutCartInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCartInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutCartInputSchema), z.lazy(() => UserUncheckedCreateWithoutCartInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCartInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});

export const CartItemCreateNestedManyWithoutCartInputSchema: z.ZodType<Prisma.CartItemCreateNestedManyWithoutCartInput> = z.strictObject({
  create: z.union([ z.lazy(() => CartItemCreateWithoutCartInputSchema), z.lazy(() => CartItemCreateWithoutCartInputSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutCartInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CartItemCreateOrConnectWithoutCartInputSchema), z.lazy(() => CartItemCreateOrConnectWithoutCartInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CartItemCreateManyCartInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
});

export const CartItemUncheckedCreateNestedManyWithoutCartInputSchema: z.ZodType<Prisma.CartItemUncheckedCreateNestedManyWithoutCartInput> = z.strictObject({
  create: z.union([ z.lazy(() => CartItemCreateWithoutCartInputSchema), z.lazy(() => CartItemCreateWithoutCartInputSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutCartInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CartItemCreateOrConnectWithoutCartInputSchema), z.lazy(() => CartItemCreateOrConnectWithoutCartInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CartItemCreateManyCartInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
});

export const UserUpdateOneRequiredWithoutCartNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCartNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutCartInputSchema), z.lazy(() => UserUncheckedCreateWithoutCartInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCartInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCartInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCartInputSchema), z.lazy(() => UserUpdateWithoutCartInputSchema), z.lazy(() => UserUncheckedUpdateWithoutCartInputSchema) ]).optional(),
});

export const CartItemUpdateManyWithoutCartNestedInputSchema: z.ZodType<Prisma.CartItemUpdateManyWithoutCartNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CartItemCreateWithoutCartInputSchema), z.lazy(() => CartItemCreateWithoutCartInputSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutCartInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CartItemCreateOrConnectWithoutCartInputSchema), z.lazy(() => CartItemCreateOrConnectWithoutCartInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CartItemUpsertWithWhereUniqueWithoutCartInputSchema), z.lazy(() => CartItemUpsertWithWhereUniqueWithoutCartInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CartItemCreateManyCartInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CartItemUpdateWithWhereUniqueWithoutCartInputSchema), z.lazy(() => CartItemUpdateWithWhereUniqueWithoutCartInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CartItemUpdateManyWithWhereWithoutCartInputSchema), z.lazy(() => CartItemUpdateManyWithWhereWithoutCartInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CartItemScalarWhereInputSchema), z.lazy(() => CartItemScalarWhereInputSchema).array() ]).optional(),
});

export const CartItemUncheckedUpdateManyWithoutCartNestedInputSchema: z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutCartNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CartItemCreateWithoutCartInputSchema), z.lazy(() => CartItemCreateWithoutCartInputSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutCartInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CartItemCreateOrConnectWithoutCartInputSchema), z.lazy(() => CartItemCreateOrConnectWithoutCartInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CartItemUpsertWithWhereUniqueWithoutCartInputSchema), z.lazy(() => CartItemUpsertWithWhereUniqueWithoutCartInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CartItemCreateManyCartInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CartItemUpdateWithWhereUniqueWithoutCartInputSchema), z.lazy(() => CartItemUpdateWithWhereUniqueWithoutCartInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CartItemUpdateManyWithWhereWithoutCartInputSchema), z.lazy(() => CartItemUpdateManyWithWhereWithoutCartInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CartItemScalarWhereInputSchema), z.lazy(() => CartItemScalarWhereInputSchema).array() ]).optional(),
});

export const VariantCreateNestedManyWithoutColorInputSchema: z.ZodType<Prisma.VariantCreateNestedManyWithoutColorInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutColorInputSchema), z.lazy(() => VariantCreateWithoutColorInputSchema).array(), z.lazy(() => VariantUncheckedCreateWithoutColorInputSchema), z.lazy(() => VariantUncheckedCreateWithoutColorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantCreateOrConnectWithoutColorInputSchema), z.lazy(() => VariantCreateOrConnectWithoutColorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantCreateManyColorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
});

export const VariantUncheckedCreateNestedManyWithoutColorInputSchema: z.ZodType<Prisma.VariantUncheckedCreateNestedManyWithoutColorInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutColorInputSchema), z.lazy(() => VariantCreateWithoutColorInputSchema).array(), z.lazy(() => VariantUncheckedCreateWithoutColorInputSchema), z.lazy(() => VariantUncheckedCreateWithoutColorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantCreateOrConnectWithoutColorInputSchema), z.lazy(() => VariantCreateOrConnectWithoutColorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantCreateManyColorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
});

export const VariantUpdateManyWithoutColorNestedInputSchema: z.ZodType<Prisma.VariantUpdateManyWithoutColorNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutColorInputSchema), z.lazy(() => VariantCreateWithoutColorInputSchema).array(), z.lazy(() => VariantUncheckedCreateWithoutColorInputSchema), z.lazy(() => VariantUncheckedCreateWithoutColorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantCreateOrConnectWithoutColorInputSchema), z.lazy(() => VariantCreateOrConnectWithoutColorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VariantUpsertWithWhereUniqueWithoutColorInputSchema), z.lazy(() => VariantUpsertWithWhereUniqueWithoutColorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantCreateManyColorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VariantUpdateWithWhereUniqueWithoutColorInputSchema), z.lazy(() => VariantUpdateWithWhereUniqueWithoutColorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VariantUpdateManyWithWhereWithoutColorInputSchema), z.lazy(() => VariantUpdateManyWithWhereWithoutColorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VariantScalarWhereInputSchema), z.lazy(() => VariantScalarWhereInputSchema).array() ]).optional(),
});

export const VariantUncheckedUpdateManyWithoutColorNestedInputSchema: z.ZodType<Prisma.VariantUncheckedUpdateManyWithoutColorNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutColorInputSchema), z.lazy(() => VariantCreateWithoutColorInputSchema).array(), z.lazy(() => VariantUncheckedCreateWithoutColorInputSchema), z.lazy(() => VariantUncheckedCreateWithoutColorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantCreateOrConnectWithoutColorInputSchema), z.lazy(() => VariantCreateOrConnectWithoutColorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VariantUpsertWithWhereUniqueWithoutColorInputSchema), z.lazy(() => VariantUpsertWithWhereUniqueWithoutColorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantCreateManyColorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VariantUpdateWithWhereUniqueWithoutColorInputSchema), z.lazy(() => VariantUpdateWithWhereUniqueWithoutColorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VariantUpdateManyWithWhereWithoutColorInputSchema), z.lazy(() => VariantUpdateManyWithWhereWithoutColorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VariantScalarWhereInputSchema), z.lazy(() => VariantScalarWhereInputSchema).array() ]).optional(),
});

export const VariantCreateNestedOneWithoutImagesInputSchema: z.ZodType<Prisma.VariantCreateNestedOneWithoutImagesInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutImagesInputSchema), z.lazy(() => VariantUncheckedCreateWithoutImagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VariantCreateOrConnectWithoutImagesInputSchema).optional(),
  connect: z.lazy(() => VariantWhereUniqueInputSchema).optional(),
});

export const VariantUpdateOneRequiredWithoutImagesNestedInputSchema: z.ZodType<Prisma.VariantUpdateOneRequiredWithoutImagesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutImagesInputSchema), z.lazy(() => VariantUncheckedCreateWithoutImagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VariantCreateOrConnectWithoutImagesInputSchema).optional(),
  upsert: z.lazy(() => VariantUpsertWithoutImagesInputSchema).optional(),
  connect: z.lazy(() => VariantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VariantUpdateToOneWithWhereWithoutImagesInputSchema), z.lazy(() => VariantUpdateWithoutImagesInputSchema), z.lazy(() => VariantUncheckedUpdateWithoutImagesInputSchema) ]).optional(),
});

export const StyleCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.StyleCreateNestedManyWithoutProductsInput> = z.strictObject({
  create: z.union([ z.lazy(() => StyleCreateWithoutProductsInputSchema), z.lazy(() => StyleCreateWithoutProductsInputSchema).array(), z.lazy(() => StyleUncheckedCreateWithoutProductsInputSchema), z.lazy(() => StyleUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StyleCreateOrConnectWithoutProductsInputSchema), z.lazy(() => StyleCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StyleWhereUniqueInputSchema), z.lazy(() => StyleWhereUniqueInputSchema).array() ]).optional(),
});

export const BrandCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.BrandCreateNestedOneWithoutProductsInput> = z.strictObject({
  create: z.union([ z.lazy(() => BrandCreateWithoutProductsInputSchema), z.lazy(() => BrandUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BrandCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => BrandWhereUniqueInputSchema).optional(),
});

export const VariantCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.VariantCreateNestedManyWithoutProductInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutProductInputSchema), z.lazy(() => VariantCreateWithoutProductInputSchema).array(), z.lazy(() => VariantUncheckedCreateWithoutProductInputSchema), z.lazy(() => VariantUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantCreateOrConnectWithoutProductInputSchema), z.lazy(() => VariantCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
});

export const CartItemCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.CartItemCreateNestedManyWithoutProductInput> = z.strictObject({
  create: z.union([ z.lazy(() => CartItemCreateWithoutProductInputSchema), z.lazy(() => CartItemCreateWithoutProductInputSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutProductInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CartItemCreateOrConnectWithoutProductInputSchema), z.lazy(() => CartItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CartItemCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
});

export const StyleUncheckedCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.StyleUncheckedCreateNestedManyWithoutProductsInput> = z.strictObject({
  create: z.union([ z.lazy(() => StyleCreateWithoutProductsInputSchema), z.lazy(() => StyleCreateWithoutProductsInputSchema).array(), z.lazy(() => StyleUncheckedCreateWithoutProductsInputSchema), z.lazy(() => StyleUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StyleCreateOrConnectWithoutProductsInputSchema), z.lazy(() => StyleCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StyleWhereUniqueInputSchema), z.lazy(() => StyleWhereUniqueInputSchema).array() ]).optional(),
});

export const VariantUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.VariantUncheckedCreateNestedManyWithoutProductInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutProductInputSchema), z.lazy(() => VariantCreateWithoutProductInputSchema).array(), z.lazy(() => VariantUncheckedCreateWithoutProductInputSchema), z.lazy(() => VariantUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantCreateOrConnectWithoutProductInputSchema), z.lazy(() => VariantCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
});

export const CartItemUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.CartItemUncheckedCreateNestedManyWithoutProductInput> = z.strictObject({
  create: z.union([ z.lazy(() => CartItemCreateWithoutProductInputSchema), z.lazy(() => CartItemCreateWithoutProductInputSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutProductInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CartItemCreateOrConnectWithoutProductInputSchema), z.lazy(() => CartItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CartItemCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
});

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const NullableFloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const EnumProductGenderFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumProductGenderFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => ProductGenderSchema).optional(),
});

export const StyleUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.StyleUpdateManyWithoutProductsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StyleCreateWithoutProductsInputSchema), z.lazy(() => StyleCreateWithoutProductsInputSchema).array(), z.lazy(() => StyleUncheckedCreateWithoutProductsInputSchema), z.lazy(() => StyleUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StyleCreateOrConnectWithoutProductsInputSchema), z.lazy(() => StyleCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StyleUpsertWithWhereUniqueWithoutProductsInputSchema), z.lazy(() => StyleUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => StyleWhereUniqueInputSchema), z.lazy(() => StyleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StyleWhereUniqueInputSchema), z.lazy(() => StyleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StyleWhereUniqueInputSchema), z.lazy(() => StyleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StyleWhereUniqueInputSchema), z.lazy(() => StyleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StyleUpdateWithWhereUniqueWithoutProductsInputSchema), z.lazy(() => StyleUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StyleUpdateManyWithWhereWithoutProductsInputSchema), z.lazy(() => StyleUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StyleScalarWhereInputSchema), z.lazy(() => StyleScalarWhereInputSchema).array() ]).optional(),
});

export const BrandUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.BrandUpdateOneRequiredWithoutProductsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BrandCreateWithoutProductsInputSchema), z.lazy(() => BrandUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BrandCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => BrandUpsertWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => BrandWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BrandUpdateToOneWithWhereWithoutProductsInputSchema), z.lazy(() => BrandUpdateWithoutProductsInputSchema), z.lazy(() => BrandUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
});

export const VariantUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.VariantUpdateManyWithoutProductNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutProductInputSchema), z.lazy(() => VariantCreateWithoutProductInputSchema).array(), z.lazy(() => VariantUncheckedCreateWithoutProductInputSchema), z.lazy(() => VariantUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantCreateOrConnectWithoutProductInputSchema), z.lazy(() => VariantCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VariantUpsertWithWhereUniqueWithoutProductInputSchema), z.lazy(() => VariantUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VariantUpdateWithWhereUniqueWithoutProductInputSchema), z.lazy(() => VariantUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VariantUpdateManyWithWhereWithoutProductInputSchema), z.lazy(() => VariantUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VariantScalarWhereInputSchema), z.lazy(() => VariantScalarWhereInputSchema).array() ]).optional(),
});

export const CartItemUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.CartItemUpdateManyWithoutProductNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CartItemCreateWithoutProductInputSchema), z.lazy(() => CartItemCreateWithoutProductInputSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutProductInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CartItemCreateOrConnectWithoutProductInputSchema), z.lazy(() => CartItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CartItemUpsertWithWhereUniqueWithoutProductInputSchema), z.lazy(() => CartItemUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CartItemCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CartItemUpdateWithWhereUniqueWithoutProductInputSchema), z.lazy(() => CartItemUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CartItemUpdateManyWithWhereWithoutProductInputSchema), z.lazy(() => CartItemUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CartItemScalarWhereInputSchema), z.lazy(() => CartItemScalarWhereInputSchema).array() ]).optional(),
});

export const StyleUncheckedUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.StyleUncheckedUpdateManyWithoutProductsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StyleCreateWithoutProductsInputSchema), z.lazy(() => StyleCreateWithoutProductsInputSchema).array(), z.lazy(() => StyleUncheckedCreateWithoutProductsInputSchema), z.lazy(() => StyleUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StyleCreateOrConnectWithoutProductsInputSchema), z.lazy(() => StyleCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StyleUpsertWithWhereUniqueWithoutProductsInputSchema), z.lazy(() => StyleUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => StyleWhereUniqueInputSchema), z.lazy(() => StyleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StyleWhereUniqueInputSchema), z.lazy(() => StyleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StyleWhereUniqueInputSchema), z.lazy(() => StyleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StyleWhereUniqueInputSchema), z.lazy(() => StyleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StyleUpdateWithWhereUniqueWithoutProductsInputSchema), z.lazy(() => StyleUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StyleUpdateManyWithWhereWithoutProductsInputSchema), z.lazy(() => StyleUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StyleScalarWhereInputSchema), z.lazy(() => StyleScalarWhereInputSchema).array() ]).optional(),
});

export const VariantUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.VariantUncheckedUpdateManyWithoutProductNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutProductInputSchema), z.lazy(() => VariantCreateWithoutProductInputSchema).array(), z.lazy(() => VariantUncheckedCreateWithoutProductInputSchema), z.lazy(() => VariantUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantCreateOrConnectWithoutProductInputSchema), z.lazy(() => VariantCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VariantUpsertWithWhereUniqueWithoutProductInputSchema), z.lazy(() => VariantUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VariantWhereUniqueInputSchema), z.lazy(() => VariantWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VariantUpdateWithWhereUniqueWithoutProductInputSchema), z.lazy(() => VariantUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VariantUpdateManyWithWhereWithoutProductInputSchema), z.lazy(() => VariantUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VariantScalarWhereInputSchema), z.lazy(() => VariantScalarWhereInputSchema).array() ]).optional(),
});

export const CartItemUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutProductNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CartItemCreateWithoutProductInputSchema), z.lazy(() => CartItemCreateWithoutProductInputSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutProductInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CartItemCreateOrConnectWithoutProductInputSchema), z.lazy(() => CartItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CartItemUpsertWithWhereUniqueWithoutProductInputSchema), z.lazy(() => CartItemUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CartItemCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CartItemWhereUniqueInputSchema), z.lazy(() => CartItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CartItemUpdateWithWhereUniqueWithoutProductInputSchema), z.lazy(() => CartItemUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CartItemUpdateManyWithWhereWithoutProductInputSchema), z.lazy(() => CartItemUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CartItemScalarWhereInputSchema), z.lazy(() => CartItemScalarWhereInputSchema).array() ]).optional(),
});

export const UserCreateNestedOneWithoutRefreshTokensInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRefreshTokensInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutRefreshTokensInputSchema), z.lazy(() => UserUncheckedCreateWithoutRefreshTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRefreshTokensInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});

export const UserUpdateOneRequiredWithoutRefreshTokensNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRefreshTokensNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutRefreshTokensInputSchema), z.lazy(() => UserUncheckedCreateWithoutRefreshTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRefreshTokensInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRefreshTokensInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutRefreshTokensInputSchema), z.lazy(() => UserUpdateWithoutRefreshTokensInputSchema), z.lazy(() => UserUncheckedUpdateWithoutRefreshTokensInputSchema) ]).optional(),
});

export const VariantStockCreateNestedManyWithoutSizeInputSchema: z.ZodType<Prisma.VariantStockCreateNestedManyWithoutSizeInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantStockCreateWithoutSizeInputSchema), z.lazy(() => VariantStockCreateWithoutSizeInputSchema).array(), z.lazy(() => VariantStockUncheckedCreateWithoutSizeInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutSizeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantStockCreateOrConnectWithoutSizeInputSchema), z.lazy(() => VariantStockCreateOrConnectWithoutSizeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantStockCreateManySizeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
});

export const VariantStockUncheckedCreateNestedManyWithoutSizeInputSchema: z.ZodType<Prisma.VariantStockUncheckedCreateNestedManyWithoutSizeInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantStockCreateWithoutSizeInputSchema), z.lazy(() => VariantStockCreateWithoutSizeInputSchema).array(), z.lazy(() => VariantStockUncheckedCreateWithoutSizeInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutSizeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantStockCreateOrConnectWithoutSizeInputSchema), z.lazy(() => VariantStockCreateOrConnectWithoutSizeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantStockCreateManySizeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
});

export const VariantStockUpdateManyWithoutSizeNestedInputSchema: z.ZodType<Prisma.VariantStockUpdateManyWithoutSizeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantStockCreateWithoutSizeInputSchema), z.lazy(() => VariantStockCreateWithoutSizeInputSchema).array(), z.lazy(() => VariantStockUncheckedCreateWithoutSizeInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutSizeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantStockCreateOrConnectWithoutSizeInputSchema), z.lazy(() => VariantStockCreateOrConnectWithoutSizeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VariantStockUpsertWithWhereUniqueWithoutSizeInputSchema), z.lazy(() => VariantStockUpsertWithWhereUniqueWithoutSizeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantStockCreateManySizeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VariantStockUpdateWithWhereUniqueWithoutSizeInputSchema), z.lazy(() => VariantStockUpdateWithWhereUniqueWithoutSizeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VariantStockUpdateManyWithWhereWithoutSizeInputSchema), z.lazy(() => VariantStockUpdateManyWithWhereWithoutSizeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VariantStockScalarWhereInputSchema), z.lazy(() => VariantStockScalarWhereInputSchema).array() ]).optional(),
});

export const VariantStockUncheckedUpdateManyWithoutSizeNestedInputSchema: z.ZodType<Prisma.VariantStockUncheckedUpdateManyWithoutSizeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantStockCreateWithoutSizeInputSchema), z.lazy(() => VariantStockCreateWithoutSizeInputSchema).array(), z.lazy(() => VariantStockUncheckedCreateWithoutSizeInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutSizeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantStockCreateOrConnectWithoutSizeInputSchema), z.lazy(() => VariantStockCreateOrConnectWithoutSizeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VariantStockUpsertWithWhereUniqueWithoutSizeInputSchema), z.lazy(() => VariantStockUpsertWithWhereUniqueWithoutSizeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantStockCreateManySizeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VariantStockUpdateWithWhereUniqueWithoutSizeInputSchema), z.lazy(() => VariantStockUpdateWithWhereUniqueWithoutSizeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VariantStockUpdateManyWithWhereWithoutSizeInputSchema), z.lazy(() => VariantStockUpdateManyWithWhereWithoutSizeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VariantStockScalarWhereInputSchema), z.lazy(() => VariantStockScalarWhereInputSchema).array() ]).optional(),
});

export const ProductCreateNestedManyWithoutStylesInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutStylesInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutStylesInputSchema), z.lazy(() => ProductCreateWithoutStylesInputSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutStylesInputSchema), z.lazy(() => ProductUncheckedCreateWithoutStylesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutStylesInputSchema), z.lazy(() => ProductCreateOrConnectWithoutStylesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
});

export const ProductUncheckedCreateNestedManyWithoutStylesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutStylesInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutStylesInputSchema), z.lazy(() => ProductCreateWithoutStylesInputSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutStylesInputSchema), z.lazy(() => ProductUncheckedCreateWithoutStylesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutStylesInputSchema), z.lazy(() => ProductCreateOrConnectWithoutStylesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
});

export const ProductUpdateManyWithoutStylesNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutStylesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutStylesInputSchema), z.lazy(() => ProductCreateWithoutStylesInputSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutStylesInputSchema), z.lazy(() => ProductUncheckedCreateWithoutStylesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutStylesInputSchema), z.lazy(() => ProductCreateOrConnectWithoutStylesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutStylesInputSchema), z.lazy(() => ProductUpsertWithWhereUniqueWithoutStylesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutStylesInputSchema), z.lazy(() => ProductUpdateWithWhereUniqueWithoutStylesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutStylesInputSchema), z.lazy(() => ProductUpdateManyWithWhereWithoutStylesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema), z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
});

export const ProductUncheckedUpdateManyWithoutStylesNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutStylesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutStylesInputSchema), z.lazy(() => ProductCreateWithoutStylesInputSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutStylesInputSchema), z.lazy(() => ProductUncheckedCreateWithoutStylesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutStylesInputSchema), z.lazy(() => ProductCreateOrConnectWithoutStylesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutStylesInputSchema), z.lazy(() => ProductUpsertWithWhereUniqueWithoutStylesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema), z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutStylesInputSchema), z.lazy(() => ProductUpdateWithWhereUniqueWithoutStylesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutStylesInputSchema), z.lazy(() => ProductUpdateManyWithWhereWithoutStylesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema), z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
});

export const UserCreaterolesInputSchema: z.ZodType<Prisma.UserCreaterolesInput> = z.strictObject({
  set: z.lazy(() => RoleSchema).array(),
});

export const RefreshTokenCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.RefreshTokenCreateNestedOneWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => RefreshTokenCreateWithoutUserInputSchema), z.lazy(() => RefreshTokenUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RefreshTokenCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => RefreshTokenWhereUniqueInputSchema).optional(),
});

export const UserCartCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.UserCartCreateNestedOneWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCartCreateWithoutUserInputSchema), z.lazy(() => UserCartUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCartCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => UserCartWhereUniqueInputSchema).optional(),
});

export const RefreshTokenUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.RefreshTokenUncheckedCreateNestedOneWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => RefreshTokenCreateWithoutUserInputSchema), z.lazy(() => RefreshTokenUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RefreshTokenCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => RefreshTokenWhereUniqueInputSchema).optional(),
});

export const UserCartUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.UserCartUncheckedCreateNestedOneWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCartCreateWithoutUserInputSchema), z.lazy(() => UserCartUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCartCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => UserCartWhereUniqueInputSchema).optional(),
});

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.strictObject({
  set: z.boolean().optional(),
});

export const UserUpdaterolesInputSchema: z.ZodType<Prisma.UserUpdaterolesInput> = z.strictObject({
  set: z.lazy(() => RoleSchema).array().optional(),
  push: z.union([ z.lazy(() => RoleSchema), z.lazy(() => RoleSchema).array() ]).optional(),
});

export const RefreshTokenUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.RefreshTokenUpdateOneWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => RefreshTokenCreateWithoutUserInputSchema), z.lazy(() => RefreshTokenUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RefreshTokenCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => RefreshTokenUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RefreshTokenWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RefreshTokenWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RefreshTokenWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RefreshTokenUpdateToOneWithWhereWithoutUserInputSchema), z.lazy(() => RefreshTokenUpdateWithoutUserInputSchema), z.lazy(() => RefreshTokenUncheckedUpdateWithoutUserInputSchema) ]).optional(),
});

export const UserCartUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.UserCartUpdateOneWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCartCreateWithoutUserInputSchema), z.lazy(() => UserCartUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCartCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => UserCartUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserCartWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserCartWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserCartWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserCartUpdateToOneWithWhereWithoutUserInputSchema), z.lazy(() => UserCartUpdateWithoutUserInputSchema), z.lazy(() => UserCartUncheckedUpdateWithoutUserInputSchema) ]).optional(),
});

export const RefreshTokenUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.RefreshTokenUncheckedUpdateOneWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => RefreshTokenCreateWithoutUserInputSchema), z.lazy(() => RefreshTokenUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RefreshTokenCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => RefreshTokenUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RefreshTokenWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RefreshTokenWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RefreshTokenWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RefreshTokenUpdateToOneWithWhereWithoutUserInputSchema), z.lazy(() => RefreshTokenUpdateWithoutUserInputSchema), z.lazy(() => RefreshTokenUncheckedUpdateWithoutUserInputSchema) ]).optional(),
});

export const UserCartUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.UserCartUncheckedUpdateOneWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCartCreateWithoutUserInputSchema), z.lazy(() => UserCartUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCartCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => UserCartUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserCartWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserCartWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserCartWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserCartUpdateToOneWithWhereWithoutUserInputSchema), z.lazy(() => UserCartUpdateWithoutUserInputSchema), z.lazy(() => UserCartUncheckedUpdateWithoutUserInputSchema) ]).optional(),
});

export const ColorCreateNestedOneWithoutVariantInputSchema: z.ZodType<Prisma.ColorCreateNestedOneWithoutVariantInput> = z.strictObject({
  create: z.union([ z.lazy(() => ColorCreateWithoutVariantInputSchema), z.lazy(() => ColorUncheckedCreateWithoutVariantInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ColorCreateOrConnectWithoutVariantInputSchema).optional(),
  connect: z.lazy(() => ColorWhereUniqueInputSchema).optional(),
});

export const ProductCreateNestedOneWithoutVariantsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutVariantsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutVariantsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutVariantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutVariantsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
});

export const ImageCreateNestedManyWithoutVariantInputSchema: z.ZodType<Prisma.ImageCreateNestedManyWithoutVariantInput> = z.strictObject({
  create: z.union([ z.lazy(() => ImageCreateWithoutVariantInputSchema), z.lazy(() => ImageCreateWithoutVariantInputSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutVariantInputSchema), z.lazy(() => ImageUncheckedCreateWithoutVariantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ImageCreateOrConnectWithoutVariantInputSchema), z.lazy(() => ImageCreateOrConnectWithoutVariantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ImageCreateManyVariantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ImageWhereUniqueInputSchema), z.lazy(() => ImageWhereUniqueInputSchema).array() ]).optional(),
});

export const VariantStockCreateNestedManyWithoutVariantInputSchema: z.ZodType<Prisma.VariantStockCreateNestedManyWithoutVariantInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantStockCreateWithoutVariantInputSchema), z.lazy(() => VariantStockCreateWithoutVariantInputSchema).array(), z.lazy(() => VariantStockUncheckedCreateWithoutVariantInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutVariantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantStockCreateOrConnectWithoutVariantInputSchema), z.lazy(() => VariantStockCreateOrConnectWithoutVariantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantStockCreateManyVariantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
});

export const ImageUncheckedCreateNestedManyWithoutVariantInputSchema: z.ZodType<Prisma.ImageUncheckedCreateNestedManyWithoutVariantInput> = z.strictObject({
  create: z.union([ z.lazy(() => ImageCreateWithoutVariantInputSchema), z.lazy(() => ImageCreateWithoutVariantInputSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutVariantInputSchema), z.lazy(() => ImageUncheckedCreateWithoutVariantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ImageCreateOrConnectWithoutVariantInputSchema), z.lazy(() => ImageCreateOrConnectWithoutVariantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ImageCreateManyVariantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ImageWhereUniqueInputSchema), z.lazy(() => ImageWhereUniqueInputSchema).array() ]).optional(),
});

export const VariantStockUncheckedCreateNestedManyWithoutVariantInputSchema: z.ZodType<Prisma.VariantStockUncheckedCreateNestedManyWithoutVariantInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantStockCreateWithoutVariantInputSchema), z.lazy(() => VariantStockCreateWithoutVariantInputSchema).array(), z.lazy(() => VariantStockUncheckedCreateWithoutVariantInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutVariantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantStockCreateOrConnectWithoutVariantInputSchema), z.lazy(() => VariantStockCreateOrConnectWithoutVariantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantStockCreateManyVariantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
});

export const ColorUpdateOneRequiredWithoutVariantNestedInputSchema: z.ZodType<Prisma.ColorUpdateOneRequiredWithoutVariantNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ColorCreateWithoutVariantInputSchema), z.lazy(() => ColorUncheckedCreateWithoutVariantInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ColorCreateOrConnectWithoutVariantInputSchema).optional(),
  upsert: z.lazy(() => ColorUpsertWithoutVariantInputSchema).optional(),
  connect: z.lazy(() => ColorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ColorUpdateToOneWithWhereWithoutVariantInputSchema), z.lazy(() => ColorUpdateWithoutVariantInputSchema), z.lazy(() => ColorUncheckedUpdateWithoutVariantInputSchema) ]).optional(),
});

export const ProductUpdateOneRequiredWithoutVariantsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutVariantsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProductCreateWithoutVariantsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutVariantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutVariantsInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutVariantsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutVariantsInputSchema), z.lazy(() => ProductUpdateWithoutVariantsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutVariantsInputSchema) ]).optional(),
});

export const ImageUpdateManyWithoutVariantNestedInputSchema: z.ZodType<Prisma.ImageUpdateManyWithoutVariantNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ImageCreateWithoutVariantInputSchema), z.lazy(() => ImageCreateWithoutVariantInputSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutVariantInputSchema), z.lazy(() => ImageUncheckedCreateWithoutVariantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ImageCreateOrConnectWithoutVariantInputSchema), z.lazy(() => ImageCreateOrConnectWithoutVariantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ImageUpsertWithWhereUniqueWithoutVariantInputSchema), z.lazy(() => ImageUpsertWithWhereUniqueWithoutVariantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ImageCreateManyVariantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ImageWhereUniqueInputSchema), z.lazy(() => ImageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ImageWhereUniqueInputSchema), z.lazy(() => ImageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ImageWhereUniqueInputSchema), z.lazy(() => ImageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ImageWhereUniqueInputSchema), z.lazy(() => ImageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ImageUpdateWithWhereUniqueWithoutVariantInputSchema), z.lazy(() => ImageUpdateWithWhereUniqueWithoutVariantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ImageUpdateManyWithWhereWithoutVariantInputSchema), z.lazy(() => ImageUpdateManyWithWhereWithoutVariantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ImageScalarWhereInputSchema), z.lazy(() => ImageScalarWhereInputSchema).array() ]).optional(),
});

export const VariantStockUpdateManyWithoutVariantNestedInputSchema: z.ZodType<Prisma.VariantStockUpdateManyWithoutVariantNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantStockCreateWithoutVariantInputSchema), z.lazy(() => VariantStockCreateWithoutVariantInputSchema).array(), z.lazy(() => VariantStockUncheckedCreateWithoutVariantInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutVariantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantStockCreateOrConnectWithoutVariantInputSchema), z.lazy(() => VariantStockCreateOrConnectWithoutVariantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VariantStockUpsertWithWhereUniqueWithoutVariantInputSchema), z.lazy(() => VariantStockUpsertWithWhereUniqueWithoutVariantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantStockCreateManyVariantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VariantStockUpdateWithWhereUniqueWithoutVariantInputSchema), z.lazy(() => VariantStockUpdateWithWhereUniqueWithoutVariantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VariantStockUpdateManyWithWhereWithoutVariantInputSchema), z.lazy(() => VariantStockUpdateManyWithWhereWithoutVariantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VariantStockScalarWhereInputSchema), z.lazy(() => VariantStockScalarWhereInputSchema).array() ]).optional(),
});

export const ImageUncheckedUpdateManyWithoutVariantNestedInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutVariantNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ImageCreateWithoutVariantInputSchema), z.lazy(() => ImageCreateWithoutVariantInputSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutVariantInputSchema), z.lazy(() => ImageUncheckedCreateWithoutVariantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ImageCreateOrConnectWithoutVariantInputSchema), z.lazy(() => ImageCreateOrConnectWithoutVariantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ImageUpsertWithWhereUniqueWithoutVariantInputSchema), z.lazy(() => ImageUpsertWithWhereUniqueWithoutVariantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ImageCreateManyVariantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ImageWhereUniqueInputSchema), z.lazy(() => ImageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ImageWhereUniqueInputSchema), z.lazy(() => ImageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ImageWhereUniqueInputSchema), z.lazy(() => ImageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ImageWhereUniqueInputSchema), z.lazy(() => ImageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ImageUpdateWithWhereUniqueWithoutVariantInputSchema), z.lazy(() => ImageUpdateWithWhereUniqueWithoutVariantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ImageUpdateManyWithWhereWithoutVariantInputSchema), z.lazy(() => ImageUpdateManyWithWhereWithoutVariantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ImageScalarWhereInputSchema), z.lazy(() => ImageScalarWhereInputSchema).array() ]).optional(),
});

export const VariantStockUncheckedUpdateManyWithoutVariantNestedInputSchema: z.ZodType<Prisma.VariantStockUncheckedUpdateManyWithoutVariantNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantStockCreateWithoutVariantInputSchema), z.lazy(() => VariantStockCreateWithoutVariantInputSchema).array(), z.lazy(() => VariantStockUncheckedCreateWithoutVariantInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutVariantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VariantStockCreateOrConnectWithoutVariantInputSchema), z.lazy(() => VariantStockCreateOrConnectWithoutVariantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => VariantStockUpsertWithWhereUniqueWithoutVariantInputSchema), z.lazy(() => VariantStockUpsertWithWhereUniqueWithoutVariantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VariantStockCreateManyVariantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => VariantStockWhereUniqueInputSchema), z.lazy(() => VariantStockWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => VariantStockUpdateWithWhereUniqueWithoutVariantInputSchema), z.lazy(() => VariantStockUpdateWithWhereUniqueWithoutVariantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => VariantStockUpdateManyWithWhereWithoutVariantInputSchema), z.lazy(() => VariantStockUpdateManyWithWhereWithoutVariantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => VariantStockScalarWhereInputSchema), z.lazy(() => VariantStockScalarWhereInputSchema).array() ]).optional(),
});

export const VariantCreateNestedOneWithoutVariantStocksInputSchema: z.ZodType<Prisma.VariantCreateNestedOneWithoutVariantStocksInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutVariantStocksInputSchema), z.lazy(() => VariantUncheckedCreateWithoutVariantStocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VariantCreateOrConnectWithoutVariantStocksInputSchema).optional(),
  connect: z.lazy(() => VariantWhereUniqueInputSchema).optional(),
});

export const SizeCreateNestedOneWithoutStocksInputSchema: z.ZodType<Prisma.SizeCreateNestedOneWithoutStocksInput> = z.strictObject({
  create: z.union([ z.lazy(() => SizeCreateWithoutStocksInputSchema), z.lazy(() => SizeUncheckedCreateWithoutStocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SizeCreateOrConnectWithoutStocksInputSchema).optional(),
  connect: z.lazy(() => SizeWhereUniqueInputSchema).optional(),
});

export const VariantUpdateOneRequiredWithoutVariantStocksNestedInputSchema: z.ZodType<Prisma.VariantUpdateOneRequiredWithoutVariantStocksNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => VariantCreateWithoutVariantStocksInputSchema), z.lazy(() => VariantUncheckedCreateWithoutVariantStocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => VariantCreateOrConnectWithoutVariantStocksInputSchema).optional(),
  upsert: z.lazy(() => VariantUpsertWithoutVariantStocksInputSchema).optional(),
  connect: z.lazy(() => VariantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => VariantUpdateToOneWithWhereWithoutVariantStocksInputSchema), z.lazy(() => VariantUpdateWithoutVariantStocksInputSchema), z.lazy(() => VariantUncheckedUpdateWithoutVariantStocksInputSchema) ]).optional(),
});

export const SizeUpdateOneRequiredWithoutStocksNestedInputSchema: z.ZodType<Prisma.SizeUpdateOneRequiredWithoutStocksNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SizeCreateWithoutStocksInputSchema), z.lazy(() => SizeUncheckedCreateWithoutStocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SizeCreateOrConnectWithoutStocksInputSchema).optional(),
  upsert: z.lazy(() => SizeUpsertWithoutStocksInputSchema).optional(),
  connect: z.lazy(() => SizeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SizeUpdateToOneWithWhereWithoutStocksInputSchema), z.lazy(() => SizeUpdateWithoutStocksInputSchema), z.lazy(() => SizeUncheckedUpdateWithoutStocksInputSchema) ]).optional(),
});

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
});

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
});

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
});

export const NestedEnumProductGenderFilterSchema: z.ZodType<Prisma.NestedEnumProductGenderFilter> = z.strictObject({
  equals: z.lazy(() => ProductGenderSchema).optional(),
  in: z.lazy(() => ProductGenderSchema).array().optional(),
  notIn: z.lazy(() => ProductGenderSchema).array().optional(),
  not: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => NestedEnumProductGenderFilterSchema) ]).optional(),
});

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional(),
});

export const NestedFloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
});

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
});

export const NestedEnumProductGenderWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumProductGenderWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ProductGenderSchema).optional(),
  in: z.lazy(() => ProductGenderSchema).array().optional(),
  notIn: z.lazy(() => ProductGenderSchema).array().optional(),
  not: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => NestedEnumProductGenderWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumProductGenderFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumProductGenderFilterSchema).optional(),
});

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
});

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
});

export const ProductCreateWithoutBrandInputSchema: z.ZodType<Prisma.ProductCreateWithoutBrandInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  styles: z.lazy(() => StyleCreateNestedManyWithoutProductsInputSchema).optional(),
  variants: z.lazy(() => VariantCreateNestedManyWithoutProductInputSchema).optional(),
  cartItems: z.lazy(() => CartItemCreateNestedManyWithoutProductInputSchema).optional(),
});

export const ProductUncheckedCreateWithoutBrandInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutBrandInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  styles: z.lazy(() => StyleUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  variants: z.lazy(() => VariantUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
});

export const ProductCreateOrConnectWithoutBrandInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutBrandInput> = z.strictObject({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema) ]),
});

export const ProductCreateManyBrandInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyBrandInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ProductCreateManyBrandInputSchema), z.lazy(() => ProductCreateManyBrandInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const ProductUpsertWithWhereUniqueWithoutBrandInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutBrandInput> = z.strictObject({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutBrandInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedCreateWithoutBrandInputSchema) ]),
});

export const ProductUpdateWithWhereUniqueWithoutBrandInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutBrandInput> = z.strictObject({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutBrandInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutBrandInputSchema) ]),
});

export const ProductUpdateManyWithWhereWithoutBrandInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutBrandInput> = z.strictObject({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema), z.lazy(() => ProductUncheckedUpdateManyWithoutBrandInputSchema) ]),
});

export const ProductScalarWhereInputSchema: z.ZodType<Prisma.ProductScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProductScalarWhereInputSchema), z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereInputSchema), z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  discount: z.union([ z.lazy(() => FloatNullableFilterSchema), z.number() ]).optional().nullable(),
  gender: z.union([ z.lazy(() => EnumProductGenderFilterSchema), z.lazy(() => ProductGenderSchema) ]).optional(),
  rating: z.union([ z.lazy(() => FloatFilterSchema), z.number() ]).optional(),
  brandId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const UserCartCreateWithoutItemsInputSchema: z.ZodType<Prisma.UserCartCreateWithoutItemsInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCartInputSchema),
});

export const UserCartUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.UserCartUncheckedCreateWithoutItemsInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const UserCartCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.UserCartCreateOrConnectWithoutItemsInput> = z.strictObject({
  where: z.lazy(() => UserCartWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCartCreateWithoutItemsInputSchema), z.lazy(() => UserCartUncheckedCreateWithoutItemsInputSchema) ]),
});

export const ProductCreateWithoutCartItemsInputSchema: z.ZodType<Prisma.ProductCreateWithoutCartItemsInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  styles: z.lazy(() => StyleCreateNestedManyWithoutProductsInputSchema).optional(),
  brand: z.lazy(() => BrandCreateNestedOneWithoutProductsInputSchema),
  variants: z.lazy(() => VariantCreateNestedManyWithoutProductInputSchema).optional(),
});

export const ProductUncheckedCreateWithoutCartItemsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCartItemsInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  brandId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  styles: z.lazy(() => StyleUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  variants: z.lazy(() => VariantUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
});

export const ProductCreateOrConnectWithoutCartItemsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCartItemsInput> = z.strictObject({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutCartItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutCartItemsInputSchema) ]),
});

export const UserCartUpsertWithoutItemsInputSchema: z.ZodType<Prisma.UserCartUpsertWithoutItemsInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserCartUpdateWithoutItemsInputSchema), z.lazy(() => UserCartUncheckedUpdateWithoutItemsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCartCreateWithoutItemsInputSchema), z.lazy(() => UserCartUncheckedCreateWithoutItemsInputSchema) ]),
  where: z.lazy(() => UserCartWhereInputSchema).optional(),
});

export const UserCartUpdateToOneWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.UserCartUpdateToOneWithWhereWithoutItemsInput> = z.strictObject({
  where: z.lazy(() => UserCartWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserCartUpdateWithoutItemsInputSchema), z.lazy(() => UserCartUncheckedUpdateWithoutItemsInputSchema) ]),
});

export const UserCartUpdateWithoutItemsInputSchema: z.ZodType<Prisma.UserCartUpdateWithoutItemsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCartNestedInputSchema).optional(),
});

export const UserCartUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.UserCartUncheckedUpdateWithoutItemsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ProductUpsertWithoutCartItemsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutCartItemsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ProductUpdateWithoutCartItemsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutCartItemsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutCartItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutCartItemsInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional(),
});

export const ProductUpdateToOneWithWhereWithoutCartItemsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutCartItemsInput> = z.strictObject({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutCartItemsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutCartItemsInputSchema) ]),
});

export const ProductUpdateWithoutCartItemsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutCartItemsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  styles: z.lazy(() => StyleUpdateManyWithoutProductsNestedInputSchema).optional(),
  brand: z.lazy(() => BrandUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  variants: z.lazy(() => VariantUpdateManyWithoutProductNestedInputSchema).optional(),
});

export const ProductUncheckedUpdateWithoutCartItemsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCartItemsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  styles: z.lazy(() => StyleUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  variants: z.lazy(() => VariantUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
});

export const UserCreateWithoutCartInputSchema: z.ZodType<Prisma.UserCreateWithoutCartInput> = z.strictObject({
  id: z.uuid().optional(),
  email: z.string(),
  password: z.string(),
  isActivated: z.boolean(),
  activationLink: z.string(),
  roles: z.union([ z.lazy(() => UserCreaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  refreshTokens: z.lazy(() => RefreshTokenCreateNestedOneWithoutUserInputSchema).optional(),
});

export const UserUncheckedCreateWithoutCartInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCartInput> = z.strictObject({
  id: z.uuid().optional(),
  email: z.string(),
  password: z.string(),
  isActivated: z.boolean(),
  activationLink: z.string(),
  roles: z.union([ z.lazy(() => UserCreaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  refreshTokens: z.lazy(() => RefreshTokenUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
});

export const UserCreateOrConnectWithoutCartInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCartInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCartInputSchema), z.lazy(() => UserUncheckedCreateWithoutCartInputSchema) ]),
});

export const CartItemCreateWithoutCartInputSchema: z.ZodType<Prisma.CartItemCreateWithoutCartInput> = z.strictObject({
  id: z.uuid().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutCartItemsInputSchema),
});

export const CartItemUncheckedCreateWithoutCartInputSchema: z.ZodType<Prisma.CartItemUncheckedCreateWithoutCartInput> = z.strictObject({
  id: z.uuid().optional(),
  productId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const CartItemCreateOrConnectWithoutCartInputSchema: z.ZodType<Prisma.CartItemCreateOrConnectWithoutCartInput> = z.strictObject({
  where: z.lazy(() => CartItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CartItemCreateWithoutCartInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartInputSchema) ]),
});

export const CartItemCreateManyCartInputEnvelopeSchema: z.ZodType<Prisma.CartItemCreateManyCartInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CartItemCreateManyCartInputSchema), z.lazy(() => CartItemCreateManyCartInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const UserUpsertWithoutCartInputSchema: z.ZodType<Prisma.UserUpsertWithoutCartInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserUpdateWithoutCartInputSchema), z.lazy(() => UserUncheckedUpdateWithoutCartInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCartInputSchema), z.lazy(() => UserUncheckedCreateWithoutCartInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
});

export const UserUpdateToOneWithWhereWithoutCartInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCartInput> = z.strictObject({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCartInputSchema), z.lazy(() => UserUncheckedUpdateWithoutCartInputSchema) ]),
});

export const UserUpdateWithoutCartInputSchema: z.ZodType<Prisma.UserUpdateWithoutCartInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActivated: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  activationLink: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.union([ z.lazy(() => UserUpdaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  refreshTokens: z.lazy(() => RefreshTokenUpdateOneWithoutUserNestedInputSchema).optional(),
});

export const UserUncheckedUpdateWithoutCartInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCartInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActivated: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  activationLink: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.union([ z.lazy(() => UserUpdaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  refreshTokens: z.lazy(() => RefreshTokenUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
});

export const CartItemUpsertWithWhereUniqueWithoutCartInputSchema: z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutCartInput> = z.strictObject({
  where: z.lazy(() => CartItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CartItemUpdateWithoutCartInputSchema), z.lazy(() => CartItemUncheckedUpdateWithoutCartInputSchema) ]),
  create: z.union([ z.lazy(() => CartItemCreateWithoutCartInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartInputSchema) ]),
});

export const CartItemUpdateWithWhereUniqueWithoutCartInputSchema: z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutCartInput> = z.strictObject({
  where: z.lazy(() => CartItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CartItemUpdateWithoutCartInputSchema), z.lazy(() => CartItemUncheckedUpdateWithoutCartInputSchema) ]),
});

export const CartItemUpdateManyWithWhereWithoutCartInputSchema: z.ZodType<Prisma.CartItemUpdateManyWithWhereWithoutCartInput> = z.strictObject({
  where: z.lazy(() => CartItemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CartItemUpdateManyMutationInputSchema), z.lazy(() => CartItemUncheckedUpdateManyWithoutCartInputSchema) ]),
});

export const CartItemScalarWhereInputSchema: z.ZodType<Prisma.CartItemScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CartItemScalarWhereInputSchema), z.lazy(() => CartItemScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CartItemScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CartItemScalarWhereInputSchema), z.lazy(() => CartItemScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  cartId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const VariantCreateWithoutColorInputSchema: z.ZodType<Prisma.VariantCreateWithoutColorInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutVariantsInputSchema),
  images: z.lazy(() => ImageCreateNestedManyWithoutVariantInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockCreateNestedManyWithoutVariantInputSchema).optional(),
});

export const VariantUncheckedCreateWithoutColorInputSchema: z.ZodType<Prisma.VariantUncheckedCreateWithoutColorInput> = z.strictObject({
  id: z.uuid().optional(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutVariantInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockUncheckedCreateNestedManyWithoutVariantInputSchema).optional(),
});

export const VariantCreateOrConnectWithoutColorInputSchema: z.ZodType<Prisma.VariantCreateOrConnectWithoutColorInput> = z.strictObject({
  where: z.lazy(() => VariantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VariantCreateWithoutColorInputSchema), z.lazy(() => VariantUncheckedCreateWithoutColorInputSchema) ]),
});

export const VariantCreateManyColorInputEnvelopeSchema: z.ZodType<Prisma.VariantCreateManyColorInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => VariantCreateManyColorInputSchema), z.lazy(() => VariantCreateManyColorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const VariantUpsertWithWhereUniqueWithoutColorInputSchema: z.ZodType<Prisma.VariantUpsertWithWhereUniqueWithoutColorInput> = z.strictObject({
  where: z.lazy(() => VariantWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VariantUpdateWithoutColorInputSchema), z.lazy(() => VariantUncheckedUpdateWithoutColorInputSchema) ]),
  create: z.union([ z.lazy(() => VariantCreateWithoutColorInputSchema), z.lazy(() => VariantUncheckedCreateWithoutColorInputSchema) ]),
});

export const VariantUpdateWithWhereUniqueWithoutColorInputSchema: z.ZodType<Prisma.VariantUpdateWithWhereUniqueWithoutColorInput> = z.strictObject({
  where: z.lazy(() => VariantWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VariantUpdateWithoutColorInputSchema), z.lazy(() => VariantUncheckedUpdateWithoutColorInputSchema) ]),
});

export const VariantUpdateManyWithWhereWithoutColorInputSchema: z.ZodType<Prisma.VariantUpdateManyWithWhereWithoutColorInput> = z.strictObject({
  where: z.lazy(() => VariantScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VariantUpdateManyMutationInputSchema), z.lazy(() => VariantUncheckedUpdateManyWithoutColorInputSchema) ]),
});

export const VariantScalarWhereInputSchema: z.ZodType<Prisma.VariantScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => VariantScalarWhereInputSchema), z.lazy(() => VariantScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VariantScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VariantScalarWhereInputSchema), z.lazy(() => VariantScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  colorId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const VariantCreateWithoutImagesInputSchema: z.ZodType<Prisma.VariantCreateWithoutImagesInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  color: z.lazy(() => ColorCreateNestedOneWithoutVariantInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutVariantsInputSchema),
  variantStocks: z.lazy(() => VariantStockCreateNestedManyWithoutVariantInputSchema).optional(),
});

export const VariantUncheckedCreateWithoutImagesInputSchema: z.ZodType<Prisma.VariantUncheckedCreateWithoutImagesInput> = z.strictObject({
  id: z.uuid().optional(),
  colorId: z.string(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  variantStocks: z.lazy(() => VariantStockUncheckedCreateNestedManyWithoutVariantInputSchema).optional(),
});

export const VariantCreateOrConnectWithoutImagesInputSchema: z.ZodType<Prisma.VariantCreateOrConnectWithoutImagesInput> = z.strictObject({
  where: z.lazy(() => VariantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VariantCreateWithoutImagesInputSchema), z.lazy(() => VariantUncheckedCreateWithoutImagesInputSchema) ]),
});

export const VariantUpsertWithoutImagesInputSchema: z.ZodType<Prisma.VariantUpsertWithoutImagesInput> = z.strictObject({
  update: z.union([ z.lazy(() => VariantUpdateWithoutImagesInputSchema), z.lazy(() => VariantUncheckedUpdateWithoutImagesInputSchema) ]),
  create: z.union([ z.lazy(() => VariantCreateWithoutImagesInputSchema), z.lazy(() => VariantUncheckedCreateWithoutImagesInputSchema) ]),
  where: z.lazy(() => VariantWhereInputSchema).optional(),
});

export const VariantUpdateToOneWithWhereWithoutImagesInputSchema: z.ZodType<Prisma.VariantUpdateToOneWithWhereWithoutImagesInput> = z.strictObject({
  where: z.lazy(() => VariantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VariantUpdateWithoutImagesInputSchema), z.lazy(() => VariantUncheckedUpdateWithoutImagesInputSchema) ]),
});

export const VariantUpdateWithoutImagesInputSchema: z.ZodType<Prisma.VariantUpdateWithoutImagesInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.lazy(() => ColorUpdateOneRequiredWithoutVariantNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutVariantsNestedInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockUpdateManyWithoutVariantNestedInputSchema).optional(),
});

export const VariantUncheckedUpdateWithoutImagesInputSchema: z.ZodType<Prisma.VariantUncheckedUpdateWithoutImagesInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  variantStocks: z.lazy(() => VariantStockUncheckedUpdateManyWithoutVariantNestedInputSchema).optional(),
});

export const StyleCreateWithoutProductsInputSchema: z.ZodType<Prisma.StyleCreateWithoutProductsInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const StyleUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.StyleUncheckedCreateWithoutProductsInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const StyleCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.StyleCreateOrConnectWithoutProductsInput> = z.strictObject({
  where: z.lazy(() => StyleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StyleCreateWithoutProductsInputSchema), z.lazy(() => StyleUncheckedCreateWithoutProductsInputSchema) ]),
});

export const BrandCreateWithoutProductsInputSchema: z.ZodType<Prisma.BrandCreateWithoutProductsInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const BrandUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.BrandUncheckedCreateWithoutProductsInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const BrandCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.BrandCreateOrConnectWithoutProductsInput> = z.strictObject({
  where: z.lazy(() => BrandWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BrandCreateWithoutProductsInputSchema), z.lazy(() => BrandUncheckedCreateWithoutProductsInputSchema) ]),
});

export const VariantCreateWithoutProductInputSchema: z.ZodType<Prisma.VariantCreateWithoutProductInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  color: z.lazy(() => ColorCreateNestedOneWithoutVariantInputSchema),
  images: z.lazy(() => ImageCreateNestedManyWithoutVariantInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockCreateNestedManyWithoutVariantInputSchema).optional(),
});

export const VariantUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.VariantUncheckedCreateWithoutProductInput> = z.strictObject({
  id: z.uuid().optional(),
  colorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutVariantInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockUncheckedCreateNestedManyWithoutVariantInputSchema).optional(),
});

export const VariantCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.VariantCreateOrConnectWithoutProductInput> = z.strictObject({
  where: z.lazy(() => VariantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VariantCreateWithoutProductInputSchema), z.lazy(() => VariantUncheckedCreateWithoutProductInputSchema) ]),
});

export const VariantCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.VariantCreateManyProductInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => VariantCreateManyProductInputSchema), z.lazy(() => VariantCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const CartItemCreateWithoutProductInputSchema: z.ZodType<Prisma.CartItemCreateWithoutProductInput> = z.strictObject({
  id: z.uuid().optional(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cart: z.lazy(() => UserCartCreateNestedOneWithoutItemsInputSchema),
});

export const CartItemUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.CartItemUncheckedCreateWithoutProductInput> = z.strictObject({
  id: z.uuid().optional(),
  cartId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const CartItemCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.CartItemCreateOrConnectWithoutProductInput> = z.strictObject({
  where: z.lazy(() => CartItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CartItemCreateWithoutProductInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductInputSchema) ]),
});

export const CartItemCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.CartItemCreateManyProductInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CartItemCreateManyProductInputSchema), z.lazy(() => CartItemCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const StyleUpsertWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.StyleUpsertWithWhereUniqueWithoutProductsInput> = z.strictObject({
  where: z.lazy(() => StyleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StyleUpdateWithoutProductsInputSchema), z.lazy(() => StyleUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => StyleCreateWithoutProductsInputSchema), z.lazy(() => StyleUncheckedCreateWithoutProductsInputSchema) ]),
});

export const StyleUpdateWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.StyleUpdateWithWhereUniqueWithoutProductsInput> = z.strictObject({
  where: z.lazy(() => StyleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StyleUpdateWithoutProductsInputSchema), z.lazy(() => StyleUncheckedUpdateWithoutProductsInputSchema) ]),
});

export const StyleUpdateManyWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.StyleUpdateManyWithWhereWithoutProductsInput> = z.strictObject({
  where: z.lazy(() => StyleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StyleUpdateManyMutationInputSchema), z.lazy(() => StyleUncheckedUpdateManyWithoutProductsInputSchema) ]),
});

export const StyleScalarWhereInputSchema: z.ZodType<Prisma.StyleScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => StyleScalarWhereInputSchema), z.lazy(() => StyleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StyleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StyleScalarWhereInputSchema), z.lazy(() => StyleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const BrandUpsertWithoutProductsInputSchema: z.ZodType<Prisma.BrandUpsertWithoutProductsInput> = z.strictObject({
  update: z.union([ z.lazy(() => BrandUpdateWithoutProductsInputSchema), z.lazy(() => BrandUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => BrandCreateWithoutProductsInputSchema), z.lazy(() => BrandUncheckedCreateWithoutProductsInputSchema) ]),
  where: z.lazy(() => BrandWhereInputSchema).optional(),
});

export const BrandUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.BrandUpdateToOneWithWhereWithoutProductsInput> = z.strictObject({
  where: z.lazy(() => BrandWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BrandUpdateWithoutProductsInputSchema), z.lazy(() => BrandUncheckedUpdateWithoutProductsInputSchema) ]),
});

export const BrandUpdateWithoutProductsInputSchema: z.ZodType<Prisma.BrandUpdateWithoutProductsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const BrandUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.BrandUncheckedUpdateWithoutProductsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.VariantUpsertWithWhereUniqueWithoutProductInput> = z.strictObject({
  where: z.lazy(() => VariantWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VariantUpdateWithoutProductInputSchema), z.lazy(() => VariantUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => VariantCreateWithoutProductInputSchema), z.lazy(() => VariantUncheckedCreateWithoutProductInputSchema) ]),
});

export const VariantUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.VariantUpdateWithWhereUniqueWithoutProductInput> = z.strictObject({
  where: z.lazy(() => VariantWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VariantUpdateWithoutProductInputSchema), z.lazy(() => VariantUncheckedUpdateWithoutProductInputSchema) ]),
});

export const VariantUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.VariantUpdateManyWithWhereWithoutProductInput> = z.strictObject({
  where: z.lazy(() => VariantScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VariantUpdateManyMutationInputSchema), z.lazy(() => VariantUncheckedUpdateManyWithoutProductInputSchema) ]),
});

export const CartItemUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutProductInput> = z.strictObject({
  where: z.lazy(() => CartItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CartItemUpdateWithoutProductInputSchema), z.lazy(() => CartItemUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => CartItemCreateWithoutProductInputSchema), z.lazy(() => CartItemUncheckedCreateWithoutProductInputSchema) ]),
});

export const CartItemUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutProductInput> = z.strictObject({
  where: z.lazy(() => CartItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CartItemUpdateWithoutProductInputSchema), z.lazy(() => CartItemUncheckedUpdateWithoutProductInputSchema) ]),
});

export const CartItemUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.CartItemUpdateManyWithWhereWithoutProductInput> = z.strictObject({
  where: z.lazy(() => CartItemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CartItemUpdateManyMutationInputSchema), z.lazy(() => CartItemUncheckedUpdateManyWithoutProductInputSchema) ]),
});

export const UserCreateWithoutRefreshTokensInputSchema: z.ZodType<Prisma.UserCreateWithoutRefreshTokensInput> = z.strictObject({
  id: z.uuid().optional(),
  email: z.string(),
  password: z.string(),
  isActivated: z.boolean(),
  activationLink: z.string(),
  roles: z.union([ z.lazy(() => UserCreaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cart: z.lazy(() => UserCartCreateNestedOneWithoutUserInputSchema).optional(),
});

export const UserUncheckedCreateWithoutRefreshTokensInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRefreshTokensInput> = z.strictObject({
  id: z.uuid().optional(),
  email: z.string(),
  password: z.string(),
  isActivated: z.boolean(),
  activationLink: z.string(),
  roles: z.union([ z.lazy(() => UserCreaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cart: z.lazy(() => UserCartUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
});

export const UserCreateOrConnectWithoutRefreshTokensInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRefreshTokensInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutRefreshTokensInputSchema), z.lazy(() => UserUncheckedCreateWithoutRefreshTokensInputSchema) ]),
});

export const UserUpsertWithoutRefreshTokensInputSchema: z.ZodType<Prisma.UserUpsertWithoutRefreshTokensInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserUpdateWithoutRefreshTokensInputSchema), z.lazy(() => UserUncheckedUpdateWithoutRefreshTokensInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutRefreshTokensInputSchema), z.lazy(() => UserUncheckedCreateWithoutRefreshTokensInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
});

export const UserUpdateToOneWithWhereWithoutRefreshTokensInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRefreshTokensInput> = z.strictObject({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutRefreshTokensInputSchema), z.lazy(() => UserUncheckedUpdateWithoutRefreshTokensInputSchema) ]),
});

export const UserUpdateWithoutRefreshTokensInputSchema: z.ZodType<Prisma.UserUpdateWithoutRefreshTokensInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActivated: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  activationLink: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.union([ z.lazy(() => UserUpdaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cart: z.lazy(() => UserCartUpdateOneWithoutUserNestedInputSchema).optional(),
});

export const UserUncheckedUpdateWithoutRefreshTokensInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutRefreshTokensInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActivated: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  activationLink: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.union([ z.lazy(() => UserUpdaterolesInputSchema), z.lazy(() => RoleSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cart: z.lazy(() => UserCartUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
});

export const VariantStockCreateWithoutSizeInputSchema: z.ZodType<Prisma.VariantStockCreateWithoutSizeInput> = z.strictObject({
  id: z.uuid().optional(),
  stock: z.number().int().optional(),
  variant: z.lazy(() => VariantCreateNestedOneWithoutVariantStocksInputSchema),
});

export const VariantStockUncheckedCreateWithoutSizeInputSchema: z.ZodType<Prisma.VariantStockUncheckedCreateWithoutSizeInput> = z.strictObject({
  id: z.uuid().optional(),
  variantId: z.string(),
  stock: z.number().int().optional(),
});

export const VariantStockCreateOrConnectWithoutSizeInputSchema: z.ZodType<Prisma.VariantStockCreateOrConnectWithoutSizeInput> = z.strictObject({
  where: z.lazy(() => VariantStockWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VariantStockCreateWithoutSizeInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutSizeInputSchema) ]),
});

export const VariantStockCreateManySizeInputEnvelopeSchema: z.ZodType<Prisma.VariantStockCreateManySizeInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => VariantStockCreateManySizeInputSchema), z.lazy(() => VariantStockCreateManySizeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const VariantStockUpsertWithWhereUniqueWithoutSizeInputSchema: z.ZodType<Prisma.VariantStockUpsertWithWhereUniqueWithoutSizeInput> = z.strictObject({
  where: z.lazy(() => VariantStockWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VariantStockUpdateWithoutSizeInputSchema), z.lazy(() => VariantStockUncheckedUpdateWithoutSizeInputSchema) ]),
  create: z.union([ z.lazy(() => VariantStockCreateWithoutSizeInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutSizeInputSchema) ]),
});

export const VariantStockUpdateWithWhereUniqueWithoutSizeInputSchema: z.ZodType<Prisma.VariantStockUpdateWithWhereUniqueWithoutSizeInput> = z.strictObject({
  where: z.lazy(() => VariantStockWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VariantStockUpdateWithoutSizeInputSchema), z.lazy(() => VariantStockUncheckedUpdateWithoutSizeInputSchema) ]),
});

export const VariantStockUpdateManyWithWhereWithoutSizeInputSchema: z.ZodType<Prisma.VariantStockUpdateManyWithWhereWithoutSizeInput> = z.strictObject({
  where: z.lazy(() => VariantStockScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VariantStockUpdateManyMutationInputSchema), z.lazy(() => VariantStockUncheckedUpdateManyWithoutSizeInputSchema) ]),
});

export const VariantStockScalarWhereInputSchema: z.ZodType<Prisma.VariantStockScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => VariantStockScalarWhereInputSchema), z.lazy(() => VariantStockScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VariantStockScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VariantStockScalarWhereInputSchema), z.lazy(() => VariantStockScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  variantId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sizeId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  stock: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
});

export const ProductCreateWithoutStylesInputSchema: z.ZodType<Prisma.ProductCreateWithoutStylesInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  brand: z.lazy(() => BrandCreateNestedOneWithoutProductsInputSchema),
  variants: z.lazy(() => VariantCreateNestedManyWithoutProductInputSchema).optional(),
  cartItems: z.lazy(() => CartItemCreateNestedManyWithoutProductInputSchema).optional(),
});

export const ProductUncheckedCreateWithoutStylesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutStylesInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  brandId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  variants: z.lazy(() => VariantUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
});

export const ProductCreateOrConnectWithoutStylesInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutStylesInput> = z.strictObject({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutStylesInputSchema), z.lazy(() => ProductUncheckedCreateWithoutStylesInputSchema) ]),
});

export const ProductUpsertWithWhereUniqueWithoutStylesInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutStylesInput> = z.strictObject({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutStylesInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutStylesInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutStylesInputSchema), z.lazy(() => ProductUncheckedCreateWithoutStylesInputSchema) ]),
});

export const ProductUpdateWithWhereUniqueWithoutStylesInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutStylesInput> = z.strictObject({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutStylesInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutStylesInputSchema) ]),
});

export const ProductUpdateManyWithWhereWithoutStylesInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutStylesInput> = z.strictObject({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema), z.lazy(() => ProductUncheckedUpdateManyWithoutStylesInputSchema) ]),
});

export const RefreshTokenCreateWithoutUserInputSchema: z.ZodType<Prisma.RefreshTokenCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  refreshToken: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export const RefreshTokenUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.RefreshTokenUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  refreshToken: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
});

export const RefreshTokenCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.RefreshTokenCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => RefreshTokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RefreshTokenCreateWithoutUserInputSchema), z.lazy(() => RefreshTokenUncheckedCreateWithoutUserInputSchema) ]),
});

export const UserCartCreateWithoutUserInputSchema: z.ZodType<Prisma.UserCartCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => CartItemCreateNestedManyWithoutCartInputSchema).optional(),
});

export const UserCartUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserCartUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartInputSchema).optional(),
});

export const UserCartCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserCartCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserCartWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCartCreateWithoutUserInputSchema), z.lazy(() => UserCartUncheckedCreateWithoutUserInputSchema) ]),
});

export const RefreshTokenUpsertWithoutUserInputSchema: z.ZodType<Prisma.RefreshTokenUpsertWithoutUserInput> = z.strictObject({
  update: z.union([ z.lazy(() => RefreshTokenUpdateWithoutUserInputSchema), z.lazy(() => RefreshTokenUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => RefreshTokenCreateWithoutUserInputSchema), z.lazy(() => RefreshTokenUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => RefreshTokenWhereInputSchema).optional(),
});

export const RefreshTokenUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.RefreshTokenUpdateToOneWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => RefreshTokenWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RefreshTokenUpdateWithoutUserInputSchema), z.lazy(() => RefreshTokenUncheckedUpdateWithoutUserInputSchema) ]),
});

export const RefreshTokenUpdateWithoutUserInputSchema: z.ZodType<Prisma.RefreshTokenUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const RefreshTokenUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.RefreshTokenUncheckedUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refreshToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserCartUpsertWithoutUserInputSchema: z.ZodType<Prisma.UserCartUpsertWithoutUserInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserCartUpdateWithoutUserInputSchema), z.lazy(() => UserCartUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserCartCreateWithoutUserInputSchema), z.lazy(() => UserCartUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => UserCartWhereInputSchema).optional(),
});

export const UserCartUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserCartUpdateToOneWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserCartWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserCartUpdateWithoutUserInputSchema), z.lazy(() => UserCartUncheckedUpdateWithoutUserInputSchema) ]),
});

export const UserCartUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserCartUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => CartItemUpdateManyWithoutCartNestedInputSchema).optional(),
});

export const UserCartUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserCartUncheckedUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => CartItemUncheckedUpdateManyWithoutCartNestedInputSchema).optional(),
});

export const ColorCreateWithoutVariantInputSchema: z.ZodType<Prisma.ColorCreateWithoutVariantInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  hex: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ColorUncheckedCreateWithoutVariantInputSchema: z.ZodType<Prisma.ColorUncheckedCreateWithoutVariantInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  hex: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ColorCreateOrConnectWithoutVariantInputSchema: z.ZodType<Prisma.ColorCreateOrConnectWithoutVariantInput> = z.strictObject({
  where: z.lazy(() => ColorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ColorCreateWithoutVariantInputSchema), z.lazy(() => ColorUncheckedCreateWithoutVariantInputSchema) ]),
});

export const ProductCreateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductCreateWithoutVariantsInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  styles: z.lazy(() => StyleCreateNestedManyWithoutProductsInputSchema).optional(),
  brand: z.lazy(() => BrandCreateNestedOneWithoutProductsInputSchema),
  cartItems: z.lazy(() => CartItemCreateNestedManyWithoutProductInputSchema).optional(),
});

export const ProductUncheckedCreateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutVariantsInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  brandId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  styles: z.lazy(() => StyleUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
});

export const ProductCreateOrConnectWithoutVariantsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutVariantsInput> = z.strictObject({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutVariantsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutVariantsInputSchema) ]),
});

export const ImageCreateWithoutVariantInputSchema: z.ZodType<Prisma.ImageCreateWithoutVariantInput> = z.strictObject({
  id: z.uuid().optional(),
  url: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ImageUncheckedCreateWithoutVariantInputSchema: z.ZodType<Prisma.ImageUncheckedCreateWithoutVariantInput> = z.strictObject({
  id: z.uuid().optional(),
  url: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ImageCreateOrConnectWithoutVariantInputSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutVariantInput> = z.strictObject({
  where: z.lazy(() => ImageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ImageCreateWithoutVariantInputSchema), z.lazy(() => ImageUncheckedCreateWithoutVariantInputSchema) ]),
});

export const ImageCreateManyVariantInputEnvelopeSchema: z.ZodType<Prisma.ImageCreateManyVariantInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ImageCreateManyVariantInputSchema), z.lazy(() => ImageCreateManyVariantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const VariantStockCreateWithoutVariantInputSchema: z.ZodType<Prisma.VariantStockCreateWithoutVariantInput> = z.strictObject({
  id: z.uuid().optional(),
  stock: z.number().int().optional(),
  size: z.lazy(() => SizeCreateNestedOneWithoutStocksInputSchema),
});

export const VariantStockUncheckedCreateWithoutVariantInputSchema: z.ZodType<Prisma.VariantStockUncheckedCreateWithoutVariantInput> = z.strictObject({
  id: z.uuid().optional(),
  sizeId: z.string(),
  stock: z.number().int().optional(),
});

export const VariantStockCreateOrConnectWithoutVariantInputSchema: z.ZodType<Prisma.VariantStockCreateOrConnectWithoutVariantInput> = z.strictObject({
  where: z.lazy(() => VariantStockWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VariantStockCreateWithoutVariantInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutVariantInputSchema) ]),
});

export const VariantStockCreateManyVariantInputEnvelopeSchema: z.ZodType<Prisma.VariantStockCreateManyVariantInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => VariantStockCreateManyVariantInputSchema), z.lazy(() => VariantStockCreateManyVariantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const ColorUpsertWithoutVariantInputSchema: z.ZodType<Prisma.ColorUpsertWithoutVariantInput> = z.strictObject({
  update: z.union([ z.lazy(() => ColorUpdateWithoutVariantInputSchema), z.lazy(() => ColorUncheckedUpdateWithoutVariantInputSchema) ]),
  create: z.union([ z.lazy(() => ColorCreateWithoutVariantInputSchema), z.lazy(() => ColorUncheckedCreateWithoutVariantInputSchema) ]),
  where: z.lazy(() => ColorWhereInputSchema).optional(),
});

export const ColorUpdateToOneWithWhereWithoutVariantInputSchema: z.ZodType<Prisma.ColorUpdateToOneWithWhereWithoutVariantInput> = z.strictObject({
  where: z.lazy(() => ColorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ColorUpdateWithoutVariantInputSchema), z.lazy(() => ColorUncheckedUpdateWithoutVariantInputSchema) ]),
});

export const ColorUpdateWithoutVariantInputSchema: z.ZodType<Prisma.ColorUpdateWithoutVariantInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ColorUncheckedUpdateWithoutVariantInputSchema: z.ZodType<Prisma.ColorUncheckedUpdateWithoutVariantInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hex: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ProductUpsertWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutVariantsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ProductUpdateWithoutVariantsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutVariantsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutVariantsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutVariantsInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional(),
});

export const ProductUpdateToOneWithWhereWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutVariantsInput> = z.strictObject({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutVariantsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutVariantsInputSchema) ]),
});

export const ProductUpdateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutVariantsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  styles: z.lazy(() => StyleUpdateManyWithoutProductsNestedInputSchema).optional(),
  brand: z.lazy(() => BrandUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUpdateManyWithoutProductNestedInputSchema).optional(),
});

export const ProductUncheckedUpdateWithoutVariantsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutVariantsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  styles: z.lazy(() => StyleUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
});

export const ImageUpsertWithWhereUniqueWithoutVariantInputSchema: z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutVariantInput> = z.strictObject({
  where: z.lazy(() => ImageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ImageUpdateWithoutVariantInputSchema), z.lazy(() => ImageUncheckedUpdateWithoutVariantInputSchema) ]),
  create: z.union([ z.lazy(() => ImageCreateWithoutVariantInputSchema), z.lazy(() => ImageUncheckedCreateWithoutVariantInputSchema) ]),
});

export const ImageUpdateWithWhereUniqueWithoutVariantInputSchema: z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutVariantInput> = z.strictObject({
  where: z.lazy(() => ImageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ImageUpdateWithoutVariantInputSchema), z.lazy(() => ImageUncheckedUpdateWithoutVariantInputSchema) ]),
});

export const ImageUpdateManyWithWhereWithoutVariantInputSchema: z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutVariantInput> = z.strictObject({
  where: z.lazy(() => ImageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ImageUpdateManyMutationInputSchema), z.lazy(() => ImageUncheckedUpdateManyWithoutVariantInputSchema) ]),
});

export const ImageScalarWhereInputSchema: z.ZodType<Prisma.ImageScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ImageScalarWhereInputSchema), z.lazy(() => ImageScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageScalarWhereInputSchema), z.lazy(() => ImageScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  variantId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const VariantStockUpsertWithWhereUniqueWithoutVariantInputSchema: z.ZodType<Prisma.VariantStockUpsertWithWhereUniqueWithoutVariantInput> = z.strictObject({
  where: z.lazy(() => VariantStockWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VariantStockUpdateWithoutVariantInputSchema), z.lazy(() => VariantStockUncheckedUpdateWithoutVariantInputSchema) ]),
  create: z.union([ z.lazy(() => VariantStockCreateWithoutVariantInputSchema), z.lazy(() => VariantStockUncheckedCreateWithoutVariantInputSchema) ]),
});

export const VariantStockUpdateWithWhereUniqueWithoutVariantInputSchema: z.ZodType<Prisma.VariantStockUpdateWithWhereUniqueWithoutVariantInput> = z.strictObject({
  where: z.lazy(() => VariantStockWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VariantStockUpdateWithoutVariantInputSchema), z.lazy(() => VariantStockUncheckedUpdateWithoutVariantInputSchema) ]),
});

export const VariantStockUpdateManyWithWhereWithoutVariantInputSchema: z.ZodType<Prisma.VariantStockUpdateManyWithWhereWithoutVariantInput> = z.strictObject({
  where: z.lazy(() => VariantStockScalarWhereInputSchema),
  data: z.union([ z.lazy(() => VariantStockUpdateManyMutationInputSchema), z.lazy(() => VariantStockUncheckedUpdateManyWithoutVariantInputSchema) ]),
});

export const VariantCreateWithoutVariantStocksInputSchema: z.ZodType<Prisma.VariantCreateWithoutVariantStocksInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  color: z.lazy(() => ColorCreateNestedOneWithoutVariantInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutVariantsInputSchema),
  images: z.lazy(() => ImageCreateNestedManyWithoutVariantInputSchema).optional(),
});

export const VariantUncheckedCreateWithoutVariantStocksInputSchema: z.ZodType<Prisma.VariantUncheckedCreateWithoutVariantStocksInput> = z.strictObject({
  id: z.uuid().optional(),
  colorId: z.string(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutVariantInputSchema).optional(),
});

export const VariantCreateOrConnectWithoutVariantStocksInputSchema: z.ZodType<Prisma.VariantCreateOrConnectWithoutVariantStocksInput> = z.strictObject({
  where: z.lazy(() => VariantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VariantCreateWithoutVariantStocksInputSchema), z.lazy(() => VariantUncheckedCreateWithoutVariantStocksInputSchema) ]),
});

export const SizeCreateWithoutStocksInputSchema: z.ZodType<Prisma.SizeCreateWithoutStocksInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const SizeUncheckedCreateWithoutStocksInputSchema: z.ZodType<Prisma.SizeUncheckedCreateWithoutStocksInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const SizeCreateOrConnectWithoutStocksInputSchema: z.ZodType<Prisma.SizeCreateOrConnectWithoutStocksInput> = z.strictObject({
  where: z.lazy(() => SizeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SizeCreateWithoutStocksInputSchema), z.lazy(() => SizeUncheckedCreateWithoutStocksInputSchema) ]),
});

export const VariantUpsertWithoutVariantStocksInputSchema: z.ZodType<Prisma.VariantUpsertWithoutVariantStocksInput> = z.strictObject({
  update: z.union([ z.lazy(() => VariantUpdateWithoutVariantStocksInputSchema), z.lazy(() => VariantUncheckedUpdateWithoutVariantStocksInputSchema) ]),
  create: z.union([ z.lazy(() => VariantCreateWithoutVariantStocksInputSchema), z.lazy(() => VariantUncheckedCreateWithoutVariantStocksInputSchema) ]),
  where: z.lazy(() => VariantWhereInputSchema).optional(),
});

export const VariantUpdateToOneWithWhereWithoutVariantStocksInputSchema: z.ZodType<Prisma.VariantUpdateToOneWithWhereWithoutVariantStocksInput> = z.strictObject({
  where: z.lazy(() => VariantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => VariantUpdateWithoutVariantStocksInputSchema), z.lazy(() => VariantUncheckedUpdateWithoutVariantStocksInputSchema) ]),
});

export const VariantUpdateWithoutVariantStocksInputSchema: z.ZodType<Prisma.VariantUpdateWithoutVariantStocksInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.lazy(() => ColorUpdateOneRequiredWithoutVariantNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutVariantsNestedInputSchema).optional(),
  images: z.lazy(() => ImageUpdateManyWithoutVariantNestedInputSchema).optional(),
});

export const VariantUncheckedUpdateWithoutVariantStocksInputSchema: z.ZodType<Prisma.VariantUncheckedUpdateWithoutVariantStocksInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.lazy(() => ImageUncheckedUpdateManyWithoutVariantNestedInputSchema).optional(),
});

export const SizeUpsertWithoutStocksInputSchema: z.ZodType<Prisma.SizeUpsertWithoutStocksInput> = z.strictObject({
  update: z.union([ z.lazy(() => SizeUpdateWithoutStocksInputSchema), z.lazy(() => SizeUncheckedUpdateWithoutStocksInputSchema) ]),
  create: z.union([ z.lazy(() => SizeCreateWithoutStocksInputSchema), z.lazy(() => SizeUncheckedCreateWithoutStocksInputSchema) ]),
  where: z.lazy(() => SizeWhereInputSchema).optional(),
});

export const SizeUpdateToOneWithWhereWithoutStocksInputSchema: z.ZodType<Prisma.SizeUpdateToOneWithWhereWithoutStocksInput> = z.strictObject({
  where: z.lazy(() => SizeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SizeUpdateWithoutStocksInputSchema), z.lazy(() => SizeUncheckedUpdateWithoutStocksInputSchema) ]),
});

export const SizeUpdateWithoutStocksInputSchema: z.ZodType<Prisma.SizeUpdateWithoutStocksInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SizeUncheckedUpdateWithoutStocksInputSchema: z.ZodType<Prisma.SizeUncheckedUpdateWithoutStocksInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ProductCreateManyBrandInputSchema: z.ZodType<Prisma.ProductCreateManyBrandInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number().optional().nullable(),
  gender: z.lazy(() => ProductGenderSchema),
  rating: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ProductUpdateWithoutBrandInputSchema: z.ZodType<Prisma.ProductUpdateWithoutBrandInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  styles: z.lazy(() => StyleUpdateManyWithoutProductsNestedInputSchema).optional(),
  variants: z.lazy(() => VariantUpdateManyWithoutProductNestedInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUpdateManyWithoutProductNestedInputSchema).optional(),
});

export const ProductUncheckedUpdateWithoutBrandInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutBrandInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  styles: z.lazy(() => StyleUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  variants: z.lazy(() => VariantUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
});

export const ProductUncheckedUpdateManyWithoutBrandInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutBrandInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const CartItemCreateManyCartInputSchema: z.ZodType<Prisma.CartItemCreateManyCartInput> = z.strictObject({
  id: z.uuid().optional(),
  productId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const CartItemUpdateWithoutCartInputSchema: z.ZodType<Prisma.CartItemUpdateWithoutCartInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutCartItemsNestedInputSchema).optional(),
});

export const CartItemUncheckedUpdateWithoutCartInputSchema: z.ZodType<Prisma.CartItemUncheckedUpdateWithoutCartInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const CartItemUncheckedUpdateManyWithoutCartInputSchema: z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutCartInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantCreateManyColorInputSchema: z.ZodType<Prisma.VariantCreateManyColorInput> = z.strictObject({
  id: z.uuid().optional(),
  productId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const VariantUpdateWithoutColorInputSchema: z.ZodType<Prisma.VariantUpdateWithoutColorInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutVariantsNestedInputSchema).optional(),
  images: z.lazy(() => ImageUpdateManyWithoutVariantNestedInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockUpdateManyWithoutVariantNestedInputSchema).optional(),
});

export const VariantUncheckedUpdateWithoutColorInputSchema: z.ZodType<Prisma.VariantUncheckedUpdateWithoutColorInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.lazy(() => ImageUncheckedUpdateManyWithoutVariantNestedInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockUncheckedUpdateManyWithoutVariantNestedInputSchema).optional(),
});

export const VariantUncheckedUpdateManyWithoutColorInputSchema: z.ZodType<Prisma.VariantUncheckedUpdateManyWithoutColorInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantCreateManyProductInputSchema: z.ZodType<Prisma.VariantCreateManyProductInput> = z.strictObject({
  id: z.uuid().optional(),
  colorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const CartItemCreateManyProductInputSchema: z.ZodType<Prisma.CartItemCreateManyProductInput> = z.strictObject({
  id: z.uuid().optional(),
  cartId: z.string(),
  quantity: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const StyleUpdateWithoutProductsInputSchema: z.ZodType<Prisma.StyleUpdateWithoutProductsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const StyleUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.StyleUncheckedUpdateWithoutProductsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const StyleUncheckedUpdateManyWithoutProductsInputSchema: z.ZodType<Prisma.StyleUncheckedUpdateManyWithoutProductsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantUpdateWithoutProductInputSchema: z.ZodType<Prisma.VariantUpdateWithoutProductInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.lazy(() => ColorUpdateOneRequiredWithoutVariantNestedInputSchema).optional(),
  images: z.lazy(() => ImageUpdateManyWithoutVariantNestedInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockUpdateManyWithoutVariantNestedInputSchema).optional(),
});

export const VariantUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.VariantUncheckedUpdateWithoutProductInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.lazy(() => ImageUncheckedUpdateManyWithoutVariantNestedInputSchema).optional(),
  variantStocks: z.lazy(() => VariantStockUncheckedUpdateManyWithoutVariantNestedInputSchema).optional(),
});

export const VariantUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.VariantUncheckedUpdateManyWithoutProductInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  colorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const CartItemUpdateWithoutProductInputSchema: z.ZodType<Prisma.CartItemUpdateWithoutProductInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cart: z.lazy(() => UserCartUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
});

export const CartItemUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.CartItemUncheckedUpdateWithoutProductInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cartId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const CartItemUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.CartItemUncheckedUpdateManyWithoutProductInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cartId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantStockCreateManySizeInputSchema: z.ZodType<Prisma.VariantStockCreateManySizeInput> = z.strictObject({
  id: z.uuid().optional(),
  variantId: z.string(),
  stock: z.number().int().optional(),
});

export const VariantStockUpdateWithoutSizeInputSchema: z.ZodType<Prisma.VariantStockUpdateWithoutSizeInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  variant: z.lazy(() => VariantUpdateOneRequiredWithoutVariantStocksNestedInputSchema).optional(),
});

export const VariantStockUncheckedUpdateWithoutSizeInputSchema: z.ZodType<Prisma.VariantStockUncheckedUpdateWithoutSizeInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  variantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantStockUncheckedUpdateManyWithoutSizeInputSchema: z.ZodType<Prisma.VariantStockUncheckedUpdateManyWithoutSizeInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  variantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ProductUpdateWithoutStylesInputSchema: z.ZodType<Prisma.ProductUpdateWithoutStylesInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  brand: z.lazy(() => BrandUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  variants: z.lazy(() => VariantUpdateManyWithoutProductNestedInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUpdateManyWithoutProductNestedInputSchema).optional(),
});

export const ProductUncheckedUpdateWithoutStylesInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutStylesInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  variants: z.lazy(() => VariantUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  cartItems: z.lazy(() => CartItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
});

export const ProductUncheckedUpdateManyWithoutStylesInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutStylesInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.lazy(() => ProductGenderSchema), z.lazy(() => EnumProductGenderFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  brandId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ImageCreateManyVariantInputSchema: z.ZodType<Prisma.ImageCreateManyVariantInput> = z.strictObject({
  id: z.uuid().optional(),
  url: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const VariantStockCreateManyVariantInputSchema: z.ZodType<Prisma.VariantStockCreateManyVariantInput> = z.strictObject({
  id: z.uuid().optional(),
  sizeId: z.string(),
  stock: z.number().int().optional(),
});

export const ImageUpdateWithoutVariantInputSchema: z.ZodType<Prisma.ImageUpdateWithoutVariantInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ImageUncheckedUpdateWithoutVariantInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateWithoutVariantInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ImageUncheckedUpdateManyWithoutVariantInputSchema: z.ZodType<Prisma.ImageUncheckedUpdateManyWithoutVariantInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantStockUpdateWithoutVariantInputSchema: z.ZodType<Prisma.VariantStockUpdateWithoutVariantInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.lazy(() => SizeUpdateOneRequiredWithoutStocksNestedInputSchema).optional(),
});

export const VariantStockUncheckedUpdateWithoutVariantInputSchema: z.ZodType<Prisma.VariantStockUncheckedUpdateWithoutVariantInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sizeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const VariantStockUncheckedUpdateManyWithoutVariantInputSchema: z.ZodType<Prisma.VariantStockUncheckedUpdateManyWithoutVariantInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sizeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  stock: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const BrandFindFirstArgsSchema: z.ZodType<Prisma.BrandFindFirstArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereInputSchema.optional(), 
  orderBy: z.union([ BrandOrderByWithRelationInputSchema.array(), BrandOrderByWithRelationInputSchema ]).optional(),
  cursor: BrandWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrandScalarFieldEnumSchema, BrandScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const BrandFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BrandFindFirstOrThrowArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereInputSchema.optional(), 
  orderBy: z.union([ BrandOrderByWithRelationInputSchema.array(), BrandOrderByWithRelationInputSchema ]).optional(),
  cursor: BrandWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrandScalarFieldEnumSchema, BrandScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const BrandFindManyArgsSchema: z.ZodType<Prisma.BrandFindManyArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereInputSchema.optional(), 
  orderBy: z.union([ BrandOrderByWithRelationInputSchema.array(), BrandOrderByWithRelationInputSchema ]).optional(),
  cursor: BrandWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BrandScalarFieldEnumSchema, BrandScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const BrandAggregateArgsSchema: z.ZodType<Prisma.BrandAggregateArgs> = z.object({
  where: BrandWhereInputSchema.optional(), 
  orderBy: z.union([ BrandOrderByWithRelationInputSchema.array(), BrandOrderByWithRelationInputSchema ]).optional(),
  cursor: BrandWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const BrandGroupByArgsSchema: z.ZodType<Prisma.BrandGroupByArgs> = z.object({
  where: BrandWhereInputSchema.optional(), 
  orderBy: z.union([ BrandOrderByWithAggregationInputSchema.array(), BrandOrderByWithAggregationInputSchema ]).optional(),
  by: BrandScalarFieldEnumSchema.array(), 
  having: BrandScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const BrandFindUniqueArgsSchema: z.ZodType<Prisma.BrandFindUniqueArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereUniqueInputSchema, 
}).strict();

export const BrandFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BrandFindUniqueOrThrowArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereUniqueInputSchema, 
}).strict();

export const CartItemFindFirstArgsSchema: z.ZodType<Prisma.CartItemFindFirstArgs> = z.object({
  select: CartItemSelectSchema.optional(),
  include: CartItemIncludeSchema.optional(),
  where: CartItemWhereInputSchema.optional(), 
  orderBy: z.union([ CartItemOrderByWithRelationInputSchema.array(), CartItemOrderByWithRelationInputSchema ]).optional(),
  cursor: CartItemWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CartItemScalarFieldEnumSchema, CartItemScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const CartItemFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CartItemFindFirstOrThrowArgs> = z.object({
  select: CartItemSelectSchema.optional(),
  include: CartItemIncludeSchema.optional(),
  where: CartItemWhereInputSchema.optional(), 
  orderBy: z.union([ CartItemOrderByWithRelationInputSchema.array(), CartItemOrderByWithRelationInputSchema ]).optional(),
  cursor: CartItemWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CartItemScalarFieldEnumSchema, CartItemScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const CartItemFindManyArgsSchema: z.ZodType<Prisma.CartItemFindManyArgs> = z.object({
  select: CartItemSelectSchema.optional(),
  include: CartItemIncludeSchema.optional(),
  where: CartItemWhereInputSchema.optional(), 
  orderBy: z.union([ CartItemOrderByWithRelationInputSchema.array(), CartItemOrderByWithRelationInputSchema ]).optional(),
  cursor: CartItemWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CartItemScalarFieldEnumSchema, CartItemScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const CartItemAggregateArgsSchema: z.ZodType<Prisma.CartItemAggregateArgs> = z.object({
  where: CartItemWhereInputSchema.optional(), 
  orderBy: z.union([ CartItemOrderByWithRelationInputSchema.array(), CartItemOrderByWithRelationInputSchema ]).optional(),
  cursor: CartItemWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const CartItemGroupByArgsSchema: z.ZodType<Prisma.CartItemGroupByArgs> = z.object({
  where: CartItemWhereInputSchema.optional(), 
  orderBy: z.union([ CartItemOrderByWithAggregationInputSchema.array(), CartItemOrderByWithAggregationInputSchema ]).optional(),
  by: CartItemScalarFieldEnumSchema.array(), 
  having: CartItemScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const CartItemFindUniqueArgsSchema: z.ZodType<Prisma.CartItemFindUniqueArgs> = z.object({
  select: CartItemSelectSchema.optional(),
  include: CartItemIncludeSchema.optional(),
  where: CartItemWhereUniqueInputSchema, 
}).strict();

export const CartItemFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CartItemFindUniqueOrThrowArgs> = z.object({
  select: CartItemSelectSchema.optional(),
  include: CartItemIncludeSchema.optional(),
  where: CartItemWhereUniqueInputSchema, 
}).strict();

export const UserCartFindFirstArgsSchema: z.ZodType<Prisma.UserCartFindFirstArgs> = z.object({
  select: UserCartSelectSchema.optional(),
  include: UserCartIncludeSchema.optional(),
  where: UserCartWhereInputSchema.optional(), 
  orderBy: z.union([ UserCartOrderByWithRelationInputSchema.array(), UserCartOrderByWithRelationInputSchema ]).optional(),
  cursor: UserCartWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserCartScalarFieldEnumSchema, UserCartScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserCartFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserCartFindFirstOrThrowArgs> = z.object({
  select: UserCartSelectSchema.optional(),
  include: UserCartIncludeSchema.optional(),
  where: UserCartWhereInputSchema.optional(), 
  orderBy: z.union([ UserCartOrderByWithRelationInputSchema.array(), UserCartOrderByWithRelationInputSchema ]).optional(),
  cursor: UserCartWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserCartScalarFieldEnumSchema, UserCartScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserCartFindManyArgsSchema: z.ZodType<Prisma.UserCartFindManyArgs> = z.object({
  select: UserCartSelectSchema.optional(),
  include: UserCartIncludeSchema.optional(),
  where: UserCartWhereInputSchema.optional(), 
  orderBy: z.union([ UserCartOrderByWithRelationInputSchema.array(), UserCartOrderByWithRelationInputSchema ]).optional(),
  cursor: UserCartWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserCartScalarFieldEnumSchema, UserCartScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserCartAggregateArgsSchema: z.ZodType<Prisma.UserCartAggregateArgs> = z.object({
  where: UserCartWhereInputSchema.optional(), 
  orderBy: z.union([ UserCartOrderByWithRelationInputSchema.array(), UserCartOrderByWithRelationInputSchema ]).optional(),
  cursor: UserCartWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserCartGroupByArgsSchema: z.ZodType<Prisma.UserCartGroupByArgs> = z.object({
  where: UserCartWhereInputSchema.optional(), 
  orderBy: z.union([ UserCartOrderByWithAggregationInputSchema.array(), UserCartOrderByWithAggregationInputSchema ]).optional(),
  by: UserCartScalarFieldEnumSchema.array(), 
  having: UserCartScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserCartFindUniqueArgsSchema: z.ZodType<Prisma.UserCartFindUniqueArgs> = z.object({
  select: UserCartSelectSchema.optional(),
  include: UserCartIncludeSchema.optional(),
  where: UserCartWhereUniqueInputSchema, 
}).strict();

export const UserCartFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserCartFindUniqueOrThrowArgs> = z.object({
  select: UserCartSelectSchema.optional(),
  include: UserCartIncludeSchema.optional(),
  where: UserCartWhereUniqueInputSchema, 
}).strict();

export const ColorFindFirstArgsSchema: z.ZodType<Prisma.ColorFindFirstArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereInputSchema.optional(), 
  orderBy: z.union([ ColorOrderByWithRelationInputSchema.array(), ColorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColorWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ColorScalarFieldEnumSchema, ColorScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ColorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ColorFindFirstOrThrowArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereInputSchema.optional(), 
  orderBy: z.union([ ColorOrderByWithRelationInputSchema.array(), ColorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColorWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ColorScalarFieldEnumSchema, ColorScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ColorFindManyArgsSchema: z.ZodType<Prisma.ColorFindManyArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereInputSchema.optional(), 
  orderBy: z.union([ ColorOrderByWithRelationInputSchema.array(), ColorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColorWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ColorScalarFieldEnumSchema, ColorScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ColorAggregateArgsSchema: z.ZodType<Prisma.ColorAggregateArgs> = z.object({
  where: ColorWhereInputSchema.optional(), 
  orderBy: z.union([ ColorOrderByWithRelationInputSchema.array(), ColorOrderByWithRelationInputSchema ]).optional(),
  cursor: ColorWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ColorGroupByArgsSchema: z.ZodType<Prisma.ColorGroupByArgs> = z.object({
  where: ColorWhereInputSchema.optional(), 
  orderBy: z.union([ ColorOrderByWithAggregationInputSchema.array(), ColorOrderByWithAggregationInputSchema ]).optional(),
  by: ColorScalarFieldEnumSchema.array(), 
  having: ColorScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ColorFindUniqueArgsSchema: z.ZodType<Prisma.ColorFindUniqueArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereUniqueInputSchema, 
}).strict();

export const ColorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ColorFindUniqueOrThrowArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereUniqueInputSchema, 
}).strict();

export const ImageFindFirstArgsSchema: z.ZodType<Prisma.ImageFindFirstArgs> = z.object({
  select: ImageSelectSchema.optional(),
  include: ImageIncludeSchema.optional(),
  where: ImageWhereInputSchema.optional(), 
  orderBy: z.union([ ImageOrderByWithRelationInputSchema.array(), ImageOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ImageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ImageFindFirstOrThrowArgs> = z.object({
  select: ImageSelectSchema.optional(),
  include: ImageIncludeSchema.optional(),
  where: ImageWhereInputSchema.optional(), 
  orderBy: z.union([ ImageOrderByWithRelationInputSchema.array(), ImageOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ImageFindManyArgsSchema: z.ZodType<Prisma.ImageFindManyArgs> = z.object({
  select: ImageSelectSchema.optional(),
  include: ImageIncludeSchema.optional(),
  where: ImageWhereInputSchema.optional(), 
  orderBy: z.union([ ImageOrderByWithRelationInputSchema.array(), ImageOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ImageAggregateArgsSchema: z.ZodType<Prisma.ImageAggregateArgs> = z.object({
  where: ImageWhereInputSchema.optional(), 
  orderBy: z.union([ ImageOrderByWithRelationInputSchema.array(), ImageOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ImageGroupByArgsSchema: z.ZodType<Prisma.ImageGroupByArgs> = z.object({
  where: ImageWhereInputSchema.optional(), 
  orderBy: z.union([ ImageOrderByWithAggregationInputSchema.array(), ImageOrderByWithAggregationInputSchema ]).optional(),
  by: ImageScalarFieldEnumSchema.array(), 
  having: ImageScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ImageFindUniqueArgsSchema: z.ZodType<Prisma.ImageFindUniqueArgs> = z.object({
  select: ImageSelectSchema.optional(),
  include: ImageIncludeSchema.optional(),
  where: ImageWhereUniqueInputSchema, 
}).strict();

export const ImageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ImageFindUniqueOrThrowArgs> = z.object({
  select: ImageSelectSchema.optional(),
  include: ImageIncludeSchema.optional(),
  where: ImageWhereUniqueInputSchema, 
}).strict();

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(), 
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(), ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(), 
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(), ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(), 
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(), ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  where: ProductWhereInputSchema.optional(), 
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(), ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  where: ProductWhereInputSchema.optional(), 
  orderBy: z.union([ ProductOrderByWithAggregationInputSchema.array(), ProductOrderByWithAggregationInputSchema ]).optional(),
  by: ProductScalarFieldEnumSchema.array(), 
  having: ProductScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema, 
}).strict();

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema, 
}).strict();

export const RefreshTokenFindFirstArgsSchema: z.ZodType<Prisma.RefreshTokenFindFirstArgs> = z.object({
  select: RefreshTokenSelectSchema.optional(),
  include: RefreshTokenIncludeSchema.optional(),
  where: RefreshTokenWhereInputSchema.optional(), 
  orderBy: z.union([ RefreshTokenOrderByWithRelationInputSchema.array(), RefreshTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: RefreshTokenWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RefreshTokenScalarFieldEnumSchema, RefreshTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const RefreshTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RefreshTokenFindFirstOrThrowArgs> = z.object({
  select: RefreshTokenSelectSchema.optional(),
  include: RefreshTokenIncludeSchema.optional(),
  where: RefreshTokenWhereInputSchema.optional(), 
  orderBy: z.union([ RefreshTokenOrderByWithRelationInputSchema.array(), RefreshTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: RefreshTokenWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RefreshTokenScalarFieldEnumSchema, RefreshTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const RefreshTokenFindManyArgsSchema: z.ZodType<Prisma.RefreshTokenFindManyArgs> = z.object({
  select: RefreshTokenSelectSchema.optional(),
  include: RefreshTokenIncludeSchema.optional(),
  where: RefreshTokenWhereInputSchema.optional(), 
  orderBy: z.union([ RefreshTokenOrderByWithRelationInputSchema.array(), RefreshTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: RefreshTokenWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RefreshTokenScalarFieldEnumSchema, RefreshTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const RefreshTokenAggregateArgsSchema: z.ZodType<Prisma.RefreshTokenAggregateArgs> = z.object({
  where: RefreshTokenWhereInputSchema.optional(), 
  orderBy: z.union([ RefreshTokenOrderByWithRelationInputSchema.array(), RefreshTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: RefreshTokenWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const RefreshTokenGroupByArgsSchema: z.ZodType<Prisma.RefreshTokenGroupByArgs> = z.object({
  where: RefreshTokenWhereInputSchema.optional(), 
  orderBy: z.union([ RefreshTokenOrderByWithAggregationInputSchema.array(), RefreshTokenOrderByWithAggregationInputSchema ]).optional(),
  by: RefreshTokenScalarFieldEnumSchema.array(), 
  having: RefreshTokenScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const RefreshTokenFindUniqueArgsSchema: z.ZodType<Prisma.RefreshTokenFindUniqueArgs> = z.object({
  select: RefreshTokenSelectSchema.optional(),
  include: RefreshTokenIncludeSchema.optional(),
  where: RefreshTokenWhereUniqueInputSchema, 
}).strict();

export const RefreshTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RefreshTokenFindUniqueOrThrowArgs> = z.object({
  select: RefreshTokenSelectSchema.optional(),
  include: RefreshTokenIncludeSchema.optional(),
  where: RefreshTokenWhereUniqueInputSchema, 
}).strict();

export const SizeFindFirstArgsSchema: z.ZodType<Prisma.SizeFindFirstArgs> = z.object({
  select: SizeSelectSchema.optional(),
  include: SizeIncludeSchema.optional(),
  where: SizeWhereInputSchema.optional(), 
  orderBy: z.union([ SizeOrderByWithRelationInputSchema.array(), SizeOrderByWithRelationInputSchema ]).optional(),
  cursor: SizeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SizeScalarFieldEnumSchema, SizeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SizeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SizeFindFirstOrThrowArgs> = z.object({
  select: SizeSelectSchema.optional(),
  include: SizeIncludeSchema.optional(),
  where: SizeWhereInputSchema.optional(), 
  orderBy: z.union([ SizeOrderByWithRelationInputSchema.array(), SizeOrderByWithRelationInputSchema ]).optional(),
  cursor: SizeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SizeScalarFieldEnumSchema, SizeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SizeFindManyArgsSchema: z.ZodType<Prisma.SizeFindManyArgs> = z.object({
  select: SizeSelectSchema.optional(),
  include: SizeIncludeSchema.optional(),
  where: SizeWhereInputSchema.optional(), 
  orderBy: z.union([ SizeOrderByWithRelationInputSchema.array(), SizeOrderByWithRelationInputSchema ]).optional(),
  cursor: SizeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SizeScalarFieldEnumSchema, SizeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SizeAggregateArgsSchema: z.ZodType<Prisma.SizeAggregateArgs> = z.object({
  where: SizeWhereInputSchema.optional(), 
  orderBy: z.union([ SizeOrderByWithRelationInputSchema.array(), SizeOrderByWithRelationInputSchema ]).optional(),
  cursor: SizeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SizeGroupByArgsSchema: z.ZodType<Prisma.SizeGroupByArgs> = z.object({
  where: SizeWhereInputSchema.optional(), 
  orderBy: z.union([ SizeOrderByWithAggregationInputSchema.array(), SizeOrderByWithAggregationInputSchema ]).optional(),
  by: SizeScalarFieldEnumSchema.array(), 
  having: SizeScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SizeFindUniqueArgsSchema: z.ZodType<Prisma.SizeFindUniqueArgs> = z.object({
  select: SizeSelectSchema.optional(),
  include: SizeIncludeSchema.optional(),
  where: SizeWhereUniqueInputSchema, 
}).strict();

export const SizeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SizeFindUniqueOrThrowArgs> = z.object({
  select: SizeSelectSchema.optional(),
  include: SizeIncludeSchema.optional(),
  where: SizeWhereUniqueInputSchema, 
}).strict();

export const StyleFindFirstArgsSchema: z.ZodType<Prisma.StyleFindFirstArgs> = z.object({
  select: StyleSelectSchema.optional(),
  include: StyleIncludeSchema.optional(),
  where: StyleWhereInputSchema.optional(), 
  orderBy: z.union([ StyleOrderByWithRelationInputSchema.array(), StyleOrderByWithRelationInputSchema ]).optional(),
  cursor: StyleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StyleScalarFieldEnumSchema, StyleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const StyleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StyleFindFirstOrThrowArgs> = z.object({
  select: StyleSelectSchema.optional(),
  include: StyleIncludeSchema.optional(),
  where: StyleWhereInputSchema.optional(), 
  orderBy: z.union([ StyleOrderByWithRelationInputSchema.array(), StyleOrderByWithRelationInputSchema ]).optional(),
  cursor: StyleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StyleScalarFieldEnumSchema, StyleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const StyleFindManyArgsSchema: z.ZodType<Prisma.StyleFindManyArgs> = z.object({
  select: StyleSelectSchema.optional(),
  include: StyleIncludeSchema.optional(),
  where: StyleWhereInputSchema.optional(), 
  orderBy: z.union([ StyleOrderByWithRelationInputSchema.array(), StyleOrderByWithRelationInputSchema ]).optional(),
  cursor: StyleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StyleScalarFieldEnumSchema, StyleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const StyleAggregateArgsSchema: z.ZodType<Prisma.StyleAggregateArgs> = z.object({
  where: StyleWhereInputSchema.optional(), 
  orderBy: z.union([ StyleOrderByWithRelationInputSchema.array(), StyleOrderByWithRelationInputSchema ]).optional(),
  cursor: StyleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const StyleGroupByArgsSchema: z.ZodType<Prisma.StyleGroupByArgs> = z.object({
  where: StyleWhereInputSchema.optional(), 
  orderBy: z.union([ StyleOrderByWithAggregationInputSchema.array(), StyleOrderByWithAggregationInputSchema ]).optional(),
  by: StyleScalarFieldEnumSchema.array(), 
  having: StyleScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const StyleFindUniqueArgsSchema: z.ZodType<Prisma.StyleFindUniqueArgs> = z.object({
  select: StyleSelectSchema.optional(),
  include: StyleIncludeSchema.optional(),
  where: StyleWhereUniqueInputSchema, 
}).strict();

export const StyleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StyleFindUniqueOrThrowArgs> = z.object({
  select: StyleSelectSchema.optional(),
  include: StyleIncludeSchema.optional(),
  where: StyleWhereUniqueInputSchema, 
}).strict();

export const UploadsImagesFindFirstArgsSchema: z.ZodType<Prisma.UploadsImagesFindFirstArgs> = z.object({
  select: UploadsImagesSelectSchema.optional(),
  where: UploadsImagesWhereInputSchema.optional(), 
  orderBy: z.union([ UploadsImagesOrderByWithRelationInputSchema.array(), UploadsImagesOrderByWithRelationInputSchema ]).optional(),
  cursor: UploadsImagesWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UploadsImagesScalarFieldEnumSchema, UploadsImagesScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UploadsImagesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UploadsImagesFindFirstOrThrowArgs> = z.object({
  select: UploadsImagesSelectSchema.optional(),
  where: UploadsImagesWhereInputSchema.optional(), 
  orderBy: z.union([ UploadsImagesOrderByWithRelationInputSchema.array(), UploadsImagesOrderByWithRelationInputSchema ]).optional(),
  cursor: UploadsImagesWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UploadsImagesScalarFieldEnumSchema, UploadsImagesScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UploadsImagesFindManyArgsSchema: z.ZodType<Prisma.UploadsImagesFindManyArgs> = z.object({
  select: UploadsImagesSelectSchema.optional(),
  where: UploadsImagesWhereInputSchema.optional(), 
  orderBy: z.union([ UploadsImagesOrderByWithRelationInputSchema.array(), UploadsImagesOrderByWithRelationInputSchema ]).optional(),
  cursor: UploadsImagesWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UploadsImagesScalarFieldEnumSchema, UploadsImagesScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UploadsImagesAggregateArgsSchema: z.ZodType<Prisma.UploadsImagesAggregateArgs> = z.object({
  where: UploadsImagesWhereInputSchema.optional(), 
  orderBy: z.union([ UploadsImagesOrderByWithRelationInputSchema.array(), UploadsImagesOrderByWithRelationInputSchema ]).optional(),
  cursor: UploadsImagesWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UploadsImagesGroupByArgsSchema: z.ZodType<Prisma.UploadsImagesGroupByArgs> = z.object({
  where: UploadsImagesWhereInputSchema.optional(), 
  orderBy: z.union([ UploadsImagesOrderByWithAggregationInputSchema.array(), UploadsImagesOrderByWithAggregationInputSchema ]).optional(),
  by: UploadsImagesScalarFieldEnumSchema.array(), 
  having: UploadsImagesScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UploadsImagesFindUniqueArgsSchema: z.ZodType<Prisma.UploadsImagesFindUniqueArgs> = z.object({
  select: UploadsImagesSelectSchema.optional(),
  where: UploadsImagesWhereUniqueInputSchema, 
}).strict();

export const UploadsImagesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UploadsImagesFindUniqueOrThrowArgs> = z.object({
  select: UploadsImagesSelectSchema.optional(),
  where: UploadsImagesWhereUniqueInputSchema, 
}).strict();

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(), 
  having: UserScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const VariantFindFirstArgsSchema: z.ZodType<Prisma.VariantFindFirstArgs> = z.object({
  select: VariantSelectSchema.optional(),
  include: VariantIncludeSchema.optional(),
  where: VariantWhereInputSchema.optional(), 
  orderBy: z.union([ VariantOrderByWithRelationInputSchema.array(), VariantOrderByWithRelationInputSchema ]).optional(),
  cursor: VariantWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VariantScalarFieldEnumSchema, VariantScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const VariantFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VariantFindFirstOrThrowArgs> = z.object({
  select: VariantSelectSchema.optional(),
  include: VariantIncludeSchema.optional(),
  where: VariantWhereInputSchema.optional(), 
  orderBy: z.union([ VariantOrderByWithRelationInputSchema.array(), VariantOrderByWithRelationInputSchema ]).optional(),
  cursor: VariantWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VariantScalarFieldEnumSchema, VariantScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const VariantFindManyArgsSchema: z.ZodType<Prisma.VariantFindManyArgs> = z.object({
  select: VariantSelectSchema.optional(),
  include: VariantIncludeSchema.optional(),
  where: VariantWhereInputSchema.optional(), 
  orderBy: z.union([ VariantOrderByWithRelationInputSchema.array(), VariantOrderByWithRelationInputSchema ]).optional(),
  cursor: VariantWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VariantScalarFieldEnumSchema, VariantScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const VariantAggregateArgsSchema: z.ZodType<Prisma.VariantAggregateArgs> = z.object({
  where: VariantWhereInputSchema.optional(), 
  orderBy: z.union([ VariantOrderByWithRelationInputSchema.array(), VariantOrderByWithRelationInputSchema ]).optional(),
  cursor: VariantWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const VariantGroupByArgsSchema: z.ZodType<Prisma.VariantGroupByArgs> = z.object({
  where: VariantWhereInputSchema.optional(), 
  orderBy: z.union([ VariantOrderByWithAggregationInputSchema.array(), VariantOrderByWithAggregationInputSchema ]).optional(),
  by: VariantScalarFieldEnumSchema.array(), 
  having: VariantScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const VariantFindUniqueArgsSchema: z.ZodType<Prisma.VariantFindUniqueArgs> = z.object({
  select: VariantSelectSchema.optional(),
  include: VariantIncludeSchema.optional(),
  where: VariantWhereUniqueInputSchema, 
}).strict();

export const VariantFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VariantFindUniqueOrThrowArgs> = z.object({
  select: VariantSelectSchema.optional(),
  include: VariantIncludeSchema.optional(),
  where: VariantWhereUniqueInputSchema, 
}).strict();

export const VariantStockFindFirstArgsSchema: z.ZodType<Prisma.VariantStockFindFirstArgs> = z.object({
  select: VariantStockSelectSchema.optional(),
  include: VariantStockIncludeSchema.optional(),
  where: VariantStockWhereInputSchema.optional(), 
  orderBy: z.union([ VariantStockOrderByWithRelationInputSchema.array(), VariantStockOrderByWithRelationInputSchema ]).optional(),
  cursor: VariantStockWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VariantStockScalarFieldEnumSchema, VariantStockScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const VariantStockFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VariantStockFindFirstOrThrowArgs> = z.object({
  select: VariantStockSelectSchema.optional(),
  include: VariantStockIncludeSchema.optional(),
  where: VariantStockWhereInputSchema.optional(), 
  orderBy: z.union([ VariantStockOrderByWithRelationInputSchema.array(), VariantStockOrderByWithRelationInputSchema ]).optional(),
  cursor: VariantStockWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VariantStockScalarFieldEnumSchema, VariantStockScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const VariantStockFindManyArgsSchema: z.ZodType<Prisma.VariantStockFindManyArgs> = z.object({
  select: VariantStockSelectSchema.optional(),
  include: VariantStockIncludeSchema.optional(),
  where: VariantStockWhereInputSchema.optional(), 
  orderBy: z.union([ VariantStockOrderByWithRelationInputSchema.array(), VariantStockOrderByWithRelationInputSchema ]).optional(),
  cursor: VariantStockWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VariantStockScalarFieldEnumSchema, VariantStockScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const VariantStockAggregateArgsSchema: z.ZodType<Prisma.VariantStockAggregateArgs> = z.object({
  where: VariantStockWhereInputSchema.optional(), 
  orderBy: z.union([ VariantStockOrderByWithRelationInputSchema.array(), VariantStockOrderByWithRelationInputSchema ]).optional(),
  cursor: VariantStockWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const VariantStockGroupByArgsSchema: z.ZodType<Prisma.VariantStockGroupByArgs> = z.object({
  where: VariantStockWhereInputSchema.optional(), 
  orderBy: z.union([ VariantStockOrderByWithAggregationInputSchema.array(), VariantStockOrderByWithAggregationInputSchema ]).optional(),
  by: VariantStockScalarFieldEnumSchema.array(), 
  having: VariantStockScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const VariantStockFindUniqueArgsSchema: z.ZodType<Prisma.VariantStockFindUniqueArgs> = z.object({
  select: VariantStockSelectSchema.optional(),
  include: VariantStockIncludeSchema.optional(),
  where: VariantStockWhereUniqueInputSchema, 
}).strict();

export const VariantStockFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VariantStockFindUniqueOrThrowArgs> = z.object({
  select: VariantStockSelectSchema.optional(),
  include: VariantStockIncludeSchema.optional(),
  where: VariantStockWhereUniqueInputSchema, 
}).strict();

export const BrandCreateArgsSchema: z.ZodType<Prisma.BrandCreateArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  data: z.union([ BrandCreateInputSchema, BrandUncheckedCreateInputSchema ]),
}).strict();

export const BrandUpsertArgsSchema: z.ZodType<Prisma.BrandUpsertArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereUniqueInputSchema, 
  create: z.union([ BrandCreateInputSchema, BrandUncheckedCreateInputSchema ]),
  update: z.union([ BrandUpdateInputSchema, BrandUncheckedUpdateInputSchema ]),
}).strict();

export const BrandCreateManyArgsSchema: z.ZodType<Prisma.BrandCreateManyArgs> = z.object({
  data: z.union([ BrandCreateManyInputSchema, BrandCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const BrandCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BrandCreateManyAndReturnArgs> = z.object({
  data: z.union([ BrandCreateManyInputSchema, BrandCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const BrandDeleteArgsSchema: z.ZodType<Prisma.BrandDeleteArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  where: BrandWhereUniqueInputSchema, 
}).strict();

export const BrandUpdateArgsSchema: z.ZodType<Prisma.BrandUpdateArgs> = z.object({
  select: BrandSelectSchema.optional(),
  include: BrandIncludeSchema.optional(),
  data: z.union([ BrandUpdateInputSchema, BrandUncheckedUpdateInputSchema ]),
  where: BrandWhereUniqueInputSchema, 
}).strict();

export const BrandUpdateManyArgsSchema: z.ZodType<Prisma.BrandUpdateManyArgs> = z.object({
  data: z.union([ BrandUpdateManyMutationInputSchema, BrandUncheckedUpdateManyInputSchema ]),
  where: BrandWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const BrandUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.BrandUpdateManyAndReturnArgs> = z.object({
  data: z.union([ BrandUpdateManyMutationInputSchema, BrandUncheckedUpdateManyInputSchema ]),
  where: BrandWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const BrandDeleteManyArgsSchema: z.ZodType<Prisma.BrandDeleteManyArgs> = z.object({
  where: BrandWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const CartItemCreateArgsSchema: z.ZodType<Prisma.CartItemCreateArgs> = z.object({
  select: CartItemSelectSchema.optional(),
  include: CartItemIncludeSchema.optional(),
  data: z.union([ CartItemCreateInputSchema, CartItemUncheckedCreateInputSchema ]),
}).strict();

export const CartItemUpsertArgsSchema: z.ZodType<Prisma.CartItemUpsertArgs> = z.object({
  select: CartItemSelectSchema.optional(),
  include: CartItemIncludeSchema.optional(),
  where: CartItemWhereUniqueInputSchema, 
  create: z.union([ CartItemCreateInputSchema, CartItemUncheckedCreateInputSchema ]),
  update: z.union([ CartItemUpdateInputSchema, CartItemUncheckedUpdateInputSchema ]),
}).strict();

export const CartItemCreateManyArgsSchema: z.ZodType<Prisma.CartItemCreateManyArgs> = z.object({
  data: z.union([ CartItemCreateManyInputSchema, CartItemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const CartItemCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CartItemCreateManyAndReturnArgs> = z.object({
  data: z.union([ CartItemCreateManyInputSchema, CartItemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const CartItemDeleteArgsSchema: z.ZodType<Prisma.CartItemDeleteArgs> = z.object({
  select: CartItemSelectSchema.optional(),
  include: CartItemIncludeSchema.optional(),
  where: CartItemWhereUniqueInputSchema, 
}).strict();

export const CartItemUpdateArgsSchema: z.ZodType<Prisma.CartItemUpdateArgs> = z.object({
  select: CartItemSelectSchema.optional(),
  include: CartItemIncludeSchema.optional(),
  data: z.union([ CartItemUpdateInputSchema, CartItemUncheckedUpdateInputSchema ]),
  where: CartItemWhereUniqueInputSchema, 
}).strict();

export const CartItemUpdateManyArgsSchema: z.ZodType<Prisma.CartItemUpdateManyArgs> = z.object({
  data: z.union([ CartItemUpdateManyMutationInputSchema, CartItemUncheckedUpdateManyInputSchema ]),
  where: CartItemWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const CartItemUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CartItemUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CartItemUpdateManyMutationInputSchema, CartItemUncheckedUpdateManyInputSchema ]),
  where: CartItemWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const CartItemDeleteManyArgsSchema: z.ZodType<Prisma.CartItemDeleteManyArgs> = z.object({
  where: CartItemWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserCartCreateArgsSchema: z.ZodType<Prisma.UserCartCreateArgs> = z.object({
  select: UserCartSelectSchema.optional(),
  include: UserCartIncludeSchema.optional(),
  data: z.union([ UserCartCreateInputSchema, UserCartUncheckedCreateInputSchema ]),
}).strict();

export const UserCartUpsertArgsSchema: z.ZodType<Prisma.UserCartUpsertArgs> = z.object({
  select: UserCartSelectSchema.optional(),
  include: UserCartIncludeSchema.optional(),
  where: UserCartWhereUniqueInputSchema, 
  create: z.union([ UserCartCreateInputSchema, UserCartUncheckedCreateInputSchema ]),
  update: z.union([ UserCartUpdateInputSchema, UserCartUncheckedUpdateInputSchema ]),
}).strict();

export const UserCartCreateManyArgsSchema: z.ZodType<Prisma.UserCartCreateManyArgs> = z.object({
  data: z.union([ UserCartCreateManyInputSchema, UserCartCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserCartCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCartCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCartCreateManyInputSchema, UserCartCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserCartDeleteArgsSchema: z.ZodType<Prisma.UserCartDeleteArgs> = z.object({
  select: UserCartSelectSchema.optional(),
  include: UserCartIncludeSchema.optional(),
  where: UserCartWhereUniqueInputSchema, 
}).strict();

export const UserCartUpdateArgsSchema: z.ZodType<Prisma.UserCartUpdateArgs> = z.object({
  select: UserCartSelectSchema.optional(),
  include: UserCartIncludeSchema.optional(),
  data: z.union([ UserCartUpdateInputSchema, UserCartUncheckedUpdateInputSchema ]),
  where: UserCartWhereUniqueInputSchema, 
}).strict();

export const UserCartUpdateManyArgsSchema: z.ZodType<Prisma.UserCartUpdateManyArgs> = z.object({
  data: z.union([ UserCartUpdateManyMutationInputSchema, UserCartUncheckedUpdateManyInputSchema ]),
  where: UserCartWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserCartUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCartUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserCartUpdateManyMutationInputSchema, UserCartUncheckedUpdateManyInputSchema ]),
  where: UserCartWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserCartDeleteManyArgsSchema: z.ZodType<Prisma.UserCartDeleteManyArgs> = z.object({
  where: UserCartWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ColorCreateArgsSchema: z.ZodType<Prisma.ColorCreateArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  data: z.union([ ColorCreateInputSchema, ColorUncheckedCreateInputSchema ]),
}).strict();

export const ColorUpsertArgsSchema: z.ZodType<Prisma.ColorUpsertArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereUniqueInputSchema, 
  create: z.union([ ColorCreateInputSchema, ColorUncheckedCreateInputSchema ]),
  update: z.union([ ColorUpdateInputSchema, ColorUncheckedUpdateInputSchema ]),
}).strict();

export const ColorCreateManyArgsSchema: z.ZodType<Prisma.ColorCreateManyArgs> = z.object({
  data: z.union([ ColorCreateManyInputSchema, ColorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ColorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ColorCreateManyAndReturnArgs> = z.object({
  data: z.union([ ColorCreateManyInputSchema, ColorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ColorDeleteArgsSchema: z.ZodType<Prisma.ColorDeleteArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  where: ColorWhereUniqueInputSchema, 
}).strict();

export const ColorUpdateArgsSchema: z.ZodType<Prisma.ColorUpdateArgs> = z.object({
  select: ColorSelectSchema.optional(),
  include: ColorIncludeSchema.optional(),
  data: z.union([ ColorUpdateInputSchema, ColorUncheckedUpdateInputSchema ]),
  where: ColorWhereUniqueInputSchema, 
}).strict();

export const ColorUpdateManyArgsSchema: z.ZodType<Prisma.ColorUpdateManyArgs> = z.object({
  data: z.union([ ColorUpdateManyMutationInputSchema, ColorUncheckedUpdateManyInputSchema ]),
  where: ColorWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ColorUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ColorUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ColorUpdateManyMutationInputSchema, ColorUncheckedUpdateManyInputSchema ]),
  where: ColorWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ColorDeleteManyArgsSchema: z.ZodType<Prisma.ColorDeleteManyArgs> = z.object({
  where: ColorWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ImageCreateArgsSchema: z.ZodType<Prisma.ImageCreateArgs> = z.object({
  select: ImageSelectSchema.optional(),
  include: ImageIncludeSchema.optional(),
  data: z.union([ ImageCreateInputSchema, ImageUncheckedCreateInputSchema ]),
}).strict();

export const ImageUpsertArgsSchema: z.ZodType<Prisma.ImageUpsertArgs> = z.object({
  select: ImageSelectSchema.optional(),
  include: ImageIncludeSchema.optional(),
  where: ImageWhereUniqueInputSchema, 
  create: z.union([ ImageCreateInputSchema, ImageUncheckedCreateInputSchema ]),
  update: z.union([ ImageUpdateInputSchema, ImageUncheckedUpdateInputSchema ]),
}).strict();

export const ImageCreateManyArgsSchema: z.ZodType<Prisma.ImageCreateManyArgs> = z.object({
  data: z.union([ ImageCreateManyInputSchema, ImageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ImageCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ImageCreateManyAndReturnArgs> = z.object({
  data: z.union([ ImageCreateManyInputSchema, ImageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ImageDeleteArgsSchema: z.ZodType<Prisma.ImageDeleteArgs> = z.object({
  select: ImageSelectSchema.optional(),
  include: ImageIncludeSchema.optional(),
  where: ImageWhereUniqueInputSchema, 
}).strict();

export const ImageUpdateArgsSchema: z.ZodType<Prisma.ImageUpdateArgs> = z.object({
  select: ImageSelectSchema.optional(),
  include: ImageIncludeSchema.optional(),
  data: z.union([ ImageUpdateInputSchema, ImageUncheckedUpdateInputSchema ]),
  where: ImageWhereUniqueInputSchema, 
}).strict();

export const ImageUpdateManyArgsSchema: z.ZodType<Prisma.ImageUpdateManyArgs> = z.object({
  data: z.union([ ImageUpdateManyMutationInputSchema, ImageUncheckedUpdateManyInputSchema ]),
  where: ImageWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ImageUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ImageUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ImageUpdateManyMutationInputSchema, ImageUncheckedUpdateManyInputSchema ]),
  where: ImageWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ImageDeleteManyArgsSchema: z.ZodType<Prisma.ImageDeleteManyArgs> = z.object({
  where: ImageWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductCreateInputSchema, ProductUncheckedCreateInputSchema ]),
}).strict();

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema, 
  create: z.union([ ProductCreateInputSchema, ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema, ProductUncheckedUpdateInputSchema ]),
}).strict();

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema, ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ProductCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema, ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema, 
}).strict();

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductUpdateInputSchema, ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema, 
}).strict();

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema, ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ProductUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema, ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const RefreshTokenCreateArgsSchema: z.ZodType<Prisma.RefreshTokenCreateArgs> = z.object({
  select: RefreshTokenSelectSchema.optional(),
  include: RefreshTokenIncludeSchema.optional(),
  data: z.union([ RefreshTokenCreateInputSchema, RefreshTokenUncheckedCreateInputSchema ]),
}).strict();

export const RefreshTokenUpsertArgsSchema: z.ZodType<Prisma.RefreshTokenUpsertArgs> = z.object({
  select: RefreshTokenSelectSchema.optional(),
  include: RefreshTokenIncludeSchema.optional(),
  where: RefreshTokenWhereUniqueInputSchema, 
  create: z.union([ RefreshTokenCreateInputSchema, RefreshTokenUncheckedCreateInputSchema ]),
  update: z.union([ RefreshTokenUpdateInputSchema, RefreshTokenUncheckedUpdateInputSchema ]),
}).strict();

export const RefreshTokenCreateManyArgsSchema: z.ZodType<Prisma.RefreshTokenCreateManyArgs> = z.object({
  data: z.union([ RefreshTokenCreateManyInputSchema, RefreshTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const RefreshTokenCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RefreshTokenCreateManyAndReturnArgs> = z.object({
  data: z.union([ RefreshTokenCreateManyInputSchema, RefreshTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const RefreshTokenDeleteArgsSchema: z.ZodType<Prisma.RefreshTokenDeleteArgs> = z.object({
  select: RefreshTokenSelectSchema.optional(),
  include: RefreshTokenIncludeSchema.optional(),
  where: RefreshTokenWhereUniqueInputSchema, 
}).strict();

export const RefreshTokenUpdateArgsSchema: z.ZodType<Prisma.RefreshTokenUpdateArgs> = z.object({
  select: RefreshTokenSelectSchema.optional(),
  include: RefreshTokenIncludeSchema.optional(),
  data: z.union([ RefreshTokenUpdateInputSchema, RefreshTokenUncheckedUpdateInputSchema ]),
  where: RefreshTokenWhereUniqueInputSchema, 
}).strict();

export const RefreshTokenUpdateManyArgsSchema: z.ZodType<Prisma.RefreshTokenUpdateManyArgs> = z.object({
  data: z.union([ RefreshTokenUpdateManyMutationInputSchema, RefreshTokenUncheckedUpdateManyInputSchema ]),
  where: RefreshTokenWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const RefreshTokenUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RefreshTokenUpdateManyAndReturnArgs> = z.object({
  data: z.union([ RefreshTokenUpdateManyMutationInputSchema, RefreshTokenUncheckedUpdateManyInputSchema ]),
  where: RefreshTokenWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const RefreshTokenDeleteManyArgsSchema: z.ZodType<Prisma.RefreshTokenDeleteManyArgs> = z.object({
  where: RefreshTokenWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SizeCreateArgsSchema: z.ZodType<Prisma.SizeCreateArgs> = z.object({
  select: SizeSelectSchema.optional(),
  include: SizeIncludeSchema.optional(),
  data: z.union([ SizeCreateInputSchema, SizeUncheckedCreateInputSchema ]),
}).strict();

export const SizeUpsertArgsSchema: z.ZodType<Prisma.SizeUpsertArgs> = z.object({
  select: SizeSelectSchema.optional(),
  include: SizeIncludeSchema.optional(),
  where: SizeWhereUniqueInputSchema, 
  create: z.union([ SizeCreateInputSchema, SizeUncheckedCreateInputSchema ]),
  update: z.union([ SizeUpdateInputSchema, SizeUncheckedUpdateInputSchema ]),
}).strict();

export const SizeCreateManyArgsSchema: z.ZodType<Prisma.SizeCreateManyArgs> = z.object({
  data: z.union([ SizeCreateManyInputSchema, SizeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SizeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SizeCreateManyAndReturnArgs> = z.object({
  data: z.union([ SizeCreateManyInputSchema, SizeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SizeDeleteArgsSchema: z.ZodType<Prisma.SizeDeleteArgs> = z.object({
  select: SizeSelectSchema.optional(),
  include: SizeIncludeSchema.optional(),
  where: SizeWhereUniqueInputSchema, 
}).strict();

export const SizeUpdateArgsSchema: z.ZodType<Prisma.SizeUpdateArgs> = z.object({
  select: SizeSelectSchema.optional(),
  include: SizeIncludeSchema.optional(),
  data: z.union([ SizeUpdateInputSchema, SizeUncheckedUpdateInputSchema ]),
  where: SizeWhereUniqueInputSchema, 
}).strict();

export const SizeUpdateManyArgsSchema: z.ZodType<Prisma.SizeUpdateManyArgs> = z.object({
  data: z.union([ SizeUpdateManyMutationInputSchema, SizeUncheckedUpdateManyInputSchema ]),
  where: SizeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SizeUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SizeUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SizeUpdateManyMutationInputSchema, SizeUncheckedUpdateManyInputSchema ]),
  where: SizeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SizeDeleteManyArgsSchema: z.ZodType<Prisma.SizeDeleteManyArgs> = z.object({
  where: SizeWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const StyleCreateArgsSchema: z.ZodType<Prisma.StyleCreateArgs> = z.object({
  select: StyleSelectSchema.optional(),
  include: StyleIncludeSchema.optional(),
  data: z.union([ StyleCreateInputSchema, StyleUncheckedCreateInputSchema ]),
}).strict();

export const StyleUpsertArgsSchema: z.ZodType<Prisma.StyleUpsertArgs> = z.object({
  select: StyleSelectSchema.optional(),
  include: StyleIncludeSchema.optional(),
  where: StyleWhereUniqueInputSchema, 
  create: z.union([ StyleCreateInputSchema, StyleUncheckedCreateInputSchema ]),
  update: z.union([ StyleUpdateInputSchema, StyleUncheckedUpdateInputSchema ]),
}).strict();

export const StyleCreateManyArgsSchema: z.ZodType<Prisma.StyleCreateManyArgs> = z.object({
  data: z.union([ StyleCreateManyInputSchema, StyleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const StyleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StyleCreateManyAndReturnArgs> = z.object({
  data: z.union([ StyleCreateManyInputSchema, StyleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const StyleDeleteArgsSchema: z.ZodType<Prisma.StyleDeleteArgs> = z.object({
  select: StyleSelectSchema.optional(),
  include: StyleIncludeSchema.optional(),
  where: StyleWhereUniqueInputSchema, 
}).strict();

export const StyleUpdateArgsSchema: z.ZodType<Prisma.StyleUpdateArgs> = z.object({
  select: StyleSelectSchema.optional(),
  include: StyleIncludeSchema.optional(),
  data: z.union([ StyleUpdateInputSchema, StyleUncheckedUpdateInputSchema ]),
  where: StyleWhereUniqueInputSchema, 
}).strict();

export const StyleUpdateManyArgsSchema: z.ZodType<Prisma.StyleUpdateManyArgs> = z.object({
  data: z.union([ StyleUpdateManyMutationInputSchema, StyleUncheckedUpdateManyInputSchema ]),
  where: StyleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const StyleUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.StyleUpdateManyAndReturnArgs> = z.object({
  data: z.union([ StyleUpdateManyMutationInputSchema, StyleUncheckedUpdateManyInputSchema ]),
  where: StyleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const StyleDeleteManyArgsSchema: z.ZodType<Prisma.StyleDeleteManyArgs> = z.object({
  where: StyleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UploadsImagesCreateArgsSchema: z.ZodType<Prisma.UploadsImagesCreateArgs> = z.object({
  select: UploadsImagesSelectSchema.optional(),
  data: z.union([ UploadsImagesCreateInputSchema, UploadsImagesUncheckedCreateInputSchema ]),
}).strict();

export const UploadsImagesUpsertArgsSchema: z.ZodType<Prisma.UploadsImagesUpsertArgs> = z.object({
  select: UploadsImagesSelectSchema.optional(),
  where: UploadsImagesWhereUniqueInputSchema, 
  create: z.union([ UploadsImagesCreateInputSchema, UploadsImagesUncheckedCreateInputSchema ]),
  update: z.union([ UploadsImagesUpdateInputSchema, UploadsImagesUncheckedUpdateInputSchema ]),
}).strict();

export const UploadsImagesCreateManyArgsSchema: z.ZodType<Prisma.UploadsImagesCreateManyArgs> = z.object({
  data: z.union([ UploadsImagesCreateManyInputSchema, UploadsImagesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UploadsImagesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UploadsImagesCreateManyAndReturnArgs> = z.object({
  data: z.union([ UploadsImagesCreateManyInputSchema, UploadsImagesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UploadsImagesDeleteArgsSchema: z.ZodType<Prisma.UploadsImagesDeleteArgs> = z.object({
  select: UploadsImagesSelectSchema.optional(),
  where: UploadsImagesWhereUniqueInputSchema, 
}).strict();

export const UploadsImagesUpdateArgsSchema: z.ZodType<Prisma.UploadsImagesUpdateArgs> = z.object({
  select: UploadsImagesSelectSchema.optional(),
  data: z.union([ UploadsImagesUpdateInputSchema, UploadsImagesUncheckedUpdateInputSchema ]),
  where: UploadsImagesWhereUniqueInputSchema, 
}).strict();

export const UploadsImagesUpdateManyArgsSchema: z.ZodType<Prisma.UploadsImagesUpdateManyArgs> = z.object({
  data: z.union([ UploadsImagesUpdateManyMutationInputSchema, UploadsImagesUncheckedUpdateManyInputSchema ]),
  where: UploadsImagesWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UploadsImagesUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UploadsImagesUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UploadsImagesUpdateManyMutationInputSchema, UploadsImagesUncheckedUpdateManyInputSchema ]),
  where: UploadsImagesWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UploadsImagesDeleteManyArgsSchema: z.ZodType<Prisma.UploadsImagesDeleteManyArgs> = z.object({
  where: UploadsImagesWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema, UserUncheckedCreateInputSchema ]),
}).strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
  create: z.union([ UserCreateInputSchema, UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema, UserUncheckedUpdateInputSchema ]),
}).strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema, UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema, UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema, UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const VariantCreateArgsSchema: z.ZodType<Prisma.VariantCreateArgs> = z.object({
  select: VariantSelectSchema.optional(),
  include: VariantIncludeSchema.optional(),
  data: z.union([ VariantCreateInputSchema, VariantUncheckedCreateInputSchema ]),
}).strict();

export const VariantUpsertArgsSchema: z.ZodType<Prisma.VariantUpsertArgs> = z.object({
  select: VariantSelectSchema.optional(),
  include: VariantIncludeSchema.optional(),
  where: VariantWhereUniqueInputSchema, 
  create: z.union([ VariantCreateInputSchema, VariantUncheckedCreateInputSchema ]),
  update: z.union([ VariantUpdateInputSchema, VariantUncheckedUpdateInputSchema ]),
}).strict();

export const VariantCreateManyArgsSchema: z.ZodType<Prisma.VariantCreateManyArgs> = z.object({
  data: z.union([ VariantCreateManyInputSchema, VariantCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const VariantCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VariantCreateManyAndReturnArgs> = z.object({
  data: z.union([ VariantCreateManyInputSchema, VariantCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const VariantDeleteArgsSchema: z.ZodType<Prisma.VariantDeleteArgs> = z.object({
  select: VariantSelectSchema.optional(),
  include: VariantIncludeSchema.optional(),
  where: VariantWhereUniqueInputSchema, 
}).strict();

export const VariantUpdateArgsSchema: z.ZodType<Prisma.VariantUpdateArgs> = z.object({
  select: VariantSelectSchema.optional(),
  include: VariantIncludeSchema.optional(),
  data: z.union([ VariantUpdateInputSchema, VariantUncheckedUpdateInputSchema ]),
  where: VariantWhereUniqueInputSchema, 
}).strict();

export const VariantUpdateManyArgsSchema: z.ZodType<Prisma.VariantUpdateManyArgs> = z.object({
  data: z.union([ VariantUpdateManyMutationInputSchema, VariantUncheckedUpdateManyInputSchema ]),
  where: VariantWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const VariantUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.VariantUpdateManyAndReturnArgs> = z.object({
  data: z.union([ VariantUpdateManyMutationInputSchema, VariantUncheckedUpdateManyInputSchema ]),
  where: VariantWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const VariantDeleteManyArgsSchema: z.ZodType<Prisma.VariantDeleteManyArgs> = z.object({
  where: VariantWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const VariantStockCreateArgsSchema: z.ZodType<Prisma.VariantStockCreateArgs> = z.object({
  select: VariantStockSelectSchema.optional(),
  include: VariantStockIncludeSchema.optional(),
  data: z.union([ VariantStockCreateInputSchema, VariantStockUncheckedCreateInputSchema ]),
}).strict();

export const VariantStockUpsertArgsSchema: z.ZodType<Prisma.VariantStockUpsertArgs> = z.object({
  select: VariantStockSelectSchema.optional(),
  include: VariantStockIncludeSchema.optional(),
  where: VariantStockWhereUniqueInputSchema, 
  create: z.union([ VariantStockCreateInputSchema, VariantStockUncheckedCreateInputSchema ]),
  update: z.union([ VariantStockUpdateInputSchema, VariantStockUncheckedUpdateInputSchema ]),
}).strict();

export const VariantStockCreateManyArgsSchema: z.ZodType<Prisma.VariantStockCreateManyArgs> = z.object({
  data: z.union([ VariantStockCreateManyInputSchema, VariantStockCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const VariantStockCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VariantStockCreateManyAndReturnArgs> = z.object({
  data: z.union([ VariantStockCreateManyInputSchema, VariantStockCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const VariantStockDeleteArgsSchema: z.ZodType<Prisma.VariantStockDeleteArgs> = z.object({
  select: VariantStockSelectSchema.optional(),
  include: VariantStockIncludeSchema.optional(),
  where: VariantStockWhereUniqueInputSchema, 
}).strict();

export const VariantStockUpdateArgsSchema: z.ZodType<Prisma.VariantStockUpdateArgs> = z.object({
  select: VariantStockSelectSchema.optional(),
  include: VariantStockIncludeSchema.optional(),
  data: z.union([ VariantStockUpdateInputSchema, VariantStockUncheckedUpdateInputSchema ]),
  where: VariantStockWhereUniqueInputSchema, 
}).strict();

export const VariantStockUpdateManyArgsSchema: z.ZodType<Prisma.VariantStockUpdateManyArgs> = z.object({
  data: z.union([ VariantStockUpdateManyMutationInputSchema, VariantStockUncheckedUpdateManyInputSchema ]),
  where: VariantStockWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const VariantStockUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.VariantStockUpdateManyAndReturnArgs> = z.object({
  data: z.union([ VariantStockUpdateManyMutationInputSchema, VariantStockUncheckedUpdateManyInputSchema ]),
  where: VariantStockWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const VariantStockDeleteManyArgsSchema: z.ZodType<Prisma.VariantStockDeleteManyArgs> = z.object({
  where: VariantStockWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();