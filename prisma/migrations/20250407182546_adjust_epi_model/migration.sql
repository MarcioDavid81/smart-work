/*
  Warnings:

  - You are about to drop the column `brand` on the `Epi` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Epi` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Epi` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Epi` table. All the data in the column will be lost.
  - Added the required column `certification` to the `Epi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiration` to the `Epi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supplier` to the `Epi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Epi" DROP COLUMN "brand",
DROP COLUMN "model",
DROP COLUMN "size",
DROP COLUMN "type",
ADD COLUMN     "certification" TEXT NOT NULL,
ADD COLUMN     "expiration" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "supplier" TEXT NOT NULL;
