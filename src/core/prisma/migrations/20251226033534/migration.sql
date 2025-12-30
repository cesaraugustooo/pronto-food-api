-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
