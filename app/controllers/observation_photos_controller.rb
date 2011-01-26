class ObservationPhotosController < ApplicationController
  before_filter :login_required
  
  def create
    @observation_photo = ObservationPhoto.new(params[:observation_photo])
    unless @observation_photo.observation
      respond_to do |format|
        format.json { render :json => "No observation specified", :status => :unprocessable_entity }
      end
      return
    end
    if params[:file]
      @photo = LocalPhoto.new(:file => params[:file], :user => current_user)
      @photo.save
      @observation_photo.photo = @photo
    end
    
    unless @observation_photo.photo && @observation_photo.photo.valid?
      respond_to do |format|
        format.json { render :json => "No photo specified", :status => :unprocessable_entity }
      end
      return
    end
    
    @observation_photo.save
    
    respond_to do |format|
      format.json do
        if @observation_photo.valid?
          render :json => @observation_photo
        else
          render :json => @observation_photo.errors, :status => :unprocessable_entity
        end
      end
    end
  end
end
