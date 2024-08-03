/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `progress` on the `UserShelf` table. All the data in the column will be lost.
  - Added the required column `picture` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "picture" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserShelf" DROP COLUMN "progress";
