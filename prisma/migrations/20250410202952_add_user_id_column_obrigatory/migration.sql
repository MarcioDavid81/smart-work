/*
  Warnings:

  - Made the column `userId` on table `Employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Epi` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `EpiEmployee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `EpiEntry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `EpiExit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `MedicalExam` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Epi" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "EpiEmployee" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "EpiEntry" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "EpiExit" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "MedicalExam" ALTER COLUMN "userId" SET NOT NULL;
