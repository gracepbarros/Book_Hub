/*
  Warnings:

  - The primary key for the `Alert` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bookID` on the `Alert` table. All the data in the column will be lost.
  - You are about to drop the column `bookID` on the `UserShelf` table. All the data in the column will be lost.
  - Added the required column `ISBN` to the `Alert` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ISBN` to the `UserShelf` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserShelf_bookID_userID_idx";

-- AlterTable
ALTER TABLE "Alert" DROP CONSTRAINT "Alert_pkey",
DROP COLUMN "bookID",
ADD COLUMN     "ISBN" TEXT NOT NULL,
ADD CONSTRAINT "Alert_pkey" PRIMARY KEY ("ISBN", "userID");

-- AlterTable
ALTER TABLE "UserShelf" DROP COLUMN "bookID",
ADD COLUMN     "ISBN" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "UserShelf_ISBN_userID_idx" ON "UserShelf"("ISBN", "userID");
