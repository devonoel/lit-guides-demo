require 'rails_helper'

RSpec.describe "Api::V1::Guides", type: :request do
  describe "GET /index" do
    subject { get api_v1_guides_path }
    before(:each) { subject }
    it { expect(response).to have_http_status(:ok) }
  end
end
