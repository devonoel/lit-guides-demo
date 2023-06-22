require 'rails_helper'

RSpec.describe "Guides", type: :system, js: true do
  before do
    driven_by(:selenium_chrome)
  end

  describe 'index' do
    it 'loads' do
      visit root_path
      expect(page).to have_content('Lit Guides Demo')
    end
  end

  describe 'show' do
    let(:guide) { FactoryBot.create(:guide) }
    it 'loads' do
      visit guide_path(guide.id)
      expect(page).to have_content('Lit Guides Demo')
    end
  end
end
