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
    resources :follows, except: [:edit, :update, :show]
  end
  get 'signup', to: 'users#new'

  #Notification (double check) may need to go under tool resources
  get 'notify', to: 'notifications#new_tool_notify'

  #Tools
  resources :tools, only: :show do
    resources :followers, except: [:edit, :update, :show]
  end


  ## May need to create a relationship controller for handling
  ## the creation of a user following a tool and vice versa
  
  #Search Results URL
  get 'search', to: 'home#search'

end
