/*
  Warnings:

  - Added the required column `total_services` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "total_services" INTEGER NOT NULL;
