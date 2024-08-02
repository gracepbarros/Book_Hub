/*
  Warnings:

  - You are about to drop the column `ISBN` on the `UserShelf` table. All the data in the column will be lost.
  - Added the required column `googleID` to the `UserShelf` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserShelf_ISBN_userID_idx";

-- AlterTable
ALTER TABLE "UserShelf" DROP COLUMN "ISBN",
ADD COLUMN     "googleID" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "UserShelf_googleID_userID_idx" ON "UserShelf"("googleID", "userID");
