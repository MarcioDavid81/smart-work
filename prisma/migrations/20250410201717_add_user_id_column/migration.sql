-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Epi" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "EpiEmployee" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "EpiEntry" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "EpiExit" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "MedicalExam" ADD COLUMN     "userId" TEXT;
