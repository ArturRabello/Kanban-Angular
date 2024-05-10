-- CreateTable
CREATE TABLE "Boards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Columns" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "boardId" TEXT NOT NULL,
    CONSTRAINT "Columns_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Boards" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tasks" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "columnID" TEXT NOT NULL,
    CONSTRAINT "Tasks_columnID_fkey" FOREIGN KEY ("columnID") REFERENCES "Columns" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
