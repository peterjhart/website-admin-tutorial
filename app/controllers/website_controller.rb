class WebsiteController < ApplicationController

  layout 'application'

  def index
    render template: 'shared/angular'
  end

end