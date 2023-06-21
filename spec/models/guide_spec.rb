require 'rails_helper'

RSpec.describe Guide, type: :model do
  describe 'associations' do
    it { should belong_to :author }
  end

  describe '#serialize' do
    let(:guide) { FactoryBot.create(:guide) }
    it {
      expect(guide.serialize).to eq({
        id: guide.id,
        name: guide.name,
        author: guide.author.name,
        created_at: guide.created_at
      })
    }
  end
end
