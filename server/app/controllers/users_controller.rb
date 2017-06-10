class UsersController < ApplicationController
  skip_before_action :authenticate_request!

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, :status => :created
    else
      render json: @user, :status => :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
