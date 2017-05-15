/*
Navicat MySQL Data Transfer

Source Server         : login
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : messageboard

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-05-15 12:41:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `notes`
-- ----------------------------
DROP TABLE IF EXISTS `notes`;
CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '用户密码',
  `message` text COMMENT '留言信息',
  `status` tinyint(2) DEFAULT NULL COMMENT '10:显示 20:隐藏',
  `updatatime` int(13) DEFAULT NULL COMMENT '留言更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of notes
-- ----------------------------
INSERT INTO `notes` VALUES ('1', 'a', '0cc175b9c0f1b6a831c399e269772661', '请留言', '20', '1494758888');
INSERT INTO `notes` VALUES ('2', 'B', '9d5ed678fe57bcca610140957afab571', '请留言', '10', '1494753888');
INSERT INTO `notes` VALUES ('3', 'a', '0cc175b9c0f1b6a831c399e269772661', 'a ', '20', '1494753775');
INSERT INTO `notes` VALUES ('4', 'a', '0cc175b9c0f1b6a831c399e269772661', 'aa', '10', '1494756300');
INSERT INTO `notes` VALUES ('5', 'a', '0cc175b9c0f1b6a831c399e269772661', 'a', '20', '1494756489');
INSERT INTO `notes` VALUES ('6', 'a', '0cc175b9c0f1b6a831c399e269772661', 'aaa', '20', '1494756529');
INSERT INTO `notes` VALUES ('7', 'a', '0cc175b9c0f1b6a831c399e269772661', 'aa', '10', '1494756547');
INSERT INTO `notes` VALUES ('8', 'a', '0cc175b9c0f1b6a831c399e269772661', 'aaaaaa', '20', '1494756639');
INSERT INTO `notes` VALUES ('9', 'a', '0cc175b9c0f1b6a831c399e269772661', 'aaa', '20', '1494757878');
INSERT INTO `notes` VALUES ('10', 'a', '0cc175b9c0f1b6a831c399e269772661', 'aaafafdas', '20', '1494757881');
INSERT INTO `notes` VALUES ('11', 'a', '0cc175b9c0f1b6a831c399e269772661', 'aaa', '20', '1494757914');
INSERT INTO `notes` VALUES ('12', 'a', '0cc175b9c0f1b6a831c399e269772661', 'aaa', '20', '1494760220');
INSERT INTO `notes` VALUES ('13', 'a', '0cc175b9c0f1b6a831c399e269772661', 'aaa', '20', '1494760230');
INSERT INTO `notes` VALUES ('14', 'a', '0cc175b9c0f1b6a831c399e269772661', 'aaa', '20', '1494760234');
INSERT INTO `notes` VALUES ('15', 'a', '0cc175b9c0f1b6a831c399e269772661', 'a', '20', '1494763138');
INSERT INTO `notes` VALUES ('16', 'a', '0cc175b9c0f1b6a831c399e269772661', 'a', '20', '1494763308');
INSERT INTO `notes` VALUES ('17', 'FSD', '838ece1033bf7c7468e873e79ba2a3ec', '请留言', '20', null);
INSERT INTO `notes` VALUES ('18', 'fdsa', '1bb1dbb613d0db2041e35f52fea672c7', '请留言', '20', null);
INSERT INTO `notes` VALUES ('19', 'fda', '36eba1e1e343279857ea7f69a597324e', '请留言', '20', null);
