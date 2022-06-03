-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema spendingdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `spendingdb` ;

-- -----------------------------------------------------
-- Schema spendingdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `spendingdb` DEFAULT CHARACTER SET utf8 ;
USE `spendingdb` ;

-- -----------------------------------------------------
-- Table `spend`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spend` ;

CREATE TABLE IF NOT EXISTS `spend` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `bills` DOUBLE NULL,
  `groceries` DOUBLE NULL,
  `gas` DOUBLE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS spendinguser;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'spendinguser' IDENTIFIED BY 'spendinguser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'spendinguser';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `spend`
-- -----------------------------------------------------
START TRANSACTION;
USE `spendingdb`;
INSERT INTO `spend` (`id`, `name`, `bills`, `groceries`, `gas`) VALUES (1, 'June', 1000, 500, 100);
INSERT INTO `spend` (`id`, `name`, `bills`, `groceries`, `gas`) VALUES (2, 'July', 3567, 355, 463);

COMMIT;

