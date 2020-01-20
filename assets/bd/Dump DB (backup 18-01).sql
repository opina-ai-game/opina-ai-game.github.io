-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 18-Jan-2020 às 20:36
-- Versão do servidor: 5.7.23
-- versão do PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `questionaries`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `answer`
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE IF NOT EXISTS `answer` (
  `plan_id` int(11) NOT NULL,
  `questionary_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `respondent_id` int(11) NOT NULL,
  `answer` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `use_game` tinyint(1) NOT NULL,
  PRIMARY KEY (`plan_id`,`questionary_id`,`question_id`,`respondent_id`),
  KEY `questionary_id` (`questionary_id`),
  KEY `question_id` (`question_id`),
  KEY `respondent_id` (`respondent_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `answer`
--

INSERT INTO `answer` (`plan_id`, `questionary_id`, `question_id`, `respondent_id`, `answer`, `user_id`, `created_at`, `use_game`) VALUES
(7, 14, 125, 5, 1, NULL, '2020-01-18 00:31:21', 1),
(7, 14, 126, 5, 1, NULL, '2020-01-18 00:31:24', 1),
(7, 14, 127, 5, 1, NULL, '2020-01-18 00:31:26', 1),
(7, 14, 128, 5, 1, NULL, '2020-01-18 00:31:28', 1),
(7, 14, 129, 5, 1, NULL, '2020-01-18 00:31:30', 1),
(7, 14, 130, 5, 1, NULL, '2020-01-18 00:31:37', 1),
(7, 14, 131, 5, 1, NULL, '2020-01-18 00:31:41', 1),
(7, 15, 132, 5, 1, NULL, '2020-01-18 00:38:36', 1),
(7, 15, 133, 5, 1, NULL, '2020-01-18 00:38:39', 1),
(7, 15, 134, 5, 1, NULL, '2020-01-18 00:38:41', 1),
(7, 15, 135, 5, 1, NULL, '2020-01-18 00:38:43', 1),
(7, 15, 136, 5, 1, NULL, '2020-01-18 00:38:44', 1),
(7, 15, 137, 5, 0, NULL, '2020-01-18 00:39:04', 1),
(7, 15, 138, 5, 1, NULL, '2020-01-18 00:39:04', 1),
(7, 15, 139, 5, 1, NULL, '2020-01-18 00:39:06', 1),
(7, 15, 140, 5, 1, NULL, '2020-01-18 00:39:07', 1),
(7, 15, 141, 5, 1, NULL, '2020-01-18 00:39:09', 1),
(7, 15, 143, 5, 0, NULL, '2020-01-18 00:39:12', 1),
(7, 15, 144, 5, 0, NULL, '2020-01-18 00:39:13', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `answer_neighborhood`
--

DROP TABLE IF EXISTS `answer_neighborhood`;
CREATE TABLE IF NOT EXISTS `answer_neighborhood` (
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
  KEY `respondent_id` (`respondent_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `app_version`
--

DROP TABLE IF EXISTS `app_version`;
CREATE TABLE IF NOT EXISTS `app_version` (
  `app_version` varchar(5) COLLATE latin1_general_ci NOT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`app_version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `app_version`
--

INSERT INTO `app_version` (`app_version`, `created_at`) VALUES
('1.7', '2019-04-29 14:39:49');

-- --------------------------------------------------------

--
-- Estrutura da tabela `city`
--

DROP TABLE IF EXISTS `city`;
CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET latin1 COLLATE latin1_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;

--
-- Extraindo dados da tabela `city`
--

INSERT INTO `city` (`id`, `name`) VALUES
(1, 'Cambuí'),
(2, 'Pouso Alegre'),
(3, 'Camanducaia'),
(4, 'Paraisópolis'),
(5, 'Extrema'),
(6, 'Borda da Mata'),
(7, 'Joanópolis'),
(8, 'Santa Rita do Sapucaí'),
(9, 'Congonhal'),
(10, 'Bueno Brandão'),
(11, 'São Gonçalo do Sapucaí'),
(12, 'Itajubá'),
(13, 'Cachoeira de Minas'),
(14, 'Piranguinho'),
(15, 'São José do Alegre'),
(16, 'Pedralva'),
(17, 'Natércia'),
(18, 'Careaçu'),
(19, 'São Sebastião da Bela Vista'),
(20, 'Santana da Vargem'),
(21, 'Carmo da Cachoeira');

-- --------------------------------------------------------

--
-- Estrutura da tabela `metric`
--

DROP TABLE IF EXISTS `metric`;
CREATE TABLE IF NOT EXISTS `metric` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `metric`
--

INSERT INTO `metric` (`id`, `name`) VALUES
(0, 'Sim, Não ou Não sei'),
(1, 'Escala GUT'),
(2, 'Escala Likert'),
(3, 'Frequência Semanal'),
(4, 'Atrações do Centro'),
(5, 'Motivos de não ir ao centro'),
(6, 'Atrações do Centro 2'),
(7, 'Necessidades do Centro'),
(8, 'Escala de Satisfação'),
(9, 'Necessidade de Requalificação'),
(10, 'Avaliação do comerciante'),
(11, 'Melhorias para o comerciante'),
(12, 'Atividades exercidas pelos pedestres'),
(13, 'Pontos fortes para o comerciante'),
(14, 'Pontos fracos para o comerciante'),
(15, 'Atividades dos pedestres no Centro'),
(16, 'Pontos fortes da rua'),
(17, 'Pontos fracos da rua'),
(18, 'Escala de concordância'),
(19, 'Frequência de uso dos espaços públicos');

-- --------------------------------------------------------

--
-- Estrutura da tabela `metric_item`
--

DROP TABLE IF EXISTS `metric_item`;
CREATE TABLE IF NOT EXISTS `metric_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci NOT NULL,
  `metric_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `metric_id` (`metric_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `metric_item`
--

INSERT INTO `metric_item` (`id`, `name`, `metric_id`) VALUES
(1, 'Gravidade', 1),
(2, 'Urgência', 1),
(3, 'Tendência', 1),
(4, 'Escala Qualitativa', 2),
(5, 'Frequência Semanal', 3),
(6, 'Atrações do Centro', 4),
(7, 'Motivos de não ir ao centro', 5),
(8, 'Atrações do Centro 2', 6),
(9, 'Necessidades do Centro', 7),
(10, 'Escala de Satisfação', 8),
(11, 'Necessidade de Requalificação', 9),
(12, 'Avaliação do comerciante', 10),
(13, 'Melhorias para o comerciante', 11),
(14, 'Atividades exercidas pelos pedestres', 12),
(15, 'Pontos fortes para o comerciante', 13),
(16, 'Pontos fracos para o comerciante', 14),
(17, 'Atividades dos pedestres no Centro', 15),
(18, 'Pontos fortes da rua', 16),
(19, 'Pontos fracos da rua', 17),
(20, 'Escala de concordância', 18),
(21, 'Frequência de uso dos espaços públicos', 19);

-- --------------------------------------------------------

--
-- Estrutura da tabela `metric_value`
--

DROP TABLE IF EXISTS `metric_value`;
CREATE TABLE IF NOT EXISTS `metric_value` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci NOT NULL,
  `value` int(11) NOT NULL,
  `icon` varchar(256) COLLATE latin1_general_ci DEFAULT NULL,
  `icon_selected` varchar(256) COLLATE latin1_general_ci DEFAULT NULL,
  `metric_item_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `metric_item_id` (`metric_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `metric_value`
--

INSERT INTO `metric_value` (`id`, `name`, `value`, `icon`, `icon_selected`, `metric_item_id`) VALUES
(1, 'Extremamente grave', 5, '5.png', '5-selected.png', 1),
(2, 'Muito grave', 4, '4.png', '4-selected.png', 1),
(3, 'Grave', 3, '3.png', '3-selected.png', 1),
(4, 'Pouco grave', 2, '2.png', '2-selected.png', 1),
(5, 'Sem gravidade', 1, '1.png', '1-selected.png', 1),
(6, 'Precisa de ação imediata', 5, '5.png', '5-selected.png', 2),
(7, 'É urgente', 4, '4.png', '4-selected.png', 2),
(8, 'Assim que possível', 3, '3.png', '3-selected.png', 2),
(9, 'Pouco urgente', 2, '2.png', '2-selected.png', 2),
(10, 'Pode esperar', 1, '1.png', '1-selected.png', 2),
(11, 'Irá piorar rapidamente', 5, '5.png', '5-selected.png', 3),
(12, 'Irá piorar em pouco tempo', 4, '4.png', '4-selected.png', 3),
(13, 'Irá piorar', 3, '3.png', '3-selected.png', 3),
(14, 'Irá piorar a longo prazo', 2, '2.png', '2-selected.png', 3),
(15, 'Não irá mudar', 1, '1.png', '1-selected.png', 3),
(16, 'Péssimo', 5, '5.png', '5-selected.png', 4),
(17, 'Ruim', 4, '4.png', '4-selected.png', 4),
(18, 'Regular', 3, '3.png', '3-selected.png', 4),
(19, 'Bom', 2, '2.png', '2-selected.png', 4),
(20, 'Ótimo', 1, '1.png', '1-selected.png', 4),
(21, '1 vez por semana', 1, '1.png', '1-selected.png', 5),
(22, 'De 2 a 3 vezes por semana', 2, '2.png', '2-selected.png', 5),
(23, 'De 4 a 5 vezes por semana', 3, '3.png', '3-selected.png', 5),
(24, 'De 6 a 7 vezes por semana', 4, '4.png', '4-selected.png', 5),
(25, 'Mais de 7 vezes por semana', 5, '5.png', '5-selected.png', 5),
(26, 'Moro aqui', 1, '1.png', '1-selected.png', 6),
(27, 'Trabalho aqui', 2, '2.png', '2-selected.png', 6),
(28, 'Venho fazer compras', 3, '3.png', '3-selected.png', 6),
(29, 'Venho por lazer', 4, '4.png', '4-selected.png', 6),
(30, 'Nenhuma das anteriores', 5, '5.png', '5-selected.png', 6),
(31, 'Falta de segurança', 1, '1.png', '1-selected.png', 7),
(32, 'Faltam opções de lazer à noite', 2, '2.png', '2-selected.png', 7),
(33, 'Não moro no centro e não tem transporte público adequado para me locomover até lá', 3, '3.png', '3-selected.png', 7),
(34, 'Parques e Praças', 1, '1.png', '1-selected.png', 8),
(35, 'Equipamentos desportivos', 2, '2.png', '2-selected.png', 8),
(36, 'Serviços de saúde', 3, '3.png', '3-selected.png', 8),
(37, 'Serviços públicos', 4, '4.png', '4-selected.png', 8),
(38, 'Atrações culturais', 5, '5.png', '5-selected.png', 8),
(39, 'Comércio de primeira necessidade: Mercado Padaria e Farmácia', 6, '6.png', '6-selected.png', 8),
(40, 'Comércio de menor necessidade: Lojas de roupas e eletrodomésticos', 7, '7.png', '7-selected.png', 8),
(41, 'Cafés restaurantes ou bares', 8, '8.png', '8-selected.png', 8),
(42, 'Nenhuma das anteriores', 9, '9.png', '9-selected.png', 8),
(43, 'Habitação', 1, '1.png', '1-selected.png', 9),
(44, 'Emprego', 2, '2.png', '2-selected.png', 9),
(45, 'Cultura e lazer', 3, '3.png', '3-selected.png', 9),
(46, 'Segurança', 4, '4.png', '4-selected.png', 9),
(47, 'Infraestruturas básicas', 5, '5.png', '5-selected.png', 9),
(48, 'Serviços de Saúde', 6, '6.png', '6-selected.png', 9),
(49, 'Comércio e Serviços', 7, '7.png', '7-selected.png', 9),
(50, 'Vagas e locais de estacionamento', 8, '8.png', '8-selected.png', 9),
(51, 'Nenhuma das anteriores', 9, '9.png', '9-selected.png', 9),
(52, 'Muito satisfeito', 1, '1.png', '1-selected.png', 10),
(53, 'Satisfeito', 2, '2.png', '2-selected.png', 10),
(54, 'Indiferente', 3, '3.png', '3-selected.png', 10),
(55, 'Insatisfeito', 4, '4.png', '4-selected.png', 10),
(56, 'Muito insatisfeito', 5, '5.png', '5-selected.png', 10),
(57, 'Muito necessárias', 1, '1.png', '1-selected.png', 11),
(58, 'Medianamente necessárias', 2, '2.png', '2-selected.png', 11),
(59, 'Indiferente', 3, '3.png', '3-selected.png', 11),
(60, 'Pouco necessárias', 4, '4.png', '4-selected.png', 11),
(61, 'Não são necessárias', 5, '5.png', '5-selected.png', 11),
(62, 'Muito bom', 1, '1.png', '1-selected.png', 12),
(63, 'Bom', 2, '2.png', '2-selected.png', 12),
(64, 'Indiferente', 3, '3.png', '3-selected.png', 12),
(65, 'Ruim', 4, '4.png', '4-selected.png', 12),
(66, 'Péssima', 5, '5.png', '5-selected.png', 12),
(67, 'Não existem', 6, '6.png', '6-selected.png', 12),
(68, 'Muito necessário', 1, '1.png', '1-selected.png', 13),
(69, 'Necessário', 2, '2.png', '2-selected.png', 13),
(70, 'Indiferente', 3, '3.png', '3-selected.png', 13),
(71, 'Não necessário', 4, '5.png', '5-selected.png', 13),
(72, 'Comércio atacadista', 1, '1.png', '1-selected.png', 14),
(73, 'Comércio varejista', 2, '2.png', '2-selected.png', 14),
(74, 'Restaurante', 3, '3.png', '3-selected.png', 14),
(75, 'Supermercado', 4, '4.png', '4-selected.png', 14),
(76, 'Centro de saúde', 5, '5.png', '5-selected.png', 14),
(77, 'Escola', 6, '6.png', '6-selected.png', 14),
(78, 'Segurança', 1, '1.png', '1-selected.png', 15),
(79, 'Infraestrutura básica', 2, '2.png', '2-selected.png', 15),
(80, 'Circulação de pedestres', 3, '3.png', '3-selected.png', 15),
(81, 'Circulação de veículos e estacionamento', 4, '4.png', '4-selected.png', 15),
(82, 'Conservação das fachadas', 5, '5.png', '5-selected.png', 15),
(83, 'Identidade cultural e histórica', 6, '6.png', '6-selected.png', 15),
(84, 'Disponibilidade de local', 7, '7.png', '7-selected.png', 15),
(85, 'Padronização de fachadas comerciais', 1, '1.png', '1-selected.png', 16),
(86, 'Incentivo à circulação de pedestres', 2, '2.png', '2-selected.png', 16),
(87, 'Melhora nas vias de circulação de veículos e ciclovias', 3, '3.png', '3-selected.png', 16),
(88, 'Conservação/recuperação das fachadas dos edifícios', 4, '4.png', '4-selected.png', 16),
(89, 'Aumento/criação de espaços de cultura e lazer', 5, '5.png', '5-selected.png', 16),
(90, 'Aumento/criação de espaços verdes', 6, '6.png', '6-selected.png', 16),
(91, 'Estacionamento', 7, '7.png', '7-selected.png', 16),
(92, 'Trânsito', 8, '8.png', '8-selected.png', 16),
(93, 'Limpeza das ruas', 9, '9.png', '9-selected.png', 16),
(94, 'Coleta de lixo ', 10, '10.png', '10-selected.png', 16),
(95, 'Iluminação', 11, '11.png', '11-selected.png', 16),
(96, 'Saneamento básico', 12, '12.png', '12-selected.png', 16),
(97, 'Comprar itens de primeira necessidade: medicamentos alimentos', 1, '1.png', '1-selected.png', 17),
(98, 'Comprar itens de menor necessidade: roupas eletrodomésticos', 2, '2.png', '2-selected.png', 17),
(99, 'Participar de atividades culturais e lazer', 3, '3.png', '3-selected.png', 17),
(100, 'Frequentar ambientes de permanência: parques e praças', 4, '4.png', '4-selected.png', 17),
(101, 'Nenhum dos anteriores', 5, '5.png', '5-selected.png', 17),
(102, 'Fachadas e edifícios conservados', 1, '1.png', '1-selected.png', 18),
(103, 'Trânsito fluido', 2, '2.png', '2-selected.png', 18),
(104, 'Vagas e locais de estacionamento', 3, '3.png', '3-selected.png', 18),
(105, 'Limpeza das ruas', 4, '4.png', '4-selected.png', 18),
(106, 'Coleta de lixo', 5, '5.png', '5-selected.png', 18),
(107, 'Saneamento básico', 6, '6.png', '6-selected.png', 18),
(108, 'Iluminação', 7, '7.png', '7-selected.png', 18),
(109, 'Espaços verdes', 8, '8.png', '8-selected.png', 18),
(110, 'Áreas de cultura e lazer', 9, '9.png', '9-selected.png', 18),
(111, 'Ciclovias', 10, '10.png', '10-selected.png', 18),
(112, 'Boas relações entre a vizinhança', 11, '11.png', '11-selected.png', 18),
(113, 'Circulação de pedestres', 12, '12.png', '12-selected.png', 18),
(114, 'Localização e acesso', 13, '13.png', '13-selected.png', 18),
(115, 'Fiação excessiva', 1, '1.png', '1-selected.png', 19),
(116, 'Degradação de fachadas e edifícios', 2, '2.png', '2-selected.png', 19),
(117, 'Trânsito congestionado', 3, '3.png', '3-selected.png', 19),
(118, 'Limpeza das ruas insuficiente', 5, '5.png', '5-selected.png', 19),
(119, 'Saneamento básico insuficiente', 6, '6.png', '6-selected.png', 19),
(120, 'Iluminação precária', 7, '7.png', '7-selected.png', 19),
(121, 'Espaços verdes insuficientes', 8, '8.png', '8-selected.png', 19),
(122, 'Áreas de cultura e lazer insuficientes', 9, '9.png', '9-selected.png', 19),
(123, 'Ciclovias insuficientes', 10, '10.png', '10-selected.png', 19),
(124, 'Más relações entre a vizinhança', 11, '11.png', '11-selected.png', 19),
(125, 'Falta de circulação de pedestres ', 12, '12.png', '12-selected.png', 19),
(126, 'Localização e acesso', 13, '13.png', '13-selected.png', 19),
(127, 'Concordo Totalmente', 1, '1.png', '1-selected.png', 20),
(128, 'Concordo', 2, '2.png', '2-selected.png', 20),
(129, 'Nem concordo nem discordo', 3, '3.png', '3-selected.png', 20),
(130, 'Discordo', 4, '4.png', '4-selected.png', 20),
(131, 'Nenhuma das anteriores', 4, '4.png', '4-selected.png', 7),
(132, 'Uso sempre', 1, '1.png', '1-selected.png', 21),
(133, 'Uso bastante', 2, '2.png', '2-selected.png', 21),
(134, 'Uso moderadamente', 3, '3.png', '3-selected.png', 21),
(135, 'Uso pouco', 4, '4.png', '4-selected.png', 21),
(136, 'Não uso', 5, '5.png', '5-selected.png', 21),
(137, 'Prestação de serviços', 7, '7.png', '7-selected.png', 14),
(138, 'Agencia bancária', 8, '8.png', '8-selected.png', 14),
(139, 'Vagas e locais de estacionamento insuficientes', 14, '14.png', '14-selected.png', 19),
(140, 'Coleta de lixo insuficiente', 15, '15.png', '15-selected.png', 19);

-- --------------------------------------------------------

--
-- Estrutura da tabela `neighborhood`
--

DROP TABLE IF EXISTS `neighborhood`;
CREATE TABLE IF NOT EXISTS `neighborhood` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci,
  `city_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=247 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `neighborhood`
--

INSERT INTO `neighborhood` (`id`, `name`, `city_id`) VALUES
(1, 'Água Branca', 1),
(2, 'Água Comprida', 1),
(3, 'Anhumas', 1),
(4, 'Bairro Cachoeirinha', 1),
(5, 'Bairro dos Vazes', 1),
(6, 'Bairro Jd. Paulo Lopes', 1),
(7, 'Bairro Portal das Pedras', 1),
(8, 'Bairro Ramos', 1),
(9, 'Bairro Santa Edwiges', 1),
(10, 'Bairro Santo Antônio', 1),
(11, 'Bairro Santo Expedito', 1),
(12, 'Bairro Taquaruçu', 1),
(13, 'Bairro Vale das Montanhas', 1),
(14, 'Bom Sucesso', 1),
(15, 'Braço das Antas', 1),
(16, 'Cabral', 1),
(17, 'Centro', 1),
(18, 'Colinas do Itaim', 1),
(19, 'Fonsecas', 1),
(20, 'Jd. Américo', 1),
(21, 'Jd. Bela Vista', 1),
(22, 'Jd. Carvalho', 1),
(23, 'Jd. Edith Lopes', 1),
(24, 'Jd. São Benedito', 1),
(25, 'Jd. Vale das Águas', 1),
(26, 'Jd. Vale do Sol', 1),
(27, 'Lambert', 1),
(28, 'Lopes', 1),
(29, 'Meia Légua', 1),
(30, 'Nossa Sra. Da Aparecida', 1),
(31, 'Nunes de Baixo', 1),
(32, 'Nunes', 1),
(33, 'Pessegueiro', 1),
(34, 'Portal Monte Verde', 1),
(35, 'Portão', 1),
(36, 'Recanto Paraíso', 1),
(37, 'Rio do Peixe', 1),
(38, 'São Miguel', 1),
(39, 'Vale das Rosas', 1),
(40, 'Vale do Itaim', 1),
(41, 'Vargem dos Ilheus', 1),
(42, 'Vazes', 1),
(43, 'Vila Glória', 1),
(44, 'Vila Mariana', 1),
(45, 'Vila Santa Cruz', 1),
(46, 'Vila São Judas Tadeu', 1),
(47, 'São Camilo', 2),
(48, 'São Geraldo', 2),
(49, 'Santa Lúcia', 2),
(50, 'Guanabara', 2),
(51, 'Nova Pouso Alegre', 2),
(52, 'Santa Elisa', 2),
(53, 'Centro', 2),
(54, 'Bom Jesus', 2),
(55, 'São José', 2),
(56, 'Santa Cruz', 2),
(57, 'Jardim Primavera', 2),
(58, 'Santa Luzia', 2),
(59, 'Aristeu Rios', 2),
(60, 'Cidade Foch', 2),
(61, 'Industrial', 2),
(62, 'Recanto dos Rios', 2),
(63, 'Xangrilá', 2),
(64, 'Árvore Grande', 2),
(65, 'Paraíso', 2),
(66, 'Jardim Aureliano', 2),
(67, 'São Carlos', 2),
(68, 'Cidade Vergani', 2),
(69, 'Jardim Califórnia', 2),
(70, 'Jardim Noronha', 2),
(71, 'Jardim Olímpico', 2),
(72, 'Jardim Inconfidentes', 2),
(73, 'Bela Vista', 2),
(74, 'Jardim Jatobá', 2),
(75, 'Conj. Chapadão II', 2),
(76, 'Res. Morumbi', 2),
(77, 'Colina Verde', 2),
(78, 'Carramachão', 2),
(79, 'Jardim Aeroporto', 2),
(80, 'Santa Filomena', 2),
(81, 'Jardim América', 2),
(82, 'Jardim Europa', 2),
(83, 'Vila São Geraldo', 2),
(84, 'Boa Vista', 2),
(85, 'Santo Antônio', 2),
(86, 'Medicina', 2),
(87, 'João Paulo II', 2),
(88, 'Saúde', 2),
(89, 'Jardim Esplanada', 2),
(90, 'Nossa Sra. Do Pilar II', 2),
(91, 'Jardim Altaville', 2),
(92, 'Pousada dos Campos', 2),
(93, 'Santa Dorotéia', 2),
(94, 'Santa Ivo', 2),
(95, 'Nossa Sra. Aparecida', 2),
(96, 'Santa Cecília', 2),
(97, 'Fátima', 2),
(98, 'Fátima III', 2),
(99, 'Fátima II', 2),
(100, 'Faisqueira', 2),
(101, 'Lot. São Pedro', 2),
(102, 'Monte Azul', 2),
(103, 'Bella Itália', 2),
(104, 'Vila Nossa Sra. Aparecida', 2),
(105, 'Ribeirão das Mortes', 2),
(106, 'Santa Edwirges', 2),
(107, 'Fernandes', 2),
(108, 'Jardim Amazonas', 2),
(109, 'São João', 2),
(110, 'Vista Alegre', 2),
(111, 'Jardim São João', 2),
(112, 'Nossa Sra. Guadalupe', 2),
(113, 'Belo Horizonte', 2),
(114, 'Pres. Juscelino', 2),
(115, 'Jardim Iara', 2),
(116, 'Cantagalo', 2),
(117, 'Jardim Fernandão', 2),
(118, 'Jardim São Fernando', 2),
(119, 'Jardim Caiçara', 2),
(120, 'Cidade Jardim', 2),
(121, 'Portal do Ipiranga', 2),
(122, 'Distrito Industrial', 2),
(123, 'Colina Bandeirantes', 2),
(124, 'Morado do Sol', 2),
(125, 'Res. Solar do Quinta', 2),
(126, 'Jardim Canadá', 2),
(127, 'Algodão', 2),
(128, 'Cervo', 2),
(129, 'São José do Pantano', 2),
(130, 'Congonhal', 1),
(131, 'Nunes de Cima', 1),
(132, 'Vargem do Paiol', 1),
(133, 'Furnas', 1),
(134, 'Campestre', 1),
(135, 'Itaim', 1),
(136, 'Roseta', 1),
(137, 'Criciúma', 1),
(138, 'Serra Morena', 2),
(139, 'Santa Rita I', 2),
(140, 'Santa Rita II', 2),
(141, 'Santa Branca', 2),
(142, 'Outros', 1),
(143, 'Outros', 2),
(144, 'Centro', 8),
(145, 'Outros', 8),
(146, 'São Benedito', 8),
(147, 'São Roque', 8),
(148, 'São Roque 2', 8),
(149, 'C.H. Dr. Luiz Rennó Mendes', 8),
(150, 'Recanto das Margaridas', 8),
(151, 'C.H. Pedro Sancho Vilela', 8),
(152, 'Santa Felicidade', 8),
(153, 'São João', 8),
(154, 'Bela Vista', 8),
(155, 'Centro Empresarial Paulo F Toledo', 8),
(156, 'Arco-Íris', 8),
(157, 'Anchieta', 8),
(158, 'Novo Horizonte', 8),
(159, 'Vila Operária', 8),
(160, 'Joaquim Gomes', 8),
(161, 'Boa Vista', 8),
(162, 'Boa Vista 2', 8),
(163, 'Brasília', 8),
(164, 'Loteamento do Vale', 8),
(165, 'Loteamento do Vale II', 8),
(166, 'São José', 8),
(167, 'Genoveva da Fonseca', 8),
(168, 'Jardim das Palmeiras', 8),
(169, 'Regina Maria', 8),
(170, 'São Pedro', 8),
(171, 'Bruno Matragrano', 8),
(172, 'Fernandes', 8),
(173, 'Jardim Beira Rio', 8),
(174, 'Tonico Vicente', 8),
(175, 'Maristela', 8),
(176, 'Casa de Vitor', 8),
(177, 'Ozório Machado', 8),
(178, 'Maria Silvério', 8),
(179, 'Primavera', 8),
(180, 'Antônio Gonçalves Teixeira', 8),
(181, 'Pedreira', 8),
(182, 'Loteamento Paulo Borsato', 8),
(183, 'Família Andrade', 8),
(184, 'Pôr do Sol', 8),
(185, 'Santa Rita', 8),
(186, 'Santa Rita 2', 8),
(187, 'São José', 8),
(188, 'Portal do Sol', 8),
(189, 'Portal da Torres', 8),
(190, 'Vila das Fontes', 8),
(191, 'Santa Isabel', 8),
(192, 'Fortaleza', 8),
(193, 'Morada do Sol', 8),
(194, 'Jardim dos Estados', 8),
(195, 'Viana', 8),
(196, 'Santana', 8),
(197, 'Santana 2', 8),
(198, 'Rua Nova', 8),
(199, 'Fátima', 8),
(200, 'Delcides Telles', 8),
(201, 'Eletrônica', 8),
(202, 'Inatel', 8),
(203, 'Monte Belo', 8),
(204, 'Monte Verde', 8),
(205, 'Jardim Santo Antônio', 8),
(206, 'Monte Líbano', 8),
(207, 'Jairo Grillo', 8),
(208, 'São Domingos', 20),
(209, 'São Luiz', 20),
(210, 'Padre Vitor', 20),
(211, 'Brasil', 20),
(212, 'Centro', 20),
(213, 'Bairro Nascimento', 21),
(214, 'Distrito Industrial', 21),
(215, 'Morada do Sol', 21),
(216, 'Cambuci', 21),
(217, 'São João', 21),
(218, 'Boa Vista', 21),
(219, 'Bom Retiro', 21),
(220, 'Avelar Reis', 21),
(221, 'São José Operário', 21),
(222, 'Centro', 21),
(223, 'Palmital', 21),
(224, 'Serra Rica', 21),
(225, 'Outros', 21),
(226, 'Outros', 20),
(227, 'Cajuru dos Brito', 20),
(228, 'Cajuru dos Egidios', 20),
(229, 'Mata', 20),
(230, 'Peão', 20),
(231, 'Morro Cavado', 20),
(232, 'Capitinga', 20),
(233, 'São Lourenço', 20),
(234, 'Santa Fé', 20),
(235, 'Toca', 20),
(236, 'Floresta', 20),
(237, 'Mantiqueira', 20),
(238, 'Retiro', 20),
(239, 'Macaúbas', 20),
(240, 'Furtados', 20),
(241, 'Serra', 20),
(242, 'Samambaia', 20),
(243, 'Tanque', 20),
(244, 'Fidelis', 20),
(245, 'Coimbra', 20),
(246, 'Gordura', 20);

-- --------------------------------------------------------

--
-- Estrutura da tabela `plan`
--

DROP TABLE IF EXISTS `plan`;
CREATE TABLE IF NOT EXISTS `plan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci,
  `city_id` int(11) DEFAULT NULL,
  `use_prioritization` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `plan`
--

INSERT INTO `plan` (`id`, `name`, `city_id`, `use_prioritization`) VALUES
(1, 'Plano Diretor de Cambuí', 1, 1),
(2, 'Plano Diretor de Pouso Alegre', 2, 1),
(3, 'Plano Saneamento Básico SRS', 8, 0),
(5, 'Plano Saneamento Básico Santana da Vargem', 20, 0),
(6, 'Plano Saneamento Básico Carmo da Cachoeira', 21, 0),
(7, 'Plano de Mobilidade de Pouso Alegre', 2, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `plan_questionary`
--

DROP TABLE IF EXISTS `plan_questionary`;
CREATE TABLE IF NOT EXISTS `plan_questionary` (
  `plan_id` int(11) NOT NULL,
  `questionary_id` int(11) NOT NULL,
  PRIMARY KEY (`plan_id`,`questionary_id`),
  KEY `questionary_id` (`questionary_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `plan_questionary`
--

INSERT INTO `plan_questionary` (`plan_id`, `questionary_id`) VALUES
(1, 1),
(2, 1),
(1, 2),
(2, 2),
(1, 3),
(2, 3),
(1, 4),
(2, 4),
(1, 5),
(2, 5),
(1, 6),
(2, 6),
(1, 7),
(2, 7),
(1, 8),
(2, 8),
(3, 9),
(5, 9),
(6, 9),
(3, 10),
(5, 10),
(6, 10),
(3, 11),
(5, 11),
(6, 11),
(3, 12),
(5, 12),
(6, 12),
(3, 13),
(5, 13),
(6, 13),
(7, 14),
(7, 15),
(7, 16);

-- --------------------------------------------------------

--
-- Estrutura da tabela `plan_user`
--

DROP TABLE IF EXISTS `plan_user`;
CREATE TABLE IF NOT EXISTS `plan_user` (
  `plan_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`plan_id`,`user_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `prioritization`
--

DROP TABLE IF EXISTS `prioritization`;
CREATE TABLE IF NOT EXISTS `prioritization` (
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
  KEY `respondent_id` (`respondent_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `prioritization`
--

INSERT INTO `prioritization` (`plan_id`, `questionary_id`, `question_id`, `respondent_id`, `metric_item`, `metric_value`, `created_at`) VALUES
(7, 14, 125, 5, 5, 1, '2020-01-18 00:31:24'),
(7, 14, 126, 5, 6, 3, '2020-01-18 00:31:25'),
(7, 14, 127, 5, 5, 2, '2020-01-18 00:31:28'),
(7, 14, 128, 5, 7, 2, '2020-01-18 00:31:29'),
(7, 14, 129, 5, 8, 3, '2020-01-18 00:31:31'),
(7, 14, 130, 5, 9, 8, '2020-01-18 00:31:40'),
(7, 14, 131, 5, 10, 3, '2020-01-18 00:31:43'),
(7, 15, 132, 5, 21, 3, '2020-01-18 00:38:39'),
(7, 15, 133, 5, 11, 3, '2020-01-18 00:38:40'),
(7, 15, 134, 5, 12, 4, '2020-01-18 00:38:43'),
(7, 15, 135, 5, 12, 5, '2020-01-18 00:38:44'),
(7, 15, 136, 5, 12, 3, '2020-01-18 00:38:46'),
(7, 15, 138, 5, 13, 4, '2020-01-18 00:39:06'),
(7, 15, 139, 5, 13, 3, '2020-01-18 00:39:07'),
(7, 15, 140, 5, 13, 4, '2020-01-18 00:39:09'),
(7, 15, 141, 5, 13, 3, '2020-01-18 00:39:10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci,
  `description` text COLLATE latin1_general_ci,
  `question` text COLLATE latin1_general_ci,
  `position` int(11) DEFAULT NULL,
  `context_area` text COLLATE latin1_general_ci,
  `context_area_icon` text COLLATE latin1_general_ci,
  `is_rural_zone` tinyint(1) DEFAULT NULL,
  `metric_id` int(11) DEFAULT NULL,
  `narrative` text COLLATE latin1_general_ci NOT NULL,
  `use_narrative` tinyint(1) NOT NULL DEFAULT '0',
  `show_dont_now` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `question` (`metric_id`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `question`
--

INSERT INTO `question` (`id`, `name`, `description`, `question`, `position`, `context_area`, `context_area_icon`, `is_rural_zone`, `metric_id`, `narrative`, `use_narrative`, `show_dont_now`) VALUES
(1, 'Problema 1 - Segurança Pública', 'Você acha que faltam empregos na sua cidade?', 'Faltam empregos na sua cidade.', 1, 'Segurança Pública', 'security-icon.png', 0, 0, '', 0, 1),
(2, 'Problema 1 - Segurança Pública', 'Você acha que há problemas de iluminação pública no seu bairro?', 'Há problemas de iluminação pública no seu bairro.', 2, 'Segurança Pública', 'security-icon.png', 0, 0, '', 0, 1),
(3, 'Problema 1 - Segurança Pública', 'Você se sente inseguro no seu bairro (ocorrência de crimes, assaltos, tráfico de drogas)?', 'É inseguro o bairro.', 3, 'Segurança Pública', 'security-icon.png', 0, 0, '', 0, 1),
(4, 'Problema 1 - Segurança Pública', 'Você acha que faltam centros de assistência para jovens/idosos/dependentes químicos na sua cidade?', 'Faltam centros de assistência para jovens/idosos/dependentes químicos na sua cidade.', 4, 'Segurança Pública', 'security-icon.png', 0, 0, '', 0, 1),
(5, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no transporte público coletivo no seu bairro (horários, pontos de ônibus, condições do veículo)?', 'Há problemas no transporte público coletivo no seu bairro.', 1, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 0, 0, '', 0, 1),
(6, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de bicicletas no seu bairro (sinalização, condição das ciclovias)?', 'Há problemas no trânsito de bicicletas no seu bairro.', 2, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 0, 0, '', 0, 1),
(7, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de veículos no seu bairro (sinalização, congestionamentos)? ', 'Há problemas no trânsito de veículos no seu bairro.', 3, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 0, 0, '', 0, 1),
(8, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de pedestres no seu bairro (sinalização, condição das vias)?', 'Há problemas no trânsito de pedestres no seu bairro.', 4, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 0, 0, '', 0, 1),
(9, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que as condições de moradia no seu bairro são inadequadas (casas precárias, falta de infraestrutura)?', 'As condições de moradia no seu bairro são inadequadas.', 1, 'Uso e Ocupação do Solo', 'environment-icon.png', 0, 0, '', 0, 1),
(10, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que há construções em áreas de risco no seu bairro (margem dos rios, encostas)?', 'Há construções em áreas de risco no seu bairro.', 2, 'Uso e Ocupação do Solo', 'environment-icon.png', 0, 0, '', 0, 1),
(11, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que há terrenos improdutivos ou abandonados no seu bairro?', 'Há terrenos improdutivos ou abandonados no seu bairro.', 3, 'Uso e Ocupação do Solo', 'environment-icon.png', 0, 0, '', 0, 1),
(12, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que o valor do IPTU/aluguel/compra é alto no seu bairro?', 'O valor do IPTU/aluguel/compra é alto no seu bairro.', 4, 'Uso e Ocupação do Solo', 'environment-icon.png', 0, 0, '', 0, 1),
(13, 'Problema 4 - Saúde', 'Você acha que há problemas nas unidades básicas de saúde/postos de saúde do seu bairro (disponibilidade de médicos, medicamentos)? ', 'Há problemas nas unidades básicas de saúde/postos de saúde do seu bairro.', 1, 'Saúde', 'health-icon.png', 0, 0, '', 0, 1),
(14, 'Problema 4 - Saúde', 'Você acha que há problemas no transporte para o atendimento médico do seu bairro (ambulâncias, carros de saúde, atendimento a domicílio)?', 'Há problemas no transporte para o atendimento médico do seu bairro.', 2, 'Saúde', 'health-icon.png', 0, 0, '', 0, 1),
(15, 'Problema 4 - Saúde', 'Você tem que esperar por muito tempo para marcar consulta ou para ser atendido nas unidades de saúde pública do seu bairro?', 'Você tem que esperar por muito tempo para marcar consulta ou para ser atendido nas unidades de saúde pública do seu bairro.', 3, 'Saúde', 'health-icon.png', 0, 0, '', 0, 1),
(16, 'Problema 4 - Saúde', 'Você acha que faltam campanhas de combate a dengue/saúde preventiva no seu bairro?', 'Faltam campanhas de combate a dengue/saúde preventiva no seu bairro.', 4, 'Saúde', 'health-icon.png', 0, 0, '', 0, 1),
(17, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas nas praças, parques e áreas verdes no seu bairro?', 'Há problemas nas praças, parques e áreas verdes no seu bairro.', 1, 'Lazer, Cultura e Turismo', 'culture-icon.png', 0, 0, '', 0, 1),
(18, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas nas quadras e espaços para a prática de esportes no seu bairro?', 'Há problemas nas quadras e espaços para a prática de esportes no seu bairro.', 2, 'Lazer, Cultura e Turismo', 'culture-icon.png', 0, 0, '', 0, 1),
(19, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas ou dificuldades na realização de eventos culturais/artísticos/ religiosos no seu bairro?', 'Há problemas ou dificuldades na realização de eventos culturais/artísticos/ religiosos no seu bairro.', 3, 'Lazer, Cultura e Turismo', 'culture-icon.png', 0, 0, '', 0, 1),
(20, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que seu bairro possui potencial turístico mal aproveitado?', 'O bairro possui potencial turístico mal aproveitado.', 4, 'Lazer, Cultura e Turismo', 'culture-icon.png', 0, 0, '', 0, 1),
(21, 'Problema 6 - Saneamento', 'Você acha que há problemas de abastecimento de água no seu bairro (ligação à rede pública, interrupção no fornecimento)? ', 'Há problemas de esgoto no seu bairro.', 1, 'Saneamento', 'water_residues-icon.png', 0, 0, '', 0, 1),
(22, 'Problema 6 - Saneamento', 'Você acha que há problemas de esgoto no seu bairro (esgoto a céu aberto, mau cheiro, despejo incorreto)? ', 'Há problemas de esgoto no seu bairro.', 2, 'Saneamento', 'water_residues-icon.png', 0, 0, '', 0, 1),
(23, 'Problema 6 - Saneamento', 'Você acha que há problemas de lixo no seu bairro (falta de coleta, deposição em local inapropriado, falta de lixeiras)? ', 'Há problemas de lixo no seu bairro.', 3, 'Saneamento', 'water_residues-icon.png', 0, 0, '', 0, 1),
(24, 'Problema 6 - Saneamento', 'Você acha que há problemas de drenagem no seu bairro (ocorrência de alagamento, entupimento de bocas de lobo)?', 'Há problemas de drenagem no seu bairro.', 4, 'Saneamento', 'water_residues-icon.png', 0, 0, '', 0, 1),
(25, 'Problema 7 - Educação', 'Você acha que há problemas com as creches (0 a 3 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com as creches (0 a 3 anos) do seu bairro.', 1, 'Educação', 'education-icon.png', 0, 0, '', 0, 1),
(26, 'Problema 7 - Educação', 'Você acha que há problemas com a educação infantil (4 a 5 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com a educação infantil (4 a 5 anos) do seu bairro.', 2, 'Educação', 'education-icon.png', 0, 0, '', 0, 1),
(27, 'Problema 7 - Educação', 'Você acha que há problemas com a educação fundamental/média (6 a 18 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com a educação fundamental/média (6 a 18 anos) do seu bairro.', 3, 'Educação', 'education-icon.png', 0, 0, '', 0, 1),
(28, 'Problema 7 - Educação', 'Você acha que há problemas o transporte escolar do seu bairro (disponibilidade de veículos, horários)?', 'Há problemas o transporte escolar do seu bairro.', 4, 'Educação', 'education-icon.png', 0, 0, '', 0, 1),
(29, 'Problema 8 - Meio Ambiente', 'Você acha que faltam árvores no seu bairro?', 'Faltam árvores no seu bairro.', 1, 'Meio Ambiente', 'water_residues-icon.png', 0, 0, '', 0, 1),
(30, 'Problema 8 - Meio Ambiente', 'Você se sente incomodado com ruídos ou com barulho excessivo no seu bairro (comércio, veículos)?', 'Há incomodo com ruídos ou com barulho excessivo no seu bairro.', 2, 'Meio Ambiente', 'water_residues-icon.png', 0, 0, '', 0, 1),
(31, 'Problema 8 - Meio Ambiente', 'Você se sente incomodado com odores no seu bairro (fumaça de veículos, fábricas, mau cheiro)?', 'Há incomodo com odores no seu bairro.', 3, 'Meio Ambiente', 'water_residues-icon.png', 0, 0, '', 0, 1),
(32, 'Problema 8 - Meio Ambiente', 'Você acha que há problemas com zoonoses e animais abandonados no seu bairro (dengue, cães, cavalos, baratas, ratos, escorpiões)?', 'Há problemas com zoonoses e animais abandonados no seu bairro.', 4, 'Meio Ambiente', 'water_residues-icon.png', 0, 0, '', 0, 1),
(33, 'Problema 1 - Segurança Pública', 'Você acha que faltam empregos na sua cidade?', 'Faltam empregos na sua cidade.', 1, 'Segurança Pública', 'security-icon.png', 1, 0, '', 0, 1),
(34, 'Problema 1 - Segurança Pública', 'Você acha que há problemas de iluminação pública no seu bairro?', 'Há problemas de iluminação pública no seu bairro.', 2, 'Segurança Pública', 'security-icon.png', 1, 0, '', 0, 1),
(35, 'Problema 1 - Segurança Pública', 'Você se sente inseguro no seu bairro (ocorrência de crimes, assaltos, tráfico de drogas)?', 'É inseguro o bairro.', 3, 'Segurança Pública', 'security-icon.png', 1, 0, '', 0, 1),
(36, 'Problema 1 - Segurança Pública', 'Você acha que faltam centros de assistência para jovens/idosos/dependentes químicos na sua cidade?', 'Faltam centros de assistência para jovens/idosos/dependentes químicos na sua cidade.', 4, 'Segurança Pública', 'security-icon.png', 1, 0, '', 0, 1),
(37, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no transporte público coletivo no seu bairro (horários, pontos de ônibus, condições do veículo)?', 'Há problemas no transporte público coletivo no seu bairro.', 1, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 1, 0, '', 0, 1),
(38, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de bicicletas no seu bairro (sinalização, condição das ciclovias)?', 'Há problemas no trânsito de bicicletas no seu bairro.', 2, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 1, 0, '', 0, 1),
(39, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de veículos no seu bairro (sinalização, congestionamentos)? ', 'Há problemas no trânsito de veículos no seu bairro.', 3, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 1, 0, '', 0, 1),
(40, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de pedestres no seu bairro (sinalização, condição das vias)?', 'Há problemas no trânsito de pedestres no seu bairro.', 4, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 1, 0, '', 0, 1),
(41, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que as condições de moradia no seu bairro são inadequadas (casas precárias, falta de infraestrutura)?', 'As condições de moradia no seu bairro são inadequadas.', 1, 'Uso e Ocupação do Solo', 'environment-icon.png', 1, 0, '', 0, 1),
(42, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que há construções em áreas de risco no seu bairro (margem dos rios, encostas)?', 'Há construções em áreas de risco no seu bairro.', 2, 'Uso e Ocupação do Solo', 'environment-icon.png', 1, 0, '', 0, 1),
(43, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que há terrenos improdutivos ou abandonados no seu bairro?', 'Há terrenos improdutivos ou abandonados no seu bairro.', 3, 'Uso e Ocupação do Solo', 'environment-icon.png', 1, 0, '', 0, 1),
(44, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que o valor do IPTU/aluguel/compra é alto no seu bairro?', 'O valor do IPTU/aluguel/compra é alto no seu bairro.', 4, 'Uso e Ocupação do Solo', 'environment-icon.png', 1, 0, '', 0, 1),
(45, 'Problema 4 - Saúde', 'Você acha que há problemas nas unidades básicas de saúde/postos de saúde do seu bairro (disponibilidade de médicos, medicamentos)? ', 'Há problemas nas unidades básicas de saúde/postos de saúde do seu bairro.', 1, 'Saúde', 'health-icon.png', 1, 0, '', 0, 1),
(46, 'Problema 4 - Saúde', 'Você acha que há problemas no transporte para o atendimento médico do seu bairro (ambulâncias, carros de saúde, atendimento a domicílio)?', 'Há problemas no transporte para o atendimento médico do seu bairro.', 2, 'Saúde', 'health-icon.png', 1, 0, '', 0, 1),
(47, 'Problema 4 - Saúde', 'Você tem que esperar por muito tempo para marcar consulta ou para ser atendido nas unidades de saúde pública do seu bairro?', 'Você tem que esperar por muito tempo para marcar consulta ou para ser atendido nas unidades de saúde pública do seu bairro.', 3, 'Saúde', 'health-icon.png', 1, 0, '', 0, 1),
(48, 'Problema 4 - Saúde', 'Você acha que faltam campanhas de combate a dengue/saúde preventiva no seu bairro?', 'Faltam campanhas de combate a dengue/saúde preventiva no seu bairro.', 4, 'Saúde', 'health-icon.png', 1, 0, '', 0, 1),
(49, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas nas praças, parques e áreas verdes no seu bairro?', 'Há problemas nas praças, parques e áreas verdes no seu bairro.', 1, 'Lazer, Cultura e Turismo', 'culture-icon.png', 1, 0, '', 0, 1),
(50, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas nas quadras e espaços para a prática de esportes no seu bairro?', 'Há problemas nas quadras e espaços para a prática de esportes no seu bairro.', 2, 'Lazer, Cultura e Turismo', 'culture-icon.png', 1, 0, '', 0, 1),
(51, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas ou dificuldades na realização de eventos culturais/artísticos/ religiosos no seu bairro?', 'Há problemas ou dificuldades na realização de eventos culturais/artísticos/ religiosos no seu bairro.', 3, 'Lazer, Cultura e Turismo', 'culture-icon.png', 1, 0, '', 0, 1),
(52, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que seu bairro possui potencial turístico mal aproveitado?', 'O bairro possui potencial turístico mal aproveitado.', 4, 'Lazer, Cultura e Turismo', 'culture-icon.png', 1, 0, '', 0, 1),
(53, 'Problema 6 - Saneamento', 'Você acha que há problemas de abastecimento de água no seu bairro (ligação à rede pública, interrupção no fornecimento)? ', 'Há problemas de esgoto no seu bairro.', 1, 'Saneamento', 'water_residues-icon.png', 1, 0, '', 0, 1),
(54, 'Problema 6 - Saneamento', 'Você acha que há problemas de esgoto no seu bairro (esgoto a céu aberto, mau cheiro, despejo incorreto)? ', 'Há problemas de lixo no seu bairro.', 2, 'Saneamento', 'water_residues-icon.png', 1, 0, '', 0, 1),
(55, 'Problema 6 - Saneamento', 'Você acha que há problemas de lixo no seu bairro (falta de coleta, deposição em local inapropriado, falta de lixeiras)? ', 'Há problemas de lixo no seu bairro.', 3, 'Saneamento', 'water_residues-icon.png', 1, 0, '', 0, 1),
(56, 'Problema 6 - Saneamento', 'Você acha que há problemas de drenagem no seu bairro (ocorrência de alagamento, entupimento de bocas de lobo)?', 'Há problemas de drenagem no seu bairro.', 4, 'Saneamento', 'water_residues-icon.png', 1, 0, '', 0, 1),
(57, 'Problema 7 - Educação', 'Você acha que há problemas com as creches (0 a 3 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com as creches (0 a 3 anos) do seu bairro.', 1, 'Educação', 'education-icon.png', 1, 0, '', 0, 1),
(58, 'Problema 7 - Educação', 'Você acha que há problemas com a educação infantil (4 a 5 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com a educação infantil (4 a 5 anos) do seu bairro.', 2, 'Educação', 'education-icon.png', 1, 0, '', 0, 1),
(59, 'Problema 7 - Educação', 'Você acha que há problemas com a educação fundamental/média (6 a 18 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com a educação fundamental/média (6 a 18 anos) do seu bairro.', 3, 'Educação', 'education-icon.png', 1, 0, '', 0, 1),
(60, 'Problema 7 - Educação', 'Você acha que há problemas o transporte escolar do seu bairro (disponibilidade de veículos, horários)?', 'Há problemas o transporte escolar do seu bairro.', 4, 'Educação', 'education-icon.png', 1, 0, '', 0, 1),
(61, 'Problema 8 - Meio Ambiente', 'Você acha que faltam árvores no seu bairro?', 'Faltam árvores no seu bairro.', 1, 'Meio Ambiente', 'water_residues-icon.png', 1, 0, '', 0, 1),
(62, 'Problema 8 - Meio Ambiente', 'Você se sente incomodado com ruídos ou com barulho excessivo no seu bairro (comércio, veículos)?', 'Há incomodo com ruídos ou com barulho excessivo no seu bairro.', 2, 'Meio Ambiente', 'water_residues-icon.png', 1, 0, '', 0, 1),
(63, 'Problema 8 - Meio Ambiente', 'Você se sente incomodado com odores no seu bairro (fumaça de veículos, fábricas, mau cheiro)?', 'Há incomodo com odores no seu bairro.', 3, 'Meio Ambiente', 'water_residues-icon.png', 1, 0, '', 0, 1),
(64, 'Problema 8 - Meio Ambiente', 'Você acha que há problemas com zoonoses e animais abandonados no seu bairro (dengue, cães, cavalos, baratas, ratos, escorpiões)?', 'Há problemas com zoonoses e animais abandonados no seu bairro.', 4, 'Meio Ambiente', 'water_residues-icon.png', 1, 0, '', 0, 1),
(65, 'Problema 1 - Abastecimento de água', 'Falta água encanada da COPASA em sua casa?', 'Cobertura insuficiente da rede de distribuição de água potável', 1, 'Abastecimento de água', 'water_residues-icon.png', 0, 0, '', 0, 1),
(66, 'Problema 1 - Abastecimento de água', 'A água na sua casa apresenta sabor ou cheiro desagradável?', 'Má qualidade da água distribuída', 2, 'Abastecimento de água', 'water_residues-icon.png', 0, 0, '', 0, 1),
(67, 'Problema 1 - Abastecimento de água', 'Na sua casa a água apresenta alguma cor? ', 'Má qualidade da água distribuída', 3, 'Abastecimento de água', 'water_residues-icon.png', 0, 0, '', 0, 1),
(68, 'Problema 1 - Abastecimento de água', 'Você costuma ficar sem água em casa por certos períodos durante o dia?', 'Interrupção de funcionamento do sistema', 4, 'Abastecimento de água', 'water_residues-icon.png', 0, 0, '', 0, 1),
(69, 'Problema 1 - Abastecimento de água', 'Você percebe saída de ar quando você abre as torneiras da sua casa?', 'Ar na tubulação (super faturamento da copasa)', 5, 'Abastecimento de água', 'water_residues-icon.png', 0, 0, '', 0, 1),
(70, 'Problema 2 - Esgotamento Sanitário', 'O esgoto que sai da sua casa vai direto para o rio?', 'Cobertura insuficiente da rede de esgotamento sanitário', 1, 'Esgotamento Sanitário', 'water_residues-icon.png', 0, 0, '', 0, 1),
(71, 'Problema 2 - Esgotamento Sanitário', 'Tem esgoto a céu aberto no seu bairro?', 'Esgoto a céu aberto', 2, 'Esgotamento Sanitário', 'water_residues-icon.png', 0, 0, '', 0, 1),
(72, 'Problema 2 - Esgotamento Sanitário', 'Há cheiro desagradável nas proximidades da Estação de Tratamento de Esgoto?', 'Odor da ETE', 3, 'Esgotamento Sanitário', 'water_residues-icon.png', 0, 0, '', 0, 1),
(73, 'Problema 2 - Esgotamento Sanitário', 'Volta esgoto para a sua casa ou nas ruas no seu bairro?', 'Entupimento da rede coletora de esgoto', 4, 'Esgotamento Sanitário', 'water_residues-icon.png', 0, 0, '', 0, 1),
(74, 'Problema 2 - Esgotamento Sanitário', 'Há cheiro ruim saindo dos bueiros no seu bairro?', 'Ligações clandestinas na rede de água pluvial', 5, 'Esgotamento Sanitário', 'water_residues-icon.png', 0, 0, '', 0, 1),
(75, 'Problema 3 - Drenagem Urbana', 'Faltam bueiros nas ruas do seu bairro?', 'Ausência de bocas de lobo', 1, 'Drenagem Urbana', 'water_residues-icon.png', 0, 0, '', 0, 1),
(76, 'Problema 3 - Drenagem Urbana', 'Há acumulo de lixo ou entupimento dos bueiros no seu bairro?', 'Acumulo de lixo com entupimento das bocas de lobo', 2, 'Drenagem Urbana', 'water_residues-icon.png', 0, 0, '', 0, 1),
(77, 'Problema 3 - Drenagem Urbana', 'Quando chove, acumula água nas ruas do seu bairro?', 'Alagamentos constantes', 3, 'Drenagem Urbana', 'water_residues-icon.png', 0, 0, '', 0, 1),
(78, 'Problema 3 - Drenagem Urbana', 'Os rios transbordam em épocas de chuva no seu bairro?', 'Enchentes frequentes', 4, 'Drenagem Urbana', 'water_residues-icon.png', 0, 0, '', 0, 1),
(79, 'Problema 3 - Drenagem Urbana', 'Há falta de árvores nas margens dos rios do seu bairro?', 'Ausência de vegetação nas margens dos rios', 5, 'Drenagem Urbana', 'water_residues-icon.png', 0, 0, '', 0, 1),
(80, 'Problema 4 - Resíduos Sólidos', 'Falta coleta de lixo no seu bairro?', 'Cobertura insuficiente da coleta de resíduos sólidos', 1, 'Resíduos Sólidos', 'water_residues-icon.png', 0, 0, '', 0, 1),
(81, 'Problema 4 - Resíduos Sólidos', 'Você acha que o caminhão de lixo deveria passar mais vezes na semana na sua rua?', 'Frequência insuficiente da coleta de resíduos sólidos', 2, 'Resíduos Sólidos', 'water_residues-icon.png', 0, 0, '', 0, 1),
(82, 'Problema 4 - Resíduos Sólidos', 'Falta coleta seletiva (recicláveis) no seu bairro?', 'Ausência de coleta seletiva', 3, 'Resíduos Sólidos', 'water_residues-icon.png', 0, 0, '', 0, 1),
(83, 'Problema 4 - Resíduos Sólidos', 'Tem acúmulo de móveis e eletrodomésticos velhos nas ruas do seu bairro?', 'Acúmulo de resíduos como eletrodoméstico, móveis, etc..', 4, 'Resíduos Sólidos', 'water_residues-icon.png', 0, 0, '', 0, 1),
(84, 'Problema 4 - Resíduos Sólidos', 'Há  presença de lixo nos rios no seu bairro?', 'Poluição de corpos d´água por resíduos sólidos', 5, 'Resíduos Sólidos', 'water_residues-icon.png', 0, 0, '', 0, 1),
(85, 'Problema 4 - Resíduos Sólidos', 'Há descarte de lixo em terrenos baldios do seu bairro?', 'Descarte de lixo em terrenos baldios', 6, 'Resíduos Sólidos', 'water_residues-icon.png', 0, 0, '', 0, 1),
(86, 'Problema 4 - Resíduos Sólidos', 'Falta limpeza das ruas e espaços públicos (praças, quadras) no seu bairro?', 'Limpeza urbana não satisfatória', 7, 'Resíduos Sólidos', 'water_residues-icon.png', 0, 0, '', 0, 1),
(87, 'Problema 5 - Informações Adicionais', 'Há ocorrência de doenças como diarréia, febre, doenças de pele na sua família?', 'Disseminação de doenças', 1, 'Informações Adicionais', 'water_residues-icon.png', 0, 0, '', 0, 1),
(88, 'Problema 5 - Informações Adicionais', 'Falta conscientização sobre assuntos do meio ambiente no município? (Palestras, oficinas e eventos relacionados ao meio ambiente)', 'Falta de ações de educação ambiental', 2, 'Informações Adicionais', 'water_residues-icon.png', 0, 0, '', 0, 1),
(89, 'Problema 5 - Informações Adicionais', 'Falta realização de campanhas de prevenção da dengue no seu município?', 'Falta de multirão da dengue', 3, 'Informações Adicionais', 'water_residues-icon.png', 0, 0, '', 0, 1),
(90, 'Problema 5 - Informações Adicionais', 'Como você classifica o serviço de água prestado pela COPASA?', 'Como você classifica o serviço de água prestado pela COPASA?', 4, 'Informações Adicionais', 'water_residues-icon.png', 0, 2, '', 0, 1),
(91, 'Problema 5 - Informações Adicionais', 'Como você classifica o serviço de esgoto prestado pela COPASA?', 'Como você classifica o serviço de esgoto prestado pela COPASA?', 5, 'Informações Adicionais', 'water_residues-icon.png', 0, 2, '', 0, 1),
(92, 'Problema 5 - Informações Adicionais', 'Como você classifica os serviços de coleta de lixo prestados pela Prefeitura?', 'Como você classifica os serviços de coleta de lixo prestados pela Prefeitura?', 6, 'Informações Adicionais', 'water_residues-icon.png', 0, 2, '', 0, 1),
(93, 'Problema 5 - Informações Adicionais', 'Como você classifica os serviços para drenagem de água da chuva prestados pela Prefeitura?', 'Como você classifica os serviços para drenagem de água da chuva prestados pela Prefeitura?', 7, 'Informações Adicionais', 'water_residues-icon.png', 0, 2, '', 0, 1),
(94, 'Problema 5 - Informações Adicionais', 'Você sente falta de um canal de comunicação e reclamação com os prestadores de serviço?', 'Ausência de ouvidoria', 8, 'Informações Adicionais', 'water_residues-icon.png', 0, 0, '', 0, 1),
(95, 'Problema 1 - Abastecimento de água', 'Falta água encanada da COPASA em sua casa?', 'Cobertura insuficiente da rede de distribuição de água potável', 1, 'Abastecimento de água', 'water_residues-icon.png', 1, 0, '', 0, 1),
(96, 'Problema 1 - Abastecimento de água', 'A água na sua casa apresenta sabor ou cheiro desagradável?', 'Má qualidade da água distribuída', 2, 'Abastecimento de água', 'water_residues-icon.png', 1, 0, '', 0, 1),
(97, 'Problema 1 - Abastecimento de água', 'Na sua casa a água apresenta alguma cor? ', 'Má qualidade da água distribuída', 3, 'Abastecimento de água', 'water_residues-icon.png', 1, 0, '', 0, 1),
(98, 'Problema 1 - Abastecimento de água', 'Você costuma ficar sem água em casa por certos períodos durante o dia?', 'Interrupção de funcionamento do sistema', 4, 'Abastecimento de água', 'water_residues-icon.png', 1, 0, '', 0, 1),
(99, 'Problema 1 - Abastecimento de água', 'Você percebe saída de ar quando você abre as torneiras da sua casa?', 'Ar na tubulação (super faturamento da copasa)', 5, 'Abastecimento de água', 'water_residues-icon.png', 1, 0, '', 0, 1),
(100, 'Problema 2 - Esgotamento Sanitário', 'O esgoto que sai da sua casa vai direto para o rio?', 'Cobertura insuficiente da rede de esgotamento sanitário', 1, 'Esgotamento Sanitário', 'water_residues-icon.png', 1, 0, '', 0, 1),
(101, 'Problema 2 - Esgotamento Sanitário', 'Tem esgoto a céu aberto no seu bairro?', 'Esgoto a céu aberto', 2, 'Esgotamento Sanitário', 'water_residues-icon.png', 1, 0, '', 0, 1),
(102, 'Problema 2 - Esgotamento Sanitário', 'Há cheiro desagradável nas proximidades da Estação de Tratamento de Esgoto?', 'Odor da ETE', 3, 'Esgotamento Sanitário', 'water_residues-icon.png', 1, 0, '', 0, 1),
(103, 'Problema 2 - Esgotamento Sanitário', 'Volta esgoto para a sua casa ou nas ruas no seu bairro?', 'Entupimento da rede coletora de esgoto', 4, 'Esgotamento Sanitário', 'water_residues-icon.png', 1, 0, '', 0, 1),
(104, 'Problema 2 - Esgotamento Sanitário', 'Há cheiro ruim saindo dos bueiros no seu bairro?', 'Ligações clandestinas na rede de água pluvial', 5, 'Esgotamento Sanitário', 'water_residues-icon.png', 1, 0, '', 0, 1),
(105, 'Problema 3 - Drenagem Urbana', 'Faltam bueiros nas ruas do seu bairro?', 'Ausência de bocas de lobo', 1, 'Drenagem Urbana', 'water_residues-icon.png', 1, 0, '', 0, 1),
(106, 'Problema 3 - Drenagem Urbana', 'Há acumulo de lixo ou entupimento dos bueiros no seu bairro?', 'Acumulo de lixo com entupimento das bocas de lobo', 2, 'Drenagem Urbana', 'water_residues-icon.png', 1, 0, '', 0, 1),
(107, 'Problema 3 - Drenagem Urbana', 'Quando chove, acumula água nas ruas do seu bairro?', 'Alagamentos constantes', 3, 'Drenagem Urbana', 'water_residues-icon.png', 1, 0, '', 0, 1),
(108, 'Problema 3 - Drenagem Urbana', 'Os rios transbordam em épocas de chuva no seu bairro?', 'Enchentes frequentes', 4, 'Drenagem Urbana', 'water_residues-icon.png', 1, 0, '', 0, 1),
(109, 'Problema 3 - Drenagem Urbana', 'Há falta de árvores nas margens dos rios do seu bairro?', 'Ausência de vegetação nas margens dos rios', 5, 'Drenagem Urbana', 'water_residues-icon.png', 1, 0, '', 0, 1),
(110, 'Problema 4 - Resíduos Sólidos', 'Falta coleta de lixo no seu bairro?', 'Cobertura insuficiente da coleta de resíduos sólidos', 1, 'Resíduos Sólidos', 'water_residues-icon.png', 1, 0, '', 0, 1),
(111, 'Problema 4 - Resíduos Sólidos', 'Você acha que o caminhão de lixo deveria passar mais vezes na semana na sua rua?', 'Frequência insuficiente da coleta de resíduos sólidos', 2, 'Resíduos Sólidos', 'water_residues-icon.png', 1, 0, '', 0, 1),
(112, 'Problema 4 - Resíduos Sólidos', 'Falta coleta seletiva (recicláveis) no seu bairro?', 'Ausência de coleta seletiva', 3, 'Resíduos Sólidos', 'water_residues-icon.png', 1, 0, '', 0, 1),
(113, 'Problema 4 - Resíduos Sólidos', 'Tem acúmulo de móveis e eletrodomésticos velhos nas ruas do seu bairro?', 'Acúmulo de resíduos como eletrodoméstico, móveis, etc..', 4, 'Resíduos Sólidos', 'water_residues-icon.png', 1, 0, '', 0, 1),
(114, 'Problema 4 - Resíduos Sólidos', 'Há  presença de lixo nos rios no seu bairro?', 'Poluição de corpos d´água por resíduos sólidos', 5, 'Resíduos Sólidos', 'water_residues-icon.png', 1, 0, '', 0, 1),
(115, 'Problema 4 - Resíduos Sólidos', 'Há descarte de lixo em terrenos baldios do seu bairro?', 'Descarte de lixo em terrenos baldios', 6, 'Resíduos Sólidos', 'water_residues-icon.png', 1, 0, '', 0, 1),
(116, 'Problema 4 - Resíduos Sólidos', 'Falta limpeza das ruas e espaços públicos (praças, quadras) no seu bairro?', 'Limpeza urbana não satisfatória', 7, 'Resíduos Sólidos', 'water_residues-icon.png', 1, 0, '', 0, 1),
(117, 'Problema 5 - Informações Adicionais', 'Há ocorrência de doenças como diarréia, febre, doenças de pele na sua família?', 'Disseminação de doenças', 1, 'Informações Adicionais', 'water_residues-icon.png', 1, 0, '', 0, 1),
(118, 'Problema 5 - Informações Adicionais', 'Falta conscientização sobre assuntos do meio ambiente no município? (Palestras, oficinas e eventos relacionados ao meio ambiente)', 'Falta de ações de educação ambiental', 2, 'Informações Adicionais', 'water_residues-icon.png', 1, 0, '', 0, 1),
(119, 'Problema 5 - Informações Adicionais', 'Falta realização de campanhas de prevenção da dengue no seu município?', 'Falta de multirão da dengue', 3, 'Informações Adicionais', 'water_residues-icon.png', 1, 0, '', 0, 1),
(120, 'Problema 5 - Informações Adicionais', 'Como você classifica o serviço de água prestado pela COPASA?', 'Como você classifica o serviço de água prestado pela COPASA?', 4, 'Informações Adicionais', 'water_residues-icon.png', 1, 2, '', 0, 1),
(121, 'Problema 5 - Informações Adicionais', 'Como você classifica o serviço de esgoto prestado pela COPASA?', 'Como você classifica o serviço de esgoto prestado pela COPASA?', 5, 'Informações Adicionais', 'water_residues-icon.png', 1, 2, '', 0, 1),
(122, 'Problema 5 - Informações Adicionais', 'Como você classifica os serviços de coleta de lixo prestados pela Prefeitura?', 'Como você classifica os serviços de coleta de lixo prestados pela Prefeitura?', 6, 'Informações Adicionais', 'water_residues-icon.png', 1, 2, '', 0, 1),
(123, 'Problema 5 - Informações Adicionais', 'Como você classifica os serviços para drenagem de água da chuva prestados pela Prefeitura?', 'Como você classifica os serviços para drenagem de água da chuva prestados pela Prefeitura?', 7, 'Informações Adicionais', 'water_residues-icon.png', 1, 2, '', 0, 1),
(124, 'Problema 5 - Informações Adicionais', 'Você sente falta de um canal de comunicação e reclamação com os prestadores de serviço?', 'Ausência de ouvidoria', 8, 'Informações Adicionais', 'water_residues-icon.png', 1, 0, '', 0, 1),
(125, '1. Com qual frequência você costuma ir ao centro?', '', '1. Com qual frequência você vai ao centro?', 1, 'Requalificação do Centro', 'city-icon.png', 0, 3, '', 0, 1),
(126, '2. O que você vem fazer no centro?', '', '2. O que te trás ao centro?', 2, 'Requalificação do Centro', 'city-icon.png', 0, 4, '', 0, 1),
(127, '3. Com qual frequência você vai ao centro à noite?', '', '3. Com qual frequência você vai ao centro à noite?', 3, 'Requalificação do Centro', 'city-icon.png', 0, 3, '', 0, 0),
(128, '4. Existe um motivo para você não ir ao centro à noite?', 'Selecione abaixo', '4. Caso você tenha algum motivo para não ir ao centro à noite qual seria?', 4, 'Requalificação do Centro', 'city-icon.png', 0, 5, '', 0, 1),
(129, '5. O que você acha legal fazer no centro?', 'Selecione abaixo', '5. O que te atrai para o centro?', 5, 'Requalificação do Centro', 'city-icon.png', 0, 6, 'Quando você vem ao centro, você pode encontrar serviços, lojas e espaços de lazer. Algumas dessas atrações podem fazer você gostar de ir ao centro cidade, nos ajude a descobrir qual é!', 1, 1),
(130, '6. O que faz falta pra você no centro?', 'Selecione abaixo', '6. O que falta no centro?', 6, 'Requalificação do Centro', 'city-icon.png', 0, 7, 'Você esta saindo em um passeio com sua família no centro da cidade. Que tipo de coisa você sente que poderia complementar esse momento?', 1, 1),
(131, '7. O que você acha das lojas do centro da cidade?', 'Selecione abaixo', '7. Como você qualifica os pontos comerciais no centro?', 7, 'Requalificação do Centro', 'city-icon.png', 0, 8, 'Pense em qual avaliação você daria para o atendimento e os serviços das lojas do centro da cidade. Você está satisfeito quando precisa fazer compras e precisa entrar nas lojas?', 1, 1),
(132, '1. Você faz uso das praças parques calçadas e estacionamento no centro da cidade?', '', '1. Costuma usufruir dos espaços públicos no centro? (Espaços públicos entende-se como calçada rua praças e parques)', 1, 'Requalificação do Centro', 'city-icon.png', 0, 19, '', 0, 0),
(133, '2. Como você considera a necessidade reurbanização do centro da cidade?', '', '2. Como considera as obras de requalificação urbana no centro?', 2, 'Requalificação do Centro', 'city-icon.png', 0, 9, 'A reurbanização tem como objetivo tornar o centro mais atrativo para você trabalhar, fazer compras ou passear. As obras são feitas para atender a necessidade da população e melhorar a mobilidade do trânsito. Você considera a reurbanização necessária?', 1, 1),
(134, '3. Como você avalia as calçadas do centro?', '', '3. Como você avalia a qualidade da calçada?', 3, 'Requalificação do Centro', 'city-icon.png', 0, 10, 'Quando você caminha pelo centro, você percebe que as calçadas estão esburacadas e costuma esbarrar em outras pessoas por serem apertadas?', 1, 1),
(135, '4. Como você avalia as rampas de acessibilidade?', '', '4. Como você avalia as rampas de acessibilidade?', 4, 'Requalificação do Centro', 'city-icon.png', 0, 10, 'Você costuma encontrar rampas de acessibilidade para cadeirantes e acha que o estado de conservação dessas rampas está adequado?', 1, 1),
(136, '5. Como você avalia as faixas em alto-relevo do chão para auxílio às pessoas com deficiência visual?', '', '5. Como você avalia os pisos táteis? (Pisos táteis são faixas em alto-relevo fixadas no chão para fornecer auxílio à locomoção de pessoas com deficiência visual)', 5, 'Requalificação do Centro', 'city-icon.png', 0, 10, 'Ao caminhar pelo centro, você costuma deparar com as faixas elevadas que auxiliam os deficientes visuais em todas as calçadas que você passa?', 1, 1),
(137, '6. Você acha que existem vagas de estacionamento suficientes?', '', '6. Você acha que existem vagas de estacionamento suficientes?', 6, 'Requalificação do Centro', 'city-icon.png', 0, 0, 'Se você vai de centro no seu carro ou de outras pessoas, você encontra problemas em estacionar, a ponto de não encontrar uma vaga quando precisa?', 1, 1),
(138, '7. Como você avalia a necessidade de Locais de descanso?', '', '7. Como você avalia a necessidade destes equipamentos? (Locais de descanso)', 7, 'Requalificação do Centro', 'city-icon.png', 0, 11, 'Você costuma deparar com locais de descanço, como bancos, quando esta caminhando pelo centro e acha que estão conservados?', 1, 1),
(139, '8. Como você avalia a necessidade de lixeiras?', '', '8. Como você avalia a necessidade destes equipamentos? (Lixeiras)', 8, 'Requalificação do Centro', 'city-icon.png', 0, 11, 'Você costuma deparar com lixeiras quando vai no centro e acha que estão conservadas?', 1, 1),
(140, '9. Como você avalia a necessidade de arborização?', '', '9. Como você avalia a necessidade destes equipamentos? (Arborização)', 9, 'Requalificação do Centro', 'city-icon.png', 0, 11, 'Você costuma deparar com ruas arborizadas quando vai no centro?', 1, 1),
(141, '10.  Como você avalia a necessidade de iluminação voltada aos pedestres?', '', '10.  Como você avalia a necessidade destes equipamentos? (Iluminação voltada aos pedestres)', 10, 'Requalificação do Centro', 'city-icon.png', 0, 11, 'Quando você vai ao centro a noite as ruas estão bem iluminadas?', 1, 1),
(142, '11.  Como você avalia a necessidade de ponto de Ônibus?', '', '11.  Como você avalia a necessidade destes equipamentos? (Ponto de Ônibus)', 11, 'Requalificação do Centro', 'city-icon.png', 0, 11, 'Você se depara com pontos de ônibus quando vai ao centro e acha que estão conservados?', 1, 1),
(143, '12.  Você gosta das barracas do comércio de rua?', '', '12.  Você gosta das barracas do comércio de rua?', 12, 'Requalificação do Centro', 'city-icon.png', 0, 0, '', 0, 0),
(144, '13. Você gosta das Kombis de alimentação?', '', '12.  Você gosta das Kombis de alimentação do comércio de rua?', 13, 'Requalificação do Centro', 'city-icon.png', 0, 0, '', 0, 0),
(145, '1. Você trabalha com qual atividade comercial?', '', '1. Qual o ramo da sua atividade comercial?', 1, 'Requalificação do Centro', 'city-icon.png', 0, 12, '', 0, 1),
(146, '2. Por que você escolheu essa rua para seu comércio?', '', '2. Porque você escolheu essa rua para seu comércio? ', 2, 'Requalificação do Centro', 'city-icon.png', 0, 13, '', 0, 1),
(147, '3. Quanto você está satisfeito com a infraestrutura básica da rua?', '', '3. Quanto você está satisfeito com a infraestrutura básica da rua?', 3, 'Requalificação do Centro', 'city-icon.png', 0, 8, 'A infraestrutura básica corresponde às calçadas, a iluminação, as lixeiras e o asfalto da rua. Na faixada da do seu comércio, a rua esta com a infraestrutura adequada ou tem que melhorar?', 1, 1),
(148, '4. Quais melhorias poderiam ser feitas na sua rua para atender suas necessidades?', '', '4. Quais melhorias poderiam ser feitas para atender suas necessidades?', 4, 'Requalificação do Centro', 'city-icon.png', 0, 14, 'Nós sugerimos essa lista de melhorias para você escolher quais delas podem atender suas necessidades. Conte-nos quais são essas melhorias!', 1, 1),
(149, '5. O que as pessoas costumam fazer quando passam por essa rua?', '', '5. O que as pessoas costumam fazer nessa rua?', 5, 'Requalificação do Centro', 'city-icon.png', 0, 15, 'Nas conversas com seus clientes, o que as pessoas costumam dizer que vão fazer na sua rua? Ou, por outro lado, o que você percebe que as pessoas costuma fazer?', 1, 1),
(150, '6. Quais pra você são os fortes da sua rua?', '', '6. Quais são os pontos fortes da sua rua? ', 6, 'Requalificação do Centro', 'city-icon.png', 0, 16, 'Mostre para nós, quais os pontos forte da sua rua que te deixam satisfeito por trabalhar aí!', 1, 1),
(151, '7. Quais pra você são os pontos fracos da sua rua?', '', '7. Quais são os pontos fracos da sua rua? ', 7, 'Requalificação do Centro', 'city-icon.png', 0, 17, 'Mostre para nós, os pontos fracos da sua rua que precisam ser melhorados para atender as necessidades da sua empresa!', 1, 1),
(152, '8. O que você pensa sobre essa afirmação: “Não trocaria a rua do meu comércio por nenhum outro local da cidade”.', '', '8. O que você pensa sobre a seguinte afirmação: “Não trocaria a minha rua por nenhum outro local da cidade”', 8, 'Requalificação do Centro', 'city-icon.png', 0, 18, '', 0, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `questionary`
--

DROP TABLE IF EXISTS `questionary`;
CREATE TABLE IF NOT EXISTS `questionary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE latin1_general_ci,
  `icon` text COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `questionary`
--

INSERT INTO `questionary` (`id`, `name`, `icon`) VALUES
(1, 'Segurança Pública', 'security-icon'),
(2, 'Mobilidade e Transporte', 'urban_traffic-icon'),
(3, 'Uso e Ocupação do Solo', 'environment-icon'),
(4, 'Saúde', 'health-icon'),
(5, 'Lazer Cultura e Turismo', 'culture-icon'),
(6, 'Saneamento', 'water_residues-icon'),
(7, 'Educação', 'education-icon'),
(8, 'Meio Ambiente', 'water_residues-icon'),
(9, 'Abastecimento de água', 'water_residues-icon'),
(10, 'Esgotamento Sanitário', 'water_residues-icon'),
(11, 'Drenagem Urbana', 'water_residues-icon'),
(12, 'Resíduos Sólidos', 'water_residues-icon'),
(13, 'Informações Adicionais', 'water_residues-icon'),
(14, 'Centro - Diagnóstico Geral', 'city-icon'),
(15, 'Centro - Diagnóstico Específico', 'city-icon'),
(16, 'Centro - Comerciante', 'city-icon');

-- --------------------------------------------------------

--
-- Estrutura da tabela `questionary_question`
--

DROP TABLE IF EXISTS `questionary_question`;
CREATE TABLE IF NOT EXISTS `questionary_question` (
  `questionary_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  PRIMARY KEY (`questionary_id`,`question_id`),
  KEY `question_id` (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `questionary_question`
--

INSERT INTO `questionary_question` (`questionary_id`, `question_id`) VALUES
(1, 1),
(3, 1),
(10, 1),
(1, 2),
(5, 2),
(1, 3),
(8, 3),
(1, 4),
(2, 4),
(2, 5),
(5, 5),
(2, 6),
(7, 6),
(2, 7),
(10, 7),
(2, 8),
(12, 8),
(3, 9),
(13, 9),
(3, 11),
(12, 11),
(3, 12),
(13, 12),
(4, 13),
(4, 14),
(4, 15),
(4, 16),
(5, 17),
(5, 18),
(5, 19),
(6, 21),
(6, 22),
(6, 23),
(6, 24),
(7, 25),
(7, 26),
(7, 27),
(7, 28),
(8, 29),
(8, 31),
(8, 32),
(1, 33),
(1, 34),
(1, 35),
(1, 36),
(2, 37),
(2, 38),
(2, 39),
(3, 41),
(3, 42),
(3, 43),
(3, 44),
(4, 45),
(4, 46),
(4, 47),
(4, 48),
(5, 49),
(5, 51),
(5, 52),
(6, 53),
(6, 54),
(6, 55),
(6, 56),
(7, 57),
(7, 58),
(7, 59),
(8, 61),
(8, 62),
(8, 63),
(8, 64),
(9, 65),
(9, 66),
(9, 67),
(9, 68),
(9, 69),
(10, 71),
(10, 72),
(10, 73),
(10, 74),
(11, 75),
(11, 76),
(11, 77),
(11, 78),
(11, 79),
(12, 81),
(12, 82),
(12, 83),
(12, 84),
(12, 85),
(12, 86),
(13, 87),
(13, 88),
(13, 89),
(13, 91),
(13, 92),
(13, 93),
(13, 94),
(9, 95),
(9, 96),
(9, 97),
(9, 98),
(9, 99),
(10, 101),
(10, 102),
(10, 103),
(10, 104),
(11, 105),
(11, 106),
(11, 107),
(11, 108),
(11, 109),
(12, 111),
(12, 112),
(12, 113),
(12, 114),
(12, 115),
(12, 116),
(13, 117),
(13, 118),
(13, 119),
(13, 121),
(13, 122),
(13, 123),
(13, 124),
(14, 125),
(14, 126),
(14, 127),
(14, 128),
(14, 129),
(14, 130),
(14, 131),
(15, 132),
(15, 133),
(15, 134),
(15, 135),
(15, 136),
(15, 137),
(15, 138),
(15, 139),
(15, 140),
(15, 141),
(15, 143),
(15, 144),
(16, 145),
(16, 146),
(16, 147),
(16, 148),
(16, 149),
(16, 150),
(16, 151),
(16, 152);

-- --------------------------------------------------------

--
-- Estrutura da tabela `respondent`
--

DROP TABLE IF EXISTS `respondent`;
CREATE TABLE IF NOT EXISTS `respondent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` text COLLATE latin1_general_ci,
  `code` text COLLATE latin1_general_ci,
  `email` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `name` text COLLATE latin1_general_ci NOT NULL,
  `type` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `gender` text COLLATE latin1_general_ci NOT NULL,
  `phone` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `residence_time_range` int(11) DEFAULT NULL,
  `residence_neighborhood_id` int(11) DEFAULT NULL,
  `job_city_id` int(11) DEFAULT NULL,
  `job_neighborhood_id` int(11) DEFAULT NULL,
  `salary_range` int(11) DEFAULT NULL,
  `age_range` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`(14)),
  UNIQUE KEY `code` (`code`(15)),
  KEY `residence_neighborhood_id` (`residence_neighborhood_id`),
  KEY `job_city_id` (`job_city_id`),
  KEY `job_neighborhood_id` (`job_neighborhood_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Extraindo dados da tabela `respondent`
--

INSERT INTO `respondent` (`id`, `cpf`, `code`, `email`, `name`, `type`, `gender`, `phone`, `residence_time_range`, `residence_neighborhood_id`, `job_city_id`, `job_neighborhood_id`, `salary_range`, `age_range`, `created_at`, `updated_at`) VALUES
(5, '110.179.676-60', NULL, 'kayque@hotmail.com', 'kayque', 'cidadão', 'Masculino', '(35)98447-8682', 2, 127, 6, NULL, 2, 2, '2020-01-17 06:47:41', '2020-01-17 20:46:02');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text COLLATE latin1_general_ci NOT NULL,
  `password` text COLLATE latin1_general_ci NOT NULL,
  `role` int(11) NOT NULL,
  `token` text COLLATE latin1_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_gravidade`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `vw_gravidade`;
CREATE TABLE IF NOT EXISTS `vw_gravidade` (
`plan_id` int(1)
,`question_id` int(1)
,`media` int(1)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_gut_calculator`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `vw_gut_calculator`;
CREATE TABLE IF NOT EXISTS `vw_gut_calculator` (
`plan_id` int(1)
,`question_id` int(1)
,`GUT` int(1)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_media_gut`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `vw_media_gut`;
CREATE TABLE IF NOT EXISTS `vw_media_gut` (
`plan_id` int(1)
,`question_id` int(1)
,`metric_item` int(1)
,`media` int(1)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_qtde_sim_plan`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `vw_qtde_sim_plan`;
CREATE TABLE IF NOT EXISTS `vw_qtde_sim_plan` (
`plan_id` int(1)
,`qtd_t` int(1)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_qtde_sim_question`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `vw_qtde_sim_question`;
CREATE TABLE IF NOT EXISTS `vw_qtde_sim_question` (
`plan_id` int(1)
,`question_id` int(1)
,`qtde` int(1)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_razao_gut`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `vw_razao_gut`;
CREATE TABLE IF NOT EXISTS `vw_razao_gut` (
`plan_id` int(1)
,`question_id` int(1)
,`valor` int(1)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_respondentes`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `vw_respondentes`;
CREATE TABLE IF NOT EXISTS `vw_respondentes` (
`plan_id` int(1)
,`question_id` int(1)
,`questionary_id` int(1)
,`respondent_id` int(1)
,`answer` int(1)
,`job_city_id` int(1)
,`job_neighborhood_id` int(1)
,`residence_neighborhood_id` int(1)
,`residence_time_range` int(1)
,`salary_range` int(1)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_tendencia`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `vw_tendencia`;
CREATE TABLE IF NOT EXISTS `vw_tendencia` (
`plan_id` int(1)
,`question_id` int(1)
,`media` int(1)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_urgencia`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `vw_urgencia`;
CREATE TABLE IF NOT EXISTS `vw_urgencia` (
`plan_id` int(1)
,`question_id` int(1)
,`media` int(1)
);

-- --------------------------------------------------------

--
-- Structure for view `vw_gravidade`
--
DROP TABLE IF EXISTS `vw_gravidade`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `vw_gravidade`  AS  select 1 AS `plan_id`,1 AS `question_id`,1 AS `media` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_gut_calculator`
--
DROP TABLE IF EXISTS `vw_gut_calculator`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `vw_gut_calculator`  AS  select 1 AS `plan_id`,1 AS `question_id`,1 AS `GUT` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_media_gut`
--
DROP TABLE IF EXISTS `vw_media_gut`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `vw_media_gut`  AS  select 1 AS `plan_id`,1 AS `question_id`,1 AS `metric_item`,1 AS `media` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_qtde_sim_plan`
--
DROP TABLE IF EXISTS `vw_qtde_sim_plan`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `vw_qtde_sim_plan`  AS  select 1 AS `plan_id`,1 AS `qtd_t` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_qtde_sim_question`
--
DROP TABLE IF EXISTS `vw_qtde_sim_question`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `vw_qtde_sim_question`  AS  select 1 AS `plan_id`,1 AS `question_id`,1 AS `qtde` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_razao_gut`
--
DROP TABLE IF EXISTS `vw_razao_gut`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `vw_razao_gut`  AS  select 1 AS `plan_id`,1 AS `question_id`,1 AS `valor` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_respondentes`
--
DROP TABLE IF EXISTS `vw_respondentes`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `vw_respondentes`  AS  select 1 AS `plan_id`,1 AS `question_id`,1 AS `questionary_id`,1 AS `respondent_id`,1 AS `answer`,1 AS `job_city_id`,1 AS `job_neighborhood_id`,1 AS `residence_neighborhood_id`,1 AS `residence_time_range`,1 AS `salary_range` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_tendencia`
--
DROP TABLE IF EXISTS `vw_tendencia`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `vw_tendencia`  AS  select 1 AS `plan_id`,1 AS `question_id`,1 AS `media` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_urgencia`
--
DROP TABLE IF EXISTS `vw_urgencia`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `vw_urgencia`  AS  select 1 AS `plan_id`,1 AS `question_id`,1 AS `media` ;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`),
  ADD CONSTRAINT `answer_ibfk_2` FOREIGN KEY (`questionary_id`) REFERENCES `questionary` (`id`),
  ADD CONSTRAINT `answer_ibfk_3` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  ADD CONSTRAINT `answer_ibfk_4` FOREIGN KEY (`respondent_id`) REFERENCES `respondent` (`id`),
  ADD CONSTRAINT `answer_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Limitadores para a tabela `answer_neighborhood`
--
ALTER TABLE `answer_neighborhood`
  ADD CONSTRAINT `answer_neighborhood_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`),
  ADD CONSTRAINT `answer_neighborhood_ibfk_2` FOREIGN KEY (`neighborhood_id`) REFERENCES `neighborhood` (`id`),
  ADD CONSTRAINT `answer_neighborhood_ibfk_3` FOREIGN KEY (`questionary_id`) REFERENCES `questionary` (`id`),
  ADD CONSTRAINT `answer_neighborhood_ibfk_4` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  ADD CONSTRAINT `answer_neighborhood_ibfk_5` FOREIGN KEY (`respondent_id`) REFERENCES `respondent` (`id`);

--
-- Limitadores para a tabela `metric_item`
--
ALTER TABLE `metric_item`
  ADD CONSTRAINT `metric_item_ibfk_1` FOREIGN KEY (`metric_id`) REFERENCES `metric` (`id`);

--
-- Limitadores para a tabela `metric_value`
--
ALTER TABLE `metric_value`
  ADD CONSTRAINT `metric_value_ibfk_1` FOREIGN KEY (`metric_item_id`) REFERENCES `metric_item` (`id`);

--
-- Limitadores para a tabela `neighborhood`
--
ALTER TABLE `neighborhood`
  ADD CONSTRAINT `neighborhood_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`);

--
-- Limitadores para a tabela `plan`
--
ALTER TABLE `plan`
  ADD CONSTRAINT `plan_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`);

--
-- Limitadores para a tabela `plan_questionary`
--
ALTER TABLE `plan_questionary`
  ADD CONSTRAINT `plan_questionary_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`),
  ADD CONSTRAINT `plan_questionary_ibfk_2` FOREIGN KEY (`questionary_id`) REFERENCES `questionary` (`id`);

--
-- Limitadores para a tabela `plan_user`
--
ALTER TABLE `plan_user`
  ADD CONSTRAINT `plan_user_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`),
  ADD CONSTRAINT `plan_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Limitadores para a tabela `prioritization`
--
ALTER TABLE `prioritization`
  ADD CONSTRAINT `prioritization_ibfk_1` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`),
  ADD CONSTRAINT `prioritization_ibfk_2` FOREIGN KEY (`questionary_id`) REFERENCES `questionary` (`id`),
  ADD CONSTRAINT `prioritization_ibfk_3` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  ADD CONSTRAINT `prioritization_ibfk_4` FOREIGN KEY (`respondent_id`) REFERENCES `respondent` (`id`);

--
-- Limitadores para a tabela `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`metric_id`) REFERENCES `metric` (`id`);

--
-- Limitadores para a tabela `questionary_question`
--
ALTER TABLE `questionary_question`
  ADD CONSTRAINT `questionary_question_ibfk_1` FOREIGN KEY (`questionary_id`) REFERENCES `questionary` (`id`),
  ADD CONSTRAINT `questionary_question_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`);

--
-- Limitadores para a tabela `respondent`
--
ALTER TABLE `respondent`
  ADD CONSTRAINT `respondent_ibfk_1` FOREIGN KEY (`residence_neighborhood_id`) REFERENCES `neighborhood` (`id`),
  ADD CONSTRAINT `respondent_ibfk_2` FOREIGN KEY (`job_city_id`) REFERENCES `city` (`id`),
  ADD CONSTRAINT `respondent_ibfk_3` FOREIGN KEY (`job_neighborhood_id`) REFERENCES `neighborhood` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
