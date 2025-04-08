-- CreateTable
CREATE TABLE "EpiExit" (
    "id" SERIAL NOT NULL,
    "epiId" INTEGER NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EpiExit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EpiExit" ADD CONSTRAINT "EpiExit_epiId_fkey" FOREIGN KEY ("epiId") REFERENCES "Epi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EpiExit" ADD CONSTRAINT "EpiExit_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
