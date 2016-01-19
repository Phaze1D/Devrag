Rails.application.routes.draw do


  root 'pages#home'

  get 'search', to: 'pages#search'
  post 'auto_completion', to: 'pages#auto_completion'

  resources :sessions , only: [:new, :create, :destroy]

  resources :users do

    post  'update_notifications', to: 'users#update_notifications'
    post  'update_avatar', to: 'users#update_avatar'

    resources :tools, except: :show

    resources :notifications, except: [ :edit, :update, :new]

    resources :follows, only: [ :index ]

    resources :conversations, only: [ :index, :show ]

  end

  resources :tools, only: :show do

    resources :comments, except: [ :update, :edit, :show, :new ]

    resources :replies, except: [ :update, :edit, :new ]

    resources :likes , only: [ :create, :index, :destroy ]

    resources :relationships, only: [ :create, :index, :destroy ]

    resources :followers, only: [ :index ]

    resources :tells, only: [ :new, :create, :destroy, :index]

    resources :reports, only: [ :new, :create ]

  end

  get 'lpu_validation', to: 'lpus#lpu_validation'



end
