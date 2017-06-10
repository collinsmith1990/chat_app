Rails.application.routes.draw do
  root 'messages#index'
  post 'auth_user' => 'authentication#authenticate_user'
  resources :users, only: [:create]
  resources :rooms, only: [:index] do
    resources :messages, only: [:create, :index]
  end
  mount ActionCable.server => '/cable'
end
