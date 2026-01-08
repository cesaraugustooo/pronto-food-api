/*
  Warnings:

  - Added the required column `endereco_cliente` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_cliente` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone_cliente` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pedidos` ADD COLUMN `endereco_cliente` VARCHAR(191) NOT NULL,
    ADD COLUMN `nome_cliente` VARCHAR(191) NOT NULL,
    ADD COLUMN `observacoes_cliente` VARCHAR(191) NULL,
    ADD COLUMN `telefone_cliente` VARCHAR(191) NOT NULL;
