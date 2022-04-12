-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.4.19-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 todo.todo_card_list 구조 내보내기
CREATE TABLE IF NOT EXISTS `todo_card_list` (
  `CARD_SEQ` int(11) NOT NULL AUTO_INCREMENT,
  `TODO_SEQ` int(11) DEFAULT NULL COMMENT 'todo_list의 seq',
  `CARD_CONTENT` varchar(50) DEFAULT NULL,
  `CARD_DEL_YN` char(1) DEFAULT 'N',
  PRIMARY KEY (`CARD_SEQ`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 todo.todo_card_list:~23 rows (대략적) 내보내기
/*!40000 ALTER TABLE `todo_card_list` DISABLE KEYS */;
INSERT INTO `todo_card_list` (`CARD_SEQ`, `TODO_SEQ`, `CARD_CONTENT`, `CARD_DEL_YN`) VALUES
	(1, 1, 'ㅎㅎㅎㅎㅎ', 'N'),
	(2, 2, '하하', 'N'),
	(3, NULL, '제발', 'N'),
	(4, NULL, '123', 'N'),
	(5, NULL, '1234', 'N'),
	(6, NULL, '3213', 'N'),
	(7, NULL, '123', 'N'),
	(8, NULL, '213', 'N'),
	(9, NULL, '2123', 'N'),
	(10, NULL, '123', 'N'),
	(11, NULL, '123', 'N'),
	(12, NULL, '134', 'N'),
	(13, NULL, '123', 'N'),
	(14, 4, '12344', 'N'),
	(15, NULL, '3333', 'N'),
	(16, 21321, NULL, 'N'),
	(17, 3, '1', 'N'),
	(18, 1, '4243243', 'N'),
	(19, 2, 'ggg', 'N'),
	(20, 3, '하나', 'N'),
	(21, 1, '둘', 'N'),
	(22, 1, '셋', 'N'),
	(23, 4, 'ㅇㅇㅇㅇㅇ', 'N');
/*!40000 ALTER TABLE `todo_card_list` ENABLE KEYS */;

-- 테이블 todo.todo_list 구조 내보내기
CREATE TABLE IF NOT EXISTS `todo_list` (
  `TODO_SEQ` int(11) NOT NULL AUTO_INCREMENT,
  `TODO_TITLE` varchar(50) DEFAULT NULL,
  `TODO_DEL_YN` char(1) DEFAULT 'N',
  PRIMARY KEY (`TODO_SEQ`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 todo.todo_list:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `todo_list` DISABLE KEYS */;
INSERT INTO `todo_list` (`TODO_SEQ`, `TODO_TITLE`, `TODO_DEL_YN`) VALUES
	(1, 'ㅎㅇ', 'N'),
	(2, 'test', 'N'),
	(3, '1234', 'N'),
	(4, '테스으', 'N'),
	(5, '흠', 'N');
/*!40000 ALTER TABLE `todo_list` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
