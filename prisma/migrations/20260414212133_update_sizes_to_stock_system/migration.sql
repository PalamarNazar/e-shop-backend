/*
  Warnings:

  - You are about to drop the column `size` on the `sizes` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `sizes` table. All the data in the column will be lost.
  - You are about to drop the column `variant_id` on the `sizes` table. All the data in the column will be lost.
  - You are about to drop the `_ProductToStyles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `styles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `sizes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProductToStyles" DROP CONSTRAINT "_ProductToStyles_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToStyles" DROP CONSTRAINT "_ProductToStyles_B_fkey";

-- DropForeignKey
ALTER TABLE "sizes" DROP CONSTRAINT "sizes_variant_id_fkey";

-- AlterTable
ALTER TABLE "sizes" DROP COLUMN "size",
DROP COLUMN "stock",
DROP COLUMN "variant_id",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ProductToStyles";

-- DropTable
DROP TABLE "styles";

-- CreateTable
CREATE TABLE "style" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variant_stocks" (
    "id" TEXT NOT NULL,
    "variant_id" TEXT NOT NULL,
    "size_id" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "variant_stocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToStyle" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProductToStyle_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "style_name_key" ON "style"("name");

-- CreateIndex
CREATE UNIQUE INDEX "variant_stocks_variant_id_size_id_key" ON "variant_stocks"("variant_id", "size_id");

-- CreateIndex
CREATE INDEX "_ProductToStyle_B_index" ON "_ProductToStyle"("B");

-- AddForeignKey
ALTER TABLE "variant_stocks" ADD CONSTRAINT "variant_stocks_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "variants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variant_stocks" ADD CONSTRAINT "variant_stocks_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "sizes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToStyle" ADD CONSTRAINT "_ProductToStyle_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToStyle" ADD CONSTRAINT "_ProductToStyle_B_fkey" FOREIGN KEY ("B") REFERENCES "style"("id") ON DELETE CASCADE ON UPDATE CASCADE;
