-- AlterTable
ALTER TABLE `pedidos` ADD COLUMN `status` ENUM('Pendente', 'Em_Producao', 'Pronto') NOT NULL DEFAULT 'Pendente';
