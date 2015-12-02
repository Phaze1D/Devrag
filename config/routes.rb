Rails.application.routes.draw do


  root 'pages#home'

  get 'search', to: 'pages#search'

  resources :sessions , only: [:new, :create, :destroy]

  resources :users do

    resources :tools, except: :show

    resources :notifications, except: [ :edit, :update, :new]

    resources :follows, only: [ :index ]

  end

  resources :tools, only: :show do

    resources :comments, except: [ :update, :edit, :show, :new ]

    resources :replies, except: [ :update, :edit, :show, :new ]

    resources :likes , only: [ :create, :index, :destroy ]

    resources :relationships, only: [ :create, :index, :destroy ]

    resources :followers, only: [ :index ]

    resources :tells, only: [ :new, :create ]

    resources :reports, only: [ :new, :create ]

  end

  get 'lpu_validation', to: 'lpus#lpu_validation'



end
