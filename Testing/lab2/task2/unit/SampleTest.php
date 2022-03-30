<?php
class SampleTest extends PHPUnit\Framework\TestCase {
        private static $user;

        public static function setUpBeforeClass(){
                self::$user = new visitor('abdelrahman',7777);
        }
	public function test_check(){
		$this->assertTrue(self::$user->validate('abdelrahman',7777)===true);
	}
        
}
