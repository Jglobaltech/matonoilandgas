-- Maton Oil & Gas Services Limited
-- Database Schema Configuration

-- Create database if it does not exist
CREATE DATABASE IF NOT EXISTS `maton-oil-gas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `maton-oil-gas`;

-- 1. Admin Users Table
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL, -- Securely hashed bcrypt password
  `last_login` TIMESTAMP NULL DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Settings Table (Key-Value Store)
CREATE TABLE IF NOT EXISTS `settings` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `setting_key` VARCHAR(50) NOT NULL UNIQUE,
  `setting_value` TEXT NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Careers/Job Listings Table
CREATE TABLE IF NOT EXISTS `careers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `department` VARCHAR(100) NOT NULL,
  `location` VARCHAR(100) NOT NULL,
  `type` VARCHAR(50) NOT NULL, -- e.g., Full-Time, Part-Time, Contract
  `description` TEXT NOT NULL,
  `requirements` TEXT NOT NULL,
  `application_method` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Contact Inquiries Table (Saves submissions from contact page)
CREATE TABLE IF NOT EXISTS `contact_inquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed default admin user (Username: admin, Password: AdminMaton2026!)
INSERT INTO `admin_users` (`username`, `password`)
VALUES ('admin', '$2y$12$dE0WOdpbsjAncE7jvM9raeW1bcL49DJPW1hkYZPmUsJt6PRt7.m.K')
ON DUPLICATE KEY UPDATE `username` = `username`;

-- Seed default settings
INSERT INTO `settings` (`setting_key`, `setting_value`)
VALUES 
  ('careers_visible', '1'),
  ('contact_phone', '+234 913 444 9881')
ON DUPLICATE KEY UPDATE `setting_value` = `setting_value`;
