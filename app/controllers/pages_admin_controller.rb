class PagesAdminController < ApplicationController

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


  def new
    respond_to do |format|
      format.html {
        render template: 'shared/angular'
      }
    end
  end


  def create
    respond_to do |format|
      format.json {
        page = Page.new form_params
        if page.save
          response = page
        elsif page.errors
          response = page.errors
        else
          response = { error: { message: 'There was an unknown problem creating this page.' } }
        end
        render json: response.to_json
      }
    end
  end


  def edit
    respond_to do |format|
      format.html {
        render template: 'shared/angular'
      }
    end
  end


  def update
    respond_to do |format|
      format.json {
        page = Page.find params[:id]
        if page.update_attributes form_params
          response = page
        elsif page.errors
          response = page.errors
        else
          response = { error: { message: 'There was an unknown problem creating this page.' } }
        end
        render json: response.to_json
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


  def destroy
    respond_to do |format|
      format.json {
        page = Page.find params[:id]
        head page.destroy ? :ok : :bad_request
      }
    end
  end


  private


  def form_params
    params.require(:page).permit( :slug, :title, :description, :body, :is_active )
  end

end
