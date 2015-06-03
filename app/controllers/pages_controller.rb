class PagesController < ApplicationController

  def index
    respond_to do |format|
      format.html {
        render template: 'shared/angular'
      }
      format.json {
        # TODO: Make this more specific
        pages = Page.all
        render json: pages.to_json
      }
    end
  end


  def show
    respond_to do |format|
      format.html {
        render template: 'shared/angular'
      }
      format.json {
        page = Page.find params[:id]
        render json: page.to_json
      }
    end
  end

end
