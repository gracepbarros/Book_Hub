-- CreateTable
CREATE TABLE "User" (
    "userID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Alert" (
    "bookID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("bookID","userID")
);

-- CreateTable
CREATE TABLE "UserShelf" (
    "shelfID" TEXT NOT NULL,
    "bookID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "category" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL,
    "favorite" BOOLEAN NOT NULL,

    CONSTRAINT "UserShelf_pkey" PRIMARY KEY ("shelfID")
);

-- CreateIndex
CREATE INDEX "UserShelf_bookID_userID_idx" ON "UserShelf"("bookID", "userID");

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserShelf" ADD CONSTRAINT "UserShelf_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
