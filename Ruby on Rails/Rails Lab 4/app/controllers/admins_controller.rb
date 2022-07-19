class AdminsController < ApplicationController
    def show 
        @admin = Admin.find(params[:id])
    end
    def current_user
        User.find(session[:user_id])
      end
end
