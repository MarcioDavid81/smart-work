-- CreateTable
CREATE TABLE "EpiEntry" (
    "id" SERIAL NOT NULL,
    "epiId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT,
    "supplier" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EpiEntry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EpiEntry" ADD CONSTRAINT "EpiEntry_epiId_fkey" FOREIGN KEY ("epiId") REFERENCES "Epi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
