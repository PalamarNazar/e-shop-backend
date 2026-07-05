/*
  Warnings:

  - A unique constraint covering the columns `[product_id,color_id]` on the table `variants` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `gender` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProductGender" AS ENUM ('MAN', 'WOMAN', 'UNISEX');

-- AlterTable
ALTER TABLE "products" DROP COLUMN "gender",
ADD COLUMN     "gender" "ProductGender" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "variants_product_id_color_id_key" ON "variants"("product_id", "color_id");
