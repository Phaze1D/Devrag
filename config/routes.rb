Rails.application.routes.draw do


  root 'pages#home'

  get 'search', to: 'pages#search'
  post 'autocompletion', to: 'pages#auto_completion', as: 'auto_completion'

  resources :sessions , only: [:new, :create, :destroy]
  resources :reset_passwords, only: [:new, :create, :edit, :update]

  resources :users do

    post  'updatenotifications', to: 'users#update_notifications', as: 'update_notifications'
    post  'updateavatar', to: 'users#update_avatar', as: 'update_avatar'

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

  # Github Routes

  get 'githubsignup', to: 'github#signup', as: 'github_signup'
  get 'githubrepos', to: 'github#index_repo', as: 'index_repos'
  get 'githubcallback', to: 'github#callback', as: 'github_callback'



end
