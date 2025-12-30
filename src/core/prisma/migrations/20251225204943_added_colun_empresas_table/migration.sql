/*
  Warnings:

  - Added the required column `fim_exp` to the `empresas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inicio_exp` to the `empresas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `empresas` ADD COLUMN `fim_exp` DATETIME(3) NOT NULL,
    ADD COLUMN `inicio_exp` DATETIME(3) NOT NULL;
