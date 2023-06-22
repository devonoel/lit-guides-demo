require 'rails_helper'

RSpec.describe "Guides", type: :system, js: true do
  before do
    driven_by(:selenium_chrome)
  end

  describe 'index' do
    let!(:guide1) { FactoryBot.create(:guide, name: 'Bar') }
    let!(:guide2) { FactoryBot.create(:guide, name: 'Foo') }
    it 'loads' do
      visit root_path
      expect(page).to have_content('Lit Guides Demo')
    end

    it 'loads things alphabetically' do
      visit root_path
      click_button('Title A-Z')
      guides = all('.guide-card')
      expect(guides[0][:id]).to eq("guide-card-#{guide1.id}")
      expect(guides[1][:id]).to eq("guide-card-#{guide2.id}")
    end

    it 'loads things by recency' do
      visit root_path
      click_button('Recently Added')
      guides = all('.guide-card')
      expect(guides[0][:id]).to eq("guide-card-#{guide2.id}")
      expect(guides[1][:id]).to eq("guide-card-#{guide1.id}")
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
