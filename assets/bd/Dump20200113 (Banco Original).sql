-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 159.89.140.204    Database: questionaries
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `VW_GUT_calculator`
--

DROP TABLE IF EXISTS `VW_GUT_calculator`;
/*!50001 DROP VIEW IF EXISTS `VW_GUT_calculator`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_GUT_calculator` AS SELECT 
 1 AS `plan_id`,
 1 AS `question_id`,
 1 AS `GUT`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `VW_Gravidade`
--

DROP TABLE IF EXISTS `VW_Gravidade`;
/*!50001 DROP VIEW IF EXISTS `VW_Gravidade`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_Gravidade` AS SELECT 
 1 AS `plan_id`,
 1 AS `question_id`,
 1 AS `media`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `VW_Media_GUT`
--

DROP TABLE IF EXISTS `VW_Media_GUT`;
/*!50001 DROP VIEW IF EXISTS `VW_Media_GUT`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_Media_GUT` AS SELECT 
 1 AS `plan_id`,
 1 AS `question_id`,
 1 AS `metric_item`,
 1 AS `media`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `VW_Respondentes`
--

DROP TABLE IF EXISTS `VW_Respondentes`;
/*!50001 DROP VIEW IF EXISTS `VW_Respondentes`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_Respondentes` AS SELECT 
 1 AS `plan_id`,
 1 AS `question_id`,
 1 AS `questionary_id`,
 1 AS `respondent_id`,
 1 AS `answer`,
 1 AS `job_city_id`,
 1 AS `job_neighborhood_id`,
 1 AS `residence_neighborhood_id`,
 1 AS `residence_time_range`,
 1 AS `salary_range`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `VW_Tendencia`
--

DROP TABLE IF EXISTS `VW_Tendencia`;
/*!50001 DROP VIEW IF EXISTS `VW_Tendencia`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_Tendencia` AS SELECT 
 1 AS `plan_id`,
 1 AS `question_id`,
 1 AS `media`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `VW_Urgencia`
--

DROP TABLE IF EXISTS `VW_Urgencia`;
/*!50001 DROP VIEW IF EXISTS `VW_Urgencia`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_Urgencia` AS SELECT 
 1 AS `plan_id`,
 1 AS `question_id`,
 1 AS `media`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `VW_qtde_sim_plan`
--

DROP TABLE IF EXISTS `VW_qtde_sim_plan`;
/*!50001 DROP VIEW IF EXISTS `VW_qtde_sim_plan`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_qtde_sim_plan` AS SELECT 
 1 AS `plan_id`,
 1 AS `qtd_t`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `VW_qtde_sim_question`
--

DROP TABLE IF EXISTS `VW_qtde_sim_question`;
/*!50001 DROP VIEW IF EXISTS `VW_qtde_sim_question`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_qtde_sim_question` AS SELECT 
 1 AS `plan_id`,
 1 AS `question_id`,
 1 AS `qtde`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `VW_razao_GUT`
--

DROP TABLE IF EXISTS `VW_razao_GUT`;
/*!50001 DROP VIEW IF EXISTS `VW_razao_GUT`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `VW_razao_GUT` AS SELECT 
 1 AS `plan_id`,
 1 AS `question_id`,
 1 AS `valor`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `plan_id` int(11) NOT NULL,
  `questionary_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `respondent_id` int(11) NOT NULL,
  `answer` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`plan_id`,`questionary_id`,`question_id`,`respondent_id`),
  KEY `questionary_id` (`questionary_id`),
  KEY `question_id` (`question_id`),
  KEY `respondent_id` (`respondent_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`),
  CONSTRAINT `answer_ibfk_2` FOREIGN KEY (`questionary_id`) REFERENCES `questionary` (`id`),
  CONSTRAINT `answer_ibfk_3` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `answer_ibfk_4` FOREIGN KEY (`respondent_id`) REFERENCES `respondent` (`id`),
  CONSTRAINT `answer_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `answer_neighborhood`
--

DROP TABLE IF EXISTS `answer_neighborhood`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer_neighborhood` (
  `plan_id` int(11) NOT NULL,
  `questionary_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `respondent_id` int(11) NOT NULL,
  `neighborhood_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`plan_id`,`questionary_id`,`question_id`,`respondent_id`,`neighborhood_id`),
  KEY `neighborhood_id` (`neighborhood_id`),
  KEY `questionary_id` (`questionary_id`),
  KEY `question_id` (`question_id`),
  KEY `respondent_id` (`respondent_id`),
  CONSTRAINT `answer_neighborhood_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`),
  CONSTRAINT `answer_neighborhood_ibfk_2` FOREIGN KEY (`neighborhood_id`) REFERENCES `neighborhood` (`id`),
  CONSTRAINT `answer_neighborhood_ibfk_3` FOREIGN KEY (`questionary_id`) REFERENCES `questionary` (`id`),
  CONSTRAINT `answer_neighborhood_ibfk_4` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `answer_neighborhood_ibfk_5` FOREIGN KEY (`respondent_id`) REFERENCES `respondent` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `app_version`
--

DROP TABLE IF EXISTS `app_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_version` (
  `app_version` varchar(5) COLLATE latin1_general_ci NOT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`app_version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET latin1 COLLATE latin1_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `metric`
--

DROP TABLE IF EXISTS `metric`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metric` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `metric_item`
--

DROP TABLE IF EXISTS `metric_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metric_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci NOT NULL,
  `metric_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `metric_id` (`metric_id`),
  CONSTRAINT `metric_item_ibfk_1` FOREIGN KEY (`metric_id`) REFERENCES `metric` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `metric_value`
--

DROP TABLE IF EXISTS `metric_value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metric_value` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci NOT NULL,
  `value` int(11) NOT NULL,
  `icon` varchar(256) COLLATE latin1_general_ci DEFAULT NULL,
  `icon_selected` varchar(256) COLLATE latin1_general_ci DEFAULT NULL,
  `metric_item_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `metric_item_id` (`metric_item_id`),
  CONSTRAINT `metric_value_ibfk_1` FOREIGN KEY (`metric_item_id`) REFERENCES `metric_item` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `neighborhood`
--

DROP TABLE IF EXISTS `neighborhood`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `neighborhood` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci,
  `city_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `neighborhood_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=247 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci,
  `city_id` int(11) DEFAULT NULL,
  `use_prioritization` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `plan_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `plan_questionary`
--

DROP TABLE IF EXISTS `plan_questionary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan_questionary` (
  `plan_id` int(11) NOT NULL,
  `questionary_id` int(11) NOT NULL,
  PRIMARY KEY (`plan_id`,`questionary_id`),
  KEY `questionary_id` (`questionary_id`),
  CONSTRAINT `plan_questionary_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`),
  CONSTRAINT `plan_questionary_ibfk_2` FOREIGN KEY (`questionary_id`) REFERENCES `questionary` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `plan_user`
--

DROP TABLE IF EXISTS `plan_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan_user` (
  `plan_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`plan_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `plan_user_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`),
  CONSTRAINT `plan_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `prioritization`
--

DROP TABLE IF EXISTS `prioritization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prioritization` (
  `plan_id` int(11) NOT NULL,
  `questionary_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `respondent_id` int(11) NOT NULL,
  `metric_item` int(11) NOT NULL,
  `metric_value` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`plan_id`,`questionary_id`,`question_id`,`respondent_id`,`metric_item`),
  KEY `questionary_id` (`questionary_id`),
  KEY `question_id` (`question_id`),
  KEY `respondent_id` (`respondent_id`),
  CONSTRAINT `prioritization_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`),
  CONSTRAINT `prioritization_ibfk_2` FOREIGN KEY (`questionary_id`) REFERENCES `questionary` (`id`),
  CONSTRAINT `prioritization_ibfk_3` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `prioritization_ibfk_4` FOREIGN KEY (`respondent_id`) REFERENCES `respondent` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci,
  `description` text COLLATE latin1_general_ci,
  `question` text COLLATE latin1_general_ci,
  `position` int(11) DEFAULT NULL,
  `context_area` text COLLATE latin1_general_ci,
  `context_area_icon` text COLLATE latin1_general_ci,
  `is_rural_zone` tinyint(1) DEFAULT NULL,
  `metric_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `question` (`metric_id`),
  CONSTRAINT `question_ibfk_1` FOREIGN KEY (`metric_id`) REFERENCES `metric` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `questionary`
--

DROP TABLE IF EXISTS `questionary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questionary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `questionary_question`
--

DROP TABLE IF EXISTS `questionary_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questionary_question` (
  `questionary_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  PRIMARY KEY (`questionary_id`,`question_id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `questionary_question_ibfk_1` FOREIGN KEY (`questionary_id`) REFERENCES `questionary` (`id`),
  CONSTRAINT `questionary_question_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `respondent`
--

DROP TABLE IF EXISTS `respondent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respondent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` text COLLATE latin1_general_ci NOT NULL,
  `email` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `residence_time_range` int(11) DEFAULT NULL,
  `residence_neighborhood_id` int(11) DEFAULT NULL,
  `job_city_id` int(11) DEFAULT NULL,
  `job_neighborhood_id` int(11) DEFAULT NULL,
  `salary_range` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`(14)),
  KEY `residence_neighborhood_id` (`residence_neighborhood_id`),
  KEY `job_city_id` (`job_city_id`),
  KEY `job_neighborhood_id` (`job_neighborhood_id`),
  CONSTRAINT `respondent_ibfk_1` FOREIGN KEY (`residence_neighborhood_id`) REFERENCES `neighborhood` (`id`),
  CONSTRAINT `respondent_ibfk_2` FOREIGN KEY (`job_city_id`) REFERENCES `city` (`id`),
  CONSTRAINT `respondent_ibfk_3` FOREIGN KEY (`job_neighborhood_id`) REFERENCES `neighborhood` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3491 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text COLLATE latin1_general_ci NOT NULL,
  `password` text COLLATE latin1_general_ci NOT NULL,
  `role` int(11) NOT NULL,
  `token` text COLLATE latin1_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Final view structure for view `VW_GUT_calculator`
--

/*!50001 DROP VIEW IF EXISTS `VW_GUT_calculator`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_GUT_calculator` AS select 1 AS `plan_id`,1 AS `question_id`,1 AS `GUT` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VW_Gravidade`
--

/*!50001 DROP VIEW IF EXISTS `VW_Gravidade`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_Gravidade` AS select 1 AS `plan_id`,1 AS `question_id`,1 AS `media` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VW_Media_GUT`
--

/*!50001 DROP VIEW IF EXISTS `VW_Media_GUT`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_Media_GUT` AS select 1 AS `plan_id`,1 AS `question_id`,1 AS `metric_item`,1 AS `media` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VW_Respondentes`
--

/*!50001 DROP VIEW IF EXISTS `VW_Respondentes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_Respondentes` AS select 1 AS `plan_id`,1 AS `question_id`,1 AS `questionary_id`,1 AS `respondent_id`,1 AS `answer`,1 AS `job_city_id`,1 AS `job_neighborhood_id`,1 AS `residence_neighborhood_id`,1 AS `residence_time_range`,1 AS `salary_range` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VW_Tendencia`
--

/*!50001 DROP VIEW IF EXISTS `VW_Tendencia`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_Tendencia` AS select 1 AS `plan_id`,1 AS `question_id`,1 AS `media` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VW_Urgencia`
--

/*!50001 DROP VIEW IF EXISTS `VW_Urgencia`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_Urgencia` AS select 1 AS `plan_id`,1 AS `question_id`,1 AS `media` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VW_qtde_sim_plan`
--

/*!50001 DROP VIEW IF EXISTS `VW_qtde_sim_plan`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_qtde_sim_plan` AS select 1 AS `plan_id`,1 AS `qtd_t` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VW_qtde_sim_question`
--

/*!50001 DROP VIEW IF EXISTS `VW_qtde_sim_question`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_qtde_sim_question` AS select 1 AS `plan_id`,1 AS `question_id`,1 AS `qtde` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `VW_razao_GUT`
--

/*!50001 DROP VIEW IF EXISTS `VW_razao_GUT`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `VW_razao_GUT` AS select 1 AS `plan_id`,1 AS `question_id`,1 AS `valor` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-13 17:58:01
