/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : movie_project

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-07-04 17:26:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `client`
-- ----------------------------
DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cli_num` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `cli_name` varchar(20) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `AK_Key_2` (`cli_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of client
-- ----------------------------

-- ----------------------------
-- Table structure for `comments`
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cli_id` int(11) NOT NULL,
  `ses_id` int(11) NOT NULL,
  `score` int(11) DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comments
-- ----------------------------

-- ----------------------------
-- Table structure for `movie`
-- ----------------------------
DROP TABLE IF EXISTS `movie`;
CREATE TABLE `movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mov_name` varchar(20) NOT NULL,
  `total_score` double DEFAULT '0',
  `type` varchar(20) DEFAULT NULL,
  `showtime` date NOT NULL,
  `runningtime` int(11) NOT NULL,
  `director` varchar(20) DEFAULT NULL,
  `actor` varchar(20) DEFAULT NULL,
  `introduction` varchar(1000) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of movie
-- ----------------------------
INSERT INTO `movie` VALUES ('2', '银河护卫队', '0', '动漫', '2017-05-25', '90', '不知道', '不知道', '不知道', '-1', 'images/mov1.jpg');
INSERT INTO `movie` VALUES ('3', '摔跤吧！爸爸', '0', '喜剧', '2017-06-16', '90', '不知道', '不知道', '不知道', '1', 'images/mov2.jpg');
INSERT INTO `movie` VALUES ('4', '拆弹专家', '0', '动作', '2017-06-15', '100', '不知道', '不知道', '不知道', '-1', 'images/mov3.jpg');
INSERT INTO `movie` VALUES ('5', '记忆大师', '0', '惊悚', '2017-06-18', '105', '不知道', '不知道', '不知道', '-1', 'images/mov4.jpg');
INSERT INTO `movie` VALUES ('6', '速度与激情8', '0', '动作', '2017-06-20', '120', '不知道', '不知道', '不知道', '1', 'images/mov5.jpg');
INSERT INTO `movie` VALUES ('7', '喜欢你', '0', '爱情', '2017-06-25', '110', '不知道', '周冬雨', '不知道', '1', 'images/mov6.jpg');
INSERT INTO `movie` VALUES ('8', '麻烦家族', '0', '喜剧', '2017-06-30', '100', '黄磊', '黄磊', '不知道', '1', 'images/mov7.jpg');
INSERT INTO `movie` VALUES ('9', '春娇救志明', '0', '爱情', '2017-06-30', '120', '不知道', '杨千嬅', '不知道', '1', 'images/mov8.jpg');
INSERT INTO `movie` VALUES ('10', '提着心吊着胆', '0', '惊悚', '2017-07-02', '100', '不知道', '不知道', '不知道', '1', 'images/mov16.jpg');
INSERT INTO `movie` VALUES ('11', '超凡战队', '0', '动作', '2017-07-05', '96', '不知道', '不知道', '不知道', '0', 'images/mov9.jpg');
INSERT INTO `movie` VALUES ('12', '蓝精灵', '0', '动漫', '2017-07-06', '100', '不知道', '不知道', '不知道', '0', 'images/mov10.jpg');
INSERT INTO `movie` VALUES ('13', '亚瑟王', '0', '动作', '2017-07-15', '105', '不知道', '不知道', '不知道', '0', 'images/mov11.jpg');
INSERT INTO `movie` VALUES ('14', '毒讯', '0', '警匪', '2017-07-14', '100', '不知道', '不知道', '不知道', '0', 'images/mov12.jpg');
INSERT INTO `movie` VALUES ('15', '加勒比海盗5', '0', '动作', '2017-07-20', '120', '不知道', '不知道', '不知道', '0', 'images/mov13.jpg');
INSERT INTO `movie` VALUES ('16', '傲慢与偏见', '0', '爱情', '2017-08-18', '90', '不知道', '不知道', '不知道', '0', 'images/mov14.jpg');

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cli_id` int(11) NOT NULL,
  `ses_id` int(11) NOT NULL,
  `order_time` datetime NOT NULL,
  `row_id` int(11) NOT NULL,
  `column_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for `screens`
-- ----------------------------
DROP TABLE IF EXISTS `screens`;
CREATE TABLE `screens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rows` int(11) NOT NULL,
  `columns` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of screens
-- ----------------------------

-- ----------------------------
-- Table structure for `sessions`
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mov_id` int(11) NOT NULL,
  `screens_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `price` double NOT NULL,
  `view` varchar(20) NOT NULL,
  `total_sold` int(11) NOT NULL DEFAULT '0',
  `end_time` datetime NOT NULL,
  `start_time` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sessions
-- ----------------------------

-- ----------------------------
-- Table structure for `site`
-- ----------------------------
DROP TABLE IF EXISTS `site`;
CREATE TABLE `site` (
  `scr_id` int(11) NOT NULL,
  `ses_id` int(11) NOT NULL,
  `empty` int(11) NOT NULL DEFAULT '0',
  `row_id` int(11) NOT NULL,
  `column_id` int(11) NOT NULL,
  PRIMARY KEY (`ses_id`,`row_id`,`column_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of site
-- ----------------------------
