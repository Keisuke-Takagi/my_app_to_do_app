Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:index, :new,:show ,:create, :edit, :update] do
    resources :lists, only: [:index, :new, :create, :destroy, :update] do
      resources :cards
      member do
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
