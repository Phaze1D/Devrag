Rails.application.routes.draw do


  #Route page
  root 'home#home'

  #Users
  resources :users

  #Search Results URL
  get 'search', to: 'home#search'

end
