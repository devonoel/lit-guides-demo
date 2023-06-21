require 'rails_helper'

RSpec.describe Author, type: :model do
  describe 'associations' do
    it { should have_many :guides }
  end

  describe '#name' do
    let(:author) { FactoryBot.create(:author) }
    it {
      expect(author.name).to eq("#{author.first_name} #{author.last_name}")
    }
  end
end
