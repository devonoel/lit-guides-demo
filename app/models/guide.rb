class Guide < ApplicationRecord
  belongs_to :author

  def serialize
    { id: id, name: name, author: author.name, created_at: created_at }
  end
end
