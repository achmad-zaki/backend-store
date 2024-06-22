/*
  Warnings:

  - You are about to drop the column `quantity` on the `order_item` table. All the data in the column will be lost.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `payment_proof` VARCHAR(191) NULL,
    ADD COLUMN `payment_verified` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `order_item` DROP COLUMN `quantity`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `address` VARCHAR(191) NOT NULL;
