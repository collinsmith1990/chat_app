class Message < ApplicationRecord
  belongs_to :room
  belongs_to :user

  def serialized_message
    ActiveModelSerializers::SerializableResource.new(self, {})
  end

  def broadcast
    ActionCable.server.broadcast("messages_channel_#{self.room_id}", serialized_message)
  end
end
