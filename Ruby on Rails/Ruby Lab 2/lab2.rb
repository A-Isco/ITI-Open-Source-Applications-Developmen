class User 
    @@name = "user"
    attr_accessor :name

    def initialize(n)
        @name = n
    end

    def self.name
        @@name
    end

    def self.changeNAME (value)
        @@name = value
    end

    def setName(value)
        @name = value
    end

    def getName
        @name
    end
    
end 


class Math
    def calc(num1,num2,op)
        begin
            if !(num1.is_a? Numeric) or !(num2.is_a? Numeric)
                raise ("you must enter numbers!")
            elsif !(['+','-','*','/'].include? op)
                raise ("not supported operator\nvalid operations are + - * /")
            elsif op == '/' and num2 == 0 
                raise ('division by zero is not valid')
            end
        rescue Exception => e
            p e.message
        else
            eval(num1.to_s+op+num2.to_s)
        end

    end

end

m = Math.new
p m.calc 1, 1,'/'

u = User.new("Abdelrahman")
p "name of the user is #{u.getName}"