<?php
class SampleTest extends PHPUnit\Framework\TestCase {
        private static $user;

        public static function setUpBeforeClass(){
                self::$user = new User('abdelrahman','abdelrahman22@gmail.com');
        }
	public function test_name(){
		$this->assertTrue(self::$user->getName()==='abdelrahman');
	}
	public function test_email(){
                $this->assertTrue(self::$user->getEmail()==='abdelrahman22@gmail.com');
        }
	public function test_name_Samy(){
                self::$user->setName('samy');
                $this->assertTrue(self::$user->getName()==='samy');
        }
        public function test_email_Samy(){
                self::$user->setEmail('samy@gmail.com');
                $this->assertTrue(self::$user->getEmail()==='samy@gmail.com');
        }
        public static function tearDownAfterClass(){
                self::$user->delete();
        }
}
