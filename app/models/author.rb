class Author < ApplicationRecord
  has_many :guides

  def name
    "#{first_name} #{last_name}"
  end
end
