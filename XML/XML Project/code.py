import xml.etree.ElementTree as ET
from tkinter import * 



# Functions :
#------------

def displayEmployee():

    # Globals 
    global employeeName
    global employeeEmail
    global employeePhone
    global employeeAddress


    employeeName = employees[currentEmployee].find("name").text
    employeePhone = employees[currentEmployee].find("phone").text
    employeeAddress = employees[currentEmployee].find("address").text
    employeeEmail = employees[currentEmployee].find("email").text
    Email.delete(0,"end")
    Email.insert(0,employeeEmail)
    Name.delete(0,"end")
    Name.insert(0,employeeName)
    Phone.delete(0,"end")
    Phone.insert(0,employeePhone)
    Address.delete(0,"end")
    Address.insert(0,employeeAddress)


# Create
def createEmployee():
    employee = ET.SubElement(company,"employee")
    name = ET.SubElement(employee,"name")
    name.text = Name.get()
    phone = ET.SubElement(employee,"phone")
    phone.text = Phone.get()
    address = ET.SubElement(employee,"address")
    address.text = Address.get()
    email = ET.SubElement(employee,"email")
    email.text = Email.get()
    tree.write("company.xml")

# Delete
def deleteEmployee():
    company.remove(employees[currentEmployee])
    tree.write("company.xml")


# Update
def updateEmployee():
    employees[currentEmployee].find("name").text = Name.get()
    employees[currentEmployee].find("phone").text = Phone.get()
    employees[currentEmployee].find("address").text = Address.get()
    employees[currentEmployee].find("email").text = Email.get()
    tree.write("company.xml")

# Next
def getNext():
    global currentEmployee
    if currentEmployee == len(employees)-1 :
        currentEmployee = len(employees)-1
    else :
        currentEmployee+=1
    displayEmployee()

# Previous
def getPrevious():
    global currentEmployee
    if currentEmployee == 0 :
        currentEmployee = 0 
    else :
        currentEmployee-=1
    displayEmployee()

# Search
def searchEmployee():
    global currentEmployee
    for i , employee in enumerate(employees):
        if employee.find("name").text == Name.get():
            currentEmployee = i 
            break
    displayEmployee()



# Parsing Company
#------------------
tree = ET.parse('company.xml')
company = tree.getroot()
employees = company.findall("employee")
currentEmployee = 0 
employeeName = employees[currentEmployee].find("name").text
employeePhone = employees[currentEmployee].find("phone").text
employeeAddress =employees[currentEmployee].find("address").text
employeeEmail = employees[currentEmployee].find("email").text

# Tkinter GUI 
#--------------
window = Tk()
window.title("employees")
window.geometry("300x250+800+300")

# Display Employee
#------------------
L1 = Label(window, text="Name")
L1.grid(column=1, row=1)
Name = Entry(window, bd =5)
Name.insert(0,employeeName)
Name.grid(column=2 ,row=1)

L2 = Label(window, text="phone")
L2.grid(column=1, row=2)
Phone = Entry(window, bd =5)
Phone.insert(0,employeePhone)
Phone.grid(column=2 ,row=2)


L1 = Label(window, text="Address")
L1.grid(column=1, row=3)
Address = Entry(window, bd =5)
Address.insert(0,employeeAddress)
Address.grid(column=2 ,row=3)


L1 = Label(window, text="Email")
L1.grid(column=1, row=4)
Email = Entry(window, bd =5)
Email.insert(0,employeeEmail)
Email.grid(column=2 ,row=4)


# Buttons Controlling 
#---------------------

prev = Button(window, text="prev" ,fg="red", command=getPrevious)
prev.grid(row= 5 , column=1)

next = Button(window, text="next" ,fg="red", command=getNext)
next.grid(row= 5 , column=2)

search = Button(window,text="search",fg="red",command=searchEmployee)
search.grid(row=6,column=2)

add = Button(window,text = "add",fg="red",command=createEmployee)
add.grid(row=6,column=1)

update = Button(window,text = "update",fg="red",command=updateEmployee)
update.grid(row=7,column=2)

delete = Button(window,text = "delete",fg="red",command=deleteEmployee)
delete.grid(row=7 , column=1)


# main loop
window.mainloop()
