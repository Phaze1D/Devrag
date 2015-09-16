Rails.application.routes.draw do


  #Route page
  root 'home#home'

  #Users
  resources :users do
    #Notifications
    get 'notifications', to: 'notifications#index'
  end

  get 'signup', to: 'users#new'


  ## When creating the backend move resources tools into users resources
  ## And make ajax calls to user display tools and user following tools

  #Tools
  resources :tools
  
  
  #Search Results URL
  get 'search', to: 'home#search'

end
