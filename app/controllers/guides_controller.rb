class GuidesController < ApplicationController
  def index
    @guides = Guide.includes(:author).map(&:serialize)
  end

  def show
    @guide = Guide.includes(:author).find(params[:id]).serialize
  end
end
