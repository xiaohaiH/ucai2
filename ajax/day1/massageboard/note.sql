/*
Navicat MySQL Data Transfer

Source Server         : login
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : notes

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-05-11 01:35:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `note`
-- ----------------------------
DROP TABLE IF EXISTS `note`;
CREATE TABLE `note` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `note` varchar(255) DEFAULT NULL COMMENT '留言',
  `status` int(2) DEFAULT NULL COMMENT '10:显示，20:删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of note
-- ----------------------------
INSERT INTO `note` VALUES ('1', 'fjsdklfjdk', '20');
INSERT INTO `note` VALUES ('2', 'fdjksfkjdkf', '20');
INSERT INTO `note` VALUES ('3', 'fdjsknfh', '20');
INSERT INTO `note` VALUES ('4', 'jfsdk', '20');
INSERT INTO `note` VALUES ('5', 'jkjk', '20');
INSERT INTO `note` VALUES ('6', '留言:发萨菲打算', '20');
INSERT INTO `note` VALUES ('7', '留言:发似懂非懂', '20');
INSERT INTO `note` VALUES ('8', '留言:发松岛枫盛大', '20');
INSERT INTO `note` VALUES ('9', '留言:', '20');
INSERT INTO `note` VALUES ('10', '留言:', '20');
INSERT INTO `note` VALUES ('11', '留言:fsafdsfas', '20');
INSERT INTO `note` VALUES ('12', '留言:fsafdsfdsf', '20');
INSERT INTO `note` VALUES ('13', '留言:fdsfsfdsfdsf', '20');
INSERT INTO `note` VALUES ('14', '留言:fsafsdfds', '20');
INSERT INTO `note` VALUES ('15', '留言:fsdfsfasdfdsfsd', '20');
INSERT INTO `note` VALUES ('16', '留言:fasfsafsd', '20');
INSERT INTO `note` VALUES ('17', '留言:fsafsfsdafd', '20');
INSERT INTO `note` VALUES ('18', '留言:fasfdsfdsf', '20');
INSERT INTO `note` VALUES ('19', '留言:fsfsafsaf', '20');
INSERT INTO `note` VALUES ('20', '留言:fhfkdshjfsdfsafd', '20');
INSERT INTO `note` VALUES ('21', '留言:fsafsfjkjflksajfk;sfjdslfjdskljfdk', '20');
INSERT INTO `note` VALUES ('22', '留言:falfjkdlasjfkla;sjfkdsljfka;slfjdk', '20');
INSERT INTO `note` VALUES ('23', '留言:fasdfasdfsdafd', '20');
INSERT INTO `note` VALUES ('24', '留言:fafd', '20');
INSERT INTO `note` VALUES ('25', '留言:fafdsafd', '20');
INSERT INTO `note` VALUES ('26', '留言:fafdsfds', '20');
INSERT INTO `note` VALUES ('27', '留言:fsf', '20');
INSERT INTO `note` VALUES ('28', '留言:afdfdsaf', '20');
INSERT INTO `note` VALUES ('29', '留言:afasfdsf', '10');
INSERT INTO `note` VALUES ('30', '留言:fdafdafds', '10');
INSERT INTO `note` VALUES ('31', '留言:fdafdafd', '10');
