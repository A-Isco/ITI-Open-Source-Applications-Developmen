<?php
class SampleTest extends PHPUnit\Framework\TestCase {
	public function test_the_Zero_test(){
		$this->assertTrue(Factorial(0)===1);
	}
	public function test_the_One_test(){
                $this->assertTrue(Factorial(1)===1);
        }
	public function test_the_Five_test(){
                $this->assertTrue(Factorial(5)===120);
        }
	public function test_the_n_test(){
		$n = 4;
                $this->assertTrue(Factorial($n)===Factorial($n-1)*$n);
        }
	public function test_the_minusThree_test(){
                $this->assertTrue(Factorial(-3)===null);
        }
	public function test_the_float_test(){
                $this->assertTrue(Factorial(1.5)===null);
        }
	public function test_the_false_test(){
                $this->assertTrue(Factorial(false)===null);
        }
	public function test_the_abc_test(){
                $this->assertTrue(Factorial('abc')===null);
        }

}
