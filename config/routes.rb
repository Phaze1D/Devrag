Rails.application.routes.draw do


  root 'pages#home'

  resources :users do

    resources :tools, except: :show

    resources :notifications, except: [ :edit, :update ]

  end

  resources :tools, only: :show do

    resources :comments, except: [ :update, :edit, :show ]

    resources :likes , only: [ :new, :create, :index, :destroy]

    resources :relationships, only: [ :new, :create, :index, :destroy]

    resources :tells, only: [ :new, :create]

  end

end
