-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateTable
CREATE TABLE "doctor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profilePhoto" TEXT,
    "contactNumber" TEXT,
    "address" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "registrationNumber" TEXT,
    "experience" INTEGER,
    "gender" "Gender" NOT NULL,
    "appointmentFee" DOUBLE PRECISION,
    "qualifications" TEXT,
    "currentWorkingArea" TEXT,
    "designation" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doctor_email_key" ON "doctor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_userId_key" ON "doctor"("userId");

-- CreateIndex
CREATE INDEX "idx_doctor_email" ON "doctor"("email");

-- CreateIndex
CREATE INDEX "idx_doctor_isDeleted" ON "doctor"("isDeleted");

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
