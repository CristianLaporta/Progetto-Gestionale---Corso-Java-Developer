-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 25, 2023 alle 10:21
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
(1, '02/25/23', 'mi sono stufato', '10000000', 'stufato', 'ciao@live.it', 'cristian laporta'),
(2, '02/25/23', 'mi sono stufato', '10000000', 'stufato', 'ciao2@live.it', 'giuseppe luliani lemma');

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
(1, 'cri laporta ha effetuato un accesso al portale.', '2023-02-25 10:13:33');

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
(1, 'cri', 'laporta', 'ciao@live.it', '123', 'IuMVPebm332AljqVUOjw4NIt1mS24gIj75miGKFfhdE', 'https://th.bing.com/th/id/R.bffe70eca59e7b6f33be38ee24f3314c?rik=%2bESrZJ6XXgS7GA&pid=ImgRaw&r=0', 'true', '433433443'),
(2, 'giuseppe', 'luliani', 'ciao2@live.it', '123', 'IuMVPebm332AljqVUOjw4NIt1mS24gIj75miGKFfhdE', 'https://th.bing.com/th/id/R.bffe70eca59e7b6f33be38ee24f3314c?rik=%2bESrZJ6XXgS7GA&pid=ImgRaw&r=0', 'false', '333333333');

--
-- Indici per le tabelle scaricate
--

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
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `movimenti`
--
ALTER TABLE `movimenti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `ultimeoperazioni`
--
ALTER TABLE `ultimeoperazioni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
