class ApplicationController < ActionController::Base
  http_basic_authenticate_with name: "Abdelrahman", password: "123456"

end
