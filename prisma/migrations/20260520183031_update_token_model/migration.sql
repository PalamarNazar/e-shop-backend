/*
  Warnings:

  - You are about to drop the column `creared_at` on the `RefreshToken` table. All the data in the column will be lost.
  - You are about to drop the column `user_token` on the `RefreshToken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[refresh_token]` on the table `RefreshToken` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `RefreshToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `refresh_token` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "RefreshToken_user_token_key";

-- AlterTable
ALTER TABLE "RefreshToken" DROP COLUMN "creared_at",
DROP COLUMN "user_token",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "refresh_token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_refresh_token_key" ON "RefreshToken"("refresh_token");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_user_id_key" ON "RefreshToken"("user_id");
