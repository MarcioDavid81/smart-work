-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Epi" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "EpiEmployee" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "EpiEntry" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "EpiExit" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MedicalExam" ALTER COLUMN "userId" DROP NOT NULL;
