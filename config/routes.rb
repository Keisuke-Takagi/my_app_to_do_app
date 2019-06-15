Rails.application.routes.draw do
  devise_for :users
  root 'users#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
