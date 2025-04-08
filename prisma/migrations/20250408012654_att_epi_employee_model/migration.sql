/*
  Warnings:

  - You are about to drop the column `createdAt` on the `EpiEmployee` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `EpiEmployee` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `EpiEmployee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EpiEmployee" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "deliveryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "quantity" INTEGER NOT NULL;
