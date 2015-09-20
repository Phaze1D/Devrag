Rails.application.routes.draw do


  #Route page
  root 'home#home'

  #Users
  resources :users do
    #Notifications
    resources :notifications

    #Tools
    ## Make ajax calls to user display tools and user following tools
    resources :tools, except: :show
  end

  get 'signup', to: 'users#new'



  #Tools
  get 'tool/:id', to: 'tools#show', as: 'tool'
  
  
  #Search Results URL
  get 'search', to: 'home#search'

end
