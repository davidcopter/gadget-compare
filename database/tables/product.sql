-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: May 01, 2021 at 07:53 PM
-- Server version: 8.0.24
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gadget-compare`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `material` varchar(255) NOT NULL,
  `dimension` varchar(255) NOT NULL,
  `weight` int NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `imageUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `category`, `price`, `material`, `dimension`, `weight`, `createdAt`, `imageUrl`) VALUES
('0b487478-ae6d-4feb-ab29-2e6040a7e1b6', 'Mi Smart LED Bulb\r\n', 'Enjoy bright daylight and multiple smart controls', 'Light bulbs', '5.00', 'Plastic', '55mm x 120mm', 1, '2021-05-01 09:41:54.578847', 'https://cf.shopee.co.th/file/96ec502b82e9e325aac7371ef4b9b401'),
('1670e034-9271-47ca-8bef-0e34db7d774e', 'Mi Smart Standing Fan 2', 'Dual blades for a natural breeze \r\nDual blades, DC motorm, Voice control, 140° ventilation, 14m* range, 100 levels, Table and floor, Silent all night', 'Fan', '99.0', 'Aluminium', '343 × 330 × 1000mm', 3, '2021-05-01 09:41:54.518340', 'https://cw.lnwfile.com/wvxlfj.jpg'),
('21a1894a-5008-41df-8990-e1e1a9f8946c', 'Mi 360° Camera (1080p)', '360° panoramic view, full protection 1080p High Definition | 360° Panorama | Infrared Night Vision | AI Human Detection', 'Security camera', '29.0', 'Plastic', '108×75×75mm', 2, '2021-05-01 09:41:54.505742', 'https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/0/000257247_mi_camera_360.jpg'),
('341e73b9-c5af-4f35-9426-a025b062d221', 'ConnectSense Smart Outlet²', 'you can control your lamps, fans or other appliances with the power of your voice. The Smart Outlet² allows devices to be controlled whenever you want, wherever you choose with no hub required.', 'Smart Outlet', '59.95', 'PU', '140x36x70mm', 2, '2021-05-01 09:41:54.483304', 'http://cdn.shopify.com/s/files/1/0070/7336/6074/products/odn633do_grande.jpeg?v=1544453426'),
('38576566-73f9-41e7-811e-56de076475b9', 'Kasa Smart Outdoor Plug', 'Extend your Smart Home to the outdoors with the Kasa Smart Wi-Fi Outdoor Plug.', 'Outlet', '19.99', 'Plastic', '124.6 x 60.5 x 58.2 mm', 1, '2021-05-01 09:41:54.596211', 'https://images.prismic.io/kasasmart/e428443fa9390c2ec287cc4106ddc11b251807fd_kp400-gallery-image-1.png?auto=compress,format'),
('3f723234-7a4a-48be-ac3e-9e4e651e44fe', 'Ezviz DB1C Wi-Fi Video Doorbell', 'Enjoy high-quality video chat with visitors and keep an eye on what\'s happening at your front door right through your phone. The DB1C is a powerful video doorbell with built-in artificial intelligence capability.', 'Door', '45.0', 'Plastic', '5.05 x 1.82 x 0.76 inch', 2, '2021-05-01 09:41:54.568038', 'https://cdn-reichelt.de/bilder/web/artikel_ws/E910/EZVIZ_DB1C_01.jpg'),
('4da5aa59-98b4-47d1-b5a3-d28c7244ec6c', 'Ecovacs DEEBOT OZMO 600', 'DEEBOT OZMO 600 is the answer to the task of cleaning all your floors. Now, DEEBOT OZMO 600 mops the floor with a new, intelligent mopping system, while the Smart Cleaning Path ensures an effective clean without missing a thing.', 'Robotic Vacuum Cleaner', '99.0', 'Plastic', '35.0x35.0x7.9cm', 2, '2021-05-01 09:41:54.496768', 'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/p/w/pwb000237283-1234.jpg'),
('51b37c2d-32ce-4a18-9ce8-6a775273b7ce', 'iRobot Roomba 960', 'It seamlessly navigates an entire level of your home, keeping track of its location and recharging as needed until the job is done. With the iRobot HOME App, you can clean and schedule on the go.', 'Robotic Vacuum Cleaner', '129.00', 'Plastic', '3.6 x 13.8 x 13.8 inches', 2, '2021-05-01 09:41:54.573378', 'https://images-na.ssl-images-amazon.com/images/I/9198sIyxg8L._AC_SL1500_.jpg'),
('5547b077-8b2b-4626-a912-3d68dd5a704b', 'Ring Spotlight Cam', 'Protect every corner of your home with Spotlight Cam Battery, a versatile wire-free HD security camera that lets you see, hear and speak to anyone on your property from your phone or tablet.', 'Security camera', '199.99', 'Plastic', '12.6 cm x 6.91 cm x 7.59 cm', 2, '2021-05-01 09:41:54.529771', ''),
('5699dbb1-426a-4713-a18e-4569d453e725', 'Philips 461004 Hue White Ambiance A19 ', 'With wireless control on your smartphone or tablet, choose the perfect light setting for any mood or activity such as reading or relaxing, concentrating, or energizing', 'Light bulbs', '27.00', 'Plastic', '120 x 60 x 70mm', 30604, '2021-05-01 09:41:54.452050', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
