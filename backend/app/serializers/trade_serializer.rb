class TradeSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :quantity, :price, :buy
  has_one :user
end
