Rails.application.routes.draw do

  resources :pages, only: [:index, :show]

  scope path: 'admin' do

    resources :pages_admin, path: '/pages'

  end

  get 'admin' => 'admin#index'

  root 'website#index'

end
