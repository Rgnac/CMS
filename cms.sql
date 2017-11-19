-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 19 Lis 2017, 14:05
-- Wersja serwera: 10.1.26-MariaDB
-- Wersja PHP: 7.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `cms`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `art`
--

CREATE TABLE `art` (
  `id` int(11) NOT NULL,
  `autor` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `data` datetime NOT NULL,
  `tresc` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `tytul` varchar(50) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `art`
--

INSERT INTO `art` (`id`, `autor`, `data`, `tresc`, `tytul`) VALUES
(66, 'admin', '2017-11-12 02:20:06', 'fgh', 'fgh'),
(67, 'admin', '2017-11-12 13:37:54', 'ddddddddddddddddddddddddddddddddddddddddddddddd', 'asd'),
(92, 'admin', '2017-11-13 21:27:25', 'asdasd', 'Asdas'),
(93, 'admin', '2017-11-13 22:44:20', 'sadsad', 'Asdas'),
(94, 'admin', '2017-11-13 22:47:38', 'sadsad', 'Asdas'),
(95, 'admin', '2017-11-17 16:58:21', 'asdsd', 'dasd'),
(99, 'admin', '2017-11-17 16:58:28', 'test', 'admin'),
(100, 'admin', '2017-11-17 18:53:33', 'test', 'admin'),
(101, 'admin', '2017-11-19 12:06:10', 'dsd', 'adsa'),
(102, 'user', '2017-11-19 13:29:31', 'art 1', 'art 1'),
(103, 'user', '2017-11-19 13:32:52', 'art1', 'art1'),
(104, 'user', '2017-11-19 13:32:57', 'art3', 'art3'),
(105, 'user', '2017-11-19 14:03:17', 'Test 1', 'Artykuly 1'),
(106, 'user', '2017-11-19 14:04:39', '111', 'Artykuly 11');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `art2`
--

CREATE TABLE `art2` (
  `id` int(11) NOT NULL,
  `autor` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `data` datetime NOT NULL,
  `tresc` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `tytul` varchar(50) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `art2`
--

INSERT INTO `art2` (`id`, `autor`, `data`, `tresc`, `tytul`) VALUES
(1, 'admin', '2017-11-19 13:14:54', '', ''),
(2, 'admin', '2017-11-19 13:14:56', '', ''),
(3, 'admin', '2017-11-19 13:16:57', '', ''),
(4, 'admin', '2017-11-19 13:17:13', '', ''),
(5, 'user', '2017-11-19 13:17:43', '', ''),
(6, 'user', '2017-11-19 13:24:03', 'test', 'Test'),
(7, 'user', '2017-11-19 13:29:20', 'art 2', 'art 2'),
(8, 'user', '2017-11-19 14:02:53', 'Test 1', 'Artykuly 1'),
(9, 'user', '2017-11-19 14:02:58', 'Test 2', 'Artykuly 2');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `art3`
--

CREATE TABLE `art3` (
  `id` int(11) NOT NULL,
  `autor` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `data` datetime NOT NULL,
  `tresc` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `tytul` varchar(50) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `art3`
--

INSERT INTO `art3` (`id`, `autor`, `data`, `tresc`, `tytul`) VALUES
(1, 'user', '2017-11-19 14:03:04', 'Test 3', 'Artykuly 3');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `art4`
--

CREATE TABLE `art4` (
  `id` int(11) NOT NULL,
  `autor` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `data` datetime NOT NULL,
  `tresc` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `tytul` varchar(50) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `art4`
--

INSERT INTO `art4` (`id`, `autor`, `data`, `tresc`, `tytul`) VALUES
(1, 'user', '2017-11-19 14:01:14', '', ''),
(2, 'user', '2017-11-19 14:03:10', 'Test 4', 'Artykuly 4');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `haslo` varchar(50) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `login`, `haslo`) VALUES
(1, 'admin', 'admin'),
(2, 'user', '1234');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `art`
--
ALTER TABLE `art`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `art2`
--
ALTER TABLE `art2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `art3`
--
ALTER TABLE `art3`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `art4`
--
ALTER TABLE `art4`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `art`
--
ALTER TABLE `art`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT dla tabeli `art2`
--
ALTER TABLE `art2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT dla tabeli `art3`
--
ALTER TABLE `art3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `art4`
--
ALTER TABLE `art4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
