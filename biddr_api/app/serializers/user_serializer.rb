class UserSerializer < ActiveModel::Serializer

  attributes(
    :id,
    :name,
    :password,
    :created_at
    :updated_at
  )

end
