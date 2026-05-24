-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 24, 2026 at 03:37 AM
-- Server version: 11.5.2-MariaDB
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jewelry_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(191) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` bigint(20) NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_expiration_index` (`expiration`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(191) NOT NULL,
  `owner` varchar(191) NOT NULL,
  `expiration` bigint(20) NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_locks_expiration_index` (`expiration`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue` varchar(191) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_05_07_025553_create_personal_access_tokens_table', 1),
(5, '2026_05_07_130744_create_products_table', 1),
(6, '2026_05_07_130813_create_orders_table', 1),
(7, '2026_05_07_130834_create_order_items_table', 1),
(8, '2026_05_18_014308_create_payments_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `status` enum('pending','paid','shipped','delivered','cancelled') NOT NULL DEFAULT 'pending',
  `shipping_address` text NOT NULL,
  `phone` varchar(191) NOT NULL,
  `payment_method` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_user_id_foreign` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `total_price`, `status`, `shipping_address`, `phone`, `payment_method`, `created_at`, `updated_at`) VALUES
(38, 2, 249999.00, 'cancelled', 'Hay ESSALAM EL JADIDA', '0661234567', 'Cash on Delivery', '2026-05-17 22:42:46', '2026-05-17 22:44:21'),
(39, 2, 87499.00, 'delivered', 'Hay ESSALAM EL JADIDA', '0661234567', 'Cash on Delivery', '2026-05-17 22:43:07', '2026-05-17 22:44:02'),
(40, 4, 339995.00, 'pending', 'casablanca', '0661234555', 'Cash on Delivery', '2026-05-18 00:32:47', '2026-05-18 00:32:47'),
(41, 4, 87499.00, 'pending', 'casablanca', '0661234555', 'Cash on Delivery', '2026-05-18 00:33:16', '2026-05-18 00:33:16'),
(42, 2, 12500.00, 'pending', 'casablanca', '0661234567', 'Card', '2026-05-19 09:46:59', '2026-05-19 09:46:59'),
(43, 5, 65000.00, 'paid', 'casablanca', '0661234567', 'Card', '2026-05-19 09:57:38', '2026-05-19 11:47:21'),
(44, 5, 4200.00, 'pending', 'Hay ESSALAM EL JADIDA', '0661234567', 'Cash', '2026-05-19 11:46:05', '2026-05-19 11:46:05'),
(45, 2, 96300.00, 'pending', 'Hay ESSALAM EL JADIDA', '0661234567', 'Card', '2026-05-20 16:45:54', '2026-05-20 16:45:54'),
(46, 2, 104350.00, 'pending', '123,Rue Hassan II ,Casablanca', '0692345679', 'Card', '2026-05-21 00:36:12', '2026-05-21 00:36:12'),
(47, 2, 234352.00, 'pending', '123,Rue Hassan II ,Casablanca', '0692345679', 'Card', '2026-05-21 00:41:32', '2026-05-21 00:41:32'),
(48, 7, 34600.00, 'delivered', 'casablanca', '06661234555', 'Card', '2026-05-24 01:54:53', '2026-05-24 02:03:00'),
(49, 8, 18900.00, 'paid', 'casablanca', '066122345', 'Card', '2026-05-24 02:00:30', '2026-05-24 02:02:57'),
(50, 9, 55999.00, 'paid', '123,Rue Hassan II ,Casablanca', '0661234555', 'Card', '2026-05-24 02:10:19', '2026-05-24 02:11:08');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
CREATE TABLE IF NOT EXISTS `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_items_order_id_foreign` (`order_id`),
  KEY `order_items_product_id_foreign` (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `quantity`, `price`, `subtotal`, `created_at`, `updated_at`) VALUES
(32, 38, 1, 1, 54999.00, 54999.00, '2026-05-17 22:42:46', '2026-05-17 22:42:46'),
(33, 39, 1, 1, 54999.00, 54999.00, '2026-05-17 22:43:07', '2026-05-17 22:43:07'),
(34, 39, 2, 1, 32500.00, 32500.00, '2026-05-17 22:43:07', '2026-05-17 22:43:07'),
(35, 41, 1, 1, 54999.00, 54999.00, '2026-05-18 00:33:16', '2026-05-18 00:33:16'),
(36, 41, 2, 1, 32500.00, 32500.00, '2026-05-18 00:33:16', '2026-05-18 00:33:16'),
(37, 42, 17, 1, 12500.00, 12500.00, '2026-05-19 09:46:59', '2026-05-19 09:46:59'),
(38, 43, 2, 2, 32500.00, 65000.00, '2026-05-19 09:57:38', '2026-05-19 09:57:38'),
(39, 44, 4, 1, 4200.00, 4200.00, '2026-05-19 11:46:05', '2026-05-19 11:46:05'),
(40, 45, 4, 1, 4200.00, 4200.00, '2026-05-20 16:45:54', '2026-05-20 16:45:54'),
(41, 45, 9, 1, 5600.00, 5600.00, '2026-05-20 16:45:54', '2026-05-20 16:45:54'),
(42, 45, 11, 1, 62000.00, 62000.00, '2026-05-20 16:45:54', '2026-05-20 16:45:54'),
(43, 45, 16, 1, 24500.00, 24500.00, '2026-05-20 16:45:54', '2026-05-20 16:45:54'),
(44, 46, 5, 1, 42300.00, 42300.00, '2026-05-21 00:36:12', '2026-05-21 00:36:12'),
(45, 46, 14, 1, 2100.00, 2100.00, '2026-05-21 00:36:12', '2026-05-21 00:36:12'),
(46, 46, 3, 1, 18750.00, 18750.00, '2026-05-21 00:36:12', '2026-05-21 00:36:12'),
(47, 46, 8, 1, 41200.00, 41200.00, '2026-05-21 00:36:12', '2026-05-21 00:36:12'),
(48, 47, 18, 1, 234352.00, 234352.00, '2026-05-21 00:41:32', '2026-05-21 00:41:32'),
(49, 48, 2, 1, 32500.00, 32500.00, '2026-05-24 01:54:53', '2026-05-24 01:54:53'),
(50, 48, 14, 1, 2100.00, 2100.00, '2026-05-24 01:54:53', '2026-05-24 01:54:53'),
(51, 49, 19, 1, 18900.00, 18900.00, '2026-05-24 02:00:30', '2026-05-24 02:00:30'),
(52, 50, 1, 1, 55999.00, 55999.00, '2026-05-24 02:10:19', '2026-05-24 02:10:19');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `payment_method` varchar(191) NOT NULL,
  `card_holder_name` varchar(191) DEFAULT NULL,
  `card_last4` varchar(191) DEFAULT NULL,
  `card_brand` varchar(191) DEFAULT NULL,
  `expiry_month` varchar(191) DEFAULT NULL,
  `expiry_year` varchar(191) DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payments_order_id_foreign` (`order_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `order_id`, `payment_method`, `card_holder_name`, `card_last4`, `card_brand`, `expiry_month`, `expiry_year`, `amount`, `created_at`, `updated_at`) VALUES
(1, 42, 'Card', 'uu', '1233', NULL, '12', '2027', 12500.00, '2026-05-19 09:46:59', '2026-05-19 09:46:59'),
(2, 43, 'Card', 'uu', 'YUJH', NULL, 'HLJK\';', 'UOIO', 65000.00, '2026-05-19 09:57:38', '2026-05-19 09:57:38'),
(3, 45, 'Card', 'veronica park', '3467', NULL, '09', '31', 96300.00, '2026-05-20 16:45:54', '2026-05-20 16:45:54'),
(4, 46, 'Card', 'veronica park', '4123', NULL, '4', '2026', 104350.00, '2026-05-21 00:36:12', '2026-05-21 00:36:12'),
(5, 47, 'Card', 'veronica park', '7899', NULL, '5', '2026', 234352.00, '2026-05-21 00:41:32', '2026-05-21 00:41:32'),
(6, 48, 'Card', 'new', '7889', NULL, '12', '2026', 34600.00, '2026-05-24 01:54:53', '2026-05-24 01:54:53'),
(7, 49, 'Card', 'user', '9101', NULL, '12', '2026', 18900.00, '2026-05-24 02:00:30', '2026-05-24 02:00:30'),
(8, 50, 'Card', 'new', '0112', NULL, '12', '2026', 55999.00, '2026-05-24 02:10:19', '2026-05-24 02:10:19');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  KEY `personal_access_tokens_expires_at_index` (`expires_at`)
) ENGINE=MyISAM AUTO_INCREMENT=165 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '61c2b1d3e204bf87c71d23d2eb5bfec894ce5f7c0e21174008e266e40ff03fc3', '[\"*\"]', NULL, NULL, '2026-05-08 02:13:08', '2026-05-08 02:13:08'),
(2, 'App\\Models\\User', 1, 'auth_token', '1ee4a903ccd0b0c9b7bc8903b65d12d6e3cd2d75c3e8d9f164e14fd2b89a12ba', '[\"*\"]', NULL, NULL, '2026-05-08 02:13:58', '2026-05-08 02:13:58'),
(3, 'App\\Models\\User', 1, 'auth_token', '00f0d17a739fe34aa42ac58a5f09f27e1b872aabf5bb1e02e899b91a807712f7', '[\"*\"]', NULL, NULL, '2026-05-08 02:16:04', '2026-05-08 02:16:04'),
(4, 'App\\Models\\User', 1, 'auth_token', '355d63a2bec801b0cc761b68a6d2a38737c29fcc6ca44264f7e4d9d41c751d27', '[\"*\"]', NULL, NULL, '2026-05-08 02:26:08', '2026-05-08 02:26:08'),
(5, 'App\\Models\\User', 1, 'auth_token', 'd564d195da0f5b1ab38ed4d9cdf30fc637849160ab1747b9a49720b929cce1ac', '[\"*\"]', NULL, NULL, '2026-05-08 02:26:09', '2026-05-08 02:26:09'),
(6, 'App\\Models\\User', 1, 'auth_token', '3982801f581ac4928c4d35f38009a304fe272fde70c897974be21da40b6fe4b8', '[\"*\"]', NULL, NULL, '2026-05-08 02:26:10', '2026-05-08 02:26:10'),
(7, 'App\\Models\\User', 1, 'auth_token', 'af8399ca98bd1c07f758ec06fd1295da3b4141aff062ab844064fa12b8818cda', '[\"*\"]', NULL, NULL, '2026-05-08 11:00:58', '2026-05-08 11:00:58'),
(8, 'App\\Models\\User', 2, 'auth_token', '2462b201189eeecb5889f4f6d85a23d9d5502cab3ed25a1223710f44c8b4da65', '[\"*\"]', NULL, NULL, '2026-05-08 11:19:18', '2026-05-08 11:19:18'),
(9, 'App\\Models\\User', 1, 'auth_token', 'dd59c2610cfcbd569ab5eff927edfe1c04bc2c416ea2bb76974d64946b73a86c', '[\"*\"]', NULL, NULL, '2026-05-08 11:23:48', '2026-05-08 11:23:48'),
(10, 'App\\Models\\User', 2, 'auth_token', '62e0cd642e1572893d7060f470dd7e8bed38cb5b5b7d20a8bc31b308001de16a', '[\"*\"]', NULL, NULL, '2026-05-08 11:24:26', '2026-05-08 11:24:26'),
(11, 'App\\Models\\User', 1, 'auth_token', '470155c52c8ca0a39fd9f9c58fe0b617b0b8e72f9abdcd0b20ec8fe4943f540f', '[\"*\"]', NULL, NULL, '2026-05-08 11:30:24', '2026-05-08 11:30:24'),
(12, 'App\\Models\\User', 2, 'auth_token', '928ab0674dce19aebfb8794ef51d2758223b725d482453a4ae3f203b20bc3b96', '[\"*\"]', NULL, NULL, '2026-05-08 11:35:46', '2026-05-08 11:35:46'),
(13, 'App\\Models\\User', 1, 'auth_token', 'cf892b06aad7aca701b68307df904edab6fc570e7bbbc2060390720b52ba26a9', '[\"*\"]', NULL, NULL, '2026-05-08 13:43:51', '2026-05-08 13:43:51'),
(14, 'App\\Models\\User', 2, 'auth_token', 'd40371e3cc3e9ab9b19883a1204e9eb430730ed0c20526a6dce5000fa70646ae', '[\"*\"]', '2026-05-08 22:04:01', NULL, '2026-05-08 22:03:34', '2026-05-08 22:04:01'),
(15, 'App\\Models\\User', 2, 'auth_token', 'c42f23409cb443e699f1abd77d017baaa50e922da0b435ecc21a13dab83b8ba0', '[\"*\"]', '2026-05-08 22:04:19', NULL, '2026-05-08 22:04:16', '2026-05-08 22:04:19'),
(16, 'App\\Models\\User', 1, 'auth_token', '26bfb44e9ded31713414aee38832e06ae1907b739309f9eeece76a9d84c0f97d', '[\"*\"]', NULL, NULL, '2026-05-08 22:04:56', '2026-05-08 22:04:56'),
(17, 'App\\Models\\User', 3, 'auth_token', 'a20e06b8c327346d44161f6d6b7b7e8e42aea6e5b65542710b5bace098d3caa4', '[\"*\"]', NULL, NULL, '2026-05-08 22:12:26', '2026-05-08 22:12:26'),
(18, 'App\\Models\\User', 3, 'auth_token', '0f5b7dffb42b0f0faac3d9d3cb83445686bd1552fbce78391e36793862683687', '[\"*\"]', '2026-05-08 22:13:13', NULL, '2026-05-08 22:12:46', '2026-05-08 22:13:13'),
(19, 'App\\Models\\User', 1, 'auth_token', '56aebc86d1306e943b7a9ba6b5e827b72d549ce5704d9863753a4e19d7b3f1a6', '[\"*\"]', NULL, NULL, '2026-05-08 22:13:44', '2026-05-08 22:13:44'),
(20, 'App\\Models\\User', 3, 'auth_token', '9f887b5f64ce126e0c614dfc10bdcb8c0d682e93a1c1935869e34f2ff2697203', '[\"*\"]', '2026-05-09 01:09:55', NULL, '2026-05-08 22:25:28', '2026-05-09 01:09:55'),
(21, 'App\\Models\\User', 2, 'auth_token', '59af58430c60804c7fa707cbe2b405ab8a9fa59f8feac854978c4129fc5034fe', '[\"*\"]', '2026-05-13 14:49:00', NULL, '2026-05-11 07:33:33', '2026-05-13 14:49:00'),
(22, 'App\\Models\\User', 2, 'auth_token', '018afe03444d594882cbff5a9ab3f8482d322677326650a406b5d533fac9ca95', '[\"*\"]', '2026-05-13 12:56:54', NULL, '2026-05-11 07:36:09', '2026-05-13 12:56:54'),
(23, 'App\\Models\\User', 2, 'auth_token', 'e60d5e07555eb76cf827abd88936c69fffe92fc762d41863d7f4e1350feb2c1f', '[\"*\"]', '2026-05-13 14:46:05', NULL, '2026-05-13 12:56:57', '2026-05-13 14:46:05'),
(24, 'App\\Models\\User', 2, 'auth_token', '97d7616fe88322c0873bca69fc019b8bb5a24bb1dbf9282ef182cdefa18312b8', '[\"*\"]', '2026-05-13 14:56:35', NULL, '2026-05-13 14:46:13', '2026-05-13 14:56:35'),
(25, 'App\\Models\\User', 1, 'auth_token', '5ec2621eaf82c0c61f691b43b0343e19c786a08f50c13a85da1bfe4e49d6ae44', '[\"*\"]', NULL, NULL, '2026-05-13 14:50:08', '2026-05-13 14:50:08'),
(26, 'App\\Models\\User', 2, 'auth_token', '3061de67385bc6e95eede623be063afb7b9d55f7fba50345ca801c4922cb1734', '[\"*\"]', '2026-05-14 22:42:12', NULL, '2026-05-13 14:56:39', '2026-05-14 22:42:12'),
(27, 'App\\Models\\User', 2, 'auth_token', 'fe7f68b7ab7e0e75b587deac3d4356640681bc3735fa16a7210088d0f251d801', '[\"*\"]', '2026-05-14 01:04:08', NULL, '2026-05-14 00:17:27', '2026-05-14 01:04:08'),
(28, 'App\\Models\\User', 2, 'auth_token', '9d19261dca4c0784a1582f348f78e93ffb2d253ab448229dc16b11220ce8e893', '[\"*\"]', '2026-05-14 01:11:35', NULL, '2026-05-14 01:06:14', '2026-05-14 01:11:35'),
(29, 'App\\Models\\User', 1, 'auth_token', '64cf18f8058066b7b4ce060543225f999347b6c0bbef80a83b5a2a44161004a5', '[\"*\"]', NULL, NULL, '2026-05-14 22:43:06', '2026-05-14 22:43:06'),
(30, 'App\\Models\\User', 1, 'auth_token', 'd4bf506d511cfdd1f0c6e6ad5d9e6e617cec2b77069864196dc3c4b5e7acf1ae', '[\"*\"]', NULL, NULL, '2026-05-14 22:43:08', '2026-05-14 22:43:08'),
(31, 'App\\Models\\User', 2, 'auth_token', '3a6deee542d56ab52ee14f31583dd4a31e0906aa351519c197c6dbf358d2c927', '[\"*\"]', '2026-05-15 01:14:31', NULL, '2026-05-14 22:44:12', '2026-05-15 01:14:31'),
(32, 'App\\Models\\User', 1, 'auth_token', '4badf84093255acc925ddabe3cfe348b640511859f1e189ce427436b6dafaafd', '[\"*\"]', NULL, NULL, '2026-05-15 01:15:40', '2026-05-15 01:15:40'),
(33, 'App\\Models\\User', 2, 'auth_token', '362adce572cfa3a13e451b8f4dc661e60ed4058f190a30b72b991e07cab0d15a', '[\"*\"]', '2026-05-15 01:35:33', NULL, '2026-05-15 01:21:55', '2026-05-15 01:35:33'),
(34, 'App\\Models\\User', 4, 'auth_token', '9eec855d069a4a4875d8eec859d853cb381e1c64a4ccd6dbc4829ef91fad9840', '[\"*\"]', '2026-05-15 01:41:41', NULL, '2026-05-15 01:41:12', '2026-05-15 01:41:41'),
(35, 'App\\Models\\User', 4, 'auth_token', '1fca3e0a4723cedfd6dc97aeb9d3ad38176e4945cb1f933d1fa498a1b3938c18', '[\"*\"]', NULL, NULL, '2026-05-15 01:43:07', '2026-05-15 01:43:07'),
(36, 'App\\Models\\User', 4, 'auth_token', '08ac8783cebefadb12a8d76af53d1dee1ea341b56beac3fef8f077e3d2b09b8a', '[\"*\"]', '2026-05-15 01:56:06', NULL, '2026-05-15 01:50:20', '2026-05-15 01:56:06'),
(37, 'App\\Models\\User', 4, 'auth_token', 'ceb7a18f9790df084d3feadea5b94623c2d7241750d9e5014bde87b3088374d8', '[\"*\"]', '2026-05-15 02:10:55', NULL, '2026-05-15 02:10:11', '2026-05-15 02:10:55'),
(38, 'App\\Models\\User', 4, 'auth_token', 'e770bf277f3b76852f8705275d79a3f898ef5792b299b10ce91aee17951191ba', '[\"*\"]', NULL, NULL, '2026-05-15 02:35:45', '2026-05-15 02:35:45'),
(39, 'App\\Models\\User', 4, 'auth_token', 'b0b714c528babfc0d6a1c4d3b081cbd3cb0aa948d626cebd237a8d55b83b19e3', '[\"*\"]', '2026-05-15 02:47:13', NULL, '2026-05-15 02:35:55', '2026-05-15 02:47:13'),
(40, 'App\\Models\\User', 4, 'auth_token', '619138ca86731678202acc6bd2c18dd22738b9e290ff229f2f0b8ae0d0e528d0', '[\"*\"]', '2026-05-15 09:32:50', NULL, '2026-05-15 09:32:42', '2026-05-15 09:32:50'),
(41, 'App\\Models\\User', 4, 'auth_token', '7d116e1d047e624f057fa1ebfe861eff965207c20845fab1c62582637a16431f', '[\"*\"]', '2026-05-15 10:18:08', NULL, '2026-05-15 10:17:57', '2026-05-15 10:18:08'),
(42, 'App\\Models\\User', 4, 'auth_token', '148c919042f5a571aac0bbce8908b7355dbac5726f48e03fcbfad56c221b88d1', '[\"*\"]', NULL, NULL, '2026-05-15 12:38:43', '2026-05-15 12:38:43'),
(43, 'App\\Models\\User', 4, 'auth_token', '80e453c83fb8957cef23351f82b898daaa66f2ef765e884396802fe87e986c02', '[\"*\"]', '2026-05-15 12:50:04', NULL, '2026-05-15 12:49:30', '2026-05-15 12:50:04'),
(44, 'App\\Models\\User', 2, 'auth_token', 'ae3998924faa73c1a80670478d683c64ee590ae07cd922c2baf5810e92774f8c', '[\"*\"]', '2026-05-15 12:50:21', NULL, '2026-05-15 12:50:20', '2026-05-15 12:50:21'),
(45, 'App\\Models\\User', 2, 'auth_token', 'a582b0f902542038738d29ae32f6e9c69f1674e5a749cbc163cb82b16d6667b2', '[\"*\"]', '2026-05-15 13:05:57', NULL, '2026-05-15 12:53:52', '2026-05-15 13:05:57'),
(46, 'App\\Models\\User', 2, 'auth_token', 'eabb936af6221fd0a9f0ee4c8be788e664a824db1a50820f1f320cef4d7ca75e', '[\"*\"]', '2026-05-15 13:24:02', NULL, '2026-05-15 13:18:31', '2026-05-15 13:24:02'),
(47, 'App\\Models\\User', 2, 'auth_token', '42403e92aa2faaeebbef54f8e6d6c166f4bdfb9bef9da99a4872f3cc6937187a', '[\"*\"]', '2026-05-15 13:32:54', NULL, '2026-05-15 13:24:04', '2026-05-15 13:32:54'),
(48, 'App\\Models\\User', 1, 'auth_token', '9d1e6571dee89e878e0134b43c606fd8de48c0646214d6a7caf7081f1e79ef57', '[\"*\"]', '2026-05-15 13:33:48', NULL, '2026-05-15 13:33:48', '2026-05-15 13:33:48'),
(49, 'App\\Models\\User', 2, 'auth_token', '5e2574e085a6f045f54b2345050cedfc8597f6a78a1b3bd27aeac550f12d0a54', '[\"*\"]', '2026-05-15 14:12:31', NULL, '2026-05-15 13:35:01', '2026-05-15 14:12:31'),
(50, 'App\\Models\\User', 1, 'auth_token', '4a504271313fedb24c66fd600bc27bb4cd67b2927c22e635520a79c77338b3f4', '[\"*\"]', NULL, NULL, '2026-05-15 14:15:29', '2026-05-15 14:15:29'),
(51, 'App\\Models\\User', 1, 'auth_token', '1d7f4a176834d43fd20fa823157af2cf64471945539e36f8fda7ec4972e9ae45', '[\"*\"]', NULL, NULL, '2026-05-15 14:18:46', '2026-05-15 14:18:46'),
(52, 'App\\Models\\User', 1, 'auth_token', '14e1d99a28bdf0bb120827d12af8a2514da174e7402ad5b3c03307a36b94020f', '[\"*\"]', NULL, NULL, '2026-05-15 14:21:22', '2026-05-15 14:21:22'),
(53, 'App\\Models\\User', 1, 'auth_token', '409dcd4260c19498bcebfefa7c9019278584d37b9fc24b62e3137e3d0e3d2198', '[\"*\"]', NULL, NULL, '2026-05-15 14:21:33', '2026-05-15 14:21:33'),
(54, 'App\\Models\\User', 1, 'auth_token', '2f24172a300e96e9143ec22f2088493e9a7d7b651328cc3942177ed087dc935a', '[\"*\"]', NULL, NULL, '2026-05-15 14:21:39', '2026-05-15 14:21:39'),
(55, 'App\\Models\\User', 1, 'auth_token', 'dc67b6dc07b3f81bff4cc8896bd6837bfb2f5527d384935dec8f8e13037be7e6', '[\"*\"]', NULL, NULL, '2026-05-15 14:21:52', '2026-05-15 14:21:52'),
(56, 'App\\Models\\User', 1, 'auth_token', '48b44e9d72bd97f3ed835e54c4144d88891e940d6ae1fcf05380b9fd5b52f041', '[\"*\"]', NULL, NULL, '2026-05-15 14:22:09', '2026-05-15 14:22:09'),
(57, 'App\\Models\\User', 1, 'auth_token', 'd3a859c48f77a979b103f88ff244c8aaaef6f8acc4421e6b33c6192be08bc2a5', '[\"*\"]', NULL, NULL, '2026-05-15 14:22:14', '2026-05-15 14:22:14'),
(58, 'App\\Models\\User', 1, 'auth_token', '61d78d2e950fa3c22c619c507ae5f958b2b180f244f3f7e4641ed423e1d86895', '[\"*\"]', NULL, NULL, '2026-05-15 14:24:48', '2026-05-15 14:24:48'),
(59, 'App\\Models\\User', 1, 'auth_token', '26d8c90447029846d0de14e58eb5191e24cc7ff139b1acdc44480002e67f6bc8', '[\"*\"]', NULL, NULL, '2026-05-15 14:24:58', '2026-05-15 14:24:58'),
(60, 'App\\Models\\User', 1, 'auth_token', '3d2ed0a88902015027f44587d6f6a186d6e5b70f926b22395d482e5923f25146', '[\"*\"]', NULL, NULL, '2026-05-15 14:25:39', '2026-05-15 14:25:39'),
(61, 'App\\Models\\User', 1, 'auth_token', 'e57a0e58bec47e91f34106bc55e48a7e178e0607df01ba59c50676f8e8db12f4', '[\"*\"]', NULL, NULL, '2026-05-15 14:25:44', '2026-05-15 14:25:44'),
(62, 'App\\Models\\User', 1, 'auth_token', '821d9424fe862346cdd76bdb1122484e43e4b9f5be2e84b0081e64f576397f68', '[\"*\"]', NULL, NULL, '2026-05-15 14:26:02', '2026-05-15 14:26:02'),
(63, 'App\\Models\\User', 1, 'auth_token', '46e1cfc807f78f28e7ee57296e44b27cf4035f510f42d182dd1cff4a70f19288', '[\"*\"]', NULL, NULL, '2026-05-15 14:29:02', '2026-05-15 14:29:02'),
(64, 'App\\Models\\User', 1, 'auth_token', 'f9be389d65c0722b504a2e00d2d5eafe34acfd72b8b59d20e85dd0ab34141dcd', '[\"*\"]', NULL, NULL, '2026-05-15 14:29:30', '2026-05-15 14:29:30'),
(65, 'App\\Models\\User', 1, 'auth_token', 'e90e37de4ea770d994abf4260cb823134e2af991c724d792863a4335ac295943', '[\"*\"]', NULL, NULL, '2026-05-15 14:29:49', '2026-05-15 14:29:49'),
(66, 'App\\Models\\User', 2, 'auth_token', 'e2a90d1303bca471144e585df4e2e1a4b4be6b7d739690dc5088e9f5afbddca1', '[\"*\"]', NULL, NULL, '2026-05-15 14:30:55', '2026-05-15 14:30:55'),
(67, 'App\\Models\\User', 1, 'auth_token', '984aa5fd5892dc2a71ce995ee9fca4ab8424a57c3cb743444e5e1619e648e801', '[\"*\"]', NULL, NULL, '2026-05-15 14:32:31', '2026-05-15 14:32:31'),
(68, 'App\\Models\\User', 1, 'auth_token', '6836c00cff617788e31c3b508a2ab5be24db22289ffac2303cd1c06bcedb76e5', '[\"*\"]', NULL, NULL, '2026-05-15 14:35:33', '2026-05-15 14:35:33'),
(69, 'App\\Models\\User', 1, 'auth_token', '9c91922596b05d783b4f46ecc4c87162d3ac6129bd690704646274e6a24d337e', '[\"*\"]', NULL, NULL, '2026-05-15 14:35:40', '2026-05-15 14:35:40'),
(70, 'App\\Models\\User', 1, 'auth_token', '2491b94d1749b8941f16afefaaacec9954ed33168e6ad55663e3107219bfa4ee', '[\"*\"]', NULL, NULL, '2026-05-15 14:46:55', '2026-05-15 14:46:55'),
(71, 'App\\Models\\User', 1, 'auth_token', 'b484551e6e219a522851e7e7b9c7ec76bcb10b3bd90f3ca573ff3b9d34c5347d', '[\"*\"]', NULL, NULL, '2026-05-15 14:50:45', '2026-05-15 14:50:45'),
(72, 'App\\Models\\User', 1, 'auth_token', 'fdf0affbc52b786c983b1220a52a6edb4d8c5692887128cb9af922ffc0dcb57a', '[\"*\"]', NULL, NULL, '2026-05-15 14:50:52', '2026-05-15 14:50:52'),
(73, 'App\\Models\\User', 1, 'auth_token', 'abcfdb6dc5b531fb54adda1798f4a24432cfa127224caea267cbd1450070a6bf', '[\"*\"]', NULL, NULL, '2026-05-15 14:51:03', '2026-05-15 14:51:03'),
(74, 'App\\Models\\User', 1, 'auth_token', '1828df74f9d75e218e5d9fea7ad43fa6d0e375b564bd1d84b338389552cf4167', '[\"*\"]', NULL, NULL, '2026-05-15 14:51:24', '2026-05-15 14:51:24'),
(75, 'App\\Models\\User', 2, 'auth_token', 'efe666276ac4d6660cf181c3fda1f6a47411a6718c2cc47f1f46675f03cb5757', '[\"*\"]', '2026-05-15 14:51:52', NULL, '2026-05-15 14:51:42', '2026-05-15 14:51:52'),
(76, 'App\\Models\\User', 1, 'auth_token', '03e051e3138286c6ff123556309513d69e8561efe76473fefb636d86d4f3bf31', '[\"*\"]', NULL, NULL, '2026-05-15 14:52:08', '2026-05-15 14:52:08'),
(77, 'App\\Models\\User', 1, 'auth_token', 'cb98e23aad4c8319d522888ca1467432929c6bd22b871fe8d07aee010ddee024', '[\"*\"]', NULL, NULL, '2026-05-15 14:55:24', '2026-05-15 14:55:24'),
(78, 'App\\Models\\User', 2, 'auth_token', '96351dd3ed34c319c37c283bb18e9708063a27a2a7f1b80532965c7f94e483d0', '[\"*\"]', '2026-05-15 15:20:18', NULL, '2026-05-15 14:56:07', '2026-05-15 15:20:18'),
(79, 'App\\Models\\User', 2, 'auth_token', '53daff9d82cdf889e7dfd3aac8a63e5fe31b3c6956fbbe24e9f9b5b147ff9224', '[\"*\"]', '2026-05-15 15:20:25', NULL, '2026-05-15 15:20:20', '2026-05-15 15:20:25'),
(80, 'App\\Models\\User', 2, 'auth_token', 'e072d45ccfc77dd2fdfd10f0cdc51b21abd5bea7fe23f0f127c231a800125db0', '[\"*\"]', '2026-05-15 15:20:39', NULL, '2026-05-15 15:20:27', '2026-05-15 15:20:39'),
(81, 'App\\Models\\User', 2, 'auth_token', 'b342d3aef001397e20b25de050a777ace5481ecb53dee6966c590cd49b95b258', '[\"*\"]', '2026-05-15 15:21:26', NULL, '2026-05-15 15:21:17', '2026-05-15 15:21:26'),
(82, 'App\\Models\\User', 2, 'auth_token', '9b0d780d5f324ce138b7fb91323012b0de1ca4e7cdfdcb30cc638a7afd67b6a3', '[\"*\"]', '2026-05-15 15:21:28', NULL, '2026-05-15 15:21:28', '2026-05-15 15:21:28'),
(83, 'App\\Models\\User', 1, 'auth_token', '8d04c754a234d88b0a92bd9ea0b2cc7c563b08842352e54f047b21656d7b48bd', '[\"*\"]', NULL, NULL, '2026-05-15 15:21:44', '2026-05-15 15:21:44'),
(84, 'App\\Models\\User', 1, 'auth_token', '6783a70b91fb25a9ff008b5f9bdbc1fd726d6e89cf77611d7c4fa810ae9eae11', '[\"*\"]', NULL, NULL, '2026-05-15 15:21:51', '2026-05-15 15:21:51'),
(85, 'App\\Models\\User', 1, 'auth_token', '5e9ac941fde5f73930ac17f3b89893142b4c30b123be59fe6ba40547c560d8b3', '[\"*\"]', NULL, NULL, '2026-05-15 15:21:56', '2026-05-15 15:21:56'),
(86, 'App\\Models\\User', 1, 'auth_token', 'b7ca02637fe9231e7bed4c1187ada3f1dd99fe2914fe4cb3d380fa030a97f5b8', '[\"*\"]', NULL, NULL, '2026-05-15 15:22:01', '2026-05-15 15:22:01'),
(87, 'App\\Models\\User', 1, 'auth_token', 'c933e0415e404a1ad1419bdaa4c5bb14e63c919af374c465c027994c7d02bf8d', '[\"*\"]', NULL, NULL, '2026-05-15 15:24:24', '2026-05-15 15:24:24'),
(88, 'App\\Models\\User', 1, 'auth_token', '78cdfb9a1852309a58ffda8a1f192be859ec6e12645e0ffb818a1b30f492345d', '[\"*\"]', NULL, NULL, '2026-05-15 15:24:30', '2026-05-15 15:24:30'),
(89, 'App\\Models\\User', 2, 'auth_token', '01216ea0bad0bd45e5de7d252fc3e78c291364117854c306c1ef4214832280e6', '[\"*\"]', '2026-05-15 15:24:59', NULL, '2026-05-15 15:24:46', '2026-05-15 15:24:59'),
(90, 'App\\Models\\User', 2, 'auth_token', '3c9178a2b134ba44091cc50cf9b73c42a5a1f07c724adb901314ccd02fa667e7', '[\"*\"]', '2026-05-15 15:25:02', NULL, '2026-05-15 15:25:01', '2026-05-15 15:25:02'),
(91, 'App\\Models\\User', 2, 'auth_token', '1202d647ee284200f4254df01f088b1a5e1165c3d7a477cef6c6324be514cdd2', '[\"*\"]', NULL, NULL, '2026-05-15 15:25:07', '2026-05-15 15:25:07'),
(92, 'App\\Models\\User', 2, 'auth_token', 'a2bf39b3570dd4739608c20d9f1c86f4b3c4414df0ab7ca2e3945c303d9805cf', '[\"*\"]', NULL, NULL, '2026-05-15 15:25:14', '2026-05-15 15:25:14'),
(93, 'App\\Models\\User', 1, 'auth_token', '61bd1087d9d0f98e89a9d4d8a32d32843b84a7a101869e47d494f26ab8fa1666', '[\"*\"]', NULL, NULL, '2026-05-15 15:34:24', '2026-05-15 15:34:24'),
(94, 'App\\Models\\User', 1, 'auth_token', '5c223627fba1b488b9a9b57f3354d69208e0c82a5cfcd774ca8d6d36dd2e04cc', '[\"*\"]', '2026-05-15 15:45:47', NULL, '2026-05-15 15:34:38', '2026-05-15 15:45:47'),
(95, 'App\\Models\\User', 1, 'auth_token', '9cdb8c8b45ff84380fd7f4d5e9338027cd040df3df06633d9d03f9ca49a53b34', '[\"*\"]', '2026-05-15 15:46:09', NULL, '2026-05-15 15:45:58', '2026-05-15 15:46:09'),
(96, 'App\\Models\\User', 2, 'auth_token', 'bd528bc1470e3a9e27d09d99a83c9b219c83ec10a4429fc3472c80d1446464aa', '[\"*\"]', '2026-05-15 15:46:39', NULL, '2026-05-15 15:46:23', '2026-05-15 15:46:39'),
(97, 'App\\Models\\User', 1, 'auth_token', 'a508b2c83a18ba214c4c039f1f8edd77aa812ea1917e6313aa5b2b83ecd13413', '[\"*\"]', '2026-05-15 15:52:17', NULL, '2026-05-15 15:46:57', '2026-05-15 15:52:17'),
(98, 'App\\Models\\User', 1, 'auth_token', 'f0d5b16ffe5da26fc058553d0dac5c82167612af02d721b931af682be3c7478b', '[\"*\"]', '2026-05-15 15:52:43', NULL, '2026-05-15 15:52:24', '2026-05-15 15:52:43'),
(99, 'App\\Models\\User', 2, 'auth_token', 'd084ebe6d2d3e5aa006ff78e6ef4bb28363893393edee46c69d0f6021895adda', '[\"*\"]', '2026-05-15 16:15:15', NULL, '2026-05-15 15:53:00', '2026-05-15 16:15:15'),
(100, 'App\\Models\\User', 1, 'auth_token', '5c966ba91b5394f10702c24e30a962ac673c2cbad6b9c6cdbc4d9e9f63e93581', '[\"*\"]', '2026-05-15 16:16:14', NULL, '2026-05-15 16:15:37', '2026-05-15 16:16:14'),
(101, 'App\\Models\\User', 1, 'auth_token', 'c14b9e2886f6c388520c304bf4bbf32ff40c9d58a737db5e9618e4bd112da062', '[\"*\"]', '2026-05-15 17:50:58', NULL, '2026-05-15 16:45:43', '2026-05-15 17:50:58'),
(102, 'App\\Models\\User', 2, 'auth_token', 'c9eb8c4eb736628d00234570c351578cc9682d5b9393ab3fd728e2065c1ebcf3', '[\"*\"]', '2026-05-15 17:57:41', NULL, '2026-05-15 17:51:23', '2026-05-15 17:57:41'),
(103, 'App\\Models\\User', 2, 'auth_token', '38853514f46dd44442a26486274b847c04297528275a37a0bcb9406a31eb228e', '[\"*\"]', '2026-05-15 19:22:03', NULL, '2026-05-15 18:25:42', '2026-05-15 19:22:03'),
(104, 'App\\Models\\User', 1, 'auth_token', '6caff490ad04a2e233234bb19f505eeff595e5447d3daa2ab3bddc1779c129a4', '[\"*\"]', NULL, NULL, '2026-05-15 19:22:24', '2026-05-15 19:22:24'),
(105, 'App\\Models\\User', 2, 'auth_token', 'b3a7f612506b2e999b16b83464e241ebc72271d439ecc58f3dfe0f46e24c632e', '[\"*\"]', '2026-05-17 19:52:23', NULL, '2026-05-15 19:33:13', '2026-05-17 19:52:23'),
(106, 'App\\Models\\User', 1, 'auth_token', '2b6ec2b736805268671624b8a5a6dd2128896bf991645550b19c617efe89b7bc', '[\"*\"]', '2026-05-17 22:18:51', NULL, '2026-05-17 19:52:56', '2026-05-17 22:18:51'),
(107, 'App\\Models\\User', 2, 'auth_token', 'd8df13d0cb5b1385e264a25c3523c5f04d63145874da2036532965a5abc101f3', '[\"*\"]', NULL, NULL, '2026-05-17 22:21:05', '2026-05-17 22:21:05'),
(108, 'App\\Models\\User', 1, 'auth_token', '24af8ce18d0cf10c6fd24213d30d1a885f08f25d14e1a12207ed0f7a637e43e5', '[\"*\"]', '2026-05-17 22:42:02', NULL, '2026-05-17 22:41:50', '2026-05-17 22:42:02'),
(109, 'App\\Models\\User', 2, 'auth_token', 'f663ec6a48db04297f691067205414c465e07881bd9f6c57eca73f7ce109559f', '[\"*\"]', '2026-05-17 22:43:10', NULL, '2026-05-17 22:42:09', '2026-05-17 22:43:10'),
(110, 'App\\Models\\User', 2, 'auth_token', 'b93ef20d14ea815caba3f79a94046dfacbb5e8bca4020575b1331c0876eb3ea6', '[\"*\"]', '2026-05-17 22:43:31', NULL, '2026-05-17 22:43:30', '2026-05-17 22:43:31'),
(111, 'App\\Models\\User', 1, 'auth_token', '89742c50351f5abdf844e5f710d4bd6258eb2661c416456af8248e77ebcd193c', '[\"*\"]', '2026-05-17 22:44:25', NULL, '2026-05-17 22:43:38', '2026-05-17 22:44:25'),
(112, 'App\\Models\\User', 4, 'auth_token', '783a3f206b06a7876d367f3232d47d252521e988d8bf664c8ea0022470be2d6d', '[\"*\"]', NULL, NULL, '2026-05-17 23:03:17', '2026-05-17 23:03:17'),
(113, 'App\\Models\\User', 1, 'auth_token', 'a5bb7d452d1c20a21ef0f6558dd0dbec7afa24d351e19f9288baa702aa7209ac', '[\"*\"]', '2026-05-17 23:47:11', NULL, '2026-05-17 23:47:08', '2026-05-17 23:47:11'),
(114, 'App\\Models\\User', 4, 'auth_token', 'bac39e2b7764d7df34a7c88c8e6a64ff947428db959c9a3ebbc4a1cd4ddd2a6e', '[\"*\"]', NULL, NULL, '2026-05-18 00:16:15', '2026-05-18 00:16:15'),
(115, 'App\\Models\\User', 4, 'auth_token', '9ca8b91b20e3c64e357e739832ca9dba87147bbfe89f583d90dfa0bc4f0a131e', '[\"*\"]', '2026-05-18 00:33:34', NULL, '2026-05-18 00:17:44', '2026-05-18 00:33:34'),
(116, 'App\\Models\\User', 2, 'auth_token', 'db2ecd275c4104b027420874a3008f489962988a1cdac57243dde11b9de097e4', '[\"*\"]', '2026-05-18 01:57:51', NULL, '2026-05-18 00:33:47', '2026-05-18 01:57:51'),
(117, 'App\\Models\\User', 1, 'auth_token', 'abc0d48b1006f802f1497c189e9dfe164e52da5f0e8aa0742e48e53a975d2449', '[\"*\"]', '2026-05-18 02:01:03', NULL, '2026-05-18 01:58:43', '2026-05-18 02:01:03'),
(118, 'App\\Models\\User', 2, 'auth_token', 'a2aa3c5239aeea47cf0b3895a798ccdb21b0717b4986e1d70277bb9678f2f90a', '[\"*\"]', '2026-05-19 08:59:59', NULL, '2026-05-18 02:01:14', '2026-05-19 08:59:59'),
(119, 'App\\Models\\User', 2, 'auth_token', 'fae3a3f7f88c0c5ca57de4a4d86cb3b968e91a9291205e1ee991fd1e0b23d16f', '[\"*\"]', NULL, NULL, '2026-05-19 09:00:20', '2026-05-19 09:00:20'),
(120, 'App\\Models\\User', 1, 'auth_token', '3a31998add3b1299850ab3d07dba38281468213376d44deaf43722ff6b951462', '[\"*\"]', '2026-05-19 09:00:56', NULL, '2026-05-19 09:00:28', '2026-05-19 09:00:56'),
(121, 'App\\Models\\User', 2, 'auth_token', '15a62648b59e952a168931bfe4cb349d34d2e1a4c2f40fb5a2911751282c5ca4', '[\"*\"]', NULL, NULL, '2026-05-19 09:03:54', '2026-05-19 09:03:54'),
(122, 'App\\Models\\User', 1, 'auth_token', 'a870d544e28c82371c35845c1e360f5b76339e656b2cd35e8480b017fdfcb99b', '[\"*\"]', '2026-05-19 09:43:47', NULL, '2026-05-19 09:35:44', '2026-05-19 09:43:47'),
(123, 'App\\Models\\User', 2, 'auth_token', '0344184bd024ec44ad2173d25cff4377db912cc456da460a4fe59b8972d3f3e6', '[\"*\"]', '2026-05-19 09:47:02', NULL, '2026-05-19 09:46:16', '2026-05-19 09:47:02'),
(124, 'App\\Models\\User', 1, 'auth_token', 'c2b7170cd6b66a084e85084ce5b800725b37006cf62f3b166d9b0328493b9651', '[\"*\"]', '2026-05-19 09:47:44', NULL, '2026-05-19 09:47:11', '2026-05-19 09:47:44'),
(125, 'App\\Models\\User', 5, 'auth_token', '5ea7a9bf3a0cd0fc88b73c12916634830fb9052e7a572f0b98c1158fc371b25e', '[\"*\"]', NULL, NULL, '2026-05-19 09:54:41', '2026-05-19 09:54:41'),
(126, 'App\\Models\\User', 5, 'auth_token', '6b6228b07dc0d0dfdeb946c95294e8eef49b50945e249cd8044bd441153a1cb5', '[\"*\"]', '2026-05-19 09:57:53', NULL, '2026-05-19 09:56:23', '2026-05-19 09:57:53'),
(127, 'App\\Models\\User', 1, 'auth_token', '52d94a225915c559e7ec41c29cac4bb9bfd3f96bfb648728686a65fc9027ce49', '[\"*\"]', '2026-05-19 10:19:25', NULL, '2026-05-19 09:58:27', '2026-05-19 10:19:25'),
(128, 'App\\Models\\User', 1, 'auth_token', 'be8c9d264f803134dd4ee992357d78a383b7271a5af342dceddb5cd716c1cb5d', '[\"*\"]', NULL, NULL, '2026-05-19 11:45:16', '2026-05-19 11:45:16'),
(129, 'App\\Models\\User', 5, 'auth_token', '2134fb03f036dd3bd4bb0327681d899dd7b85ad31a873d9ae43612f7547ebf8e', '[\"*\"]', '2026-05-19 11:46:07', NULL, '2026-05-19 11:45:26', '2026-05-19 11:46:07'),
(130, 'App\\Models\\User', 1, 'auth_token', '54cb3fc16a9ee49a8fa5646a5b8140975110555268851e353446ee985f096b8a', '[\"*\"]', '2026-05-20 16:28:36', NULL, '2026-05-19 11:46:29', '2026-05-20 16:28:36'),
(131, 'App\\Models\\User', 1, 'auth_token', '8e390eeebc2cbcb1588c378ed9eccdcc4b004f96548d5a59a183ded9df19c375', '[\"*\"]', '2026-05-20 16:38:43', NULL, '2026-05-20 16:38:42', '2026-05-20 16:38:43'),
(132, 'App\\Models\\User', 2, 'auth_token', '00107d622f041be183a6b6648f8bb580a3ced053c0a0ef1daf30ff1705805539', '[\"*\"]', NULL, NULL, '2026-05-20 16:39:10', '2026-05-20 16:39:10'),
(133, 'App\\Models\\User', 2, 'auth_token', '572f1b2dc1cf910efee822a125f91367e1c29d2ecffbebb335c9011bd10a8657', '[\"*\"]', NULL, NULL, '2026-05-20 16:39:48', '2026-05-20 16:39:48'),
(134, 'App\\Models\\User', 2, 'auth_token', '18f26f97f6c3de09e7ef2e8296d2fc892f14832bace1a599a69b050b95cc9aa0', '[\"*\"]', '2026-05-20 16:45:59', NULL, '2026-05-20 16:41:22', '2026-05-20 16:45:59'),
(135, 'App\\Models\\User', 2, 'auth_token', '5be4c8976f3ff770d22755f89c87617812db66fe9673dbf42cadeee66eaad8ed', '[\"*\"]', NULL, NULL, '2026-05-20 16:51:55', '2026-05-20 16:51:55'),
(136, 'App\\Models\\User', 1, 'auth_token', '5a89bea7d3a2b9c6065043d10e850ad731a645a49a8000465b4ee690cc63ca35', '[\"*\"]', '2026-05-20 16:56:43', NULL, '2026-05-20 16:52:41', '2026-05-20 16:56:43'),
(137, 'App\\Models\\User', 2, 'auth_token', '6c15b70c1cc607af5866c5ec9bf197dcc7347c803f1cd73d86f45bd248d00674', '[\"*\"]', '2026-05-20 16:57:04', NULL, '2026-05-20 16:56:56', '2026-05-20 16:57:04'),
(138, 'App\\Models\\User', 2, 'auth_token', 'ef368dad9c20ea781f9638a1b3443305adc180cee6f1bfd8fb2c4630324b647c', '[\"*\"]', NULL, NULL, '2026-05-20 16:58:04', '2026-05-20 16:58:04'),
(139, 'App\\Models\\User', 1, 'auth_token', '55979726a7c1404eaf5fe9287082a5f37ff164795aaafc5e48e5af4e237c8af8', '[\"*\"]', '2026-05-20 18:40:15', NULL, '2026-05-20 16:58:55', '2026-05-20 18:40:15'),
(140, 'App\\Models\\User', 2, 'auth_token', '708501d843ef3ea942d87af20bdbb80e922200cef385e1b3175afb5c545b91b0', '[\"*\"]', NULL, NULL, '2026-05-20 18:44:02', '2026-05-20 18:44:02'),
(141, 'App\\Models\\User', 2, 'auth_token', '7d6c1cc23351617ff4307fb0b433e1dd2758c76553d43fa8da0517ca321610e2', '[\"*\"]', NULL, NULL, '2026-05-20 18:44:36', '2026-05-20 18:44:36'),
(142, 'App\\Models\\User', 1, 'auth_token', '42098d91327de0588a738cb2374fbe496bb996867dc3e10f2a185b29a96b7800', '[\"*\"]', '2026-05-20 18:52:45', NULL, '2026-05-20 18:46:59', '2026-05-20 18:52:45'),
(143, 'App\\Models\\User', 2, 'auth_token', 'd97fce7e610f0710f8ea44a0eb8b25f3f9cba64440ec1666cc8ffab189700ae8', '[\"*\"]', NULL, NULL, '2026-05-20 18:52:53', '2026-05-20 18:52:53'),
(144, 'App\\Models\\User', 1, 'auth_token', '1cae19c56e187faa9adc37df520afdcbbc5eec6f6ddc8544aa428ff622e975e5', '[\"*\"]', '2026-05-21 00:15:08', NULL, '2026-05-20 22:25:33', '2026-05-21 00:15:08'),
(145, 'App\\Models\\User', 2, 'auth_token', 'b0866a63a388bb8815f1a5a1a672477c3f8a456d59e9a5064dcc80fe7058e89f', '[\"*\"]', '2026-05-21 00:41:35', NULL, '2026-05-21 00:35:35', '2026-05-21 00:41:35'),
(146, 'App\\Models\\User', 1, 'auth_token', '59f7c43344a937ff898b478ea35ca639a24a9f8194bd02f8c4fa07c1a6ce24a9', '[\"*\"]', '2026-05-21 01:03:08', NULL, '2026-05-21 00:44:08', '2026-05-21 01:03:08'),
(147, 'App\\Models\\User', 1, 'auth_token', 'a644b958e7795f93940f7fb6997ee1b9473ea876825d4964ecfb30ac873c2b4b', '[\"*\"]', '2026-05-23 11:15:52', NULL, '2026-05-23 11:14:53', '2026-05-23 11:15:52'),
(148, 'App\\Models\\User', 2, 'auth_token', '15f2bbd16f080036adc261fc99d18bfcd2ca41b4aa517e3a6857b8db6cf8929c', '[\"*\"]', '2026-05-23 11:28:33', NULL, '2026-05-23 11:16:01', '2026-05-23 11:28:33'),
(149, 'App\\Models\\User', 1, 'auth_token', '317eabe2ec23049bbe093f586063b7e8e8f1c708c31e83fea614b465410f2b74', '[\"*\"]', '2026-05-23 12:07:24', NULL, '2026-05-23 11:49:33', '2026-05-23 12:07:24'),
(150, 'App\\Models\\User', 2, 'auth_token', '0eadd2f75623feb196118d64ee60e26fad317a53b7441cc067265b8391c747a3', '[\"*\"]', '2026-05-23 12:11:19', NULL, '2026-05-23 12:07:35', '2026-05-23 12:11:19'),
(151, 'App\\Models\\User', 1, 'auth_token', '25568b728d21cfcd89e084cfdaf511ee3dfca4aa7ab607d9c37516ecf26dba3e', '[\"*\"]', '2026-05-23 12:12:11', NULL, '2026-05-23 12:11:56', '2026-05-23 12:12:11'),
(152, 'App\\Models\\User', 1, 'auth_token', '10e505220b7d17670857adff5354a2d8ec169fe1afacc09c3c2f73c21e8da65f', '[\"*\"]', '2026-05-23 13:18:33', NULL, '2026-05-23 12:21:00', '2026-05-23 13:18:33'),
(153, 'App\\Models\\User', 2, 'auth_token', 'cedbe0872b619934b684042423525fb6bafb0cf9eff2acd04003cc9766efda5a', '[\"*\"]', NULL, NULL, '2026-05-23 13:19:18', '2026-05-23 13:19:18'),
(154, 'App\\Models\\User', 6, 'auth_token', '6bb8db20a8ee4dc317aa6a0a3162e1570b154ba0e6848162c706961d429383a4', '[\"*\"]', NULL, NULL, '2026-05-24 01:48:38', '2026-05-24 01:48:38'),
(155, 'App\\Models\\User', 6, 'auth_token', '3de1a0bd72a0cdee3b2200e8a02038ed92d6eccf17d5954da28dfee083521dd9', '[\"*\"]', NULL, NULL, '2026-05-24 01:48:48', '2026-05-24 01:48:48'),
(156, 'App\\Models\\User', 7, 'auth_token', '8aa765bad0a67343c6d268ab9ab8ca97537fd3506d92d12f0ae393a8db61d737', '[\"*\"]', NULL, NULL, '2026-05-24 01:51:09', '2026-05-24 01:51:09'),
(157, 'App\\Models\\User', 7, 'auth_token', '07006877fcb324729945a9d40c63940f86b072de1d6ee2281c6c90a528d8019e', '[\"*\"]', '2026-05-24 01:54:55', NULL, '2026-05-24 01:51:18', '2026-05-24 01:54:55'),
(158, 'App\\Models\\User', 8, 'auth_token', '347a15383fefe4907beac241554ce9e9b8d108814fd9ddb4ec01882ae5543adb', '[\"*\"]', NULL, NULL, '2026-05-24 01:58:06', '2026-05-24 01:58:06'),
(159, 'App\\Models\\User', 8, 'auth_token', '027122897c927fe463b965c1353a2ad9a155102869513274e7b39acc179ea5c0', '[\"*\"]', '2026-05-24 02:00:38', NULL, '2026-05-24 01:58:14', '2026-05-24 02:00:38'),
(160, 'App\\Models\\User', 1, 'auth_token', 'ae70097d9d6644057e9c8c37a66aea0036ae5084ee166abe07f056e5ff9ba3ee', '[\"*\"]', '2026-05-24 02:03:00', NULL, '2026-05-24 02:01:01', '2026-05-24 02:03:00'),
(161, 'App\\Models\\User', 9, 'auth_token', 'bb679f37dc9d7b8247fba0248b7bb88bf594a5723395732d3db3a2b2e16c22cb', '[\"*\"]', NULL, NULL, '2026-05-24 02:08:34', '2026-05-24 02:08:34'),
(162, 'App\\Models\\User', 9, 'auth_token', 'd0d719b3507947b2753610ce81ed4bf0f11e31e728ac89f23a1de70895ec0519', '[\"*\"]', '2026-05-24 02:10:25', NULL, '2026-05-24 02:08:41', '2026-05-24 02:10:25'),
(163, 'App\\Models\\User', 1, 'auth_token', '1a9ed124f37003b96c9fd463683fc959fd15a2214a0774cb272946c4132b96ca', '[\"*\"]', '2026-05-24 02:13:09', NULL, '2026-05-24 02:10:34', '2026-05-24 02:13:09'),
(164, 'App\\Models\\User', 2, 'auth_token', 'b249748a7323717e10500880201922a888e8c601dd5ecf4c456ac8896b2a1b8a', '[\"*\"]', '2026-05-24 02:13:33', NULL, '2026-05-24 02:13:22', '2026-05-24 02:13:33');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `category` enum('ring','necklace','bracelet','earrings') NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `material` enum('gold','silver','platinum') NOT NULL,
  `carat` varchar(191) DEFAULT NULL,
  `clarity` varchar(191) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `price`, `stock`, `material`, `carat`, `clarity`, `description`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Eternal Radiance Solitaire', 'ring', 55999.00, 0, 'gold', '18k', 'VVS1', 'A breathtaking 1.5-carat round brilliant diamond set in a classic 18k yellow gold band.', 'ring1b.jpg', '2026-05-08 02:09:18', '2026-05-24 02:12:03'),
(2, 'Celestial Teardrop Necklace', 'necklace', 32500.00, 4, 'platinum', NULL, 'VVS2', 'A shimmering pear-cut diamond pendant suspended from a delicate platinum chain.', 'necklace1.jpg', '2026-05-08 02:09:18', '2026-05-24 01:54:53'),
(3, 'Atlas Gold Cuff', 'bracelet', 18750.00, 11, 'gold', '24k', NULL, 'Solid 24k gold bangle featuring intricate hand-engraved geometric patterns.', 'bracelet1.jpg', '2026-05-08 02:09:18', '2026-05-21 00:36:12'),
(4, 'Moonlight Drops', 'earrings', 4200.00, 18, 'silver', NULL, 'IF', 'Sophisticated drop earrings crafted in premium sterling silver with a leaf design.', 'earrings1.jpg', '2026-05-08 02:09:18', '2026-05-20 16:45:54'),
(5, 'Majestic Platinum Mesh', 'bracelet', 42300.00, 1, 'platinum', 'NULL', 'VVS1', 'A sophisticated mesh-link bracelet crafted in pure platinum, featuring a hidden clasp and brilliant-cut diamond accents along the edge.', 'bracelet2.jpg', '2026-05-08 22:23:34', '2026-05-21 00:36:12'),
(6, 'Infinity Knot Bangle', 'bracelet', 8500.00, 15, 'silver', NULL, 'VVS1', 'A high-polish sterling silver bangle featuring a central infinity knot design accented with a single micro-diamond.', 'bracelet3.jpg', '2026-05-15 01:00:00', '2026-05-15 01:00:00'),
(7, 'Nomad Gold Link', 'bracelet', 28900.00, 4, 'gold', '22k', NULL, 'A heavy 22k gold chain bracelet with brushed matte finishing, inspired by traditional Saharan craftsmanship.', 'bracelet4.jpg', '2026-05-15 01:00:00', '2026-05-15 01:00:00'),
(8, 'Midnight Sapphire Halo', 'ring', 41200.00, 1, 'platinum', NULL, 'VVS2', 'A deep blue velvet sapphire surrounded by a double halo of brilliant-cut diamonds on a platinum band.', 'ring2.jpg', '2026-05-15 01:00:00', '2026-05-21 00:36:12'),
(9, 'Desert Rose Band', 'ring', 5600.00, 23, 'gold', '18k', 'IF', 'A dainty 18k rose gold band with carved floral motifs and three inset diamonds.', 'ring3.jpg', '2026-05-15 01:00:00', '2026-05-20 16:45:54'),
(10, 'Architectural Silver Square', 'ring', 1200.00, 40, 'silver', NULL, NULL, 'A minimalist, unisex geometric ring made from solid brushed sterling silver.', 'ring4.jpg', '2026-05-15 01:00:00', '2026-05-15 01:00:00'),
(11, 'Cascading Rain Choker', 'necklace', 62000.00, 0, 'platinum', NULL, 'VVS1', 'A masterwork of platinum featuring 12 cascading pear-cut diamonds that mimic falling rain.', 'necklace2.jpg', '2026-05-15 01:00:00', '2026-05-20 16:45:54'),
(12, 'Golden Solar Medallion', 'necklace', 14300.00, 8, 'gold', '18k', NULL, 'A vintage-inspired 18k gold medallion featuring an embossed sunburst pattern on a thick rope chain.', 'necklace3.jpg', '2026-05-15 01:00:00', '2026-05-15 01:00:00'),
(13, 'Lunar Pearl String', 'necklace', 3400.00, 12, 'silver', NULL, 'VVS2', 'A string of freshwater pearls with a modern sterling silver toggle clasp.', 'necklace4.jpg', '2026-05-15 01:00:00', '2026-05-15 01:00:00'),
(14, 'Starlight Studs', 'earrings', 2100.00, 48, 'silver', NULL, 'IF', 'Classic 4-prong silver studs featuring high-clarity cubic zirconia for an everyday sparkle.', 'earrings2.jpg', '2026-05-15 01:00:00', '2026-05-24 01:54:53'),
(15, 'Imperial Gold Hoops', 'earrings', 11200.00, 10, 'gold', '18k', NULL, 'Large, thick 18k gold hoops with a polished finish and a secure click-lock closure.', 'earrings3.jpg', '2026-05-15 01:00:00', '2026-05-15 01:00:00'),
(16, 'Venetian Lace Drops', 'earrings', 24500.00, 2, 'platinum', NULL, 'VVS1', 'Exquisite platinum drop earrings with lace-like filigree work and teardrop diamond accents.', 'earrings4.jpg', '2026-05-15 01:00:00', '2026-05-20 16:45:54'),
(17, 'Solaris Amber Signet', 'ring', 12500.00, 5, 'gold', '18k', 'IF', 'A bold 18k yellow gold signet ring featuring a polished Baltic amber center and micro-diamond engraving on the shoulders.', 'ring5.jpg', '2026-05-15 17:50:58', '2026-05-19 09:46:59'),
(18, 'Sarimanta Flower Pendant', 'necklace', 234352.00, 8, 'gold', NULL, 'VVS1', 'An exquisite 18k gold necklace featuring a delicate, finely crafted floral pendant adorned with lustrous mauve pearls.', 'necklace5.jpg', '2026-05-19 10:19:25', '2026-05-21 00:41:32'),
(19, 'Nordic Frost Pendant', 'necklace', 18900.00, 3, 'platinum', NULL, NULL, 'A minimalist platinum pendant holding a rare ice-blue aquamarine, suspended on a fine Venetian chain.', 'necklace6.jpg', '2026-05-20 22:55:46', '2026-05-24 02:00:30'),
(20, 'Zellige Silver Cuff', 'bracelet', 4200.00, 20, 'silver', NULL, NULL, 'A wide sterling silver cuff with intricate geometric cut-outs inspired by Moroccan Zellige tile patterns.', 'bracelet5.jpg', '2026-05-21 00:15:08', '2026-05-21 00:15:08'),
(21, 'Orchid Petal Drops', 'earrings', 32000.00, 5, 'gold', '24k', 'VVS2', 'Sculptural 24k solid gold earrings shaped like delicate orchid petals, with a small diamond \"dewdrop\" at the tip.', 'earrings5.jpg', '2026-05-21 00:52:00', '2026-05-24 02:02:02');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(191) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'hajar', 'hajarAdmin@gmail.com', NULL, '$2y$12$KLGKy2sWLCKEnVdzbq62/e1N/MqSz07bSdChzFosiyB/rdpg0aaRe', 'admin', NULL, '2026-05-08 02:13:08', '2026-05-08 02:13:08'),
(2, 'user', 'user@gmail.com', NULL, '$2y$12$smlSEC/q1BTnggS5Lp9Tf.5VuEr4Rj22GvN0uFjm4Rd.VJkwRtd4C', 'user', NULL, '2026-05-08 11:19:18', '2026-05-08 11:19:18'),
(3, 'a', 'a@gmail.com', NULL, '$2y$12$sjlcQ680NfH7qP.e.y1TjOHdvav/1ofLx/9b1IFyX6FGIdABof2qC', 'user', NULL, '2026-05-08 22:12:25', '2026-05-08 22:12:25'),
(4, 'uu', 'uu@gmail.com', NULL, '$2y$12$12STWEJmkzjN61ODk9VZR.4eL8V9IYhQ6pIgbim72RiERWUDVsL0K', 'user', NULL, '2026-05-15 01:41:12', '2026-05-15 01:41:12'),
(5, 'sara', 'sararar@gmail.com', NULL, '$2y$12$ITgF2NK5eyK6MGehhA/AIev3gZPPj4ZcI8Hq4FfZAkWq59j/V6ED.', 'user', NULL, '2026-05-19 09:54:41', '2026-05-19 09:54:41'),
(6, 'userN', 'userN@gmail.com', NULL, '$2y$12$MHQDY6WdLHJyCPOWfZG74eqsVXI/8bJoGItgSjQ4r7Oa.rW4cnRSm', 'user', NULL, '2026-05-24 01:48:38', '2026-05-24 01:48:38'),
(8, 'userJdid', 'Uj@gmail.com', NULL, '$2y$12$g497F/7Fy5J8Xrp3Tiy6r.57p0nK3lsQF.Gy6gDBU3wo/nrEV4Nly', 'user', NULL, '2026-05-24 01:58:06', '2026-05-24 01:58:06'),
(9, 'hajar', 'hajarnew@gmail.com', NULL, '$2y$12$QULwEWPzXEUPExTNvzzFJeEQgb5kT/Y1sBKVdhHA7hfHiukJ.2dPG', 'user', NULL, '2026-05-24 02:08:34', '2026-05-24 02:08:34');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
