class MessagesController < ApplicationController
  def create
    @room = Room.find(params[:room_id])
    @message = @room.messages.build(message_params)

    if @message.save
      @message.broadcast
      render json: @message, status: :created
    else
      render json: @message, status: :unprocessable_entity
    end
  end

  def index
    render json: Message.where(room_id: params[:room_id]).order(:created_at), status: :ok
  end

  private

  def message_params
    params.require(:message).permit(:content, :room_id).merge(user_id: current_user.id)
  end
end
