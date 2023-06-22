require 'rails_helper'

RSpec.describe "Guides", type: :request do
  describe "GET /index" do
    subject { get root_path }
    before(:each) { subject }
    it { expect(response).to have_http_status(:ok) }
  end

  describe "GET /show" do
    let(:guide) { FactoryBot.create(:guide) }
    subject { get guide_path(guide.id) }
    before(:each) { subject }
    it { expect(response).to have_http_status(:ok) }
  end
end
