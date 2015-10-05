Rails.application.routes.draw do


  #Route page
  root 'home#home'

  #Users
  resources :users do
    #Notifications
    resources :notifications

    #Tools
    resources :tools, except: :show

    #Follows
    resources :follows
  end
  get 'signup', to: 'users#new'
  get 'notify', to: 'notifications#new_tool_notify'

  #Tools
  get 'tool/:id', to: 'tools#show', as: 'tool'
  
  
  #Search Results URL
  get 'search', to: 'home#search'

end
