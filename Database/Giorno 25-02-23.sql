-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 25, 2023 alle 18:04
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
(1, '2023-02-10', 'sasaas', '222', 'Uscita', 'iuliani3@live.it', 'mitico giuseppe'),
(2, '2023-02-10', 'dsffffff', '222', 'Uscita', 'ciao2@live.it', 'giuseppe luliani lemma');

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
(19, 'giuseppe luliani ha effetuato un accesso al portale.', '2023-02-25 17:51:07');

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
(1, 'cri', 'laporta', 'ciao@live.it', '123', 'LVHUAu9AkmLFz60QfMpdTpUwRbs0539pj17L0stw5n2', 'https://th.bing.com/th/id/R.bffe70eca59e7b6f33be38ee24f3314c?rik=%2bESrZJ6XXgS7GA&pid=ImgRaw&r=0', 'true', '433433443'),
(5, 'giuseppe', 'luliani', 'iuliani3@live.it', '123', 'PyK0t6mXMH1EyV22let21ioEgW4ultUH0y7W0aKdGmw', 'https://th.bing.com/th/id/R.bffe70eca59e7b6f33be38ee24f3314c?rik=%2bESrZJ6XXgS7GA&pid=ImgRaw&r=0', 'false', '1234567');

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `movimenti`
--
ALTER TABLE `movimenti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT per la tabella `ultimeoperazioni`
--
ALTER TABLE `ultimeoperazioni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
