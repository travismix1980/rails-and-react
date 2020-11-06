Rails.application.routes.draw do
  root 'pages#index'

  # send everything to the home/index page
  match '*path', to: 'pages#index', via: :all
end
