class HotelsController < ApplicationController
  def index
   render :index 
  end

  def test
    @hotel = Hotel.new
    city = params[:city]
    stateProvinceCode = params[:state]
    arrive = params[:arrive]
    depart = params[:depart]
    hotels = Hotel.show_hotels(city, stateProvinceCode, arrive, depart)
    puts "HOTELS \n\n\n\n\n\n\n\n\n\n\n\n"
    puts hotels
    @hotels = hotels["HotelListResponse"]["HotelList"]["HotelSummary"]
  end
end
