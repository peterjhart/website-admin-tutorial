class AdminController < ApplicationController

  layout 'application.admin.html.erb'

  def index
    render template: 'shared/angular'
  end

end