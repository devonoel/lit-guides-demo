require 'rails_helper'

RSpec.describe "Guides", type: :request do
  describe "GET /index" do
    subject { get root_path }
    before(:each) { subject }
    it { expect(response).to have_http_status(:ok) }
  end
end
