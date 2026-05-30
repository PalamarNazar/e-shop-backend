/*
  Warnings:

  - You are about to drop the column `hashed_token` on the `RefreshToken` table. All the data in the column will be lost.
  - You are about to drop the column `revoked` on the `RefreshToken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_token]` on the table `RefreshToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_token` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activation_link` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_activated` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "RefreshToken_hashed_token_key";

-- AlterTable
ALTER TABLE "RefreshToken" DROP COLUMN "hashed_token",
DROP COLUMN "revoked",
ADD COLUMN     "user_token" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "activation_link" TEXT NOT NULL,
ADD COLUMN     "is_activated" BOOLEAN NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_user_token_key" ON "RefreshToken"("user_token");
