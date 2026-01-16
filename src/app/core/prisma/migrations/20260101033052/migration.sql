/*
  Warnings:

  - You are about to drop the column `ativa` on the `categorias` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `categorias` DROP FOREIGN KEY `categorias_empresa_id_fkey`;

-- AlterTable
ALTER TABLE `categorias` DROP COLUMN `ativa`,
    ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE `categorias` ADD CONSTRAINT `categorias_empresa_id_fkey` FOREIGN KEY (`empresa_id`) REFERENCES `empresas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
