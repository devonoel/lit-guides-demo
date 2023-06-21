class GuidesController < ApplicationController
  def index
    @guides = Guide.includes(:author).map do |g|
      {
        id: g.id,
        name: g.name,
        author: g.author.name,
        created_at: g.created_at,
      }
    end
  end
end
