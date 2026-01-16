/*
  Warnings:

  - Added the required column `image` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `descricao` TEXT NULL,
    ADD COLUMN `image` LONGTEXT NOT NULL,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL;
