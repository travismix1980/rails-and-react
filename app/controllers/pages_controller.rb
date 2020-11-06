# frozen_string_literal: true

# pages controller
class PagesController < ApplicationController
  def index
    @pizza_types = ['peperoni', 'cheese', 'veggie', 'meat lovers']
  end
end
