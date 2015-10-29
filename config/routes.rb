Rails.application.routes.draw do


  root 'pages#home'

  resources :users do

    resources :tools, except: :show

    resources :notifications, except: [ :edit, :update ]

    resources :follows, only: [ :index ]

  end

  resources :tools, only: :show do

    resources :comments, except: [ :update, :edit, :show ]

    resources :likes , only: [ :new, :create, :index, :destroy ]

    resources :relationships, only: [ :new, :create, :destroy ]

    resources :followers, only: [ :index ]

    resources :tells, only: [ :new, :create ]

    resources :reports, only: [ :new, :create ]

  end



end
