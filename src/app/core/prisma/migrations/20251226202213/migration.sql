/*
  Warnings:

  - You are about to alter the column `fim_exp` on the `empresas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Time(0)`.
  - You are about to alter the column `inicio_exp` on the `empresas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Time(0)`.

*/
-- AlterTable
ALTER TABLE `empresas` MODIFY `fim_exp` TIME(0) NOT NULL,
    MODIFY `inicio_exp` TIME(0) NOT NULL;
