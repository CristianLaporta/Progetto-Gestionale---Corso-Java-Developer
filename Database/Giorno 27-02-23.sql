-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 27, 2023 alle 15:47
-- Versione del server: 10.4.27-MariaDB
-- Versione PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestionale`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `aiuto`
--

CREATE TABLE `aiuto` (
  `id` int(11) NOT NULL,
  `reclamo` varchar(500) NOT NULL,
  `idutente` int(11) NOT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `aiuto`
--

INSERT INTO `aiuto` (`id`, `reclamo`, `idutente`, `data`) VALUES
(12, 'abc', 5, '2023-02-27 14:29:57'),
(13, 'cdf', 5, '2023-02-27 14:30:02'),
(14, 'kljihyuihui', 5, '2023-02-27 14:30:06'),
(15, 'ok', 5, '2023-02-27 14:30:11'),
(16, 'okok', 5, '2023-02-27 14:30:16');

-- --------------------------------------------------------

--
-- Struttura della tabella `movimenti`
--

CREATE TABLE `movimenti` (
  `id` int(11) NOT NULL,
  `data` varchar(500) NOT NULL,
  `descrizione` varchar(500) NOT NULL,
  `importo` varchar(500) NOT NULL,
  `tipo` varchar(500) NOT NULL,
  `creatore` varchar(500) NOT NULL,
  `nome` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `movimenti`
--

INSERT INTO `movimenti` (`id`, `data`, `descrizione`, `importo`, `tipo`, `creatore`, `nome`) VALUES
(2, '2023-02-10', 'test nuovo', '222', 'Entrata', 'ciao2@live.it', 'giuseppe luliani lemma'),
(7, 'data', 'descrizione', 'importo', 'tipo', '', ''),
(8, '2023-02-09', 'test', '1222', 'Entrata', 'ciao@live.it', 'cristian laporta'),
(9, '2023-02-04', 'test2', '1111111', 'Uscita', 'ciao@live.it', 'cristian laporta'),
(10, '2023-02-27', 'multa per eccesso di non assenze', '9999', 'Uscita', 'iuliani@live.it', 'pincopallo iuliani');

-- --------------------------------------------------------

--
-- Struttura della tabella `ultimeoperazioni`
--

CREATE TABLE `ultimeoperazioni` (
  `id` int(11) NOT NULL,
  `log` varchar(500) NOT NULL,
  `dataora` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `ultimeoperazioni`
--

INSERT INTO `ultimeoperazioni` (`id`, `log`, `dataora`) VALUES
(1, 'cri laporta ha effetuato un accesso al portale.', '2023-02-25 10:13:33'),
(2, 'cri laporta ha effetuato un accesso al portale.', '2023-02-25 14:29:39'),
(3, 'cri laporta ha effetuato un accesso al portale.', '2023-02-25 14:30:58'),
(4, 'cri laporta ha effetuato un accesso al portale.', '2023-02-25 14:32:14'),
(5, 'cri laporta ha eliminato un utente con id 3', '2023-02-25 15:37:11'),
(6, 'giuseppe2 iuliani2 ha effetuato un accesso al portale.', '2023-02-25 15:57:20'),
(7, 'cri laporta ha effetuato un accesso al portale.', '2023-02-25 16:08:14'),
(8, 'cri laporta ha eliminato un utente con id 4', '2023-02-25 16:18:23'),
(9, 'giuseppe luliani ha effetuato un accesso al portale.', '2023-02-25 16:25:45'),
(10, 'cri laporta ha effetuato un accesso al portale.', '2023-02-25 16:26:44'),
(11, 'giuseppe luliani ha effetuato un accesso al portale.', '2023-02-25 16:30:57'),
(12, 'giuseppe luliani ha eliminato un movimento contenente: mi sono stufato25', '2023-02-25 16:31:07'),
(13, 'cri laporta ha effetuato un accesso al portale.', '2023-02-25 16:31:28'),
(14, 'cri laporta ha eliminato un movimento contenente: mi sono stufato4', '2023-02-25 16:32:20'),
(15, 'cri laporta ha eliminato un movimento contenente: mi sono stufato3', '2023-02-25 16:32:25'),
(16, 'cri laporta ha eliminato un movimento contenente: mi sono stufato2', '2023-02-25 16:32:29'),
(17, 'cri laporta ha effetuato un accesso al portale.', '2023-02-25 17:41:01'),
(18, 'cri laporta ha effetuato un accesso al portale.', '2023-02-25 17:42:06'),
(19, 'giuseppe luliani ha effetuato un accesso al portale.', '2023-02-25 17:51:07'),
(20, 'cri laporta ha effetuato un accesso al portale.', '2023-02-27 09:46:59'),
(21, 'giuseppe luliani ha effetuato un accesso al portale.', '2023-02-27 09:49:38'),
(22, 'giuseppe luliani ha eliminato un movimento contenente: sasaas', '2023-02-27 09:51:17'),
(23, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 10:22:48'),
(24, 'giuseppe  iuliani ha effetuato un accesso al portale.', '2023-02-27 10:27:31'),
(25, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 10:53:45'),
(26, 'giuseppe  iuliani ha effetuato un accesso al portale.', '2023-02-27 11:37:31'),
(27, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 11:38:07'),
(28, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 11:38:31'),
(29, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 11:40:15'),
(30, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 11:41:24'),
(31, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 11:42:41'),
(32, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 11:43:26'),
(33, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 11:56:39'),
(34, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 11:57:54'),
(35, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 12:09:29'),
(36, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 12:10:45'),
(37, 'pincopallo iuliani ha effetuato un accesso al portale.', '2023-02-27 12:43:46'),
(38, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 12:54:26'),
(39, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 12:57:50'),
(40, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 14:13:38'),
(41, 'pincopallo iuliani ha effetuato un accesso al portale.', '2023-02-27 14:15:16'),
(42, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 14:15:46'),
(43, 'pincopallo iuliani ha effetuato un accesso al portale.', '2023-02-27 14:16:20'),
(44, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 14:17:30'),
(45, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 14:24:16'),
(46, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 14:25:07'),
(47, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 14:26:41'),
(48, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 14:28:24'),
(49, 'pincopallo iuliani ha effetuato un accesso al portale.', '2023-02-27 14:29:51'),
(50, 'cristian laporta ha effetuato un accesso al portale.', '2023-02-27 14:30:26'),
(51, 'pincopallo iuliani ha effetuato un accesso al portale.', '2023-02-27 15:40:35');

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `id` int(11) NOT NULL,
  `nome` varchar(500) NOT NULL,
  `cognome` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `token` varchar(500) NOT NULL,
  `linkImgProfile` varchar(500) NOT NULL,
  `admin` varchar(5) NOT NULL,
  `telefono` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`id`, `nome`, `cognome`, `email`, `password`, `token`, `linkImgProfile`, `admin`, `telefono`) VALUES
(5, 'pincopallo', 'iuliani', 'iuliani@live.it', '123', 'SkygWyd8lEcb3k4KkVvnZaKKe25ialUMngSLLtLmPPb', 'https://pbs.twimg.com/profile_images/1061990674566909952/UOKk_-mu_400x400.jpg', 'false', '123'),
(6, 'cristian', 'laporta', 'ciao@live.it', '123', 'ABVdwaXehisWoGq379SbbSMzNtVRuoEHDcxmf4ojzPe', 'https://media.licdn.com/dms/image/D4D03AQGT-aulK6jGwA/profile-displayphoto-shrink_200_200/0/1672258482786?e=1682553600&v=beta&t=Rc-jNyOOFDQIHeEUvZjTsv2C-7GwTcyOnK2jEpaQemk', 'true', '123');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `aiuto`
--
ALTER TABLE `aiuto`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `movimenti`
--
ALTER TABLE `movimenti`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `ultimeoperazioni`
--
ALTER TABLE `ultimeoperazioni`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `aiuto`
--
ALTER TABLE `aiuto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT per la tabella `movimenti`
--
ALTER TABLE `movimenti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `ultimeoperazioni`
--
ALTER TABLE `ultimeoperazioni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
