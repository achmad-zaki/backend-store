/*
  Warnings:

  - You are about to alter the column `total_amount` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Int`.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `total_amount` INTEGER NOT NULL;
