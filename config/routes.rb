Rails.application.routes.draw do


  #Route page
  root 'home#home'

  #Users
  resources :users
  get 'signup', to: 'users#new'

  #Tools
  resources :tools
  
  
  #Search Results URL
  get 'search', to: 'home#search'

end
