#
def fun1(str,n)
    str*n
end

def fun2(str)
    str[0,2] == 'if'
end

def fun3(str)
    str[str.length-1]+str[1,str.length]+str[0]
end

def fun4(str)
    str[str.length-1]+str+str[str.length-1]
end

def fun5(year)
    if ((year % 4 == 0) and (year % 100 != 0)) or (year % 400 == 0) 
        return "leap"
    end
    return "not leap"
end

def fun6(nums)
    return nums[1],nums[2],nums[0]
end


def fun7(nums)
    sum =0 
    i = 0 
    while i < nums.length

        unless nums[i] == 17
            sum+=nums[i]
        else 
            i+=1
        end 
        i+=1
    end
    return sum
end



# p fun1('a',7)
# p fun2('ikfl') 
# p fun3('Hola')
# p fun4("xyz")
# p fun5(100)
# p fun6([1,3,4])
# p fun7([6,8,19,6,9])

nums = [7,2,11,15]
target = 9
nums = nums.find_all{|x| x <= target}
nums = nums.sort
