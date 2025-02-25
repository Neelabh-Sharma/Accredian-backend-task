/*
  Warnings:

  - You are about to drop the column `email` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `referredBy` on the `referral` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[referrerEmail]` on the table `Referral` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[referredEmail]` on the table `Referral` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `referralCourse` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referredEmail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referredName` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referrerEmail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referrerName` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Referral_email_key` ON `referral`;

-- AlterTable
ALTER TABLE `referral` DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `phone`,
    DROP COLUMN `referredBy`,
    ADD COLUMN `referralCourse` VARCHAR(191) NOT NULL,
    ADD COLUMN `referredEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `referredName` VARCHAR(191) NOT NULL,
    ADD COLUMN `referrerEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `referrerName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Referral_referrerEmail_key` ON `Referral`(`referrerEmail`);

-- CreateIndex
CREATE UNIQUE INDEX `Referral_referredEmail_key` ON `Referral`(`referredEmail`);
