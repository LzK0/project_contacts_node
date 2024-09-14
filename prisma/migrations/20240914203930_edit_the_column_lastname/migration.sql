/*
  Warnings:

  - You are about to drop the column `lasname` on the `contacts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `contacts` DROP COLUMN `lasname`,
    ADD COLUMN `lastname` VARCHAR(191) NULL;
