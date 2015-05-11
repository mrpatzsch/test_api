require 'typhoeus'

class Hotel < ActiveRecord::Base
  def self.show_hotels(city, stateProvinceCode, arrive, depart)
  response = Typhoeus.get("http://api.ean.com/ean-services/rs/hotel/v3/list?minorRev=5&apiKey=6bjgco74rs2j90o5mkhmsabuqe&sig=6bjgco74rs2j90o5mkhmsabuqe8fj76j23ppr001431025260622&cid=55505&locale=en_US&city=#{city.split(" ").join("+")}&stateProvinceCode=#{stateProvinceCode}&countryCode=US&numberOfResults=10&arrivalDate=#{arrive}&departureDate=#{depart}&sort=DEFAULT&_type=json")
  
  hotels_data = JSON.parse(response.body)

  hotels_data
  end
end
