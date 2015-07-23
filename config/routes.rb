Rails.application.routes.draw do


  #Route page
  root 'home#home'

  #Users
  resources :users

end
