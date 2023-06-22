Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      get 'guides', to: 'guides#index'
    end
  end

  get 'guides/:id', to: 'guides#show'
  root 'guides#index'
end
