/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `brand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `colors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `sizes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `style` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `colors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `sizes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `style` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "brand" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "colors" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sizes" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "style" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "brand_slug_key" ON "brand"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "colors_slug_key" ON "colors"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "sizes_slug_key" ON "sizes"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "style_slug_key" ON "style"("slug");
