class Api::V1::GuidesController < ApplicationController
  def index
    @guides = Guide.includes(:author).map(&:serialize)

    render json: { guides: @guides }
  end
end
