# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

[Guide, Author].each do |m|
  m.destroy_all
end

author = Author.create(first_name: 'Alice', last_name: 'Example')

["Guide to Foo",  "Guide to Bar", "Guide to Baz"].each do |n|
  Guide.create(author: author, name: n)
end
