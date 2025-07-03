-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for jobx
CREATE DATABASE IF NOT EXISTS `jobx` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `jobx`;

-- Dumping structure for table jobx.auth
CREATE TABLE IF NOT EXISTS `auth` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `apikey` text DEFAULT NULL,
  `user` text DEFAULT NULL,
  `password` text DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `apikey` (`apikey`) USING HASH,
  UNIQUE KEY `user` (`user`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table jobx.auth: ~0 rows (approximately)

-- Dumping structure for table jobx.login
CREATE TABLE IF NOT EXISTS `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL,
  `token` text DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `device` text DEFAULT NULL,
  `unit` text DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table jobx.login: ~2 rows (approximately)
REPLACE INTO `login` (`id`, `userid`, `user`, `token`, `active`, `device`, `unit`, `status`) VALUES
	(25, 2, 'Tyrone1@clearmindai.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlR5cm9uZTFAY2xlYXJtaW5kYWkuY29tIiwiaWF0IjoxNzUxNTEwMjczLCJleHAiOjE3NTE1MTM4NzN9.Pa2y3NGYmqVnPEA30bbUCuW0GfbLdYB5jttXVkXyG30', 0, 'unkown', 'unknown', 1),
	(26, 2, 'Tyrone1@clearmindai.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlR5cm9uZTFAY2xlYXJtaW5kYWkuY29tIiwiaWF0IjoxNzUxNTEyMjgzLCJleHAiOjE3NTE1MTU4ODN9.LV-4ywxkMBmwYpF7y5aabgS0pCTcTxTdyywFnUplCPM', 1, 'unkown', 'unknown', 1);

-- Dumping structure for table jobx.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` tinytext DEFAULT NULL,
  `lastname` text DEFAULT NULL,
  `middlename` text DEFAULT NULL,
  `username` text DEFAULT NULL,
  `password` text DEFAULT NULL,
  `type` text DEFAULT 'U',
  `status` int(11) DEFAULT 1,
  `date_created` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table jobx.users: ~2 rows (approximately)
REPLACE INTO `users` (`id`, `firstname`, `lastname`, `middlename`, `username`, `password`, `type`, `status`, `date_created`, `date_updated`) VALUES
	(1, 'Prince Yro', 'gg', 'H', 'Tyrone@clearmindai.com', '$2b$10$vpoCjAriGDbK.EI7g.4rn.k1v2MT02tIZAdQ4FBthUSj/LE7H9ryG', 'U', 1, '2025-07-03 08:13:36', '2025-07-03 08:13:36'),
	(2, 'Prince Yros', 'gg', 'H', 'Tyrone1@clearmindai.com', '$2b$10$zi3.O6Cm4JmsplouVPs..eJ/vTxciHCt7QPJDamKE4/QvGtHKuMeW', 'U', 1, '2025-07-03 10:02:12', '2025-07-03 10:02:12');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
